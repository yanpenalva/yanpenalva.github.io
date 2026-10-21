<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const credentialIds = [
  "ads",
  "softwareEngineering",
  "solutionArchitecture",
  "softwareArchitecture",
  "english",
  "datadog",
  "cleanArchitecture",
];
</script>

<template>
  <section v-reveal aria-labelledby="credentials-title">
    <header class="mb-6">
      <h2 id="credentials-title" class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {{ t("creds.title") }}
      </h2>
    </header>
    <ul class="grid gap-4 sm:grid-cols-2">
      <li
        v-for="id in credentialIds"
        :key="id"
        v-reveal
        class="card-motion rounded-md border border-border bg-surface p-5"
      >
        <h3 class="font-medium text-text">{{ t(`creds.items.${id}.name`) }}</h3>
        <p class="mt-2 text-sm text-muted">{{ t(`creds.items.${id}.org`) }}</p>
        <p class="mt-1 text-sm text-muted">{{ t(`creds.items.${id}.period`) }}</p>
      </li>
    </ul>
  </section>
</template>
