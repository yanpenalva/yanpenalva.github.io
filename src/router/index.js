import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: HomePage, meta: { title: "Yan Penalva — Software Engineer" } },
  { path: "/about", name: "About", component: () => import("../views/About.vue"), meta: { title: "About — Yan Penalva" } },
  { path: "/projects", name: "Projects", component: () => import("../views/ProjectSection.vue"), meta: { title: "Projects — Yan Penalva" } },
  { path: "/contact", name: "Contact", component: () => import("../views/Contact.vue"), meta: { title: "Contact — Yan Penalva" } },
  { path: "/business-projects", name: "BusinessProjects", component: () => import("@/views/BusinessProjects.vue"), meta: { title: "Business — Yan Penalva" } },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: HomePage, meta: { title: "Yan Penalva — Software Engineer" } },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.beforeEach((to) => {
  document.title = to.meta?.title ?? "Yan Penalva — Software Engineer";
});

export default router;
