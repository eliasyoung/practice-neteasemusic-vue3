<template>
  <div class="top-hover-info">{{ topHoverInfo }}</div>
</template>

<script lang="ts" setup>
defineProps<{ topHoverInfo: string }>();
</script>

<style lang="less" scoped>
.top-hover-info {
  height: 35px;
  position: absolute;
  top: -35px;
  left: 1px;
  right: 1px;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: 35px;
  color: white;
  font-size: 12px;
  font-weight: 300;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.5s;
}
</style>
