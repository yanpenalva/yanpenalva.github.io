<script setup>
import AboutMe from "@/components/about/AboutMe.vue";
import AboutCounter from "@/components/about/AboutCounter.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
    <h1 class="sr-only">{{ t("nav.about") }}</h1>
    <AboutMe />
    <AboutCounter />
  </main>
</template>
