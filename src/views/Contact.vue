<script setup>
import contacts from "@/data/contacts";
import ContactDetails from "@/components/contact/ContactDetails.vue";
</script>

<template>
  <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
    <ContactDetails :contacts="contacts" />
  </div>
</template>
