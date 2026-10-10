<script setup>
import BusinessProjectsGrid from "@/components/business/BusinessProjectsGrid.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main class="container mx-auto">
    <h1 class="sr-only">{{ t("nav.business") }}</h1>
    <BusinessProjectsGrid />
  </main>
</template>
