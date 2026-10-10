<script>
export default {
  name: "ContactPage",
};
</script>

<script setup>
import contacts from "@/data/contacts";
import ContactHiring from "@/components/contact/ContactHiring.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();
</script>

<template>
  <main class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
    <h1 class="sr-only">{{ t("nav.contact") }}</h1>
    <ContactHiring />
    <div v-reveal>
      <ContactDetails :contacts="contacts" />
    </div>
  </main>
</template>
