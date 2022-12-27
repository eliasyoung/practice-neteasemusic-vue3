import { createRouter, createWebHistory } from "vue-router";

/* Discover */
const DiscoverView = () => import("@/views/discover/DiscoverView.vue");
const DiscoverHomeView = () => import("@/views/discover/DiscoverHomeView.vue");
const DiscoverSonglistView = () =>
  import("@/views/discover/DiscoverSonglistView.vue");

const TestView = () => import("@/views/TestView.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/discover", },
    {
      path: "/discover",
      component: DiscoverView,
      children: [
        { path: "", component: DiscoverHomeView },
        {
          path: "songlist",
          component: DiscoverSonglistView,
        },
      ],
    },
    {
      path: "/video",
      component: TestView,
    },
  ],
});

export default router;
