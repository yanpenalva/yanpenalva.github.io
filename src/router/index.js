import { createRouter, createWebHashHistory } from "vue-router";
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

router.beforeEach((to, from, next) => {
  try {
    const { t } = useLocale();
    const key = to.meta && to.meta.i18n ? to.meta.i18n : "notFound";
    const title = t("routes." + key + ".title");
    if (title) {
      document.title = title;
    }
    const description = t("routes." + key + ".description");
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  } catch (error) {
    void error;
  }
  next();
});

export default router;
