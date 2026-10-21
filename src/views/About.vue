<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import AboutMe from "@/components/about/AboutMe.vue";
import AboutCounter from "@/components/about/AboutCounter.vue";
import AboutCredentials from "@/components/about/AboutCredentials.vue";
import experience from "@/data/experience";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const timeline = ref(null);
const activeExperienceId = ref(experience[0]?.id);
const initialMotion = { opacity: 0, y: 12 };
const finalMotion = { opacity: 1, y: 0 };
let experienceObserver;

onMounted(() => {
  if (!timeline.value || typeof window.IntersectionObserver !== "function") return;

  experienceObserver = new window.IntersectionObserver((entries) => {
    const currentEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) =>
        Math.abs(a.boundingClientRect.top - window.innerHeight * 0.4) -
        Math.abs(b.boundingClientRect.top - window.innerHeight * 0.4)
      );

    if (currentEntries[0]) {
      activeExperienceId.value = currentEntries[0].target.dataset.experienceId;
    }
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  timeline.value.querySelectorAll("[data-experience-id]").forEach((item) => {
    experienceObserver.observe(item);
  });
});

onUnmounted(() => experienceObserver?.disconnect());
</script>

<template>
  <main id="main-content" class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
    <h1 class="sr-only">{{ t("nav.about") }}</h1>
    <AboutMe />
    <section
      ref="timeline"
      v-motion
      :initial="reducedMotion ? finalMotion : initialMotion"
      :visible="finalMotion"
      class="space-y-6"
      aria-labelledby="about-experience-title"
    >
      <h2 id="about-experience-title" class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {{ t("home.experienceTitle") }}
      </h2>
      <ol class="ml-1 border-l border-border">
        <li
          v-for="item in experience"
          :key="item.id"
          v-reveal
          :data-experience-id="item.id"
          :class="{ 'career-item-active': activeExperienceId === item.id }"
          class="relative grid gap-3 py-6 pl-7 sm:grid-cols-[minmax(10rem,0.7fr)_2fr] sm:gap-8 sm:py-8"
        >
          <span aria-hidden="true" class="career-dot" />
          <div class="space-y-1 font-mono text-xs uppercase tracking-wide text-muted">
            <time :datetime="item.period.start">{{ t(`experience.${item.id}.periodLabel`) }}</time>
            <p>{{ t(`experience.${item.id}.mode`) }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-text">{{ t(`experience.${item.id}.title`) }}</h3>
            <p class="mt-1 font-sans text-sm font-medium text-text">{{ t(`experience.${item.id}.org`) }}</p>
            <p class="mt-3 max-w-[65ch] leading-relaxed text-muted">{{ t(`experience.${item.id}.summary`) }}</p>
            <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              <li v-for="tag in item.tags" :key="tag" class="font-mono text-xs text-muted">
                {{ tag }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
    <AboutCredentials />
    <AboutCounter />
  </main>
</template>

<style scoped>
.career-dot {
  position: absolute;
  top: 2rem;
  left: -7px;
  width: 12px;
  height: 12px;
  border: 2px solid rgb(var(--color-border));
  border-radius: 9999px;
  background: rgb(var(--color-canvas));
}

.career-item-active .career-dot {
  border-color: rgb(var(--color-accent));
  background: rgb(var(--color-accent));
  box-shadow: 0 0 0 4px rgb(var(--color-accent) / 0.16);
}

@media (prefers-reduced-motion: no-preference) {
  .career-dot {
    transition: background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
  }
}
</style>
