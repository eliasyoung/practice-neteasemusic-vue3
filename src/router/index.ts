import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const TestView = () => import("@/views/TestView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "discover" },
    { path: "/discover", component: HomeView },
    {
      path: "/video",
      component: TestView,
    },
  ],
});

export default router;
