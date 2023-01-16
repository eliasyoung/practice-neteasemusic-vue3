<template>
  <p
    :class="{ 'one-line': oneLine, 'cursor-pointer': cursorPointer }"
    :style="titleStyle"
  >
    {{ name }}
    <span class="alias" v-for="alias in aliases">{{ `（${alias}）` }}</span>
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  name: string;
  oneLine?: boolean;
  aliases?: string[];
  fontSize?: number;
  cursorPointer?: boolean;
}>();

const titleStyle = computed(() => {
  return {
    ["font-size"]: props.fontSize ? props.fontSize + "px" : undefined,
  };
});
</script>

<style lang="less" scoped>
p {
  font-size: 14px;
  margin-top: 9px;
  color: var(--primary-route-font-color);
  font-weight: 300;
  &:hover {
    color: var(--primary-hover-route-font-color);
  }
  &.one-line {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .alias {
    color: #9f9f9f;
  }

  &.cursor-pointer {
    cursor: pointer;
  }
}
</style>
