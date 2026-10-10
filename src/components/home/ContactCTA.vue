<script setup>
import { computed } from "vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
const whatsappBaseUrl = "https://wa.me/5571992432603?text=";
const projectUrl = computed(() => `${whatsappBaseUrl}${encodeURIComponent(t("home.projectMessage"))}`);
const jobUrl = computed(() => `${whatsappBaseUrl}${encodeURIComponent(t("home.jobMessage"))}`);
</script>

<template>
  <section v-reveal class="rounded-md border border-border bg-surface p-6 sm:p-10">
    <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.contactTitle") }}</h2>
    <p class="mt-3 max-w-2xl leading-relaxed text-muted">{{ t("home.contactText") }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <a
        :href="projectUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-md bg-accent px-5 py-3 font-sans text-sm font-medium text-on-accent transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.projectButton") }}
      </a>
      <a
        :href="jobUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-md border border-border bg-surface px-5 py-3 font-sans text-sm font-medium text-text transition-colors hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.jobButton") }}
      </a>
      <a
        href="mailto:yanpenabr@gmail.com"
        class="rounded-md px-5 py-3 font-sans text-sm font-medium text-muted underline decoration-border underline-offset-4 transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.emailButton") }}
      </a>
    </div>
  </section>
</template>
