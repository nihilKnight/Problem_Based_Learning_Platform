<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="250px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">临床案例学习平台</div>
        </div>
      </a-col>

      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>

      <a-col flex="160px">
        <div class="user-login-status">
          <a-button type="primary" href="/user/login">登录</a-button>
          <a-button href="/user/register">注册</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 导航栏路由跳转实现
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>([]);
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});

const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/courseList",
    icon: () => h(UnorderedListOutlined),
    label: "课程列表",
    title: "课程列表",
  },
  {
    key: "/intro",
    label: "项目简介",
    title: "项目简介",
  },
  {
    key: "/about",
    label: "关于我们",
    title: "关于我们",
  },
  {
    key: "others",
    label: h(
      "a",
      { href: "https://github.com/roam30", target: "_blank" },
      "Guyvhu's Github"
    ),
    title: "Guyvhu's Github",
  },
]);
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

#globalHeader .title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

#globalHeader .logo {
  height: 48px;
}

#globalHeader .user-login-status {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
}
</style>
