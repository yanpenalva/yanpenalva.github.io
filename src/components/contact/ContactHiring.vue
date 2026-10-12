<script setup>
import contacts from "@/data/contacts";
import { useLocale } from "@/composables/useLocale";
import { useWhatsApp } from "@/composables/useWhatsApp";

const { t } = useLocale();
const { href: whatsappHref } = useWhatsApp();
const emailContact = contacts.find((contact) => contact.icon === "mail");

const serviceIds = [1, 2, 3, 4];
const stepIds = [1, 2, 3, 4];
const faqIds = [1, 2, 3];
</script>

<template>
  <div class="flex flex-col gap-12">
    <section
      v-reveal
      class="max-w-3xl space-y-3"
    >
      <h1 class="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        {{ t("hireTitle") }}
      </h1>
      <p class="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {{ t("hireText") }}
      </p>
      <p class="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{{ t("hireWhatsAppCta") }}</a>
        <a v-if="emailContact" :href="emailContact.href" class="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{{ t("hireEmailCta") }}</a>
      </p>
    </section>

    <section
      v-reveal
      class="space-y-6"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-text">
        {{ t("hireServicesTitle") }}
      </h2>
      <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="serviceId in serviceIds"
          :key="serviceId"
          class="card-motion rounded-md border border-border bg-surface p-5"
        >
          <h3 class="font-semibold text-text">
            {{ t(`hireServices.${serviceId}.title`) }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ t(`hireServices.${serviceId}.text`) }}
          </p>
        </li>
      </ul>
    </section>

    <section
      v-reveal
      class="space-y-6"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-text">
        {{ t("hireStepsTitle") }}
      </h2>
      <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="stepId in stepIds"
          :key="stepId"
          class="rounded-md border border-border p-5"
        >
          <h3 class="font-semibold text-text">
            {{ t(`hireSteps.${stepId}.title`) }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ t(`hireSteps.${stepId}.text`) }}
          </p>
        </li>
      </ol>
    </section>

    <section
      v-reveal
      class="space-y-4"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-text">
        {{ t("hireAvailabilityTitle") }}
      </h2>
      <div class="rounded-md border border-border bg-surface p-5">
        <p class="font-medium text-text">
          {{ t("contact.location") }}
        </p>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          {{ t("contact.timezone") }} · {{ t("contact.modality") }}
        </p>
      </div>
    </section>

    <section
      v-reveal
      class="space-y-5"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-text">
        {{ t("hireFaqTitle") }}
      </h2>
      <div class="divide-y divide-border border-y border-border">
        <details
          v-for="faqId in faqIds"
          :key="faqId"
          class="py-4"
        >
          <summary class="cursor-pointer font-medium text-text">
            {{ t(`hireFaq.${faqId}.q`) }}
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            {{ t(`hireFaq.${faqId}.a`) }}
          </p>
        </details>
      </div>
    </section>

    <section
      v-reveal
      class="rounded-md border border-border bg-surface p-6 sm:p-8"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {{ t("hireCtaTitle") }}
      </h2>
      <p class="mt-3 max-w-2xl leading-relaxed text-muted">
        {{ t("hireCtaText") }}
      </p>
      <div class="mt-6 flex flex-wrap gap-3">
        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent"
        >
          {{ t("hireWhatsAppCta") }}
        </a>
        <a
          v-if="emailContact"
          :href="emailContact.href"
          class="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-muted focus-visible:ring-2 focus-visible:ring-accent"
        >
          {{ t("hireEmailCta") }}
        </a>
      </div>
    </section>
  </div>
</template>
