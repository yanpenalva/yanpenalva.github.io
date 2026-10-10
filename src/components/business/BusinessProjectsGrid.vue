<script setup>
import { computed } from "vue";
import business from "@/data/business.js";
import IconLink2 from "@/components/icons/IconLink2.vue";
import { useLocale } from "@/composables/useLocale";

const { t, locale } = useLocale();

const resumeHref = computed(() =>
  String(locale.value).toLowerCase().startsWith("pt")
    ? "/files/Yan_Penalva_Curriculo_PTBR.pdf"
    : "/files/Yan_Penalva_Resume_EN.pdf"
);

const beyond2Parts = computed(() => t("business.beyond2").split("{resume}"));

const roleKey = (item, section) => "business." + section + "." + item.id + ".role";

const isInternal = (reference) => String(reference).toLowerCase().includes("internal");

const translatedOrData = (key, fallback) => {
  const translation = t(key);
  return translation === key ? fallback : translation;
};
</script>

<template>
  <section class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold text-text">{{ t("business.enterpriseTitle") }}</h2>
        <p class="text-muted">{{ t("business.enterpriseHint") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article
          v-for="item in business.systems"
          :key="item.id"
          class="flex flex-col gap-3 rounded-md border border-border bg-surface p-5"
        >
          <h3 class="font-semibold text-text">{{ item.title }}</h3>
          <p
            v-if="item.status"
            class="w-fit rounded border border-border bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
          >{{ translatedOrData(item.status === "in-development" ? "business.statusDev" : "business.statusLegacy", item.status) }}</p>
          <p class="text-sm leading-relaxed text-muted">{{ translatedOrData("business.systems." + item.id + ".description", item.description) }}</p>
          <div v-if="item.role" class="flex gap-2 text-sm text-muted">
            <span>{{ t("business.roleLabel") }}</span>
            <span>{{ translatedOrData(roleKey(item, 'systems'), item.role) }}</span>
          </div>
          <div class="flex gap-2 text-sm text-muted">
            <span>{{ t("business.techLabel") }}</span>
            <span>{{ item.tech }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              v-if="item.reference && isInternal(item.reference)"
              class="rounded border border-border px-2 py-0.5 font-mono text-xs uppercase text-muted"
            >{{ t("business.internalTag") }}</span>
            <a
              v-else-if="item.reference"
              :href="'https://' + item.reference"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <IconLink2 class="h-4 w-4 shrink-0" />
              <span>{{ item.reference }}</span>
            </a>
          </div>
        </article>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold text-text">{{ t("business.infraTitle") }}</h2>
        <p class="text-muted">{{ t("business.infraHint") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article
          v-for="item in business.infra"
          :key="item.id"
          class="flex flex-col gap-3 rounded-md border border-border bg-surface p-5"
        >
          <h3 class="font-semibold text-text">{{ translatedOrData("business.infra." + item.id + ".title", item.title) }}</h3>
          <p
            v-if="item.status"
            class="w-fit rounded border border-border bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
          >{{ translatedOrData(item.status === "in-development" ? "business.statusDev" : "business.statusLegacy", item.status) }}</p>
          <p class="text-sm leading-relaxed text-muted">{{ translatedOrData("business.infra." + item.id + ".description", item.description) }}</p>
          <div v-if="item.role" class="flex gap-2 text-sm text-muted">
            <span>{{ t("business.roleLabel") }}</span>
            <span>{{ translatedOrData(roleKey(item, 'infra'), item.role) }}</span>
          </div>
          <div class="flex gap-2 text-sm text-muted">
            <span>{{ t("business.techLabel") }}</span>
            <span>{{ item.tech }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              v-if="item.reference && isInternal(item.reference)"
              class="rounded border border-border px-2 py-0.5 font-mono text-xs uppercase text-muted"
            >{{ t("business.internalTag") }}</span>
            <a
              v-else-if="item.reference"
              :href="'https://' + item.reference"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <IconLink2 class="h-4 w-4 shrink-0" />
              <span>{{ item.reference }}</span>
            </a>
          </div>
        </article>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-semibold text-text">{{ t("business.beyondTitle") }}</h2>
      <p class="text-muted">{{ t("business.beyond1") }}</p>
      <p class="text-muted">
        {{ beyond2Parts[0] }}<a
          :href="resumeHref"
          download
          class="text-accent hover:underline"
        >{{ t("business.beyondResume") }}</a>{{ beyond2Parts[1] }}
      </p>
      <p class="text-muted">{{ t("business.beyond3") }}</p>
    </div>
  </section>
</template>
