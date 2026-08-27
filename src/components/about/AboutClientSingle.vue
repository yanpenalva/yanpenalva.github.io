<script setup>
defineProps({ client: { type: Object, required: true } });
</script>

<template>
  <div class="group flex items-center justify-center rounded-lg mb-8 bg-white dark:bg-secondary-light border border-ternary-light dark:border-ternary-dark shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary-dark dark:hover:border-primary-light">
    <img :src="client.img" :alt="client.title" class="w-64 py-5 px-10 object-contain transition-transform duration-300 group-hover:scale-105 select-none" draggable="false" loading="lazy" width="256" height="100" />
  </div>
</template>
