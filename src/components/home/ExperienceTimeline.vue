<script setup>
import { useLocale } from "@/composables/useLocale";
import experience from "@/data/experience";

const { t } = useLocale();
</script>

<template>
  <section class="space-y-6">
    <h2 class="text-xl font-semibold text-text">{{ t("home.experienceTitle") }}</h2>
    <ol class="space-y-6">
      <li
        v-for="item in experience"
        :key="item.id"
        class="border-l border-border pl-4"
      >
        <p class="font-mono text-xs uppercase tracking-wide text-muted">{{ item.org }}</p>
        <h3 class="mt-1 font-semibold text-text">{{ item.title }}</h3>
        <p class="mt-1 text-sm text-muted">{{ item.summary }}</p>
        <ul class="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="font-mono text-xs text-muted"
          >
            {{ tag }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
