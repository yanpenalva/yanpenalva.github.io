<script setup>
import { useLocale } from "@/composables/useLocale";
import { useRoute, useRouter } from "vue-router";

const { locale, setLocale, t } = useLocale();
const route = useRoute();
const router = useRouter();

const toggleLocale = () => {
  const nextLocale = locale.value === "en-US" ? "pt-BR" : "en-US";
  const path = route.path.replace(/^\/pt-br(?=\/|$)/i, "") || "/";
  setLocale(nextLocale);
  router.push({
    path: nextLocale === "pt-BR" ? `/pt-br${path}` : path,
    query: route.query,
    hash: route.hash,
  });
};
</script>

<template>
  <button
    type="button"
    class="font-mono text-xs uppercase tracking-wide text-muted transition-colors duration-150 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    :aria-label="(locale === 'en-US' ? t('common.portugueseCode') : t('common.englishCode')) + ' – ' + (locale === 'en-US' ? t('common.switchToPortuguese') : t('common.switchToEnglish'))"
    @click="toggleLocale"
  >
    {{ locale === "en-US" ? t("common.portugueseCode") : t("common.englishCode") }}
  </button>
</template>
