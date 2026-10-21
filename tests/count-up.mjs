import assert from "node:assert/strict";
import { countUp } from "../src/utils/countUp.js";

let clock = 100;
let scheduled;
globalThis.performance = { now: () => clock };
globalThis.requestAnimationFrame = (callback) => { scheduled = callback; return 1; };
globalThis.cancelAnimationFrame = () => {};
const values = [];
countUp(20, (value) => values.push(value));
clock = 450;
scheduled(clock);
clock = 800;
scheduled(clock);
assert.deepEqual(values, [10, 20]);
console.log("count-up checks passed");
