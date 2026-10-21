<script setup>
import { computed, ref } from "vue";
import { useLocale } from "@/composables/useLocale";
import projects from "@/data/projects";
import ProofCard from "@/components/reusable/ProofCard.vue";
import { isValidHttpUrl } from "@/utils/urls";

const { t } = useLocale();
const projectIds = [14, 12, 15, 16, 17];
const paused = ref(false);

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
        href: isValidHttpUrl(project.href) ? project.href : "",
        evidenceLabel: isValidHttpUrl(project.href) ? new URL(project.href).host : ""
      };
    })
    .filter(Boolean)
);
</script>

<template>
  <section v-reveal class="space-y-6">
    <div class="flex items-center justify-between gap-4">
      <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.aiOssTitle") }}</h2>
      <button type="button" class="shrink-0 rounded border border-border px-3 py-2 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent" :aria-pressed="paused" @click="paused = !paused">{{ paused ? t("home.resumeMarquee") : t("home.pauseMarquee") }}</button>
    </div>
    <div class="marquee-viewport overflow-hidden" @focusin="paused = true">
      <div class="marquee-track flex gap-4" :class="{ 'is-paused': paused }">
        <div v-for="card in cards" :key="card.key" v-reveal class="w-[min(78vw,20rem)] shrink-0">
          <ProofCard :title="card.title" :problem="card.description" :tags="card.tags" :href="card.href" :evidence-label="card.evidenceLabel" />
        </div>
        <div v-for="card in cards" :key="`duplicate-${card.key}`" aria-hidden="true" inert class="marquee-duplicate w-[min(78vw,20rem)] shrink-0">
          <ProofCard :title="card.title" :problem="card.description" :tags="card.tags" :href="card.href" :evidence-label="card.evidenceLabel" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track { width: max-content; animation: marquee 48s linear infinite; }
.marquee-track.is-paused, .overflow-hidden:focus-within .marquee-track { animation-play-state: paused; }
@keyframes marquee { to { transform: translateX(calc(-50% - .5rem)); } }
@media (prefers-reduced-motion: reduce) {
  .marquee-viewport { overflow: visible; }
  .marquee-track { animation: none; flex-wrap: wrap; width: 100%; }
  .marquee-duplicate { display: none; }
}
</style>
