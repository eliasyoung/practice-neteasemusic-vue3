<template>
  <div class="aside-container">
    <AsideRouter :route-list="routeData" bold-active />
    <AsideRouter :route-list="secondRouteData" title="我的音乐" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AsideRouter from "./AsideRouter.vue";

const routeData = ref([
  {
    title: "发现音乐",
    to: "/discover",
  },
  {
    title: "视频",
    to: "/video",
  },
  {
    title: "朋友",
    to: "/friend",
  },
  {
    title: "直播",
    to: "/livestream",
  },
  {
    title: "私人FM",
    to: "/personalfm",
  },
]);
const secondRouteData = ref([
  {
    title: "本地音乐",
    to: "/localmusic",
    icon: "icon-music2yinle",
  },
  {
    title: "下载管理",
    to: "/download",
    icon: "icon-Download_icon",
  },
]);
</script>

<style scoped>
.aside-container {
  width: 200px;
  border-right: 1px solid var(--primary-border-color);
}
</style>
