<template>
  <div class="header-user-info-container">
    <div class="avatar-container">
      <SvgIcon iconName="icon-user"></SvgIcon>
    </div>
    <a>
      未登录
      <SvgIcon
        iconName="icon-zhankai1"
        style="font-size: 9px; margin-left: 2px"
      ></SvgIcon>
    </a>
    <a>开通VIP</a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.header-user-info-container {
  display: flex;
  align-items: center;
  .avatar-container {
    background-color: #e0e0e0;
    width: 27px;
    height: 27px;
    border-radius: 100%;
    color: #ffffff;
    font-size: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
  }
  a {
    font-size: 12px;
    cursor: pointer;
    margin: 0 3px;
    &:hover {
      color: #ffffff;
    }
  }
}
</style>
