<script>
export default {
  name: "ContactPage",
};
</script>

<script setup>
import contacts from "@/data/contacts";
import ContactHiring from "@/components/contact/ContactHiring.vue";
import ContactDetails from "@/components/contact/ContactDetails.vue";
</script>

<template>
  <main id="main-content" class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
    <ContactHiring />
    <div v-reveal>
      <ContactDetails :contacts="contacts" />
    </div>
  </main>
</template>
