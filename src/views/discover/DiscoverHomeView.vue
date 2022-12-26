<template>
  <div>
    <h1>Discover Page</h1>
    <p>This is Discover Page.</p>
  </div>
</template>

<script setup lang="ts">
import { getBanner } from "@/api/api";

const result = await getBanner();

console.log(result);
</script>

<style lang="less" scoped></style>
