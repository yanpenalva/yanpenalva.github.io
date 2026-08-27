<script setup>
defineProps({ title: { type: String, required: true } });
</script>

<template>
  <button>{{ title }}</button>
</template>
