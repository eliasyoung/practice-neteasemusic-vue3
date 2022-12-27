<template>
    <DiscoverCarousel :banners="banners" />
    <BaseContent title="推荐歌单" link>
      <div class="flex w-100 flex-wrap" style="gap: 18px">
        <BasePlaylistCard
          v-for="item in result"
          :key="item.id"
          :songlist-info="item"
        />
      </div>
    </BaseContent>
</template>

<script setup lang="ts">
import { getBanner, getPersonalized } from "@/api/api";
import BasePlaylistCard from "@/components/base/BasePlaylistCard.vue";
import DiscoverCarousel from "@/components/header/discover/carousel/DiscoverCarousel.vue";

const getBannerPromise = getBanner();
const getPersonalizedPromise = getPersonalized(10);

const { banners } = await getBannerPromise;
const { result } = await getPersonalizedPromise;
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}

.jc-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.w-100 {
  width: 100%;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
