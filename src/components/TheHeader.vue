<template>
  <div class="header-container">
    <div class="left-wrapper">
      <RouterLink to="/"><NeteaseMusicLogo height="42px" /></RouterLink>
    </div>
    <div class="right-wrapper"></div>
  </div>
</template>

<script setup lang="ts">
import NeteaseMusicLogo from "./icons/NeteaseMusicLogo.vue";
</script>

<style lang="less" scoped>
.header-container {
  height: 60px;
  width: 100%;
  background-color: var(--primary-theme-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-wrapper {
    margin-left: 5px;
  }
}
</style>
