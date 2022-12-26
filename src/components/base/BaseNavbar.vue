<template>
  <ul>
    <li
      :class="{ active: index === currentActiveNav }"
      v-for="(nav, index) in navs"
      :key="index"
      @click="liClickHandler(index, nav)"
    >
      {{ nav.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

interface navType {
  title: string;
  to?: string;
}

const props = defineProps<{ navs: navType[] }>();
const router = useRouter();

const currentActiveNav = ref(0);

const liClickHandler = (index: number, nav: navType) => {
  changeActiveIndex(index);
  if (nav.to) pushRouterPath(nav.to);
};

const changeActiveIndex = (index: number) => {
  currentActiveNav.value = index;
};

const pushRouterPath = (to: string) => {
  router.push(to);
};
</script>

<style lang="less" scoped>
ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--primary-background-color);
  //   background-color: var(--primary-gray-color);
  height: 60px;
  list-style-type: none;
  padding: 20px 30px;
  gap: 24px;
  li {
    position: relative;
    cursor: pointer;
    color: var(--primary-route-font-color);
    &:hover {
      color: var(--primary-hover-route-font-color);
    }
    &.active {
      font-size: 20px;
      font-weight: bold;
      &::after {
        position: absolute;
        content: "";
        background-color: var(--primary-theme-color);
        height: 3px;
        width: 80%;
        top: 100%;
        left: 50%;
        border-radius: 20px;
        transform: translate(-50%, 5px);
      }
    }
  }
}
</style>
