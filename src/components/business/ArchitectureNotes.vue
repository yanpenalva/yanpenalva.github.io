<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
const noteIds = [1, 2, 3, 4];
</script>

<template>
  <section
    v-reveal
    class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16"
    aria-labelledby="siic-architecture-title"
  >
    <div class="space-y-2">
      <h2 id="siic-architecture-title" class="text-2xl font-semibold text-text">
        {{ t("arch.title") }}
      </h2>
      <p class="max-w-3xl leading-relaxed text-muted">{{ t("arch.text") }}</p>
    </div>

    <div class="overflow-x-auto rounded-md border border-border bg-surface p-4 sm:p-6">
      <svg
        class="block min-w-[900px] w-full text-text"
        viewBox="0 0 1200 320"
        role="img"
        aria-labelledby="siic-architecture-diagram-title"
      >
        <title id="siic-architecture-diagram-title">{{ t("arch.diagramTitle") }}</title>
        <defs>
          <marker
            id="siic-architecture-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="currentColor" class="text-muted" />
          </marker>
        </defs>

        <g fill="none" stroke="currentColor" class="text-muted" stroke-width="2">
          <path d="M200 175 H245" marker-end="url(#siic-architecture-arrow)" />
          <path d="M475 175 H540" marker-end="url(#siic-architecture-arrow)" />
          <path d="M630 175 H645" marker-end="url(#siic-architecture-arrow)" />
          <path d="M825 175 H840" marker-end="url(#siic-architecture-arrow)" />
          <path d="M925 175 H970" />
          <path d="M970 111 V239" />
          <path d="M970 111 H1010" marker-end="url(#siic-architecture-arrow)" />
          <path d="M970 239 H1010" marker-end="url(#siic-architecture-arrow)" />
        </g>

        <g>
          <rect x="15" y="135" width="185" height="80" rx="8" fill="currentColor" class="text-canvas" />
          <rect x="15" y="135" width="185" height="80" rx="8" fill="none" stroke="currentColor" class="text-border" />
          <text x="107.5" y="180" text-anchor="middle" fill="currentColor" class="text-text" font-size="16">
            {{ t("arch.nodes.user") }}
          </text>
        </g>

        <g>
          <rect x="245" y="135" width="230" height="80" rx="8" fill="currentColor" class="text-canvas" />
          <rect x="245" y="135" width="230" height="80" rx="8" fill="none" stroke="currentColor" class="text-border" />
          <text x="360" y="180" text-anchor="middle" fill="currentColor" class="text-text" font-size="16">
            {{ t("arch.nodes.frontend") }}
          </text>
        </g>

        <g>
          <rect x="520" y="70" width="430" height="210" rx="10" fill="currentColor" class="text-canvas" />
          <rect x="520" y="70" width="430" height="210" rx="10" fill="none" stroke="currentColor" class="text-border" />
          <text x="735" y="111" text-anchor="middle" fill="currentColor" class="text-text" font-size="18" font-weight="600">
            {{ t("arch.nodes.api") }}
          </text>

          <rect x="540" y="140" width="90" height="70" rx="6" fill="currentColor" class="text-surface" />
          <rect x="540" y="140" width="90" height="70" rx="6" fill="none" stroke="currentColor" class="text-border" />
          <text x="585" y="180" text-anchor="middle" fill="currentColor" class="text-text" font-size="14">
            {{ t("arch.nodes.http") }}
          </text>

          <rect x="645" y="140" width="180" height="70" rx="6" fill="currentColor" class="text-surface" />
          <rect x="645" y="140" width="180" height="70" rx="6" fill="none" stroke="currentColor" class="text-border" />
          <text x="735" y="180" text-anchor="middle" fill="currentColor" class="text-text" font-size="14">
            {{ t("arch.nodes.actions") }}
          </text>

          <rect x="840" y="140" width="95" height="70" rx="6" fill="currentColor" class="text-surface" />
          <rect x="840" y="140" width="95" height="70" rx="6" fill="none" stroke="currentColor" class="text-border" />
          <text x="887.5" y="180" text-anchor="middle" fill="currentColor" class="text-text" font-size="14">
            {{ t("arch.nodes.domain") }}
          </text>
        </g>

        <g>
          <rect x="1010" y="75" width="180" height="72" rx="8" fill="currentColor" class="text-canvas" />
          <rect x="1010" y="75" width="180" height="72" rx="8" fill="none" stroke="currentColor" class="text-border" />
          <text x="1100" y="116" text-anchor="middle" fill="currentColor" class="text-text" font-size="16">
            {{ t("arch.nodes.auth") }}
          </text>
        </g>

        <g>
          <rect x="1010" y="203" width="180" height="72" rx="8" fill="currentColor" class="text-canvas" />
          <rect x="1010" y="203" width="180" height="72" rx="8" fill="none" stroke="currentColor" class="text-border" />
          <text x="1100" y="244" text-anchor="middle" fill="currentColor" class="text-text" font-size="16">
            {{ t("arch.nodes.data") }}
          </text>
        </g>
      </svg>
    </div>

    <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <li
        v-for="id in noteIds"
        :key="id"
        class="rounded-md border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-muted"
      >{{ t(`arch.notes.${id}`) }}</li>
    </ul>
  </section>
</template>
