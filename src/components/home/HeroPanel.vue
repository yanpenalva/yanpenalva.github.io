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

      <svg viewBox="0 0 480 360" class="mt-4 h-auto w-full text-accent" :class="{ 'is-tracing': current }" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="owl-clip">
            <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z" transform="translate(73.5 46) scale(5.2)" />
          </clipPath>
        </defs>

        <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z"
              transform="translate(73.5 46) scale(5.2)"
              fill="rgb(var(--color-accent) / 0.07)" stroke="currentColor" stroke-width="2.5"
              vector-effect="non-scaling-stroke" class="trace trace--outline"
              :class="{ 'is-drawing': drawing }" />

        <g class="trace trace--eyes" fill="none" stroke="currentColor" stroke-width="2" :class="{ 'is-drawing': drawing }">
          <circle cx="198" cy="192" r="26" class="trace-ring" />
          <circle cx="282" cy="192" r="26" class="trace-ring" />
          <circle cx="198" cy="192" r="4.5" fill="currentColor" stroke="none" />
          <circle cx="282" cy="192" r="4.5" fill="currentColor" stroke="none" />
        </g>

        <path d="M240 224 L254 243 L240 256 L226 243 Z" fill="currentColor" stroke="none" />

        <g clip-path="url(#owl-clip)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M198 218 C 176 246 168 266 168 286" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('backend') }" data-track="backend" />
          <path d="M148 300 L 332 300" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('infra') }" data-track="infra" />
          <path d="M282 218 C 304 246 312 266 312 286" class="trace trace-line" :class="{ 'is-drawing': drawing, 'is-on': isOn('ai') }" data-track="ai" />
        </g>

        <g fill="currentColor">
          <circle cx="168" cy="286" r="4.5" class="trace-node" :class="{ 'is-on': isOn('backend') }" data-track="backend" />
          <circle cx="240" cy="300" r="4.5" class="trace-node" :class="{ 'is-on': isOn('infra') }" data-track="infra" />
          <circle cx="312" cy="300" r="4.5" class="trace-node" :class="{ 'is-on': isOn('ai') }" data-track="ai" />
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

      <p class="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted" aria-live="polite">
        {{ t(activeOrDefault.textKey) }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.trace { stroke-dasharray: none; stroke-dashoffset: 0; }
.trace.is-drawing { stroke-dasharray: 420; animation: trace-draw 520ms cubic-bezier(.22, 1, .36, 1) both; }
.trace--eyes.is-drawing { animation-delay: 380ms; }
.trace-line.is-drawing { animation-duration: 380ms; }
.trace-line[data-track="backend"].is-drawing { animation-delay: 560ms; }
.trace-line[data-track="infra"].is-drawing { animation-delay: 640ms; }
.trace-line[data-track="ai"].is-drawing { animation-delay: 720ms; }
@keyframes trace-draw { from { stroke-dashoffset: 420; } to { stroke-dashoffset: 0; } }

.trace--eyes { opacity: .9; }
.trace-line, .trace-node { transition: opacity 140ms ease; opacity: .7; }
[data-track].is-on { opacity: 1; }
.is-tracing [data-track]:not(.is-on) { opacity: .25; }

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
.trace-btn:hover {
  border-color: rgb(var(--color-accent) / .6);
  color: rgb(var(--color-text));
}
.trace-btn.is-active {
  border-color: rgb(var(--color-accent));
  color: rgb(var(--color-accent));
}

@media (prefers-reduced-motion: reduce) {
  .trace { animation: none; }
}
</style>
