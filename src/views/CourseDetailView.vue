<template>
  <div class="course-container">
    <!-- 加载状态 -->
    <div v-if="loading" class="loading">加载中...</div>

    <!-- 课程内容 -->
    <div v-else class="course-content">
      <!-- 课程介绍区块 -->
      <section class="course-intro">
        <div class="intro-grid">
          <div class="text-content">
            <h1 class="title">{{ course.title }}</h1>
            <p class="create-time">
              创建时间：{{ formatDate(course.created_at) }}
            </p>
            <p class="description">{{ course.description }}</p>
            <button class="start-button">开始学习</button>
          </div>
          <img :src="course.cover" alt="课程封面" class="cover-image" />
        </div>
      </section>

      <!-- 课程讲解区块 -->
      <section class="course-video">
        <div class="video-wrapper">
          <iframe
            :src="course.video"
            class="video-iframe"
            allowfullscreen
          ></iframe>
        </div>
        <a :href="course.doc" target="_blank" class="pdf-link">
          获取课程资料
        </a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCourseDetail } from "@/api/course";

const route = useRoute();
const course = ref({});
const loading = ref(true);

// 格式化日期
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

// 获取课程数据
const fetchCourse = async () => {
  try {
    const res = await getCourseDetail(route.params.courseId);

    res.data.success ? (course.value = res.data) : alert(res.data.message);
  } catch (error) {
    console.error("获取课程数据失败:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCourse();
});
</script>

<style scoped>
.course-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

/* 课程介绍区块样式 */
.course-intro {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.cover-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 300px;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.create-time {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.description {
  color: #444;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.start-button {
  background: #2563eb;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.start-button:hover {
  background: #1d4ed8;
}

/* 课程视频区块样式 */
.course-video {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
  margin-bottom: 1.5rem;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

.pdf-link {
  display: inline-block;
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.pdf-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }

  .cover-image {
    max-height: none;
  }
}
</style>
