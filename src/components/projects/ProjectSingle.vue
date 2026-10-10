<script setup>
import { useLocale } from "@/composables/useLocale";

const props = defineProps({
  project: { type: Object, required: true },
});

const { t } = useLocale();

const translatedOrData = (key, fallback) => {
  const translation = t(key);
  return translation === key ? fallback : translation;
};

const projectText = (field) =>
  translatedOrData(`projects.items.${props.project.id}.${field}`, props.project[field]);

const categoryText = (category) =>
  translatedOrData(`projects.categories.${category}`, category);

const deployLabel = (project) => translatedOrData("projects.deployLabel", project.deploy);
</script>

<template>
  <article class="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface">
    <img
      v-if="project.img"
      :src="project.img"
      :alt="projectText('title')"
      loading="lazy"
      class="aspect-[16/9] w-full border-b border-border object-cover"
    />
    <div class="flex flex-1 flex-col gap-5 p-5 sm:p-6">
      <header class="flex flex-col gap-2">
        <p class="font-mono text-xs uppercase tracking-wide text-muted">
          {{ categoryText(project.category) }}
        </p>
        <h3 class="text-xl font-semibold leading-tight text-text">{{ projectText('title') }}</h3>
      </header>

      <div class="flex flex-col gap-3">
        <p v-if="project.language" class="font-mono text-sm text-muted">
          {{ t("business.techLabel") }}
          <span class="text-text">{{ project.language }}</span>
        </p>
        <p class="text-base leading-relaxed text-muted">{{ projectText('description') }}</p>
        <p v-if="project.role" class="text-sm text-muted">
          {{ t("business.roleLabel") }}
          <span class="text-text">{{ translatedOrData(`projects.items.${project.id}.role`, project.role) }}</span>
        </p>
      </div>

      <div class="mt-auto flex flex-col gap-3 border-t border-border pt-4">
        <a
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-w-0 flex-col gap-1 rounded-sm text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>{{ t("business.referenceLabel") }}</span>
          <span class="break-all text-text">{{ project.href }}</span>
        </a>
        <a
          v-if="project.deploy"
          :href="project.deploy"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-w-0 flex-col gap-1 self-start rounded-md border border-border px-3 py-2 text-sm text-accent hover:border-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>{{ deployLabel(project) }}</span>
          <span
            v-if="deployLabel(project) !== project.deploy"
            class="break-all font-mono text-xs text-muted"
          >{{ project.deploy }}</span>
        </a>
      </div>
    </div>
  </article>
</template>
