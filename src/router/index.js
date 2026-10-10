import { createRouter, createWebHashHistory } from "vue-router";
import { watch } from "vue";
import HomePage from "@/views/HomePage.vue";
import { useLocale } from "@/composables/useLocale";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { i18n: "home" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: { i18n: "about" },
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectSection.vue"),
    meta: { i18n: "projects" },
  },
  {
    path: "/business-projects",
    name: "business",
    component: () => import("../views/BusinessProjects.vue"),
    meta: { i18n: "business" },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
    meta: { i18n: "contact" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
    meta: { i18n: "notFound" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

const { locale, t } = useLocale();

const updateMetadata = (route) => {
  if (typeof document === "undefined") return;

  const routeKey = route.meta?.i18n ?? "notFound";
  document.title = t(`routes.${routeKey}.title`);

  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.setAttribute("name", "description");
    document.head.appendChild(description);
  }
  description.setAttribute("content", t(`routes.${routeKey}.description`));
};

router.afterEach((to) => updateMetadata(to));
watch(locale, () => updateMetadata(router.currentRoute.value), { flush: "sync" });

export default router;
