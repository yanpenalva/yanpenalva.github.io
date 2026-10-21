<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useMotionPreference } from "@/composables/useMotionPreference";

const canvas = ref(null);
const { reducedMotion } = useMotionPreference();
let observer;
let resize;
let frame = 0;
let visible = false;
let context;
let width = 0;
let height = 0;
let lastPaint = 0;
let pointer;

const stop = () => { cancelAnimationFrame(frame); frame = 0; };
const draw = (time = 0) => {
  if (time - lastPaint >= 33) {
    lastPaint = time;
    context.clearRect(0, 0, width, height);
    context.fillStyle = getComputedStyle(canvas.value).color;
    for (let i = 0; i < 24; i++) {
      const x = ((i * 97 + time * 0.008) % (width + 16)) - 8;
      const y = height * (0.1 + ((i * 37) % 80) / 100) + Math.sin(time / 1800 + i) * 6;
      context.beginPath();
      context.arc(x, y, 1.5, 0, Math.PI * 2);
      context.fill();
    }
  }
  frame = requestAnimationFrame(draw);
};
const sync = () => {
  stop();
  if (context && visible && !document.hidden && !reducedMotion.value && pointer?.matches) {
    frame = requestAnimationFrame(draw);
  } else if (context) {
    context.clearRect(0, 0, width, height);
  }
};
watch(reducedMotion, sync);
onMounted(() => {
  context = canvas.value.getContext("2d");
  if (!context || !window.IntersectionObserver || !window.ResizeObserver) return;
  pointer = matchMedia("(hover: hover) and (pointer: fine)");
  pointer.addEventListener("change", sync);
  resize = new ResizeObserver(() => {
    width = canvas.value.clientWidth;
    height = canvas.value.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.value.width = width * dpr;
    canvas.value.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  });
  resize.observe(canvas.value);
  observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
  observer.observe(canvas.value);
  document.addEventListener("visibilitychange", sync);
});
onUnmounted(() => {
  stop();
  observer?.disconnect();
  resize?.disconnect();
  pointer?.removeEventListener("change", sync);
  document.removeEventListener("visibilitychange", sync);
});
</script>

<template>
  <canvas ref="canvas" aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full text-accent opacity-40" />
</template>
