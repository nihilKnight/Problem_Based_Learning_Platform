<template>
  <div class="Intro">
    <h1>
      医思智学—PBL数字化教学系统<br />
      ————让医学学习更有趣、更高效！
    </h1>

    <h2>项目简介</h2>
    <p>
      “医思智学”是一个专门为医学教育设计的数字化教学系统，旨在通过创新的方式提升医学生的学习体验和临床思维能力。我们结合了“基于问题的学习”（Problem-Based
      Learning,
      PBL）教学理念和数字化技术，开发了一款沉浸式、剧情化的学习平台，让学生在虚拟环境中体验真实的临床场景，同时享受游戏化学习的乐趣。
    </p>

    <h2>我们的目标</h2>
    <p>
      医学教育一直面临着传统教学模式的局限性，比如学生兴趣不足、实践机会有限等。我们希望通过“医思智学”打破这些限制，让学生在轻松的环境中掌握复杂的医学知识，培养他们的临床思维和解决问题的能力。我们的目标是让医学学习变得更加有趣、高效，同时为医学教育工作者提供一个全新的教学工具。
    </p>

    <h2>产品现状</h2>
    <p>
      产品当前版本以视觉小说为载体，构建基础临床思维训练框架，学生需在数字化诊疗场景中完成病例的推理决策。其亮点包括：
    </p>
    <ol>
      <li>
        <h3><strong>剧情化学习</strong></h3>
        <p>
          <strong>
            学生将扮演一名规培生“同小济”，在虚拟的医院环境中轮转各个科室，通过引人入胜的故事情节，完成各种病例的诊断和治疗。
          </strong>
        </p>
      </li>
      <li>
        <h3><strong>临床思维锻炼</strong></h3>
        <p>
          <strong>
            系统模拟真实的临床场景，学生需要自主分析病情、制定治疗方案，锻炼他们的临床决策能力。
          </strong>
        </p>
      </li>
      <li>
        <h3><strong>权威指导与互动</strong></h3>
        <p>
          <strong>
            我们邀请了资深临床医生参与内容设计和讲解，确保学生接触到的每一个知识点都是权威、实用的。
          </strong>
        </p>
      </li>
    </ol>

    <h2>我们的愿景</h2>
    <p>
      得益于AI技术的飞速发展，我们将不断拓展“医思智学”的功能与应用场景，为医学学习带来更自由、更智能的体验。
    </p>
    <p>
      在该平台上，学生可以自由选择问诊方式、检查项目和治疗方案，系统则根据学生的选择和决策结果，生成详细的评分与反馈。
    </p>
    <p>
      我们坚信，“医思智学”可以为医学教育提供更多的可能性，它将打破传统教学的局限，让学习者在虚拟环境中自由探索、大胆实践，最终成长为具备卓越临床思维和决策能力的医学人才。
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.Intro {
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

.Intro h1 {
  font-size: 32px; /* 一级标题较大的字体大小 */
  font-weight: bold; /* 粗体加重强调 */
  margin-bottom: 24px; /* 标题与内容之间的距离 */
  color: #222; /* 深灰色，稳重且具有现代感 */
  border-bottom: 2px solid #007bff; /* 淡蓝色底边，增强视觉层次感 */
  padding-bottom: 8px; /* 下方内边距，与底边区分开 */
}

.Intro h2 {
  font-size: 24px; /* 二级标题稍小的字体大小 */
  font-weight: 600; /* 半粗体（增加层次感但不抢眼） */
  margin-top: 32px; /* 上方间距，避免与前文段落过近 */
  margin-bottom: 16px; /* 下方间距，用于与后续内容隔开 */
  color: #444; /* 略浅的灰色，层次分明 */
}

.Intro p {
  margin-bottom: 16px; /* 段落间距，保持段落清晰 */
  text-align: justify; /* 两端对齐，使文段更整齐 */
}

.Intro a {
  color: #007bff; /* 超链接使用淡蓝色，现代而清新 */
  text-decoration: none; /* 去掉下划线，保持干净 */
  border-bottom: 1px solid transparent; /* 添加淡蓝色下划线的过渡效果 */
  transition: border-color 0.3s ease;
}

.Intro a:hover {
  border-color: #007bff; /* 悬停时下划线变为蓝色 */
}

.Intro ol {
  list-style: none; /* 去掉默认的列表样式 */
  padding-left: 20px; /* 列表整体的左侧内边距 */
  margin-top: 16px; /* 列表与上方内容的距离 */
  margin-bottom: 16px; /* 列表与下方内容的距离 */
  counter-reset: list-counter; /* 初始化有序列表的计数器 */
}

.Intro ol li {
  position: relative; /* 相对定位，用于显示数字样式 */
  margin-bottom: 12px; /* 列表项之间的间距 */
  line-height: 1.8; /* 行高，与段落一致 */
  font-size: 16px; /* 列表字体大小 */
  color: #444; /* 列表文字颜色 */
  padding-left: 30px; /* 给列表项增加左内边距，用于数字和文字间隔 */
}

.Intro ol li::before {
  content: counter(list-counter) "."; /* 获取计数器内容并添加 "." */
  counter-increment: list-counter; /* 每次递增计数 */
  position: absolute; /* 将数字绝对定位 */
  left: 0; /* 数字距离左边框的位置 */
  color: #007bff; /* 为数字添加清晰的蓝色提示 */
  font-weight: bold; /* 数字加粗 */
  font-size: 18px; /* 数字稍大，使其更分明 */
}
</style>
