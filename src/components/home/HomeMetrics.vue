<script setup>
import metrics from "@/data/metrics";
</script>

<template>
  <section>
    <div class="flex flex-wrap gap-10">
      <div v-for="metric in metrics" :key="metric.id">
        <p class="text-3xl font-semibold text-text">{{ metric.value }}{{ metric.suffix ?? "" }}</p>
        <p class="text-sm text-muted">{{ metric.label }}</p>
      </div>
    </div>
  </section>
</template>
