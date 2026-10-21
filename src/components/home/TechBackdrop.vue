<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useMotionPreference } from "@/composables/useMotionPreference";

const backdrop = ref(null);
const inView = ref(false);
const isAnimating = ref(false);
const { reducedMotion } = useMotionPreference();
let observer;

const syncAnimation = () => {
  isAnimating.value = !reducedMotion.value && inView.value && !document.hidden;
};

watch(reducedMotion, syncAnimation);

onMounted(() => {
  if (typeof window.IntersectionObserver === "function") {
    observer = new IntersectionObserver(([entry]) => {
      inView.value = entry.isIntersecting;
      syncAnimation();
    });
    observer.observe(backdrop.value);
  } else {
    inView.value = true;
  }

  document.addEventListener("visibilitychange", syncAnimation);
  syncAnimation();
});

onBeforeUnmount(() => {
  observer?.disconnect();
  document.removeEventListener("visibilitychange", syncAnimation);
});
</script>

<template>
  <div
    ref="backdrop"
    aria-hidden="true"
    class="tech-backdrop pointer-events-none absolute inset-0"
    :class="{ 'is-animating': isAnimating }"
  />
</template>

<style scoped>
.tech-backdrop {
  overflow: hidden;
}
.tech-backdrop::before {
  position: absolute;
  inset: -8%;
  background-image: radial-gradient(rgb(var(--color-accent) / .45) 1px, transparent 1px), linear-gradient(rgb(var(--color-accent) / .08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / .08) 1px, transparent 1px);
  background-size: 37px 37px, 28px 28px, 28px 28px;
  content: "";
  opacity: .32;
  transform: translate3d(0, 0, 0);
  animation: backdrop-drift 38s ease-in-out infinite alternate;
  animation-play-state: paused;
  will-change: transform;
}
.tech-backdrop.is-animating::before { animation-play-state: running; }
@keyframes backdrop-drift {
  to { transform: translate3d(-1.2%, 1%, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .tech-backdrop::before {
    animation: none;
    opacity: .18;
    transform: none;
    will-change: auto;
  }
}
</style>
