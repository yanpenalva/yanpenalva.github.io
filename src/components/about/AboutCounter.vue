<script setup>
import metrics from "@/data/metrics.js";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const labelKeys = {
  experience: "about.metricsExperience",
  projects: "about.metricsProjects",
};
</script>

<template>
  <section v-reveal class="bg-canvas">
    <div class="flex items-center justify-center gap-10 py-14">
      <div v-for="metric in metrics" :key="metric.id" class="text-center">
        <div class="text-4xl font-semibold text-text">
          {{ metric.value }}<span v-if="metric.suffix">{{ metric.suffix }}</span>
        </div>
        <div class="mt-1 text-sm text-muted">{{ t(labelKeys[metric.id]) }}</div>
      </div>
    </div>
  </section>
</template>
