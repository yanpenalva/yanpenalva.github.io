<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import featured from "@/data/featured";
import projects from "@/data/projects";
import business from "@/data/business";
import ProofCard from "@/components/reusable/ProofCard.vue";
import { isValidHttpUrl, normalizePublicUrl } from "@/utils/urls";
import OwlAccent from "./OwlAccent.vue";

const { t } = useLocale();

const hostOf = (href) => {
  return isValidHttpUrl(href) ? new URL(href).host : "";
};

const cards = computed(() =>
  featured
    .map((item) => {
      if (item.kind === "project") {
        const project = projects.find((entry) => entry.id === item.id);
        if (!project) return null;
        return {
          key: `project-${item.id}`,
          title: t(`projects.items.${item.id}.title`),
          problem: t(`projects.items.${item.id}.description`),
          contribution: "",
          tags: [
            t(`projects.categories.${project.category}`),
            ...(project.language ? [project.language] : [])
          ],
          href: isValidHttpUrl(project.href) ? project.href : "",
          evidenceLabel: hostOf(project.href)
        };
      }

      if (item.kind === "business") {
        const system = business.systems.find((entry) => entry.id === item.id);
        if (!system) return null;
        const href = normalizePublicUrl(system.reference);
        return {
          key: `business-${item.id}`,
          title: t(`business.systems.${item.id}.title`),
          problem: t(`business.systems.${item.id}.description`),
          contribution: t(`business.systems.${item.id}.role`),
          tags: system.tech
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .slice(0, 4),
          href,
          evidenceLabel: href ? new URL(href).host : ""
        };
      }

      return null;
    })
    .filter(Boolean)
);
</script>

<template>
  <section v-reveal class="space-y-6">
    <div class="flex items-center gap-3">
      <OwlAccent />
      <h2 class="chapter-title text-text">{{ t("home.featuredTitle") }}</h2>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div
        v-for="card in cards"
        :key="card.key"
        v-reveal
        class="min-h-48"
      >
        <ProofCard
          class="h-full"
          :title="card.title"
          :problem="card.problem"
          :contribution="card.contribution"
          :tags="card.tags"
          :href="card.href"
          :evidence-label="card.evidenceLabel"
        />
      </div>
    </div>
  </section>
</template>
