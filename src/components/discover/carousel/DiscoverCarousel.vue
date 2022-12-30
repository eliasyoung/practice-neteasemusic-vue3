<template>
  <div>
    <ul
      ref="wrapperEl"
      class="carousels-wrapper"
      :style="{ height: height + 'px' }"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <li
        v-for="(banner, index) in banners"
        class="carousel-item"
        :class="{
          'in-stage': !(inStageIndex.indexOf(index) < 0),
          active: index === activeIndex,
        }"
        :style="itemStyle(index)"
        @click="carouselItemOnClick(banner, index)"
      >
        <img v-lazyImg="banner.imageUrl" />
        <div
          class="carousel-item-type"
          :style="{
            backgroundColor: `var(--banner-type-${banner.titleColor})`,
          }"
        >
          {{ banner.typeTitle }}
        </div>
      </li>
      <button @click="changeActiveIndex(-1)">
        <SvgIcon iconName="icon-arrow-left-bold" />
      </button>
      <button @click="changeActiveIndex(1)">
        <SvgIcon iconName="icon-arrow-right-bold" />
      </button>
    </ul>
    <ul class="indicators-wrapper">
      <li
        v-for="(indicator, index) in banners.length"
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
import { ref, computed, watch, onMounted } from "vue";

const ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    // const cr = entry.contentRect;
    // console.log("Element:", entry.target);
    // console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    // console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
    if (entry.target instanceof HTMLElement)
      ulOffsetWidth.value = entry.target.offsetWidth;
  }
});

const timer = ref<number | null>();

const props = withDefaults(
  defineProps<{ banners: banner[]; height?: number }>(),
  { height: 200 }
);

const ITEM_SCALE = 0.82;

const wrapperEl = ref<HTMLUListElement>();

watch(wrapperEl, (newUl) => {
  if (newUl instanceof HTMLUListElement) ro.observe(newUl);
});

const ulOffsetWidth = ref(1100);

const activeIndex = ref(0);

const prevIndex = computed(() => {
  const index = activeIndex.value;
  return index === 0 ? props.banners.length - 1 : index - 1;
});

const nextIndex = computed(() => {
  const index = activeIndex.value;
  return index === props.banners.length - 1 ? 0 : index + 1;
});

const itemStyle = (index: number) => {
  if (index === prevIndex.value)
    return `transform: translateX(calc(0px - 18% / 2)) scale(${ITEM_SCALE});`;
  else if (index === nextIndex.value)
    return `transform: translateX(calc(${ulOffsetWidth.value}px - 100% + 18% / 2)) scale(${ITEM_SCALE});`;
  else if (index === activeIndex.value)
    return `transform: translateX(calc((${ulOffsetWidth.value}px - 100%)/2)) scale(1);`;
  else
    return `transform: translateX(calc((${ulOffsetWidth.value}px - 100%)/2)) scale(${ITEM_SCALE});`;
};

const inStageIndex = computed<number[]>(() => [
  prevIndex.value,
  activeIndex.value,
  nextIndex.value,
]);

const changeActiveIndex = (step: number) => {
  activeIndex.value = inStageIndex.value[1 + step];
};

const startAutoSlide = () => {
  timer.value = setInterval(() => {
    changeActiveIndex(1);
  }, 5000);
};

const stopAutoSlide = () => {
  if (timer.value) clearInterval(timer.value);
};

const carouselItemOnClick = (banner: banner, index: number): void => {
  if (index === activeIndex.value) {
    console.log(banner);
  }
};

onMounted(() => {
  startAutoSlide();
});
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
  gap: 10px;
  padding: 0;
  padding-top: 4px;
  li {
    background-color: #e6e6e6;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    &.active {
      background-color: var(--primary-theme-color);
    }
  }
}
</style>
