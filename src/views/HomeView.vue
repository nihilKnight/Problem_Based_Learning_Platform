<template>
  <div class="home-view">
    <!-- 轮播图区块 -->
    <section>
      <HomeCarousel />
    </section>

    <!-- 核心功能区块 -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">为什么选择我们?</h2>
        <p class="section-subtitle">探索数字化学习的新方式</p>
      </div>

      <div class="features-grid">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </section>

    <!-- 热门课程区块 -->
    <section class="courses-section">
      <div class="section-header">
        <h2 class="section-title">热门课程</h2>
        <router-link to="/courseList" class="view-all">
          查看全部课程 →
        </router-link>
      </div>

      <div class="courses-grid">
        <CourseCard
          v-for="course in featuredCourses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>

    <!-- 数据展示区块 -->
    <div class="stats-section">
      <StatItem
        v-for="stat in stats"
        :key="stat.label"
        :value="stat.value"
        :label="stat.label"
        :icon="stat.icon"
      />
    </div>

    <!-- 行动号召区块 -->
    <section class="cta-section">
      <h3>准备好开始学习了吗?</h3>
      <p>立即加入超过{{ totalUsers }}名学习者的行列</p>
      <div class="cta-buttons">
        <router-link to="/register" class="cta-button primary">
          立即注册
        </router-link>
        <router-link to="/courseList" class="cta-button secondary">
          浏览课程
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import CourseCard from "@/components/CourseCard.vue";
import StatItem from "@/components/StatItem.vue";
import { getCourseList } from "@/api/course";

const features = ref([
  {
    icon: "🎯",
    title: "精准学习路径",
    description: "AI驱动的个性化课程推荐系统",
  },
  {
    icon: "🕹️",
    title: "互动式学习",
    description: "结合WebGL的沉浸式教学体验",
  },
  {
    icon: "📚",
    title: "丰富资源库",
    description: "超过1000+优质课程资源",
  },
  {
    icon: "📈",
    title: "学习分析",
    description: "实时追踪你的学习进度",
  },
]);

const stats = ref([
  { icon: "👥", value: "10万+", label: "注册用户" },
  { icon: "📖", value: "1200+", label: "课程资源" },
  { icon: "🏆", value: "98%", label: "满意率" },
]);

const featuredCourses = ref([]);
const totalUsers = ref("50,000");

// 获取推荐课程
const loadCourses = async () => {
  try {
    const res = await getCourseList();
    featuredCourses.value = res.data.data.slice(0, 4);
  } catch (error) {
    console.error("获取推荐课程失败:", error);
  }
};

loadCourses();
</script>

<style scoped>
.home-view {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* 统一区块样式 */
.section-header {
  text-align: center;
  margin: 3rem 0 2rem;
}

.section-title {
  font-size: 2rem;
  color: #1a365d;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #718096;
  font-size: 1.1rem;
}

/* 功能区块 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

/* 课程区块 */
.courses-section {
  margin: 4rem 0;
}

.view-all {
  color: #4299e1;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.view-all:hover {
  opacity: 0.8;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

/* 数据区块 */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

/* 行动号召区块 */
.cta-section {
  text-align: center;
  padding: 4rem 1rem;
  background: #1a365d;
  border-radius: 16px;
  color: white;
  margin: 3rem 0;
}

.cta-section h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  color: #cbd5e0;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.2s, opacity 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.primary {
  background: #4299e1;
  color: white;
}

.secondary {
  background: white;
  color: #1a365d;
}

/* 响应式处理 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }

  .features-grid,
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }
}
</style>
