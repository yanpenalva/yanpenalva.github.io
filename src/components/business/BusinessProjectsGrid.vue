<script setup>
import business from "@/data/business.js";
import IconLink2 from "@/components/icons/IconLink2.vue";
import { useLocale } from "@/composables/useLocale";
import { normalizePublicUrl } from "@/utils/urls";

const { t } = useLocale();

const roleKey = (item, section) => "business." + section + "." + item.id + ".role";

const isInternal = (reference) => String(reference).toLowerCase().includes("internal");
</script>

<template>
  <section v-reveal class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold text-text">{{ t("business.enterpriseTitle") }}</h2>
        <p class="text-muted">{{ t("business.enterpriseHint") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="item in business.systems"
          :key="item.id"
          v-reveal
          class="h-full"
        >
          <article class="card-motion flex h-full flex-col gap-3 rounded-md border border-border bg-surface p-5">
            <h3 class="font-semibold text-text">{{ t("business.systems." + item.id + ".title") }}</h3>
            <p
              v-if="item.status"
              class="w-fit rounded border border-border bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
            >{{ t(item.status === "in-development" ? "business.statusDev" : "business.statusLegacy") }}</p>
            <p class="text-sm leading-relaxed text-muted">{{ t("business.systems." + item.id + ".description") }}</p>
            <div v-if="item.role" class="flex gap-2 text-sm text-muted">
              <span>{{ t("business.roleLabel") }}</span>
              <span>{{ t(roleKey(item, 'systems')) }}</span>
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
                v-else-if="normalizePublicUrl(item.reference)"
                :href="normalizePublicUrl(item.reference)"
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
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold text-text">{{ t("business.infraTitle") }}</h2>
        <p class="text-muted">{{ t("business.infraHint") }}</p>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="item in business.infra"
          :key="item.id"
          v-reveal
          class="h-full"
        >
          <article class="card-motion flex h-full flex-col gap-3 rounded-md border border-border bg-surface p-5">
            <h3 class="font-semibold text-text">{{ t("business.infra." + item.id + ".title") }}</h3>
            <p
              v-if="item.status"
              class="w-fit rounded border border-border bg-canvas px-2 py-1 font-mono text-xs uppercase tracking-wide text-muted"
            >{{ t(item.status === "in-development" ? "business.statusDev" : "business.statusLegacy") }}</p>
            <p class="text-sm leading-relaxed text-muted">{{ t("business.infra." + item.id + ".description") }}</p>
            <div v-if="item.role" class="flex gap-2 text-sm text-muted">
              <span>{{ t("business.roleLabel") }}</span>
              <span>{{ t(roleKey(item, 'infra')) }}</span>
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
                v-else-if="normalizePublicUrl(item.reference)"
                :href="normalizePublicUrl(item.reference)"
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
    </div>
  </section>
</template>
