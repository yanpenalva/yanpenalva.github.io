<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
    <h2 class="text-xl font-semibold text-text">{{ t("home.contactTitle") }}</h2>
    <p class="mt-2 text-sm text-muted">{{ t("home.contactText") }}</p>
    <div class="mt-6 flex flex-wrap gap-3">
      <router-link
        to="/contact"
        class="rounded-xl bg-accent px-4 py-3 font-sans text-sm font-medium text-on-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.contactButton") }}
      </router-link>
      <a
        href="mailto:yanpenabr@gmail.com"
        class="rounded-xl border border-border bg-surface px-4 py-3 font-sans text-sm font-medium text-text transition hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.emailButton") }}
      </a>
    </div>
  </section>
</template>
