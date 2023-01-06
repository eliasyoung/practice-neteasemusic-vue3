<template>
  <div class="newsong-item-container" :style="{ maxWidth }">
    <img v-lazyImg="itemInfo.picUrl" />
    <div class="newsong-item-info">
      <p class="newsong-title">
        {{ itemInfo.name
        }}<span class="newsong-alias" v-for="alias in itemInfo.song.alias">{{
          `（${alias}）`
        }}</span>
      </p>
      <BaseArtistName
        :artists="itemInfo.song.artists"
        name-class="newsong-artist-name"
        color="#9f9f9f"
        pointer
        @name-on-click="artistNameOnClick"
        style="margin-top: 8px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { songInfo } from "@/models";
import BaseArtistName from "@/components/base/BaseArtistName.vue";

const maxWidth = computed(() => {
  return `calc(${(1 / 3) * 100}% - ${20 / 3}px)`;
});

const props = defineProps<{ itemInfo: songInfo }>();

const artistNameOnClick = (id: number) => {
  console.log(id);
};
</script>

<style lang="less" scoped>
.newsong-item-container {
  display: flex;
  max-height: 50px;
  border-radius: 5px;
  user-select: none;
  width: 100%;
  img {
    flex: 0 0 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid var(--primary-border-color);
    cursor: pointer;
  }
  .newsong-item-info {
    font-size: 13px;
    margin-left: 8px;
    margin-top: 2px;
    white-space: nowrap;
    .newsong-title {
      color: var(--primary-route-font-color);
      text-overflow: ellipsis;
      .newsong-alias {
        color: #9f9f9f;
      }
    }
  }

  &:hover {
    background-color: #eaeaea;
  }
}
</style>
