import * as THREE from "three";
import { createCubeSequence } from "./magicCubeMoves.mjs";

const SPACING = 1.02;
const TURN_MS = 360;
const REST_MS = 1100;
const HALF_PI = Math.PI / 2;

const snap = (value, step = 1) => Math.round(value / step) * step;

export function createMagicCube(container) {
  const width = Math.max(1, container.clientWidth);
  const height = Math.max(1, container.clientHeight);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
  camera.position.set(4.6, 3.8, 5.6);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
  renderer.domElement.setAttribute("aria-hidden", "true");
  Object.assign(renderer.domElement.style, { position: "absolute", inset: "0", width: "100%", height: "100%" });
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 2.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.4);
  light.position.set(4, 6, 5);
  scene.add(light);

  const cube = new THREE.Group();
  scene.add(cube);
  const geometry = new THREE.BoxGeometry(0.92, 0.92, 0.92);
  const cubies = [];
  const palette = {
    outside: "#182019",
    right: "#d94337",
    left: "#f28c28",
    top: "#f2f0e8",
    bottom: "#f0c928",
    front: "#378b54",
    back: "#3976d2",
  };

  for (let x = -1; x <= 1; x += 1) {
    for (let y = -1; y <= 1; y += 1) {
      for (let z = -1; z <= 1; z += 1) {
        const material = [
          palette[x === 1 ? "right" : "outside"],
          palette[x === -1 ? "left" : "outside"],
          palette[y === 1 ? "top" : "outside"],
          palette[y === -1 ? "bottom" : "outside"],
          palette[z === 1 ? "front" : "outside"],
          palette[z === -1 ? "back" : "outside"],
        ].map((color) => new THREE.MeshStandardMaterial({ color, roughness: 0.72 }));
        const cubie = new THREE.Mesh(geometry, material);
        cubie.position.set(x * SPACING, y * SPACING, z * SPACING);
        cubie.userData.solvedPosition = cubie.position.clone();
        cube.add(cubie);
        cubies.push(cubie);
      }
    }
  }

  const sequence = createCubeSequence();
  let frame = 0;
  let lastFrame = 0;
  let moveIndex = 0;
  let activeMove = null;
  let restElapsed = 0;
  let running = false;
  let disposed = false;

  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const nextWidth = Math.max(1, container.clientWidth);
    const nextHeight = Math.max(1, container.clientHeight);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight, false);
    render();
  };
  const resizeObserver = typeof ResizeObserver === "function" ? new ResizeObserver(resize) : null;
  resizeObserver?.observe(container);
  if (!resizeObserver) window.addEventListener("resize", resize);

  const settleMove = (group) => {
    group.updateMatrixWorld(true);
    for (const cubie of [...group.children]) {
      cube.attach(cubie);
      cubie.position.set(
        snap(cubie.position.x, SPACING),
        snap(cubie.position.y, SPACING),
        snap(cubie.position.z, SPACING),
      );
      cubie.rotation.set(
        snap(cubie.rotation.x, HALF_PI),
        snap(cubie.rotation.y, HALF_PI),
        snap(cubie.rotation.z, HALF_PI),
      );
    }
    cube.remove(group);
  };

  const beginMove = (move) => {
    const group = new THREE.Group();
    cube.add(group);
    for (const cubie of cubies) {
      if (Math.round(cubie.position[move.axis] / SPACING) === move.layer) group.attach(cubie);
    }
    return { ...move, group, elapsed: 0 };
  };

  const resetCube = () => {
    for (const cubie of cubies) {
      cube.attach(cubie);
      cubie.position.copy(cubie.userData.solvedPosition);
      cubie.rotation.set(0, 0, 0);
    }
    for (const child of [...cube.children]) if (!cubies.includes(child)) cube.remove(child);
    activeMove = null;
  };

  const tick = (now) => {
    if (!running || disposed) return;
    const delta = lastFrame ? Math.min(now - lastFrame, 50) : 0;
    lastFrame = now;

    if (activeMove) {
      activeMove.elapsed += delta;
      const progress = Math.min(activeMove.elapsed / TURN_MS, 1);
      const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;
      activeMove.group.rotation[activeMove.axis] = activeMove.direction * HALF_PI * eased;
      if (progress === 1) {
        settleMove(activeMove.group);
        activeMove = null;
        moveIndex += 1;
      }
    } else if (moveIndex < sequence.length) {
      activeMove = beginMove(sequence[moveIndex]);
    } else {
      restElapsed += delta;
      if (restElapsed >= REST_MS) {
        resetCube();
        moveIndex = 0;
        restElapsed = 0;
      }
    }

    render();
    frame = requestAnimationFrame(tick);
  };

  const resume = () => {
    if (running || disposed) return;
    running = true;
    lastFrame = 0;
    frame = requestAnimationFrame(tick);
  };
  const pause = () => {
    running = false;
    cancelAnimationFrame(frame);
    frame = 0;
    lastFrame = 0;
  };
  const replay = () => {
    resetCube();
    moveIndex = 0;
    restElapsed = 0;
    render();
    resume();
  };
  const dispose = () => {
    pause();
    disposed = true;
    resizeObserver?.disconnect();
    if (!resizeObserver) window.removeEventListener("resize", resize);
    const materials = new Set();
    scene.traverse((object) => {
      if (!object.isMesh) return;
      if (object.geometry !== geometry) object.geometry.dispose();
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
    });
    geometry.dispose();
    materials.forEach((material) => material.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  };

  render();
  return { pause, replay, resume, dispose };
}
