<template>
  <div class="stat-item">
    <div class="stat-icon">{{ icon }}</div>
    <div class="stat-content">
      <div class="value">{{ value }}</div>
      <div class="label">{{ label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  icon: String,
  value: [String, Number],
  label: String,
});
</script>

<style scoped>
.stat-item {
  display: flex;
  align-items: center;
  justify-content: center; /* 双轴居中 */
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.stat-icon {
  font-size: 2rem;
  padding: 1rem;
  background: #e2e8f0;
  border-radius: 50%;
  flex-shrink: 0; /* 防止图标被压缩 */
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* 文本居中 */
}

.value {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a365d;
  line-height: 1.2;
}

.label {
  color: #718096;
  font-size: 0.9rem;
  text-align: center; /* 确保多行文本居中 */
}
</style>
