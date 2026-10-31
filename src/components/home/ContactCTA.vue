<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const initialMotion = { opacity: 0, y: 12 };
const finalMotion = { opacity: 1, y: 0 };
const whatsappBaseUrl = "https://wa.me/5571992432603?text=";
const projectUrl = computed(() => `${whatsappBaseUrl}${encodeURIComponent(t("home.projectMessage"))}`);
const jobUrl = computed(() => `${whatsappBaseUrl}${encodeURIComponent(t("home.jobMessage"))}`);
</script>

<template>
  <section v-motion :initial="reducedMotion ? finalMotion : initialMotion" :visible="finalMotion" class="ink-band px-6 py-10 sm:px-10 sm:py-16">
    <div class="sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-10">
      <div>
        <h2 class="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-.03em]">{{ t("home.contactTitle") }}</h2>
        <p class="band-muted mt-3 max-w-2xl leading-relaxed">{{ t("home.contactText") }}</p>
      </div>
      <div class="mt-6 flex flex-col gap-3 sm:mt-0 sm:flex-row">
        <a
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="band-primary rounded-md px-5 py-3 font-sans text-sm font-medium transition-opacity hover:opacity-90"
        >
          {{ t("home.projectButton") }}
        </a>
        <a
          :href="jobUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="band-secondary rounded-md px-5 py-3 font-sans text-sm font-medium transition-opacity hover:opacity-90"
        >
          {{ t("home.jobButton") }}
        </a>
        <a
          href="mailto:yanpenabr@gmail.com"
          class="band-muted rounded-md px-5 py-3 font-sans text-sm font-medium underline decoration-current underline-offset-4 transition-opacity hover:opacity-80"
        >
          {{ t("home.emailButton") }}
        </a>
      </div>
    </div>
  </section>
</template>
