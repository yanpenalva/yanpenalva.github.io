<script setup>
import { useLocale } from "@/composables/useLocale";
import ResumeLinks from "@/components/reusable/ResumeLinks.vue";

const { t } = useLocale();
</script>

<template>
  <section class="py-10 sm:py-14 lg:py-20" aria-labelledby="home-heading">
    <div class="max-w-4xl">
      <p class="font-mono text-sm uppercase tracking-[0.16em] text-muted">{{ t("home.role") }}</p>
      <h1 id="home-heading" class="mt-5 block text-[clamp(64px,9vw,120px)] font-semibold leading-[.92] tracking-[-.045em] text-text">
        <span class="block">Yan</span>
        <span class="block">Penalva</span>
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        {{ t("home.heroStatement") }}
      </p>
    </div>
    <div class="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
      <router-link
        to="/contact"
        class="rounded-md bg-accent px-5 py-3 font-sans text-sm font-medium text-on-accent transition-colors hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {{ t("home.contactButton") }}
      </router-link>
      <ResumeLinks />
    </div>
  </section>
</template>
