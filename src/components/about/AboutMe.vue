<script setup>
import profileImage from "@/assets/images/profile.jpeg";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
const bioParagraphs = [1, 2, 3];
</script>

<template>
  <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
    <img
      :src="profileImage"
      alt="Yan Penalva"
      class="about-portrait-reveal h-48 w-48 shrink-0 rounded-2xl object-cover"
    />
    <div class="flex flex-col gap-4 text-left">
      <p
        v-for="(id, index) in bioParagraphs"
        :key="id"
        class="about-bio-reveal text-lg leading-relaxed text-text"
        :style="{ '--cascade-delay': `${index * 120}ms` }"
      >{{ t(`about.bio${id}`) }}</p>
    </div>
  </div>
</template>

<style scoped>
.about-portrait-reveal {
  animation: portrait-reveal 700ms cubic-bezier(.2, .8, .2, 1) both;
}

.about-bio-reveal {
  animation: bio-reveal 520ms cubic-bezier(.2, .8, .2, 1) var(--cascade-delay) both;
}

@keyframes portrait-reveal {
  from { clip-path: inset(0 100% 0 0 round 1rem); opacity: 0; transform: translateX(-.75rem); }
  to { clip-path: inset(0 0 0 0 round 1rem); opacity: 1; transform: translateX(0); }
}

@keyframes bio-reveal {
  from { opacity: 0; transform: translateY(.5rem); }
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .about-portrait-reveal,
  .about-bio-reveal {
    animation: none;
    clip-path: none;
    opacity: 1;
    transform: none;
  }
}
</style>
