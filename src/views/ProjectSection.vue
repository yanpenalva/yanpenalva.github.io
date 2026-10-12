<script setup>
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main id="main-content" class="mx-auto w-full max-w-6xl px-6">
    <h1 class="sr-only">{{ t("nav.projects") }}</h1>
    <ProjectsGrid />
  </main>
</template>
