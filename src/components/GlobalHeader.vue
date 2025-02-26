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

      <a-col flex="80px">
        <div class="user-login-status">
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
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
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
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
</style>
