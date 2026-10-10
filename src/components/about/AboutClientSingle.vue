<script setup>
defineProps({
  client: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex min-h-20 items-center justify-center py-3">
    <img
      :src="client.img"
      :alt="client.title"
      class="max-h-14 w-40 max-w-full select-none object-contain"
      loading="lazy"
      draggable="false"
    />
  </div>
</template>
