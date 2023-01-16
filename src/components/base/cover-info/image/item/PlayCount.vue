<template>
  <div v-if="playCount" class="play-count-mask">
    <div class="play-count-container">
      <SvgIcon iconName="icon-Play" />
      <p>{{ formatPlayCount(playCount) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatPlayCount } from "@/utils";

defineProps<{ playCount: number }>();
</script>

<style lang="less" scoped>
.play-count-mask {
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: inset 0px 35px 57px -48px rgba(5, 5, 5, 0.71);
  cursor: pointer;
  .play-count-container {
    display: flex;
    justify-content: flex-end;
    color: white;
    align-items: center;
    margin-top: 5px;
    margin-right: 7px;
    font-weight: 300;
    p {
      display: inline-block;
      margin-left: 2px;
      opacity: 90%;
    }
  }
}
</style>
