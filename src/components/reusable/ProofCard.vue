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
  evidenceLabel: { type: String, default: "" }
});
</script>

<template>
  <a
    v-if="isValidHttpUrl(href)"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="card-motion block h-full rounded-md border border-border bg-surface p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-6"
  >
    <h3 class="text-lg font-semibold tracking-tight text-text">{{ title }}</h3>
    <p v-if="problem" class="mt-3 leading-relaxed text-muted">{{ problem }}</p>
    <p v-if="contribution" class="mt-3 text-sm text-muted">{{ contribution }}</p>
    <ul v-if="tags.length" class="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted">
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
    <p v-if="href && evidenceLabel" class="mt-5 font-mono text-xs text-accent">
      {{ t("home.openProject") }} · {{ evidenceLabel }} ↗
    </p>
  </a>
  <div
    v-else
    class="card-motion block h-full rounded-md border border-border bg-surface p-5 sm:p-6"
  >
    <h3 class="text-lg font-semibold tracking-tight text-text">{{ title }}</h3>
    <p v-if="problem" class="mt-3 leading-relaxed text-muted">{{ problem }}</p>
    <p v-if="contribution" class="mt-3 text-sm text-muted">{{ contribution }}</p>
    <ul v-if="tags.length" class="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide text-muted">
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
  </div>
</template>
