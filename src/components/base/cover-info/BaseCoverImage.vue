<template>
  <div class="info-card-img-container">
    <img v-lazyImg="picUrl" @click="coverImageOnClick" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ picUrl: string }>();

const emits = defineEmits(["coverImageOnClick"]);

const coverImageOnClick = () => {
  emits("coverImageOnClick");
};
</script>

<style lang="less" scoped>
.info-card-img-container {
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
    // height: 100%;
    // width: 205px;
    // height: 205px;
    object-fit: cover;
    // border-radius: 5px;
    cursor: pointer;
    border: 1px solid var(--primary-border-color);
  }
}
</style>
