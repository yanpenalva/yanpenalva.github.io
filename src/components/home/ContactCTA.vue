<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section v-reveal class="rounded-md border border-border bg-surface p-6 sm:p-10">
    <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{{ t("home.contactTitle") }}</h2>
    <p class="mt-3 max-w-2xl leading-relaxed text-muted">{{ t("home.contactText") }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <router-link
        to="/contact"
        class="rounded-md bg-accent px-5 py-3 font-sans text-sm font-medium text-on-accent transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.contactButton") }}
      </router-link>
      <a
        href="mailto:yanpenabr@gmail.com"
        class="rounded-md border border-border bg-surface px-5 py-3 font-sans text-sm font-medium text-text transition-colors hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.emailButton") }}
      </a>
    </div>
  </section>
</template>
