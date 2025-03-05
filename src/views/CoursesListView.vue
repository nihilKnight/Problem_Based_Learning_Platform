<template>
  <div id="CoursesList">
    <a-list
      item-layout="vertical"
      size="default"
      :pagination="pagination"
      :data-source="courseList"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <!--          <template #actions>-->
          <!--            <span v-for="{ icon, text } in actions" :key="icon">-->
          <!--              <component :is="icon" style="margin-right: 8px" />-->
          <!--              {{ text }}-->
          <!--            </span>-->
          <!--          </template>-->
          <template #extra>
            <img width="272" alt="logo" :src="item.cover" />
          </template>
          <a-list-item-meta :description="item.description">
            <template #title>
              <a @click="() => doCourseDetailCLick(item)">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.cover" />
            </template>
          </a-list-item-meta>
          {{ item.description }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts" setup>
// import {
//   StarOutlined,
//   LikeOutlined,
//   MessageOutlined,
// } from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import { getCourseList } from "@/api/course";
import { useRouter } from "vue-router";

const router = useRouter();

const courseList = ref([]);

const fetchCourseList = async () => {
  try {
    const res = await getCourseList();

    res.data.success
      ? (courseList.value = res.data.data)
      : alert(res.data.message);
  } catch (error) {
    console.error("获取课程列表失败：", error);
  }
};

onMounted(() => {
  fetchCourseList();
});

const doCourseDetailCLick = (courseItem: any) => {
  router.push({
    path: `/courseDetail/${courseItem.id}`,
  });
};

const pagination = {
  onChange: (page: number) => {
    console.log(page);
  },
  pageSize: 6,
};

// const actions: Record<string, any>[] = [
//   { icon: StarOutlined, text: "156" },
//   { icon: LikeOutlined, text: "156" },
//   { icon: MessageOutlined, text: "2" },
// ];
</script>
