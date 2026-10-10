<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import projects from "@/data/projects";
import ProofCard from "@/components/reusable/ProofCard.vue";

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
        href: project.href,
        evidenceLabel: new URL(project.href).host
      };
    })
    .filter(Boolean)
);
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.aiOssTitle") }}</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProofCard
        v-for="card in cards"
        :key="card.key"
        :title="card.title"
        :problem="card.description"
        :tags="card.tags"
        :href="card.href"
        :evidence-label="card.evidenceLabel"
      />
    </div>
  </section>
</template>
