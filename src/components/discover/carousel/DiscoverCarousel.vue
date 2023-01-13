<template>
  <div>
    <ul
      ref="wrapperEl"
      class="carousels-wrapper"
      :style="{ height: height + 'px' }"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <DiscoverCarouselItem
        v-for="(banner, index) in banners"
        class="carousel-item"
        :banner="banner"
        :class="{
          'in-stage': !(inStageIndex.indexOf(index) < 0),
          active: index === activeIndex,
        }"
        :style="itemStyle(index)"
        @click="carouselItemOnClick(banner, index)"
      />
      <button @click="changeActiveIndex(-1)">
        <SvgIcon iconName="icon-arrow-left-bold" />
      </button>
      <button @click="changeActiveIndex(1)">
        <SvgIcon iconName="icon-arrow-right-bold" />
      </button>
    </ul>
    <ul class="indicators-wrapper">
      <li
        v-for="index in banners.length"
        :key="index"
        :class="{ active: index === activeIndex }"
        @mouseover="activeIndex = index"
        @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide"
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { banner } from "@/models";
import { ref } from "vue";
import { useInitCarousel, useCarouselResizeObserver } from ".";
import DiscoverCarouselItem from "./DiscoverCarouselItem.vue";

const props = withDefaults(
  defineProps<{ banners: banner[]; height?: number }>(),
  { height: 200 }
);

const wrapperEl = ref<HTMLUListElement>();

const {
  activeIndex,
  ulOffsetWidth,
  inStageIndex,
  changeActiveIndex,
  startAutoSlide,
  stopAutoSlide,
  carouselItemOnClick,
  itemStyle,
} = useInitCarousel(props);

useCarouselResizeObserver(ulOffsetWidth, wrapperEl);
</script>

<style lang="less" scoped>
ul {
  margin: 10px 0;
  list-style: none;
}

.carousels-wrapper {
  position: relative;
  //   overflow: hidden;
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    // width: max(540px, 50%);
    min-width: 540px;
    width: 50%;
    z-index: 10;
    transition: all 0.75s;
    &.in-stage {
      &.active {
        z-index: 20;
        cursor: pointer;
      }
    }
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .carousel-item-type {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1em;
      padding: 5px 10px;
      white-space: nowrap;
      font-size: 12px;
      color: #ffffff;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      --banner-type-red: #cc4a4a;
      --banner-type-blue: #4a79cc;
    }
  }
  button {
    // display: none;
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    color: #fbd9d9;
    border-radius: 50%;
    z-index: 30;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    &:first-of-type {
      left: 10px;
    }
    &:last-of-type {
      right: 10px;
    }
    &:hover {
      color: #ffffff;
    }
  }
  &:hover {
    button {
      display: flex;
    }
  }
}

.indicators-wrapper {
  display: flex;
  justify-content: center;
  padding: 0;
  padding-top: 4px;
  li {
    background-color: #e6e6e6;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 10px;
    &.active {
      background-color: var(--primary-theme-color);
    }
    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
}
</style>
