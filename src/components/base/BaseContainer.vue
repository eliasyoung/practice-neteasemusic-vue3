<template>
  <div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
div {
  padding: 0 30px;
  > div {
    max-width: 1100px;
    margin: 0 auto;
  }
}
</style>
