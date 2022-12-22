import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: HomeView }],
});

export default router;
