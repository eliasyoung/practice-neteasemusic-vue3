<template>
  <div class="header-container">
    <div class="left-wrapper">
      <RouterLink to="/">
        <SvgIcon iconName="icon-logView" className="logo" color="#ffffff" />
      </RouterLink>
      <div class="header-router-container">
        <HeaderRouter />
      </div>
      <HeaderSearchBar />
      <button class="tinggeshiqu-container" title="听歌识曲">
        <SvgIcon iconName="icon-tinggeshiqu" />
      </button>
    </div>
    <div class="right-wrapper">
      <HeaderUserInfo />
      <SvgIcon iconName="icon-setting" />
      <SvgIcon iconName="icon-skin" />
      <SvgIcon iconName="icon-message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderRouter from "./HeaderRouter.vue";
import HeaderSearchBar from "./HeaderSearchBar.vue";
import HeaderUserInfo from "./HeaderUserInfo.vue";
</script>

<style lang="less" scoped>
.header-container {
  height: 60px;
  width: 100%;
  background-color: var(--primary-theme-color);
  display: flex;
  justify-content: space-between;
  .left-wrapper {
    margin-left: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    & > div {
      display: flex;
    }
    a {
      height: 100%;
    }
    .logo {
      height: 100%;
      width: 152px;
    }
    .header-router-container {
      margin-left: 72px;
      display: flex;
      gap: 10px;
    }
    .tinggeshiqu-container {
      background-color: #e13e3e;
      border: none;
      margin-left: 10px;
      color: #f6cece;
      font-size: 17px;
      display: flex;
      align-items: center;
      padding: 7px 6px;
      border-radius: 100%;
      cursor: pointer;
    }
  }

  .right-wrapper {
    display: flex;
    align-items: center;
    color: #fbd9d9;
    font-size: 23px;
    gap: 12px;
    margin-right: 16px;
    > svg {
      cursor: pointer;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
