<script setup>
import IconMapPin from "@/components/icons/IconMapPin.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import { useLocale } from "@/composables/useLocale";

defineProps({
  contacts: { type: Array, required: true },
});

const { t } = useLocale();

const icons = {
  "map-pin": IconMapPin,
  mail: IconMail,
  github: IconGithub,
  linkedin: IconLinkedin,
};

const isExternal = (href) => String(href).startsWith("http");
</script>

<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold text-text">{{ t("contact.title") }}</h2>
    <ul class="flex flex-col gap-3">
      <li v-for="contact in contacts" :key="contact.id" class="flex items-center gap-3">
        <component v-if="icons[contact.icon]" :is="icons[contact.icon]" class="h-5 w-5 shrink-0 text-accent" />
        <a
          v-if="contact.href"
          :href="contact.href"
          :target="isExternal(contact.href) ? '_blank' : undefined"
          :rel="isExternal(contact.href) ? 'noopener noreferrer' : undefined"
          class="text-text hover:text-accent hover:underline"
        >{{ contact.name }}</a>
        <span v-else class="text-text">{{ contact.name }}</span>
      </li>
    </ul>
  </section>
</template>
