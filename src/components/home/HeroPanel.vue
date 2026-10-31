<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useLocale } from "@/composables/useLocale";
import { useMotionPreference } from "@/composables/useMotionPreference";

const { t } = useLocale();
const { reducedMotion } = useMotionPreference();

const tracks = [
  { id: "backend", textKey: "home.trace.backendText" },
  { id: "infra", textKey: "home.trace.infraText" },
  { id: "ai", textKey: "home.trace.aiText" }
];

const active = ref(null);
const hovered = ref(null);
const drawing = ref(false);
let drawTimer;

const current = computed(() => hovered.value || active.value);
const activeOrDefault = computed(() => tracks.find((track) => track.id === active.value) ?? { textKey: "home.trace.summary" });
const isOn = (id) => current.value === id;

onMounted(() => {
  if (reducedMotion.value) return;
  drawing.value = true;
  drawTimer = setTimeout(() => { drawing.value = false; }, 1300);
});

watch(reducedMotion, (reduced) => {
  if (!reduced) return;
  clearTimeout(drawTimer);
  drawing.value = false;
});

onUnmounted(() => clearTimeout(drawTimer));
</script>

<template>
  <section class="relative isolate flex items-center">
    <div class="w-full">
      <header class="flex items-center justify-between gap-3 border-b border-border pb-3">
        <p class="font-mono text-xs uppercase tracking-[0.16em] text-muted">{{ t("home.trace.label") }}</p>
        <span class="font-mono text-xs text-accent">trace/01</span>
      </header>

      <svg viewBox="0 0 480 360" class="mt-4 h-auto w-full text-accent" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="owl-clip">
            <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z" transform="translate(73.5 46) scale(5.2)" />
          </clipPath>
        </defs>

        <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z"
              transform="translate(73.5 46) scale(5.2)"
              fill="rgb(var(--color-accent) / 0.06)" stroke="currentColor" stroke-width="2"
              vector-effect="non-scaling-stroke" pathLength="1" class="trace trace--outline"
              :class="{ 'is-drawing': drawing }" />

        <g class="trace trace--eyes" fill="none" stroke="currentColor" stroke-width="2" :class="{ 'is-drawing': drawing }">
          <circle cx="198" cy="192" r="30" pathLength="1" class="trace-ring" />
          <circle cx="282" cy="192" r="30" pathLength="1" class="trace-ring" />
          <circle cx="198" cy="192" r="4.5" fill="currentColor" stroke="none" />
          <circle cx="282" cy="192" r="4.5" fill="currentColor" stroke="none" />
        </g>

        <g clip-path="url(#owl-clip)" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path d="M198 196 C 176 226 162 254 168 280" pathLength="1" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('backend') }" data-track="backend" />
          <path d="M240 226 L 240 262" pathLength="1" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('infra') }" data-track="infra" />
          <path d="M282 196 C 304 226 318 254 312 280" pathLength="1" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('ai') }" data-track="ai" />
          <path d="M168 280 C 196 300 284 300 312 280" pathLength="1" class="trace trace-return" :class="{ 'is-drawing': drawing }" />
        </g>

        <g fill="currentColor">
          <circle cx="168" cy="280" r="4.5" class="trace-node" :class="{ 'is-on': isOn('backend') }" data-track="backend" />
          <circle cx="240" cy="262" r="4.5" class="trace-node" :class="{ 'is-on': isOn('infra') }" data-track="infra" />
          <circle cx="312" cy="280" r="4.5" class="trace-node" :class="{ 'is-on': isOn('ai') }" data-track="ai" />
        </g>
      </svg>

      <div class="mt-4 flex flex-wrap gap-2">
        <button v-for="track in tracks" :key="track.id" type="button"
          class="trace-btn" :class="{ 'is-active': active === track.id }"
          :aria-pressed="active === track.id"
          @click="active = active === track.id ? null : track.id"
          @mouseenter="hovered = track.id" @mouseleave="hovered = null"
          @focus="hovered = track.id" @blur="hovered = null">
          {{ t(`home.trace.${track.id}`) }}
        </button>
      </div>

      <p class="mt-4 max-w-md text-sm leading-relaxed text-muted" aria-live="polite">
        {{ t(activeOrDefault.textKey) }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.trace { stroke-dasharray: 1; stroke-dashoffset: 0; }
.trace.is-drawing { animation: trace-draw 520ms cubic-bezier(.22, 1, .36, 1) both; }
.trace--eyes.is-drawing { animation-delay: 380ms; }
.trace-line.is-drawing { animation-duration: 380ms; }
.trace-line[data-track="backend"].is-drawing { animation-delay: 560ms; }
.trace-line[data-track="infra"].is-drawing { animation-delay: 640ms; }
.trace-line[data-track="ai"].is-drawing { animation-delay: 720ms; }
.trace-return.is-drawing { animation-delay: 840ms; animation-duration: 360ms; }
@keyframes trace-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }

.trace--eyes { opacity: .9; }
.trace-line, .trace-node { transition: opacity 140ms ease; opacity: .55; }
[data-track].is-on { opacity: 1; }
.trace-line:not(.is-on), .trace-node:not(.is-on) { opacity: .22; }

.trace-btn {
  border: 1px solid rgb(var(--color-border));
  border-radius: 6px;
  padding: .5rem .75rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: rgb(var(--color-muted));
}
.trace-btn.is-active {
  border-color: rgb(var(--color-accent));
  color: rgb(var(--color-accent));
}

@media (prefers-reduced-motion: reduce) {
  .trace { animation: none; }
}
</style>
