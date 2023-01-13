<template>
  <DiscoverCarousel v-if="banners" :banners="banners" />
  <BaseContent title="推荐歌单" link>
    <div class="grid personalized-container w-100">
      <div v-for="item in personalized" :key="item.id">
        <BaseCoverImage :pic-url="item.picUrl" />
        <BaseCoverTitle :name="item.name" />
      </div>
    </div>
  </BaseContent>
  <BaseContent title="独家放送" link>
    <div class="grid private-content-container w-100">
      <div v-for="item in privateContent" :key="item.id">
        <BaseCoverImage :pic-url="item.sPicUrl" />
        <BaseCoverTitle :name="item.name" />
      </div>
    </div>
  </BaseContent>
  <BaseContent title="最新音乐" link>
    <div class="grid newsong-container w-100 grid-column" style="">
      <NewSongItem v-for="item in newSong" :key="item.id" :item-info="item" />
    </div>
  </BaseContent>
  <baseContent title="推荐MV" link>
    <div class="grid mv-container w-100">
      <div v-for="item in mv" :key="item.id">
        <BaseCoverImage :picUrl="item.picUrl" style="height: 135px" />
        <BaseCoverTitle :name="item.name" oneLine />
        <BaseCoverArtist
          :artists="item.artists"
          name-class="newsong-artist-name"
          color="#9f9f9f"
          pointer
          style="margin-top: 3px"
        />
      </div>
    </div>
  </baseContent>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  getBanner,
  getPersonalized,
  getPrivateContent,
  getNewSong,
  getPersonalizedMv,
} from "@/api/api";
import DiscoverCarousel from "@/components/discover/carousel/DiscoverCarousel.vue";
import NewSongItem from "@/components/NewSongItem.vue";
import type {
  banner,
  songlistInfo,
  privateContent,
  songInfo,
  mvInfo,
} from "@/models";

const banners = ref<banner[]>();
const personalized = ref<songlistInfo[]>();
const privateContent = ref<privateContent[]>();
const newSong = ref<songInfo[]>();
const mv = ref<mvInfo[]>();

const fetchPageData = async () => {
  const getBannerPromise = getBanner();
  const getPersonalizedPromise = getPersonalized(10);
  const getPrivateContentPromise = getPrivateContent();
  const getNewSongPromise = await getNewSong(12);
  const getPersonalizedMvPromise = await getPersonalizedMv();
  try {
    const [
      { banners: bannersResult },
      { result: personalizedResult },
      { result: privateContentResult },
      { result: newSongResult },
      { result: mvResult },
    ] = await Promise.all([
      getBannerPromise,
      getPersonalizedPromise,
      getPrivateContentPromise,
      getNewSongPromise,
      getPersonalizedMvPromise,
    ]);
    banners.value = bannersResult;
    personalized.value = personalizedResult;
    privateContent.value = privateContentResult;
    newSong.value = newSongResult;
    mv.value = mvResult;
  } catch (err) {
    console.log(err);
  }
};

fetchPageData();
</script>

<style lang="less" scoped>
.personalized-container {
  gap: 22px 18px;
  grid-template-columns: repeat(5, 1fr);
}

.private-content-container {
  gap: 18px;
  grid-template-columns: repeat(3, 1fr);
}

.newsong-container {
  gap: 16px 10px;
  max-height: 250px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.mv-container {
  gap: 18px;
  grid-template-columns: repeat(4, 1fr);
}

.grid-column {
  grid-auto-flow: column;
}
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

.grid {
  display: grid;
}
</style>
