<script setup>
import { useLocale } from "@/composables/useLocale";
import experience from "@/data/experience";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const initialMotion = { opacity: 0, y: 12 };
const finalMotion = { opacity: 1, y: 0 };
</script>

<template>
  <section v-motion :initial="reducedMotion ? finalMotion : initialMotion" :visible="finalMotion" class="space-y-6">
    <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.experienceTitle") }}</h2>
    <ol class="divide-y divide-border border-y border-border">
      <li
        v-for="item in experience"
        :key="item.id"
        class="grid gap-3 py-6 sm:grid-cols-[minmax(10rem,0.7fr)_2fr] sm:gap-8 sm:py-8"
      >
        <div class="space-y-1 font-mono text-xs uppercase tracking-wide text-muted">
          <time :datetime="item.period.start">{{ t(`experience.${item.id}.periodLabel`) }}</time>
          <p>{{ t(`experience.${item.id}.mode`) }}</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-text">{{ t(`experience.${item.id}.title`) }}</h3>
          <p class="mt-1 font-sans text-sm font-medium text-text">{{ t(`experience.${item.id}.org`) }}</p>
          <p class="mt-3 max-w-[65ch] leading-relaxed text-muted">{{ t(`experience.${item.id}.summary`) }}</p>
          <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            <li
              v-for="tag in item.tags"
              :key="tag"
              class="font-mono text-xs text-muted"
            >
              {{ tag }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
