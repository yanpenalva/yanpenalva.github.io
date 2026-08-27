<script setup>
import Counter from "vue3-autocounter";
const counters = [
  { end: 6, label: "Years of experience" },
  { end: 20, label: "Projects completed", showPlus: true },
];
const onFinished = () => console.info("Counting finished");
</script>

<template>
  <section class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
    <div class="font-general-regular container mx-auto py-20 flex flex-col sm:flex-row justify-center items-center gap-10">
      <div v-for="(item, index) in counters" :key="index" class="text-center">
        <div class="flex items-center justify-center mb-2">
          <Counter :startAmount="0" :endAmount="item.end" :duration="1" :autoinit="true" @finished="onFinished" class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light" aria-label="Animated counter" />
          <span v-if="item.showPlus" class="text-2xl font-bold text-secondary-dark dark:text-secondary-light ml-1">+</span>
        </div>
        <span class="block text-md text-ternary-dark dark:text-ternary-light">{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>
