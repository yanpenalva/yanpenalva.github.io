<script setup>
import { useLocale } from "@/composables/useLocale";
import { isValidHttpUrl } from "@/utils/urls";

const { t } = useLocale();

defineProps({
  title: { type: String, required: true },
  problem: { type: String, default: "" },
  contribution: { type: String, default: "" },
  tags: { type: Array, default: () => [] },
  href: { type: String, default: "" },
  evidenceLabel: { type: String, default: "" },
  lead: { type: Boolean, default: false }
});
</script>

<template>
  <a
    v-if="isValidHttpUrl(href)"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="card-motion flex h-full flex-col rounded-md border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    :class="lead ? 'border-accent/45 p-6 sm:p-8' : 'border-border p-5 sm:p-6'"
  >
    <h3 class="font-semibold tracking-tight text-text" :class="lead ? 'text-2xl sm:text-3xl' : 'text-lg'">{{ title }}</h3>
    <p v-if="problem" class="mt-3 leading-relaxed text-muted" :class="{ 'text-base sm:text-lg': lead }">{{ problem }}</p>
    <p v-if="contribution" class="mt-3 text-sm text-muted">{{ contribution }}</p>
    <div class="mt-auto pt-5">
      <ul v-if="tags.length" class="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <p v-if="href && evidenceLabel" class="mt-3 font-mono text-xs text-accent">
        {{ t("home.openProject") }} · {{ evidenceLabel }} ↗
      </p>
    </div>
  </a>
  <div
    v-else
    class="card-motion flex h-full flex-col rounded-md border bg-surface"
    :class="lead ? 'border-accent/45 p-6 sm:p-8' : 'border-border p-5 sm:p-6'"
  >
    <h3 class="font-semibold tracking-tight text-text" :class="lead ? 'text-2xl sm:text-3xl' : 'text-lg'">{{ title }}</h3>
    <p v-if="problem" class="mt-3 leading-relaxed text-muted" :class="{ 'text-base sm:text-lg': lead }">{{ problem }}</p>
    <p v-if="contribution" class="mt-3 text-sm text-muted">{{ contribution }}</p>
    <div class="mt-auto pt-5">
      <ul v-if="tags.length" class="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>
