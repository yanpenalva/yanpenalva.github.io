<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section
    aria-hidden="true"
    class="hero-panel relative isolate flex min-h-[320px] items-center overflow-hidden rounded-md border border-border bg-surface p-5 sm:min-h-[360px] sm:p-7"
  >
    <div class="hero-panel__grid absolute inset-0" />
    <div class="relative w-full">
      <header class="flex items-center justify-between gap-3 border-b border-border pb-4">
        <p class="font-mono text-xs uppercase tracking-[0.16em] text-muted">{{ t("home.heroPanelTitle") }}</p>
        <span class="flex items-center gap-2 font-mono text-xs text-accent">
          <span class="hero-panel__status h-2 w-2 rounded-full bg-accent" />
          {{ t("home.heroPanelReady") }}
        </span>
      </header>
      <div class="mt-5 rounded-md border border-border bg-canvas/80 p-4 sm:p-5">
        <p class="font-mono text-sm text-text sm:text-base">$ npx yanpenalva hire-me<span class="hero-panel__cursor">_</span></p>
        <ul class="mt-5 space-y-3 font-mono text-xs text-muted sm:text-sm">
          <li><span class="mr-2 text-accent">01</span>{{ t("home.heroPanelSignal1") }}</li>
          <li><span class="mr-2 text-accent">02</span>{{ t("home.heroPanelSignal2") }}</li>
          <li><span class="mr-2 text-accent">03</span>{{ t("home.heroPanelSignal3") }}</li>
        </ul>
        <div class="mt-6 flex items-center gap-2" aria-hidden="true">
          <span class="hero-panel__line h-1 flex-1 rounded-full bg-accent/70" />
          <span class="h-1 w-8 rounded-full bg-accent/30" />
          <span class="h-1 w-4 rounded-full bg-accent/20" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-panel__grid {
  background-image: linear-gradient(rgb(var(--color-accent) / .06) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / .06) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom right, black, transparent 75%);
}
.hero-panel__status { animation: status-pulse 2.4s ease-in-out infinite; }
.hero-panel__cursor { animation: cursor-blink 1s steps(2, start) infinite; }
.hero-panel__line { transform-origin: left; animation: line-grow 2.8s ease-in-out infinite alternate; }
@keyframes status-pulse { 50% { opacity: .35; } }
@keyframes cursor-blink { to { opacity: 0; } }
@keyframes line-grow { to { transform: scaleX(.68); } }
@media (prefers-reduced-motion: reduce) {
  .hero-panel__status,
  .hero-panel__cursor,
  .hero-panel__line { animation: none; }
}
</style>
