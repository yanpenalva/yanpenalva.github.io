<script setup>
import { computed } from "vue";
import FooterCopyright from "@/components/shared/FooterCopyright.vue";
import IconBook from "@/components/icons/IconBook.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconMessageCircle from "@/components/icons/IconMessageCircle.vue";
import { useLocale } from "@/composables/useLocale";
import { useWhatsApp } from "@/composables/useWhatsApp";

const { t } = useLocale();
const { href: whatsappHref } = useWhatsApp();

const socials = computed(() => [
  { name: "GitHub", icon: IconGithub, url: "https://github.com/yanpenalva" },
  { name: "Medium", icon: IconBook, url: "https://medium.com/@yanpenabr" },
  { name: "Instagram", icon: IconInstagram, url: "https://instagram.com/yanbpenalva" },
  { name: "LinkedIn", icon: IconLinkedin, url: "https://www.linkedin.com/in/yanpenalva/" },
  { name: t("contact.whatsappLabel"), icon: IconMessageCircle, url: whatsappHref.value },
]);
</script>

<template>
  <footer class="mt-16 border-t border-border">
    <div
      class="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-between gap-x-8 gap-y-4 px-4 py-6 sm:px-8 lg:px-0"
    >
      <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <li v-for="social in socials" :key="social.name">
          <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted transition-colors duration-150 hover:text-accent"
          >
            <component :is="social.icon" :size="16" class="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{{ social.name }}</span>
          </a>
        </li>
      </ul>
      <FooterCopyright />
    </div>
  </footer>
</template>
