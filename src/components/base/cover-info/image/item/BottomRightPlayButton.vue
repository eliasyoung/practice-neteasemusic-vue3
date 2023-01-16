<template>
  <div class="bottom-right-play-button">
    <SvgIcon iconName="icon-playfill" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.bottom-right-play-button {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  bottom: 10px;
  font-size: 18px;
  color: var(--primary-theme-color);
  background-color: rgba(235, 235, 235, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.7s;
  cursor: pointer;
  svg {
    transform: translateX(5%);
  }
}
</style>
