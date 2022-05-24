import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/filmes",
      name: "filmes",
      component: () => import("../views/StarshipsView.vue"),
    },
    {
      path: "/starships",
      name: "starships",
      component: () => import("../views/StarshipsView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/filmes",
    },
  ],
});

export default router;
