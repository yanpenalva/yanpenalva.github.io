<script setup>
import ContactDetails from "@/components/contact/ContactDetails.vue";
const contacts = [
  { id: 1, name: "Salvador/BA - Brasil", icon: "map-pin", href: null },
  { id: 2, name: "yanpenabr@gmail.com", icon: "mail", href: "mailto:yanpenabr@gmail.com" },
  { id: 3, name: "yanpenalva", icon: "github", href: "https://github.com/yanpenalva" },
  { id: 4, name: "yanpenalva", icon: "linkedin", href: "https://www.linkedin.com/in/yanpenalva/" },
];
</script>

<template>
  <div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">
    <ContactDetails :contacts="contacts" />
  </div>
</template>
