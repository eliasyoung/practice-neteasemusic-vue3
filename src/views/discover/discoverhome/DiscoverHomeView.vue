<template>
  <div id="discover-home-container" ref="containerEl">
    <DiscoverCarousel
      v-if="banners"
      :banners="banners"
      :div-offset-width="divOffsetWidth"
    />
    <BaseContent title="推荐歌单" link>
      <div class="grid personalized-container w-100">
        <div v-for="item in personalized" :key="item.id">
          <BaseCoverImage
            :pic-url="item.picUrl"
            :play-count="item.playCount"
            bottom-right-play-button
          />
          <BaseCoverTitle :name="item.name" cursor-pointer />
        </div>
      </div>
    </BaseContent>
    <BaseContent title="独家放送" link>
      <div class="grid private-content-container w-100">
        <div v-for="item in privateContent" :key="item.id">
          <BaseCoverImage :pic-url="item.sPicUrl" top-left-play-button />
          <BaseCoverTitle :name="item.name" cursor-pointer />
        </div>
      </div>
    </BaseContent>
    <BaseContent title="最新音乐" link>
      <div class="grid newsong-container w-100 grid-column">
        <NewSongItem v-for="item in newSong" :key="item.id" :item-info="item" />
      </div>
    </BaseContent>
    <baseContent title="推荐MV" link>
      <div class="grid mv-container w-100" :style="computedMvData.mvStyle">
        <div v-for="item in computedMvData.mvData" :key="item.id">
          <BaseCoverImage
            :picUrl="item.picUrl"
            :play-count="item.playCount"
            :height="computedMvData.height"
            :width="computedMvData.width"
            top-hover-info="最新热门MV推荐"
          />
          <BaseCoverTitle :name="item.name" oneLine cursor-pointer />
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
  </div>
</template>

<script setup lang="ts">
import DiscoverCarousel from "@/components/discover/carousel/DiscoverCarousel.vue";
import NewSongItem from "@/components/NewSongItem.vue";
import { useDiscoverHomeData, useResizeObserver, useComputedData } from ".";

const { banners, personalized, privateContent, newSong, mv, fetchPageData } =
  useDiscoverHomeData();

await fetchPageData();

const { containerEl, divOffsetWidth } = useResizeObserver();

const { computedMvData } = useComputedData(divOffsetWidth, mv);
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
