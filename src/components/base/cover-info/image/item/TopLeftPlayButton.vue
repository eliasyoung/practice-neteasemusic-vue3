<template>
  <div class="top-left-play-button">
    <SvgIcon iconName="icon-playfill" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.top-left-play-button {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  svg {
    transform: translateX(5%);
  }
}
</style>
