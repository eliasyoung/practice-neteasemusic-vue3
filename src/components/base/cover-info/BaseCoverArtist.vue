<template>
  <ul class="artists-name-container" :style="{ color }">
    <slot></slot>
    <li v-for="(artist, index) in artists" :key="artist.id">
      <span v-if="index > 0" class="artist-divider">/</span>
      <span :class="artistNameClass" @click="nameOnClickHander(artist.id)">{{
        artist.name
      }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { artist } from "@/models";

const props = defineProps<{
  artists: artist[];
  nameClass?: string;
  color?: string;
  pointer?: boolean;
}>();

const artistNameClass = computed(() => {
  let str = "";
  if (props.nameClass) str += props.nameClass;
  if (props.pointer) str += " cursor-pointer";
  return str;
});

const emits = defineEmits(["nameOnClick"]);

const nameOnClickHander = (id: number) => {
  emits("nameOnClick", id);
};
</script>

<style lang="less" scoped>
.artists-name-container {
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 300;
  li {
    display: inline;
    line-height: 1em;
    .cursor-pointer {
      cursor: pointer;
    }
    .artist-divider {
      margin: 0 2px;
    }
  }
}
</style>
