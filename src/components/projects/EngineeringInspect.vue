<script setup>
import { useLocale } from "@/composables/useLocale";

const { t } = useLocale();

const apiBaseUrl = "https://github.com/yanpenalva/starter-kit-api/blob/main/";
const frontendBaseUrl = "https://github.com/yanpenalva/starter-kit-frontend/blob/main/";
const frontendAuthTestsUrl = "https://github.com/yanpenalva/starter-kit-frontend/tree/main/src/features/auth";

const apiLinks = [
  {
    key: "auth",
    files: [
      "app/Policies/RolePolicy.php",
      "app/Http/Controllers/Auth/LoginController.php",
    ],
  },
  {
    key: "rbac",
    files: ["app/Actions/Roles/UpdateRolePermissions.php"],
  },
  {
    key: "tests",
    files: ["tests/Feature/RbacAbilityMatrixTest.php"],
  },
  {
    key: "health",
    files: [
      "app/Http/Controllers/HealthController.php",
      "app/Http/Middleware/CorrelateRequest.php",
    ],
  },
];

const frontendLinks = [
  {
    key: "feAuth",
    files: [
      "src/features/auth/composables/useAuthorization.ts",
      "src/features/auth/api/auth.api.ts",
      "tsconfig.json",
    ],
  },
  {
    key: "feTests",
    files: ["*.test.ts"],
  },
];
</script>

<template>
  <section v-reveal class="mx-auto w-full max-w-6xl px-6 pt-16">
    <header class="mb-8 max-w-3xl">
      <h2 class="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {{ t("inspect.title") }}
      </h2>
      <p class="mt-3 leading-relaxed text-muted">{{ t("inspect.text") }}</p>
    </header>

    <div class="grid gap-10 lg:grid-cols-2">
      <section aria-labelledby="inspect-api-title">
        <h3 id="inspect-api-title" class="mb-4 text-lg font-semibold text-text">
          {{ t("inspect.apiTitle") }}
        </h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in apiLinks"
            :key="item.key"
            class="card-motion rounded-md border border-border bg-surface p-5"
          >
            <h4 class="font-medium text-text">{{ t(`inspect.links.${item.key}.label`) }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ t(`inspect.links.${item.key}.hint`) }}
            </p>
            <ul class="mt-4 flex flex-col gap-2">
              <li v-for="file in item.files" :key="file">
                <a
                  :href="`${apiBaseUrl}${file}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="break-all font-mono text-xs text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {{ file }}
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section aria-labelledby="inspect-frontend-title">
        <h3 id="inspect-frontend-title" class="mb-4 text-lg font-semibold text-text">
          {{ t("inspect.feTitle") }}
        </h3>
        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in frontendLinks"
            :key="item.key"
            class="card-motion rounded-md border border-border bg-surface p-5"
          >
            <h4 class="font-medium text-text">{{ t(`inspect.links.${item.key}.label`) }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-muted">
              {{ t(`inspect.links.${item.key}.hint`) }}
            </p>
            <ul class="mt-4 flex flex-col gap-2">
              <li v-for="file in item.files" :key="file">
                <a
                  :href="item.key === 'feTests' ? frontendAuthTestsUrl : `${frontendBaseUrl}${file}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="break-all font-mono text-xs text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {{ file }}
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>
