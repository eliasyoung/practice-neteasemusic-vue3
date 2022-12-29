<template>
  <div class="songlist-info-card" :style="{ maxWidth: calcCardMaxWidth }">
    <div class="info-card-img-container" @click="cardOnClick(id)">
      <img :src="picUrl" />
    </div>
    <a @click="cardOnClick(id)">{{ name }}</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    id: number;
    name: string;
    picUrl: string;
    column?: number;
    gap?: number;
  }>(),
  { column: 5, gap: 18 }
);

const calcCardMaxWidth = computed((): string => {
  const dividedWidth = (1 / props.column) * 100;
  const gapWidth = (props.gap * (props.column - 1)) / props.column;
  return `calc(${dividedWidth}% - ${gapWidth}px)`;
});

const cardOnClick = (id: number) => {
  console.log(id);
};
</script>

<style lang="less" scoped>
.songlist-info-card {
  display: flex;
  flex-direction: column;
  // max-width: calc(20% - 15px);
  .info-card-img-container {
    img {
      width: 100%;
      vertical-align: bottom;
      // height: 100%;
      // width: 205px;
      // height: 205px;
      object-fit: cover;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid var(--primary-border-color);
    }
  }

  a {
    font-size: 14px;
    cursor: pointer;
    margin-top: 9px;
    color: var(--primary-route-font-color);
    &:hover {
      color: var(--primary-hover-route-font-color);
    }
  }
}
</style>
