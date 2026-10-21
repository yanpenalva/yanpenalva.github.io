<template>
  <div aria-hidden="true" class="tech-backdrop pointer-events-none absolute inset-0 opacity-40" />
</template>

<style scoped>
.tech-backdrop {
  background-image: radial-gradient(rgb(var(--color-accent) / .45) 1px, transparent 1px), linear-gradient(rgb(var(--color-accent) / .08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / .08) 1px, transparent 1px);
  background-size: 37px 37px, 28px 28px, 28px 28px;
}
@media (hover: none), (prefers-reduced-motion: reduce) { .tech-backdrop { background-image: linear-gradient(rgb(var(--color-accent) / .08) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-accent) / .08) 1px, transparent 1px); } }
</style>
