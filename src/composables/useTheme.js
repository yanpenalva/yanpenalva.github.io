import { ref } from "vue";

const theme = ref("light");

try {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") theme.value = saved;
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme.value = "dark";
} catch (_e) {
  void _e;
}

function applyTheme(value) {
  const root = document.documentElement;
  root.classList.toggle("dark", value === "dark");
  document.body.classList.toggle("bg-primary-dark", value === "dark");
  document.body.classList.toggle("bg-secondary-light", value !== "dark");
}

applyTheme(theme.value);

export function useTheme() {
  function setTheme(value) {
    theme.value = value;
    applyTheme(value);
    try { localStorage.setItem("theme", value); } catch (_e) { void _e; }
  }
  function toggleTheme() {
    setTheme(theme.value === "dark" ? "light" : "dark");
  }
  return { theme, setTheme, toggleTheme };
}
