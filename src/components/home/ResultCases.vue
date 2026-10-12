<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const cases = [
  { id: "netra", titleKey: "experience.netra.org" },
  { id: "siic", titleKey: "business.systems.8.title", ongoing: true }
];

const labels = ["problem", "action", "result"];
</script>

<template>
  <section v-reveal class="space-y-6" aria-labelledby="result-cases-title">
    <div class="space-y-2">
      <h2 id="result-cases-title" class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {{ t("cases.title") }}
      </h2>
      <p class="max-w-3xl leading-relaxed text-muted">{{ t("cases.text") }}</p>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article
        v-for="item in cases"
        :key="item.id"
        v-reveal
        class="card-motion flex h-full flex-col gap-5 rounded-md border border-border bg-surface p-5 sm:p-6"
      >
        <header class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-lg font-semibold tracking-tight text-text">
            {{ t(item.titleKey) }}
          </h3>
          <span
            v-if="item.ongoing"
            class="w-fit rounded border border-border bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
          >{{ t("cases.ongoing") }}</span>
        </header>
        <dl class="grid gap-4">
          <div v-for="label in labels" :key="label" class="space-y-1">
            <dt class="font-mono text-xs uppercase tracking-wide text-muted">
              {{ t(`cases.${label}`) }}
            </dt>
            <dd class="text-sm leading-relaxed text-text">
              {{ t(`cases.${item.id}.${label}`) }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
