<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { CopyrightCircleOutlined } from "@ant-design/icons-vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
// import { getCurrentUser } from "@/api/user";

// getCurrentUser().then((res) => {
//   console.log(res);
// });
</script>

<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <CopyrightCircleOutlined />
        2025 Guyvhu. All Rights Reserved
        <!--        <a href="https://github.com/roam30" style="color: darkgrey"> Guyvhu's Github </a>-->
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout .footer {
  background: aliceblue;
  text-align: center;
  color: darkgrey;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, whitesmoke, white);
}

#basicLayout .header {
  background: white;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
