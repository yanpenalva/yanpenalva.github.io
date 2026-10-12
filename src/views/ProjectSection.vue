<script setup>
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main class="container mx-auto">
    <h1 class="sr-only">{{ t("nav.projects") }}</h1>
    <ProjectsGrid />
  </main>
</template>
