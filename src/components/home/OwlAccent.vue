<script setup>
const props = defineProps({ messenger: { type: Boolean, default: false } });
</script>

<template>
  <svg aria-hidden="true" viewBox="0 0 64 64" class="h-12 w-12 text-accent">
    <path d="M10 12 23 18h18l13-6-2 19c0 13-8 23-20 23S12 44 12 31l-2-19Z" fill="currentColor" opacity=".16" stroke="currentColor" stroke-width="3" />
    <circle cx="23" cy="31" r="8" fill="currentColor" /><circle cx="41" cy="31" r="8" fill="currentColor" />
    <circle cx="23" cy="31" r="3" fill="var(--color-canvas)" /><circle cx="41" cy="31" r="3" fill="var(--color-canvas)" />
    <path d="m29 42 3 4 3-4" fill="currentColor" />
    <g v-if="props.messenger" class="owl-envelope" transform="translate(36 39)">
      <rect width="22" height="16" rx="2" fill="var(--color-canvas)" stroke="currentColor" stroke-width="2" />
      <path d="m2 2 9 7 9-7" fill="none" stroke="currentColor" stroke-width="2" />
    </g>
  </svg>
</template>

<style scoped>
.owl-envelope { transform-box: view-box; transform-origin: 47px 47px; animation: envelope-arrive 700ms cubic-bezier(.2,.8,.2,1) 180ms both; }
@keyframes envelope-arrive {
  from { opacity: 0; transform: translate(5px, -6px) scale(.75) rotate(-10deg); }
  to { opacity: 1; transform: translate(0) scale(1) rotate(0); }
}
@media (prefers-reduced-motion: reduce) { .owl-envelope { animation: none; } }
</style>
