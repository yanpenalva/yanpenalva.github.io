<script setup>
import AboutMe from "@/components/about/AboutMe.vue";
import AboutCounter from "@/components/about/AboutCounter.vue";
import AboutClients from "@/components/about/AboutClients.vue";
</script>

<template>
  <div class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16">
    <AboutMe />
    <AboutCounter />
    <AboutClients />
  </div>
</template>
