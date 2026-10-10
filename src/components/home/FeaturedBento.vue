<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import featured from "@/data/featured";
import projects from "@/data/projects";
import business from "@/data/business";
import ProofCard from "@/components/reusable/ProofCard.vue";

const { t } = useLocale();

const hostOf = (href) => {
  if (!href) return "GitHub";
  try {
    const host = new URL(href).host;
    return host || "GitHub";
  } catch {
    return "GitHub";
  }
};

const cards = computed(() =>
  featured
    .map((item) => {
      if (item.kind === "project") {
        const project = projects.find((entry) => entry.id === item.id);
        if (!project) return null;
        return {
          key: `project-${item.id}`,
          title: project.title,
          problem: project.description,
          contribution: "",
          tags: [project.category],
          href: project.href,
          evidenceLabel: hostOf(project.href)
        };
      }

      if (item.kind === "business") {
        const system = business.systems.find((entry) => entry.id === item.id);
        if (!system) return null;
        const isInternal = system.reference.includes("Internal");
        return {
          key: `business-${item.id}`,
          title: system.title,
          problem: system.description,
          contribution: `${system.role} · ${system.tech}`,
          tags: system.tech
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
            .slice(0, 4),
          href: isInternal ? "" : `https://${system.reference}`,
          evidenceLabel: system.reference
        };
      }

      return null;
    })
    .filter(Boolean)
);
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-xl font-semibold text-text">{{ t("home.featuredTitle") }}</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
      <div
        v-for="(card, index) in cards"
        :key="card.key"
        :class="index === 0 ? 'md:col-span-7' : 'md:col-span-5'"
      >
        <ProofCard
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
