<script setup>
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();
const initialMotion = { opacity: 0, y: 12 };
const finalMotion = { opacity: 1, y: 0 };

const cases = [
  { id: "netra", titleKey: "experience.netra.org" },
  { id: "siic", titleKey: "business.systems.8.title", ongoing: true }
];

const labels = ["problem", "action", "result"];
</script>

<template>
  <section v-motion :initial="reducedMotion ? finalMotion : initialMotion" :visible="finalMotion" class="space-y-6" aria-labelledby="result-cases-title">
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
        <div v-if="item.id === 'netra'" class="order-first">
          <p class="text-[clamp(48px,6vw,72px)] font-semibold leading-[.9] tracking-[-.04em] text-accent">{{ t("cases.netra.metric") }}</p>
          <p class="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">{{ t("cases.netra.metricLabel") }}</p>
        </div>
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
            <dd
              class="text-sm leading-relaxed"
              :class="label === 'result' ? 'border-l-2 border-accent pl-3 font-medium text-accent' : 'text-text'"
            >
              {{ t(`cases.${item.id}.${label}`) }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>
