<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
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
        <div
          v-if="loginUserStore.loginUser.code === NoLoginCode"
          class="user-login-status"
        >
          <a-button type="primary" href="/#/login">登录</a-button>
          <a-button href="/#/register">注册</a-button>
        </div>
        <div v-else>
          你好，<a href="/#/profile">{{ loginUserStore.loginUser.username }}</a>
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
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { NoLoginCode } from "@/main";

const loginUserStore = useLoginUserStore();
loginUserStore.fetchLoginUser();

const router = useRouter();

// Menu Router redirect
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>(["/"]);
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
    key: "/pblIntro",
    label: "PBL简介",
    title: "PBL简介",
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
  font-size: 20px;
  font-weight: bold;
  margin-left: 16px;
  margin-top: -14px;
}

#globalHeader .subtitle {
  font-size: 14px;
  font-weight: normal;
  color: #888;
  margin-left: 16px;
  margin-top: -8px;
  line-height: 1.5;
}

#globalHeader .logo {
  margin-top: -42px;
  width: 150px;
}

#globalHeader .user-login-status {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 60%;
}
</style>
