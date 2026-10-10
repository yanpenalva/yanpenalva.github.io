<script setup>
import { useLocale } from "@/composables/useLocale";
import ResumeLinks from "@/components/reusable/ResumeLinks.vue";

const { t } = useLocale();
</script>

<template>
  <section class="py-10">
    <h1 class="text-4xl font-semibold text-text sm:text-5xl">Yan Penalva</h1>
    <p class="mt-3 font-mono text-sm text-muted">{{ t("home.role") }}</p>
    <div class="mt-6">
      <ResumeLinks />
    </div>
  </section>
</template>
