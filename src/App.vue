<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style></style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserstore = useLoginUserStore();
loginUserstore.fetchLoginUser();
</script>
