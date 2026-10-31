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
const svgEl = ref(null);
const animations = [];

const current = computed(() => hovered.value || active.value);
const activeOrDefault = computed(() => tracks.find((track) => track.id === active.value) ?? { textKey: "home.trace.summary" });
const isOn = (id) => current.value === id;

const stopDraw = () => {
  while (animations.length) animations.pop().cancel();
};

onMounted(() => {
  if (reducedMotion.value || !svgEl.value) return;
  svgEl.value.querySelectorAll(".trace").forEach((el) => {
    if (!el.getTotalLength) return;
    const length = el.getTotalLength();
    if (!length) return;
    const dash = `${length}px`;
    animations.push(
      el.animate(
        [
          { strokeDasharray: dash, strokeDashoffset: dash },
          { strokeDasharray: dash, strokeDashoffset: "0px" }
        ],
        {
          duration: 520,
          delay: Number(el.dataset.delay || 0),
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "both"
        }
      )
    );
  });
});

watch(reducedMotion, (reduced) => {
  if (reduced) stopDraw();
});

onUnmounted(stopDraw);
</script>

<template>
  <section class="relative isolate pt-10 sm:pt-14 lg:pt-20">
    <div class="w-full">
      <header class="flex items-center justify-between gap-3 border-b border-border pb-3">
        <p class="font-mono text-xs uppercase tracking-[0.16em] text-muted">{{ t("home.trace.label") }}</p>
        <span class="font-mono text-xs text-accent" aria-hidden="true">trace/01</span>
      </header>

      <svg ref="svgEl" viewBox="0 0 480 360" class="mx-auto mt-4 h-auto w-full max-w-[420px] text-accent lg:max-w-none" :class="{ 'is-tracing': current }" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="owl-clip">
            <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z" transform="translate(73.5 46) scale(5.2)" />
          </clipPath>
        </defs>

        <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z"
              transform="translate(73.5 46) scale(5.2)"
              fill="rgb(var(--color-accent) / 0.07)" stroke="currentColor" stroke-width="0.48"
              class="trace" data-delay="0" />

        <g fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="198" cy="192" r="26" class="trace" data-delay="380" />
          <circle cx="282" cy="192" r="26" class="trace" data-delay="380" />
          <circle cx="198" cy="192" r="4.5" fill="currentColor" stroke="none" />
          <circle cx="282" cy="192" r="4.5" fill="currentColor" stroke="none" />
        </g>

        <path d="M240 224 L254 243 L240 256 L226 243 Z" fill="currentColor" stroke="none" />

        <g clip-path="url(#owl-clip)" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M198 218 C 176 246 168 266 168 286" class="trace trace-line" data-delay="560" :class="{ 'is-on': isOn('backend') }" data-track="backend" />
          <path d="M170 292 L 310 292" class="trace trace-line" data-delay="640" :class="{ 'is-on': isOn('infra') }" data-track="infra" />
          <path d="M282 218 C 304 246 312 266 312 286" class="trace trace-line" data-delay="720" :class="{ 'is-on': isOn('ai') }" data-track="ai" />
        </g>

        <g fill="currentColor">
          <circle cx="168" cy="286" r="4.5" class="trace-node" :class="{ 'is-on': isOn('backend') }" data-track="backend" />
          <circle cx="240" cy="292" r="4.5" class="trace-node" :class="{ 'is-on': isOn('infra') }" data-track="infra" />
          <circle cx="312" cy="286" r="4.5" class="trace-node" :class="{ 'is-on': isOn('ai') }" data-track="ai" />
        </g>
      </svg>

      <div class="mt-4 flex flex-wrap justify-center gap-2">
        <button v-for="track in tracks" :key="track.id" type="button"
          class="trace-btn min-h-[44px]" :class="{ 'is-active': active === track.id }"
          :aria-pressed="active === track.id"
          @click="active = active === track.id ? null : track.id"
          @mouseenter="hovered = track.id" @mouseleave="hovered = null"
          @focus="hovered = track.id" @blur="hovered = null">
          {{ t(`home.trace.${track.id}`) }}
        </button>
      </div>

      <p class="mx-auto mt-4 max-w-md text-pretty text-center text-sm leading-relaxed text-muted" aria-live="polite">
        {{ t(activeOrDefault.textKey) }}
      </p>
    </div>
  </section>
</template>

<style scoped>
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
</style>
