<script setup>
import { useLocale } from "@/composables/useLocale";
import { isValidHttpUrl } from "@/utils/urls";

const props = defineProps({
  project: { type: Object, required: true },
});

const { t } = useLocale();

const projectText = (field) => t(`projects.items.${props.project.id}.${field}`);

const shortUrl = (href) => {
  try {
    const u = new URL(href);
    return u.host + (u.pathname.length > 1 ? u.pathname : "");
  } catch {
    return href;
  }
};

const repoLabel = (href) => {
  if (href.includes("npmjs.com")) return t("projects.packageLabel");
  if (!href.includes("github.com")) return t("projects.siteLabel");
  return t("projects.viewCode");
};
</script>

<template>
  <article class="card-motion flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface">
    <div class="flex flex-1 flex-col gap-5 p-5 sm:p-6">
      <header class="flex flex-col gap-2">
        <p class="font-mono text-xs uppercase tracking-wide text-muted">
          {{ t(`projects.categories.${project.category}`) }}
        </p>
        <h3 class="text-xl font-semibold leading-tight text-text">{{ projectText('title') }}</h3>
      </header>

      <div class="flex flex-col gap-3">
        <p v-if="project.language" class="font-mono text-sm text-muted">
          {{ t("business.techLabel") }}
          <span class="text-text">{{ project.language }}</span>
        </p>
        <p class="text-base leading-relaxed text-muted">{{ projectText('description') }}</p>
        <p v-if="project.role" class="text-sm text-muted">
          {{ t("business.roleLabel") }}
          <span class="text-text">{{ t(`projects.items.${project.id}.role`) }}</span>
        </p>
      </div>

      <div
        v-if="project.inspect && project.inspectBase"
        class="flex flex-col gap-2 border-t border-border pt-4"
      >
        <p class="font-mono text-xs uppercase tracking-wide text-muted">{{ t("projects.inspectTitle") }}</p>
        <ul class="flex flex-col gap-2">
          <li v-for="link in project.inspect" :key="link.key" class="text-sm">
            <a
              :href="project.inspectBase + link.path"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >{{ t("inspect.links." + link.key + ".label") }}</a>
            <p class="text-muted">{{ t("inspect.links." + link.key + ".hint") }}</p>
          </li>
        </ul>
      </div>

      <div
        v-if="isValidHttpUrl(project.href) || isValidHttpUrl(project.deploy)"
        class="mt-auto flex flex-col gap-3 border-t border-border pt-4"
      >
        <a
          v-if="isValidHttpUrl(project.href)"
          :href="project.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-w-0 flex-col gap-1 rounded-sm text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>{{ repoLabel(project.href) }}</span>
          <span class="[overflow-wrap:anywhere] text-text">{{ shortUrl(project.href) }}</span>
        </a>
        <a
          v-if="isValidHttpUrl(project.deploy)"
          :href="project.deploy"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-w-0 flex-col gap-1 self-start rounded-md border border-border px-3 py-2 text-sm text-accent hover:border-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>{{ t("projects.deployLabel") }}</span>
          <span class="[overflow-wrap:anywhere] font-mono text-xs text-muted">{{ shortUrl(project.deploy) }}</span>
        </a>
      </div>
    </div>
  </article>
</template>
