<template>
  <div id="homeSlide" class="carousel-container">
    <a-carousel class="homeCarousel" autoplay>
      <div v-for="(slide, index) in slides" :key="index">
        <img :src="slide" :alt="`Carousel${index + 1}`" />
      </div>
    </a-carousel>
  </div>
</template>

<style scoped>
/* For demo */

.carousel-container {
  background-color: #e6f7ff; /* 浅天蓝色 */
  height: 30vh;
  border-radius: 8px; /* 可选：添加圆角 */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05); /* 可选：添加微妙阴影 */
}

:deep(.slick-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  background: RGB(224, 255, 255);
}

:deep(.slick-slide img) {
  display: block;
  margin: auto;
  max-width: 80%;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCarousel } from "@/api/carousel";

const slides = ref([]);

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
