<template>
  <div
    class="cover-image-container"
    @click="coverOnClick"
    :style="imageStyle"
    :class="{ ['has-top-info']: topHoverInfo ? true : false }"
  >
    <img v-lazyImg="picUrl" />
    <PlayCount v-if="playCount" :playCount="playCount" />
    <CenterPlayButton v-if="centerPlay" />
    <TopHoverInfo
      v-if="topHoverInfo"
      :top-hover-info="topHoverInfo"
      class="top-hover-info"
    />
    <BottomRightPlayButton
      v-if="bottomRightPlayButton"
      @click.stop="bottomRightPlayOnClick"
    />
    <TopLeftPlayButton v-if="topLeftPlayButton" />
  </div>
</template>

<script setup lang="ts">
import PlayCount from "./item/PlayCount.vue";
import CenterPlayButton from "./item/CenterPlayButton.vue";
import TopHoverInfo from "./item/TopHoverInfo.vue";
import BottomRightPlayButton from "./item/BottomRightPlayButton.vue";
import TopLeftPlayButton from "./item/TopLeftPlayButton.vue";

import { useCoverImage } from ".";

const props = defineProps<{
  picUrl: string;
  playCount?: number;
  width?: number;
  height?: number;
  centerPlay?: boolean;
  topHoverInfo?: string;
  bottomRightPlayButton?: boolean;
  topLeftPlayButton?: boolean;
}>();

const emits = defineEmits(["coverImageOnClick", "bottomRightPlayOnClick"]);

const { imageStyle, coverOnClick, bottomRightPlayOnClick } = useCoverImage(
  props,
  emits
);
</script>

<style lang="less" scoped>
.cover-image-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    object-fit: cover;
    cursor: pointer;
    border: 1px solid var(--primary-border-color);
  }

  &.has-top-info:hover {
    .top-hover-info {
      top: 0;
    }
    .play-count-mask {
      display: none;
    }
  }

  &:hover {
    .bottom-right-play-button {
      opacity: 1;
    }
  }
}
</style>
