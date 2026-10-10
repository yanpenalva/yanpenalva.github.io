<script setup>
import { useLocale } from "@/composables/useLocale";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const { t } = useLocale();

const links = [
  { to: "/about", label: "nav.about" },
  { to: "/projects", label: "nav.projects" },
  { to: "/business-projects", label: "nav.business" },
  { to: "/contact", label: "nav.contact" },
];
</script>

<template>
  <div id="mobile-menu" :class="isOpen ? 'block' : 'hidden'" class="sm:flex sm:items-center sm:justify-end">
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :aria-label="t(link.label)"
      class="block border-b border-border py-3 font-sans font-medium text-muted hover:text-accent sm:ml-6 sm:inline-block sm:border-b-0 sm:py-0"
    >
      {{ t(link.label) }}
    </router-link>
  </div>
</template>
