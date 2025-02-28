<template>
  <div id="CoursesList">
    <a-list
      item-layout="vertical"
      size="default"
      :pagination="pagination"
      :data-source="listData"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ icon, text } in actions" :key="icon">
              <component :is="icon" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img width="272" alt="logo" :src="item.img" />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts" setup>
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons-vue";

const listData: Record<string, string>[] = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://roam30.github.io",
    title: `奇怪的肺炎 (copy ${i})`,
    avatar: require("@/assets/avatar.png"),
    // img: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    img: require("@/assets/cover.png"),
    description:
      "8岁男孩张乐天因“奇怪肺炎”入院，症状反复、病原不明，背后隐藏着怎样的免疫谜团？",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 6,
};
const actions: Record<string, any>[] = [
  { icon: StarOutlined, text: "156" },
  { icon: LikeOutlined, text: "156" },
  { icon: MessageOutlined, text: "2" },
];
</script>
