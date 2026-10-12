<script setup>
import BusinessProjectsGrid from "@/components/business/BusinessProjectsGrid.vue";
import ArchitectureNotes from "@/components/business/ArchitectureNotes.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main id="main-content" class="mx-auto w-full max-w-6xl px-6">
    <h1 class="sr-only">{{ t("nav.business") }}</h1>
    <BusinessProjectsGrid />
    <ArchitectureNotes />
  </main>
</template>
