<script setup>
import clients from "@/data/clients.js";
import AboutClientSingle from "./AboutClientSingle.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <section class="border-y border-border py-8 sm:py-10">
    <div>
      <h2 class="text-xl font-semibold tracking-tight text-text sm:text-2xl">{{ t("about.clientsHeading") }}</h2>
      <div class="mt-6 grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
        <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
      </div>
    </div>
  </section>
</template>
