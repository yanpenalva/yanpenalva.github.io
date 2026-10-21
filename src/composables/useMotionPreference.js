import { onMounted, onUnmounted, ref } from "vue";

export function useMotionPreference() {
  const reducedMotion = ref(true);
  let query;
  const sync = () => { reducedMotion.value = query.matches; };
  onMounted(() => {
    query = window.matchMedia("(prefers-reduced-motion: reduce)");
    sync();
    query.addEventListener("change", sync);
  });
  onUnmounted(() => query?.removeEventListener("change", sync));
  return { reducedMotion };
}
