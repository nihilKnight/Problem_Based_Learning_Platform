<template>
  <div id="homeSlide">
    <a-carousel class="homeCarousel" autoplay>
      <div>
        <img
          src="https://images.unsplash.com/photo-1539356891430-52718ed0bfd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash fig1"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash fig2"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1489887856603-daad26812962?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash fig3"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1518699086072-d567cb15b483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash fig4"
        />
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
