<template>
  <div id="app-container">
    <TheHeader />
    <div class="center-container">
      <AsideMenu />
      <main><RouterView /></main>
    </div>

    <FooterPlayer />
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import AsideMenu from "@/components/aside-menu/AsideMenu.vue";
import FooterPlayer from "@/components/FooterPlayer.vue";
</script>

<style lang="less" scoped>
#app-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .center-container {
    flex: 1;
    display: flex;
    // overflow: hidden;

    main {
      flex: 1;
      // overflow: hidden;
    }
  }
}
</style>
