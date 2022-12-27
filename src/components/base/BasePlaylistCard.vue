<template>
  <div class="songlist-info-card">
    <img :src="songlistInfo.picUrl" />
    <a>{{ songlistInfo.name }}</a>
  </div>
</template>

<script setup lang="ts">
import type { songlistInfo } from "@/models";

const props = defineProps<{ songlistInfo: songlistInfo }>();
</script>

<style lang="less" scoped>
.songlist-info-card {
  display: flex;
  flex-direction: column;
  max-width: calc(20% - 15px);
  img {
    // width: 205px;
    // height: 205px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }
  a {
    font-size: 14px;
    cursor: pointer;
    padding: 6px 0;
    color: var(--primary-route-font-color);
    &:hover {
      color: var(--primary-hover-route-font-color);
    }
  }
}
</style>
