<template>
  <li class="carousel-item">
    <img v-lazyImg="banner.imageUrl" />
    <div
      class="carousel-item-type"
      :style="{
        backgroundColor: `var(--banner-type-${banner.titleColor})`,
      }"
    >
      {{ banner.typeTitle }}
    </div>
  </li>
</template>

<script setup lang="ts">
import type { banner } from "@/models";

defineProps<{ banner: banner }>();
</script>

<style lang="less" scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  // width: max(540px, 50%);
  min-width: 540px;
  width: 50%;
  z-index: 10;
  transition: all 0.75s;
  &.in-stage {
    &.active {
      z-index: 20;
      cursor: pointer;
    }
  }
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .carousel-item-type {
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 1em;
    padding: 5px 10px;
    white-space: nowrap;
    font-size: 12px;
    color: #ffffff;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    --banner-type-red: #cc4a4a;
    --banner-type-blue: #4a79cc;
  }
}
</style>
