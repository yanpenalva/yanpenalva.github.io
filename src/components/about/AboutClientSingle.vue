<script setup>
defineProps({
  client: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="rounded-xl border border-border bg-surface p-6">
    <img
      :src="client.img"
      :alt="client.title"
      class="w-40 select-none object-contain"
      loading="lazy"
      draggable="false"
    />
  </div>
</template>
