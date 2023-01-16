<template>
  <div class="center-play-button">
    <SvgIcon iconName="icon-playfill" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.center-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  background-color: rgba(235, 235, 235, 0.9);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-theme-color);
  cursor: pointer;
  svg {
    transform: translateX(5%);
  }
}
</style>
