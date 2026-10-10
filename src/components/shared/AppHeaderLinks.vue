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
  <div
    id="primary-navigation"
    :class="isOpen ? 'block border-t border-border' : 'hidden'"
    class="order-3 w-full pt-2 sm:order-2 sm:block sm:w-auto sm:flex-1 sm:border-t-0 sm:pt-0"
  >
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-6">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block border-b border-border py-3 font-sans text-sm font-medium text-muted transition-colors duration-150 hover:text-accent last:border-b-0 sm:border-b-0 sm:py-1"
      >
        {{ t(link.label) }}
      </router-link>
    </div>
  </div>
</template>
