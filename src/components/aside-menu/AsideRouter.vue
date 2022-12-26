<template>
  <div class="aside-router-container">
    <div class="router-header" v-if="title">{{ title }}</div>
    <ul>
      <li
        v-for="route in routeList"
        :key="route.to"
        @click="routeOnClick(route.to)"
        :class="{ bold: isBold, active: $route.path.indexOf(route.to) == 0 }"
      >
        <SvgIcon v-if="route.icon" :iconName="route.icon" />
        <span>{{ route.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

interface routeType {
  title: string;
  to: string;
  icon?: string;
}

const props = withDefaults(
  defineProps<{
    routeList: routeType[];
    title?: string;
    boldActive?: boolean;
  }>(),
  { boldActive: false }
);

const router = useRouter();

const routeOnClick = (to: string) => {
  router.push(to);
};

const isBold = computed(() => {
  if (props.boldActive) return "bold";
  else return "";
});
</script>

<style lang="less">
.aside-router-container {
  padding: 12px 12px 0 12px;
  .router-header {
    color: #999999;
    padding: 0px 8px 8px 8px;
    font-size: 13px;
    user-select: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
    font-size: 14px;
    color: var(--primary-route-font-color);
    li {
      margin-bottom: 2px;
      padding: 8px 0;
      height: 36px;
      user-select: none;
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      align-items: center;
      &.active {
        background-color: var(--primary-gray-color);
        &:hover {
          color: var(--primary-route-font-color);
        }
      }
      &.bold {
        font-size: 15px;
        &.active {
          font-size: 17px;
          font-weight: bold;
        }
      }
      &:hover {
        background-color: var(--primary-gray-color);
        color: var(--primary-hover-route-font-color);
      }
      span {
        margin-left: 8px;
      }
      svg {
        margin-left: 5px;
        font-size: 15px;
      }
    }
  }
}
</style>
