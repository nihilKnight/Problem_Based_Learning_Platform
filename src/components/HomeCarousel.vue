<template>
  <div id="homeSlide">
    <a-carousel class="homeCarousel" autoplay>
      <div>
        <!--        <a href="https://roam30.github.io">-->
        <img src="@/assets/Carousel1.jpg" alt="Carousel1" />
        <!--        </a>-->
      </div>
      <div>
        <img src="@/assets/Carousel2.png" alt="Carousel2" />
      </div>
      <div>
        <img src="@/assets/Carousel3.png" alt="Carousel3" />
        />
      </div>
      <div>
        <img src="@/assets/Carousel4.png" alt="Carousel4" />
      </div>
    </a-carousel>
  </div>
</template>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 600px;
  background: white;
  overflow: hidden;
}

:deep(.slick-slide img) {
  display: block;
  margin: auto;
  max-width: 80%;
}
</style>

<script setup lang="ts"></script>
