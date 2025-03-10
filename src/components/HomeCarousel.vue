<template>
  <div id="homeSlide" class="carousel-container">
    <a-carousel class="homeCarousel" autoplay>
      <div v-for="(slide, index) in slides" :key="index" class="slide-item">
        <img
          :src="slide"
          :alt="`Carousel${index + 1}`"
          class="carousel-image"
        />
      </div>
    </a-carousel>
  </div>
</template>

<style scoped>
.carousel-container {
  background-color: #ffffff;
  height: 60vh;
  min-height: 750px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

/* 轮播项容器 */
:deep(.slick-slide) {
  height: 60vh;
  min-height: 750px;
}

/* 自定义轮播项样式 */
.slide-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

/* 覆盖Ant Design默认样式 */
:deep(.slick-slide > div) {
  height: 100%;
}

:deep(.slick-list) {
  height: 100%;
  border-radius: 8px;
}

:deep(.slick-track) {
  display: flex;
  align-items: center;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCarousel } from "@/api/carousel";

const slides = ref<string[]>([]);

const fetchCarousel = async () => {
  try {
    const res = await getCarousel();
    res.data.success ? (slides.value = res.data.data) : alert("获取轮播图失败");
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchCarousel();
});
</script>
