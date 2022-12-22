<template>
  <div class="header-search-bar-container">
    <div><SvgIcon iconName="icon-search" /></div>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="searchText"
      @focus="onFocus"
      @focusout="onFocusOut"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchText = ref("");
const placeholder = ref("搜索");

const onFocus = () => {
  placeholder.value = "";
};

const onFocusOut = () => {
  if (searchText.value.length > 0) placeholder.value = "";
  else placeholder.value = "搜索";
};
</script>

<style lang="less" scoped>
.header-search-bar-container {
  display: flex;
  align-items: center;
  background-color: #e13e3e;
  height: 30px;
  width: 160px;
  border-radius: 1em;
  margin-left: 10px;
  padding: 12px;
  padding-right: 20px;
  font-size: 15px;
  div {
    display: flex;
    // color: #f6cece;
    color: #ffffff;
    &:hover {
      color: #f4b9b9;
    }
  }
  input {
    margin-left: 2px;
    background: none;
    outline: none;
    border: none;
    color: #ffffff;
    font-size: 12px;
    width: 100%;
    &::placeholder {
      color: #e66262;
      user-select: none;
    }
  }
}
</style>
