<template>
  <DiscoverCarousel v-if="banners" :banners="banners" />
  <BaseContent title="推荐歌单" link>
    <div class="flex w-100 flex-wrap" style="gap: 22px 18px">
      <BaseInfoCard
        v-for="item in personalized"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :picUrl="item.picUrl"
      />
    </div>
  </BaseContent>
  <BaseContent title="独家放送" link>
    <div class="flex w-100 flex-wrap" style="gap: 22px 18px">
      <BaseInfoCard
        v-for="item in privateContent"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :picUrl="item.sPicUrl"
        :column="3"
      />
    </div>
  </BaseContent>
  <BaseContent title="最新音乐" link>
    <div
      class="flex w-100 flex-wrap flex-column"
      style="gap: 16px 10px; max-height: 250px"
    >
      <NewSongItem v-for="item in newSong" :key="item.id" :item-info="item" />
    </div>
  </BaseContent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  getBanner,
  getPersonalized,
  getPrivateContent,
  getNewSong,
} from "@/api/api";
import DiscoverCarousel from "@/components/header/discover/carousel/DiscoverCarousel.vue";
import NewSongItem from "@/components/NewSongItem.vue";
import type { banner, songlistInfo, privateContent, songInfo } from "@/models";

const banners = ref<banner[]>();
const personalized = ref<songlistInfo[]>();
const privateContent = ref<privateContent[]>();
const newSong = ref<songInfo[]>();

const fetchPageData = async () => {
  const getBannerPromise = getBanner();
  const getPersonalizedPromise = getPersonalized(10);
  const getPrivateContentPromise = getPrivateContent();
  const newSongDataPromise = await getNewSong(12);

  try {
    const [
      { banners: bannersResult },
      { result: personalizedResult },
      { result: privateContentResult },
      { result: newSongResult },
    ] = await Promise.all([
      getBannerPromise,
      getPersonalizedPromise,
      getPrivateContentPromise,
      newSongDataPromise,
    ]);
    banners.value = bannersResult;
    personalized.value = personalizedResult;
    privateContent.value = privateContentResult;
    newSong.value = newSongResult;
  } catch (err) {
    console.log(err);
  }
};

fetchPageData();
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

.flex-column {
  flex-direction: column;
}
</style>
