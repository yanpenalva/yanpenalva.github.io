<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const showcase = ref(null);
const stage = ref(null);
const fallback = ref(true);
const inView = ref(false);
let observer;
let scene;
let loading = false;
let disposed = false;

const loadScene = async () => {
  if (!inView.value || reducedMotion.value || document.hidden || scene || loading || disposed) return;
  loading = true;
  try {
    const { createMagicCube } = await import("@/three/magicCubeScene.js");
    if (disposed || reducedMotion.value || !stage.value) return;
    scene = createMagicCube(stage.value);
    fallback.value = false;
    scene.resume();
  } catch {
    fallback.value = true;
  } finally {
    loading = false;
  }
};

const syncVisibility = () => {
  if (document.hidden) scene?.pause();
  else if (inView.value) scene ? scene.resume() : loadScene();
};

watch(reducedMotion, (isReduced) => {
  if (isReduced) {
    scene?.dispose();
    scene = null;
    fallback.value = true;
  } else {
    loadScene();
  }
});

onMounted(() => {
  if (typeof window.IntersectionObserver === "function") {
    observer = new IntersectionObserver(([entry]) => {
      inView.value = entry.isIntersecting;
      if (inView.value) loadScene();
      else scene?.pause();
    });
    observer.observe(showcase.value);
  } else {
    inView.value = true;
    loadScene();
  }
  document.addEventListener("visibilitychange", syncVisibility);
});

onBeforeUnmount(() => {
  disposed = true;
  observer?.disconnect();
  document.removeEventListener("visibilitychange", syncVisibility);
  scene?.dispose();
});
</script>

<template>
  <section ref="showcase" class="space-y-4" aria-labelledby="magic-cube-title">
    <header>
      <h3 id="magic-cube-title" class="text-xl font-semibold text-text">{{ t("projects.cubeTitle") }}</h3>
    </header>
    <div class="grid items-center gap-5 rounded-md border border-border bg-surface p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(14rem,0.9fr)] sm:p-6">
      <div ref="stage" class="relative min-h-[260px] overflow-hidden rounded-md bg-canvas sm:min-h-[300px]">
        <div v-if="fallback" class="absolute inset-0 grid place-items-center p-6" aria-hidden="true">
          <svg viewBox="0 0 200 190" class="h-48 max-w-full" role="presentation">
            <path d="M100 14 172 54v82l-72 40-72-40V54z" fill="#182019" />
            <path d="M100 14 172 54v82l-72 40z" fill="#3976d2" />
            <path d="M28 54 100 14v162l-72-40z" fill="#378b54" />
            <path d="M100 14v162M28 54l72 40 72-40M28 95l72 40 72-40M52 40v94M76 27v120M124 27v120M148 40v94M28 54v82M52 67v82M76 81v82M100 94v82M124 81v82M148 67v82M172 54v82" fill="none" stroke="#182019" stroke-width="3" />
          </svg>
        </div>
      </div>
      <div class="flex flex-col items-start gap-5">
        <button
          v-if="!fallback && !reducedMotion"
          type="button"
          :aria-label="t('projects.cubeReplayAria')"
          class="rounded-md border border-border px-4 py-2 text-sm text-text hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          @click="scene?.replay()"
        >{{ t("projects.cubeReplay") }}</button>
        <a href="#project-cards" class="text-sm text-accent underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{{ t("projects.cubeBrowse") }}</a>
      </div>
    </div>
  </section>
</template>
