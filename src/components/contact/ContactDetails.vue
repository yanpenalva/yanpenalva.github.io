<script setup>
import IconMapPin from "@/components/icons/IconMapPin.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconMessageCircle from "@/components/icons/IconMessageCircle.vue";
import { useLocale } from "@/composables/useLocale";
import { useWhatsApp } from "@/composables/useWhatsApp";
import { isValidHttpUrl, isValidUrl } from "@/utils/urls";

defineProps({
  contacts: { type: Array, required: true },
});

const { t } = useLocale();
const { href: whatsappHref } = useWhatsApp();

const icons = {
  "map-pin": IconMapPin,
  mail: IconMail,
  github: IconGithub,
  linkedin: IconLinkedin,
  whatsapp: IconMessageCircle,
};

const contactLabel = (contact) => {
  if (contact.icon === "whatsapp") return t("contact.whatsappLabel");
  if (contact.icon === "map-pin") return t("contact.location");
  return contact.name;
};
</script>

<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold text-text">{{ t("contact.title") }}</h2>
    <ul class="flex flex-col gap-3">
      <li v-for="contact in contacts" :key="contact.id" class="flex items-center gap-3">
        <component v-if="icons[contact.icon]" :is="icons[contact.icon]" class="h-5 w-5 shrink-0 text-accent" />
        <a
          v-if="contact.icon === 'whatsapp' && isValidHttpUrl(whatsappHref)"
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text hover:text-accent hover:underline"
        >{{ contactLabel(contact) }}</a>
        <a
          v-else-if="isValidUrl(contact.href)"
          :href="contact.href"
          :target="isValidHttpUrl(contact.href) ? '_blank' : undefined"
          :rel="isValidHttpUrl(contact.href) ? 'noopener noreferrer' : undefined"
          class="text-text hover:text-accent hover:underline"
        >{{ contactLabel(contact) }}</a>
        <span v-else class="text-text">{{ contactLabel(contact) }}</span>
        <span v-if="contact.icon === 'map-pin'" class="font-mono text-xs text-muted">{{ t("contact.timezone") }}</span>
      </li>
    </ul>
  </section>
</template>
