<script setup>
const props = defineProps({
  title: { type: String, required: true },
  problem: { type: String, default: "" },
  contribution: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
  href: { type: String, default: "" },
  evidenceLabel: { type: String, default: "" }
});
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href || undefined"
    class="block rounded-xl border border-border bg-surface p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
  >
    <h3 class="text-base font-semibold text-text">{{ title }}</h3>
    <p v-if="problem" class="mt-2 text-sm text-muted">{{ problem }}</p>
    <p v-if="contribution" class="mt-2 text-sm text-muted">{{ contribution }}</p>
    <ul v-if="tags.length" class="mt-3 flex flex-wrap gap-2 font-mono text-xs uppercase text-muted">
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
    <p v-if="href && evidenceLabel" class="mt-3 text-xs font-medium text-accent">{{ evidenceLabel }}</p>
  </component>
</template>
