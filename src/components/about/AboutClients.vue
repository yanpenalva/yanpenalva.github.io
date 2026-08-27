<script setup>
import AboutClientSingle from "@/components/about/AboutClientSingle.vue";
const heading = "Companies in which I provide or have provided services";
const clients = [
  { id: 1, title: "Ramiro Campelo", img: new URL("@/assets/images/brands/ramiro_logo.png", import.meta.url) },
  { id: 2, title: "ACP Group", img: new URL("@/assets/images/brands/acp_logo.png", import.meta.url) },
  { id: 3, title: "Qintess", img: new URL("@/assets/images/brands/qintess_logo.png", import.meta.url) },
  { id: 4, title: "Prodeb", img: new URL("@/assets/images/brands/prodeb_logo.png", import.meta.url) },
  { id: 5, title: "Netra Tecnologia", img: new URL("@/assets/images/brands/netra_logo.png", import.meta.url) },
];
</script>

<template>
  <section class="mt-10 sm:mt-20 text-center">
    <h2 class="text-2xl sm:text-3xl text-primary-dark dark:text-primary-light font-medium mb-10">{{ heading }}</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center max-w-6xl mx-auto">
      <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
    </div>
  </section>
</template>
