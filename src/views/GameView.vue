<template>
  <div class="webgl-viewer">
    <!-- WebGL容器 -->
    <div class="webgl-frame">
      <iframe
        :src="webglPath"
        title="Interactive WebGL Content"
        class="webgl-iframe"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// WebGL项目路径配置
const webglPath = ref("http://localhost:5000/static/webgls/game1/index.html");
</script>

<style scoped>
/* 基础容器 */
.webgl-viewer {
  --surface-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.1);
  --border-radius: 12px;

  background: #f8f9fa;
  min-height: 100vh;
  padding: 2rem;
}

/* 响应式框架 */
.webgl-frame {
  max-width: 1150px;
  margin: 0 auto;
  padding: 1.5rem;
  background: var(--surface-color);
  border-radius: var(--border-radius);
  box-shadow: 0 8px 24px var(--shadow-color);
}

/* 自适应iframe */
.webgl-iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: calc(var(--border-radius) - 4px);
}

/* 响应式处理 */
@media (max-width: 768px) {
  .webgl-viewer {
    padding: 1rem;
  }

  .webgl-iframe {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .webgl-frame {
    padding: 1rem;
  }

  .webgl-iframe {
    height: 300px;
  }
}
</style>
