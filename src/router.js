import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";

routes.push(
  {
    name: "404",
    path: "/:pathMatch(.*)",
    component: () => import("~/views/404.vue"),
  },
  {
    path: "/",
    component: () => import("~/views/home/index.vue"),
  }
);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_FILE_NAME),
  routes,
});

console.log(routes);

router.beforeEach((to, from, next) => {
  next();
});

export default router;
