<template>
  <router-link :to="`/courseDetail/${course.id}`" class="course-card">
    <img :src="course.cover" alt="课程封面" class="course-cover" />
    <div class="course-info">
      <h4>{{ course.title }}</h4>
      <div class="meta">
        <span class="category">{{ course.category }}</span>
        <!--        <span class="duration">🕒 {{ course.duration }}小时</span>-->
        <span class="duration">🕒 20min</span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  course: Object,
});
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.course-card:hover {
  transform: translateY(-3px);
}

.course-cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.course-info {
  padding: 1rem;
}

h4 {
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #718096;
}
</style>
