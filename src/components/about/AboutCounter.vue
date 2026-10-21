<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import metrics from "@/data/metrics.js";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";
import { countUp } from "@/utils/countUp";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const section = ref(null);
const values = reactive(Object.fromEntries(metrics.map(({ id, value }) => [id, value])));
let observer;
const cancelFrames = [];

onMounted(() => {
  if (reducedMotion.value || !window.IntersectionObserver) return;
  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    metrics.forEach(({ id, value }) => {
      values[id] = 0;
      cancelFrames.push(countUp(value, (next) => { values[id] = next; }));
    });
  });
  observer.observe(section.value);
});

onUnmounted(() => { observer?.disconnect(); cancelFrames.forEach((cancel) => cancel()); });

const labelKeys = {
  experience: "about.metricsExperience",
  projects: "about.metricsProjects",
};
</script>

<template>
  <section ref="section" v-reveal class="bg-canvas">
    <div class="flex items-center justify-center gap-10 py-14">
      <div v-for="metric in metrics" :key="metric.id" class="text-center">
        <div aria-hidden="true" class="text-4xl font-semibold text-text tabular-nums">
          {{ values[metric.id] }}<span v-if="metric.suffix">{{ metric.suffix }}</span>
        </div>
        <span class="sr-only">{{ metric.value }}{{ metric.suffix ?? "" }}</span>
        <div class="mt-1 text-sm text-muted">{{ t(labelKeys[metric.id]) }}</div>
      </div>
    </div>
  </section>
</template>
