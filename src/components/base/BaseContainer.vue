<template>
  <div class="base-container">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.base-container {
  padding: 0 30px;
  overflow-y: auto;
  > div {
    max-width: 1100px;
    margin: 0 auto;
    // overflow: hidden;
  }
}
</style>
