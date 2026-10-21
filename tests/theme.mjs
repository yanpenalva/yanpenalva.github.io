import assert from "node:assert/strict";
import "vue";

const classes = new Set();
globalThis.document = { documentElement: {
  classList: { toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name) },
  style: {}
} };
globalThis.localStorage = { getItem: () => "dark", setItem() {} };
const { useTheme } = await import("../src/composables/useTheme.js");
const { theme, setTheme, toggleTheme } = useTheme();
assert.equal(theme.value, "dark");
assert.equal(document.documentElement.style.colorScheme, "dark");
setTheme("invalid");
assert.equal(theme.value, "dark");
toggleTheme();
assert.equal(theme.value, "light");
assert.equal(classes.has("dark"), false);
console.log("theme checks passed");
