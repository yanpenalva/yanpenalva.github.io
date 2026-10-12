<script setup>
import { useLocale } from "@/composables/useLocale";
import ResumeLinks from "@/components/reusable/ResumeLinks.vue";

const { t } = useLocale();
</script>

<template>
  <section class="border-b border-border py-12 sm:py-16 lg:py-24" aria-labelledby="home-heading">
    <div class="max-w-4xl">
      <p class="font-mono text-sm uppercase tracking-[0.16em] text-muted">{{ t("home.role") }}</p>
      <h1 id="home-heading" class="mt-5 text-[clamp(44px,7vw,88px)] font-semibold leading-[1.05] tracking-[-0.06em] text-text">
        Yan Penalva
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
