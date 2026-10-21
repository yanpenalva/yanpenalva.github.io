<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";
import { countUp } from "@/utils/countUp";
import metrics from "@/data/metrics";

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
</script>

<template>
  <section ref="section" v-reveal class="border-y border-border py-6 sm:py-8" :aria-label="t('home.metricsAriaLabel')">
    <div class="flex flex-wrap gap-x-16 gap-y-6">
      <div v-for="metric in metrics" :key="metric.id">
        <p class="font-sans text-3xl font-semibold tracking-tight text-text tabular-nums sm:text-4xl" aria-hidden="true">
          {{ values[metric.id] }}{{ metric.suffix ?? "" }}
        </p>
        <span class="sr-only">{{ metric.value }}{{ metric.suffix ?? "" }}</span>
        <p class="mt-1 text-sm text-muted">{{ t(`metrics.${metric.id}`) }}</p>
      </div>
    </div>
  </section>
</template>
