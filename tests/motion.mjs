import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { compileScript, parse } from "@vue/compiler-sfc";
import { createRenderer, nextTick } from "vue";

const queries = new Map();
globalThis.matchMedia = (query) => {
  if (!queries.has(query)) queries.set(query, {
    matches: query.includes("reduce)") || query.includes("pointer: fine"),
    listeners: new Set(),
    addEventListener(_, fn) { this.listeners.add(fn); },
    removeEventListener(_, fn) { this.listeners.delete(fn); }
  });
  return queries.get(query);
};
globalThis.window = { matchMedia, devicePixelRatio: 3 };
globalThis.document = { hidden: false, addEventListener() {}, removeEventListener() {} };
let intersect;
globalThis.IntersectionObserver = window.IntersectionObserver = class {
  constructor(callback) { intersect = callback; }
  observe() {}
  disconnect() {}
};
globalThis.ResizeObserver = window.ResizeObserver = class {
  constructor(callback) { this.callback = callback; }
  observe() { this.callback(); }
  disconnect() {}
};
let frames = new Map();
let frameId = 0;
globalThis.requestAnimationFrame = (fn) => { frames.set(++frameId, fn); return frameId; };
globalThis.cancelAnimationFrame = (id) => frames.delete(id);
const context = { clearRect() {}, setTransform() {}, beginPath() {}, arc() {}, fill() {} };
const element = () => ({ clientWidth: 300, clientHeight: 100, getContext: () => context });
const renderer = createRenderer({
  createElement: element, createText: element, createComment: element,
  insert() {}, remove() {}, setText() {}, setElementText() {}, patchProp() {},
  parentNode() {}, nextSibling() {}
});
const filename = new URL("../src/components/home/BlueprintDots.vue", import.meta.url);
const { descriptor } = parse(await readFile(filename, "utf8"));
const compiled = compileScript(descriptor, { id: "test", inlineTemplate: true }).content
  .replaceAll('from "vue"', `from ${JSON.stringify(import.meta.resolve("vue"))}`)
  .replaceAll('from "@/composables/useMotionPreference"', `from ${JSON.stringify(new URL("../src/composables/useMotionPreference.js", import.meta.url).href)}`);
const { default: component } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const app = renderer.createApp(component);
app.mount(element());
intersect([{ isIntersecting: true }]);
await nextTick();
assert.equal(frames.size, 0, "reduced motion must not schedule particles");
const motion = queries.get("(prefers-reduced-motion: reduce)");
motion.matches = false;
motion.listeners.forEach((fn) => fn());
await nextTick();
assert.equal(frames.size, 1);
intersect([{ isIntersecting: false }]);
assert.equal(frames.size, 0, "offscreen particles must stop");
intersect([{ isIntersecting: true }]);
assert.equal(frames.size, 1);
app.unmount();
assert.equal(frames.size, 0, "unmount must cancel animation");
assert.equal(motion.listeners.size, 0);
console.log("particle motion checks passed");
