<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
import { CopyrightCircleOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const showHeaderAndFooter = computed(
  () => !["/login", "/register"].includes(route.path)
);
</script>

<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header v-if="showHeaderAndFooter" class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer v-if="showHeaderAndFooter" class="footer">
        <CopyrightCircleOutlined />
        2025 Guyvhu. All Rights Reserved
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
  padding: 30px;
  margin-bottom: 30px;
  background: linear-gradient(to right, whitesmoke, white);
}

#basicLayout .header {
  background: white;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
