<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import { useLocale } from "@/composables/useLocale";
import featured from "@/data/featured";
import projects from "@/data/projects";
import business from "@/data/business";
import ProofCard from "@/components/reusable/ProofCard.vue";
import { isValidHttpUrl, normalizePublicUrl } from "@/utils/urls";

const { t } = useLocale();
const BlueprintDots = defineAsyncComponent(() => import("./BlueprintDots.vue"));
import OwlAccent from "./OwlAccent.vue";
import TechBackdrop from "./TechBackdrop.vue";
const readTechMode = () => {
  try { return localStorage.getItem("tech-mode") === "true"; } catch { return false; }
};
const techMode = ref(readTechMode());
const toggleTechMode = () => {
  techMode.value = !techMode.value;
  try { localStorage.setItem("tech-mode", String(techMode.value)); } catch {}
};

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
    <div class="blueprint relative isolate overflow-hidden rounded-md border border-border px-5 py-8 sm:py-12">
      <TechBackdrop v-if="techMode" />
      <BlueprintDots />
      <div class="relative flex items-center justify-between gap-4">
        <div class="flex items-center gap-3"><OwlAccent /><h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.featuredTitle") }}</h2></div>
        <button type="button" :aria-pressed="techMode" class="rounded border border-border px-3 py-2 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" @click="toggleTechMode">{{ techMode ? t("home.techModeOn") : t("home.techModeOff") }}</button>
      </div>
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

<style scoped>
.blueprint {
  background-image: linear-gradient(rgb(var(--color-accent) / 0.09) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / 0.09) 1px, transparent 1px);
  background-size: 28px 28px;
}
</style>
