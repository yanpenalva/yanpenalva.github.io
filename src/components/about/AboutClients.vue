<script setup>
import clients from "@/data/clients.js";
import AboutClientSingle from "./AboutClientSingle.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section class="bg-canvas py-14">
    <div class="mx-auto max-w-5xl px-6">
      <h2 class="text-center text-xl font-semibold text-text">{{ t("about.clientsHeading") }}</h2>
      <div class="mt-10 grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-5">
        <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
      </div>
    </div>
  </section>
</template>
