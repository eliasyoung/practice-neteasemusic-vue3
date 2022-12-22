import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const TestView = () => import("@/views/TestView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    {
      path: "/about",
      component: TestView,
    },
  ],
});

export default router;
