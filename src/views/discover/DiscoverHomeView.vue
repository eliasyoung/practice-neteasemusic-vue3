<template>
  <div>
    <DiscoverCarousel :banners="banners" />
  </div>
</template>

<script setup lang="ts">
import { getBanner } from "@/api/api";
import DiscoverCarousel from "@/components/header/discover/carousel/DiscoverCarousel.vue";

const { banners } = await getBanner();
</script>

<style lang="less" scoped></style>
