<template>
  <div class="about">
    <h1>关于我们</h1>
    <ul>
      <li>
        <p>人物制作：郝丽莎 杨扬</p>
      </li>
      <li>
        <p>剧情设计：陈若瑜</p>
      </li>
      <li>
        <p>视频讲解：剪映数字人</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>


<style scoped>
.about {
  max-width: 800px; /* 限制文段的最大宽度 */
  margin: 0 auto; /* 居中显示并自动留出左右边距 */
  padding: 20px; /* 上下左右增加内边距，显得更舒展 */
  line-height: 1.8; /* 行间距，调整为 1.8 倍 */
  font-size: 16px; /* 适中字体大小，适合阅读 */
  font-family: "Helvetica Neue", Arial, sans-serif; /* 使用干净简约的字体 */
  color: #333; /* 浅灰色文字，降低视觉疲劳 */
  background-color: #f9f9f9; /* 浅灰色背景，提供柔和的视觉效果 */
  border-radius: 8px; /* 圆角让整体更现代化 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加轻微阴影，提升层次感 */
}

.about h1 {
  font-size: 32px; /* 一级标题较大的字体大小 */
  font-weight: bold; /* 粗体加重强调 */
  margin-bottom: 24px; /* 标题与内容之间的距离 */
  color: #222; /* 深灰色，稳重且具有现代感 */
  border-bottom: 2px solid #007bff; /* 淡蓝色底边，增强视觉层次感 */
  padding-bottom: 8px; /* 下方内边距，与底边区分开 */
}

.about h2 {
  font-size: 24px; /* 二级标题稍小的字体大小 */
  font-weight: 600; /* 半粗体（增加层次感但不抢眼） */
  margin-top: 32px; /* 上方间距，避免与前文段落过近 */
  margin-bottom: 16px; /* 下方间距，用于与后续内容隔开 */
  color: #444; /* 略浅的灰色，层次分明 */
}

.about p {
  margin-bottom: 16px; /* 段落间距，保持段落清晰 */
  text-align: justify; /* 两端对齐，使文段更整齐 */
}

.about a {
  color: #007bff; /* 超链接使用淡蓝色，现代而清新 */
  text-decoration: none; /* 去掉下划线，保持干净 */
  border-bottom: 1px solid transparent; /* 添加淡蓝色下划线的过渡效果 */
  transition: border-color 0.3s ease;
}

.about a:hover {
  border-color: #007bff; /* 悬停时下划线变为蓝色 */
}

.about ol {
  padding-left: 20px; /* 列表整体的左侧内边距 */
  margin-top: 16px; /* 列表与上方内容的距离 */
  margin-bottom: 16px; /* 列表与下方内容的距离 */
  counter-reset: list-counter; /* 初始化有序列表的计数器 */
}

.about ol li {
  position: relative; /* 相对定位，用于显示数字样式 */
  margin-bottom: 12px; /* 列表项之间的间距 */
  line-height: 1.8; /* 行高，与段落一致 */
  font-size: 16px; /* 列表字体大小 */
  color: #444; /* 列表文字颜色 */
  padding-left: 30px; /* 给列表项增加左内边距，用于数字和文字间隔 */
}

.about ol li::before {
  content: counter(list-counter) "."; /* 获取计数器内容并添加 "." */
  counter-increment: list-counter; /* 每次递增计数 */
  position: absolute; /* 将数字绝对定位 */
  left: 0; /* 数字距离左边框的位置 */
  color: #007bff; /* 为数字添加清晰的蓝色提示 */
  font-weight: bold; /* 数字加粗 */
  font-size: 18px; /* 数字稍大，使其更分明 */
}
</style>
