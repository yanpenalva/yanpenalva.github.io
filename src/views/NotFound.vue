<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section class="py-20">
    <div class="sm:container mx-auto flex flex-col items-center justify-center text-center">
      <h1 class="font-sans text-3xl font-medium text-text sm:text-4xl">
        {{ t("routes.notFound.heading") }}
      </h1>
      <p class="mt-4 font-sans text-muted">
        {{ t("routes.notFound.message") }}
      </p>
      <router-link
        to="/"
        class="mt-8 inline-block font-sans font-medium text-accent hover:underline"
      >
        {{ t("routes.notFound.backHome") }}
      </router-link>
    </div>
  </section>
</template>
