import { createRouter, createWebHistory } from "vue-router";
import { watch } from "vue";
import { useLocale } from "@/composables/useLocale";
import routeMetadata from "@/i18n/routeMetadata.json";

const components = {
  home: () => import("@/views/HomePage.vue"),
  about: () => import("@/views/About.vue"),
  projects: () => import("@/views/ProjectSection.vue"),
  business: () => import("@/views/BusinessProjects.vue"),
  contact: () => import("@/views/Contact.vue"),
};

const routes = [
  ...routeMetadata.pages.map(({ path, key }) => ({
    path,
    name: key,
    alias: `/pt-br${path === "/" ? "/" : path}`,
    component: components[key],
    meta: { i18n: key },
  })),
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
    meta: { i18n: "notFound" },
  },
];

if (typeof window !== "undefined" && window.location.hash.startsWith("#/")) {
  const legacyPath = window.location.hash.slice(1);
  let legacyLocale = "en-US";
  try {
    if (window.localStorage.getItem("locale") === "pt-BR") legacyLocale = "pt-BR";
  } catch {}
  const path = legacyLocale === "pt-BR" ? `/pt-br${legacyPath}` : legacyPath;
  window.history.replaceState(null, "", `${path}${window.location.search}`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const SITE_URL = "https://penalva.me";
const { locale, setLocale, t } = useLocale();

const pathForLocale = (routePath, targetLocale) => {
  const path = routePath.replace(/^\/pt-br(?=\/|$)/i, "") || "/";
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return targetLocale === "pt-BR" ? `/pt-br${normalizedPath}` : normalizedPath;
};

const absoluteUrl = (path) => new URL(path, SITE_URL).href;

const setMeta = (attribute, key, content) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setAlternate = (language, href) => {
  let element = document.querySelector(`link[rel="alternate"][hreflang="${language}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = "alternate";
    element.hreflang = language;
    document.head.appendChild(element);
  }
  element.href = href;
};

const updateMetadata = (route) => {
  if (typeof document === "undefined") return;

  const routeKey = route.meta?.i18n ?? "notFound";
  document.title = t(`routes.${routeKey}.title`);

  const title = document.title;
  const description = t(`routes.${routeKey}.description`);
  const canonical = absoluteUrl(pathForLocale(route.path, locale.value));
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("property", "og:locale", locale.value === "pt-BR" ? "pt_BR" : "en_US");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonical;

  setAlternate("en-US", absoluteUrl(pathForLocale(route.path, "en-US")));
  setAlternate("pt-BR", absoluteUrl(pathForLocale(route.path, "pt-BR")));
  setAlternate("x-default", absoluteUrl(pathForLocale(route.path, "en-US")));
};

router.beforeEach((to, from) => {
  const targetLocale = /^\/pt-br(?:\/|$)/i.test(to.path) ? "pt-BR" : "en-US";
  if (!from.matched.length) {
    setLocale(targetLocale);
    return;
  }

  if (locale.value === "pt-BR" && targetLocale === "en-US") {
    return { path: pathForLocale(to.path, "pt-BR"), query: to.query, hash: to.hash, replace: true };
  }
  if (locale.value === "en-US" && targetLocale === "pt-BR") {
    return { path: pathForLocale(to.path, "en-US"), query: to.query, hash: to.hash, replace: true };
  }
  setLocale(targetLocale);
});

router.afterEach((to) => updateMetadata(to));
watch(locale, () => updateMetadata(router.currentRoute.value), { flush: "sync" });

export default router;
