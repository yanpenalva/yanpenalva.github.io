<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import projects from "@/data/projects";
import { isValidHttpUrl } from "@/utils/urls";

const { t } = useLocale();
const projectIds = [14, 12, 15, 16, 17];

const cards = computed(() =>
  projectIds
    .map((id) => {
      const project = projects.find((entry) => entry.id === id);
      if (!project) return null;

      return {
        key: `project-${id}`,
        title: t(`projects.items.${id}.title`),
        description: t(`projects.items.${id}.description`),
        tags: [
          t(`projects.categories.${project.category}`),
          ...(project.language ? [project.language] : [])
        ],
        href: isValidHttpUrl(project.href) ? project.href : ""
      };
    })
    .filter(Boolean)
);
</script>

<template>
  <section v-reveal class="space-y-6">
    <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.aiOssTitle") }}</h2>
    <ul class="border-y border-border">
      <li v-for="card in cards" :key="card.key" class="border-b border-border last:border-b-0">
        <a
          v-if="card.href"
          :href="card.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group grid grid-cols-1 items-baseline gap-x-4 gap-y-2 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span class="min-w-0">
            <span class="block text-base font-semibold text-text group-hover:underline group-hover:underline-offset-4">{{ card.title }}</span>
            <span class="mt-1 block text-sm leading-relaxed text-muted">{{ card.description }}</span>
          </span>
          <span class="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
            <span>{{ card.tags.join(" · ") }}</span>
            <span class="text-accent transition-transform duration-150 group-hover:-translate-y-0.5">↗</span>
          </span>
        </a>
        <div v-else class="grid grid-cols-1 gap-1 py-5">
          <span class="text-base font-semibold text-text">{{ card.title }}</span>
          <span class="text-sm leading-relaxed text-muted">{{ card.description }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
