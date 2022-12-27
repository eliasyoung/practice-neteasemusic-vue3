<template>
  <div class="base-content">
    <a class="content-header" v-if="title" :class="{ link }">
      {{ title }}
      <SvgIcon
        iconName="icon-arrow-right-bold"
        style="vertical-align: -3px"
        color="#595959"
      />
    </a>
    <div class="base-content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title?: string; link?: boolean }>(), {
  link: false,
});
</script>

<style lang="less" scoped>
.base-content {
  padding: 10px 0;
  .content-header {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-route-font-color);
    &.link {
      cursor: pointer;
      &:hover {
        color: var(--primary-hover-route-font-color);
      }
    }
  }
  .base-content-wrapper {
    margin-top: 12px;
  }
}
</style>
