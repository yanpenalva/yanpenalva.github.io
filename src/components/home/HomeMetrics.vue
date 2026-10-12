<script setup>
import { useLocale } from "@/composables/useLocale";
import metrics from "@/data/metrics";

const { t } = useLocale();
</script>

<template>
  <section v-reveal class="border-y border-border py-6 sm:py-8" :aria-label="t('home.metricsAriaLabel')">
    <div class="flex flex-wrap gap-x-16 gap-y-6">
      <div v-for="metric in metrics" :key="metric.id">
        <p class="font-sans text-3xl font-semibold tracking-tight text-text tabular-nums sm:text-4xl">
          {{ metric.value }}{{ metric.suffix ?? "" }}
        </p>
        <p class="mt-1 text-sm text-muted">{{ t(`metrics.${metric.id}`) }}</p>
      </div>
    </div>
  </section>
</template>
