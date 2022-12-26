<template>
  <BaseNavbar :navs="navs" />
  <BaseContainer>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component"></component>
        </Suspense>
      </template>
    </RouterView>
  </BaseContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseNavbar from "@/components/base/BaseNavbar.vue";

const navs = ref([
  { title: "个性推荐", to: "/discover" },
  { title: "歌单", to: "/discover/songlist" },
  { title: "主播电台" },
  { title: "排行榜" },
  { title: "歌手" },
  { title: "最新音乐" },
]);
</script>

<style lang="less" scoped></style>
