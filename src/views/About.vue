<script setup>
import AboutClients from "@/components/about/AboutClients.vue";
import AboutCounter from "@/components/about/AboutCounter.vue";
import AboutMe from "@/components/about/AboutMe.vue";
</script>

<template>
  <div>
    <div class="container mx-auto">
      <AboutMe />
    </div>
    <AboutCounter />
    <div class="container mx-auto">
      <AboutClients />
    </div>
  </div>
</template>
