<script setup>
import { useLocale } from "@/composables/useLocale";

defineProps({
  project: { type: Object, required: true },
});

const { t } = useLocale();
</script>

<template>
  <a
    :href="project.href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="project.title"
    class="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
  >
    <img
      v-if="project.img"
      :src="project.img"
      :alt="project.title"
      loading="lazy"
      class="w-full rounded-t-xl object-cover"
    />
    <div class="flex flex-col gap-2 p-5">
      <h3 class="font-semibold text-text">{{ t("projects.items." + project.id + ".title") }}</h3>
      <span class="font-mono text-xs uppercase tracking-wide text-muted">
        {{ t("projects.categories." + project.category) }}
      </span>
      <p class="text-sm text-muted">{{ t("projects.items." + project.id + ".description") }}</p>
    </div>
  </a>
</template>
