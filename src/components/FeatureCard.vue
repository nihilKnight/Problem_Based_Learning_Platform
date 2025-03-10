<template>
  <div class="feature-card">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>

<style scoped>
.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h3 {
  color: #1a365d;
  margin-bottom: 0.5rem;
}

p {
  color: #718096;
  line-height: 1.6;
}
</style>
