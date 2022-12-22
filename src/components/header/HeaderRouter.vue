<template>
  <button class="header-router" :class="canGoBack ? 'available' : null">
    <SvgIcon iconName="icon-arrow-left-bold" />
  </button>
  <button class="header-router" :class="canGoFoward ? 'available' : null">
    <SvgIcon iconName="icon-arrow-left-bold" />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const canGoBack = computed(() => {
  if (window.history.state.back) return true;
  else return false;
});

const canGoFoward = computed(() => {
  if (window.history.state.forward) return true;
  else return false;
});
</script>

<style lang="less" scoped>
.header-router {
  color: #ee6b6b;
  background-color: #e63f3f;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border: none;
  &:last-child {
    transform: rotate(180deg);
  }

  svg {
    transform: translateX(-1px);
  }
  &.available {
    color: #f6cece;
    background-color: #d93b3b;
    cursor: pointer;
  }
}
</style>
