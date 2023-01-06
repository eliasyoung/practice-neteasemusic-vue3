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
  <baseContent title="推荐MV" link>
    <div class="flex w-100 flex-wrap" style="gap: 18px">
      <BaseInfoCard
        v-for="item in mv"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :picUrl="item.picUrl"
        :column="4"
      >
        <template #title>
          <div style="white-space: nowrap; text-overflow: ellipsis">
            {{ item.name }}
          </div>
        </template>
        <template #artist>
          <BaseArtistName
            :artists="item.artists"
            name-class="newsong-artist-name"
            color="#9f9f9f"
            pointer
            style="margin-top: 3px"
          />
        </template>
      </BaseInfoCard>
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
import BaseArtistName from "@/components/base/BaseArtistName.vue";

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
