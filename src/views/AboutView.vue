<template>
  <div class="about-container">
    <!-- 指导老师区块 -->
    <section class="team-section">
      <h2 class="section-title">指导老师</h2>
      <div class="cards-grid">
        <div
          v-for="(teacher, index) in teachers"
          :key="'teacher-' + index"
          class="profile-card"
        >
          <img :src="teacher.avatar" alt="导师头像" class="avatar" />
          <div class="info">
            <h3 class="name">{{ teacher.name }}</h3>
            <p class="bio">{{ teacher.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队成员区块 -->
    <section class="team-section">
      <h2 class="section-title">团队成员</h2>
      <div class="cards-grid">
        <div
          v-for="(member, index) in members"
          :key="'member-' + index"
          class="profile-card"
        >
          <img :src="member.avatar" alt="成员头像" class="avatar" />
          <div class="info">
            <h3 class="name">{{ member.name }}</h3>
            <p class="bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const teachers = [
  {
    avatar: require("../assets/team/teachers/邵志华.jpeg"),
    name: "邵志华",
    bio: "知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。",
  },
];

const members = [
  {
    avatar: require("../assets/team/members/陈若瑜.jpeg"),
    name: "陈若瑜",
    bio: "那就时不时找点乐子吧！",
  },
  {
    avatar: require("../assets/team/members/郝丽莎.jpeg"),
    name: "郝丽莎",
    bio: "睡觉真的好，大家都喜欢睡觉。",
  },
  {
    avatar: require("../assets/team/members/蒋尚堃.jpeg"),
    name: "蒋尚堃",
    bio: "仰天大笑出门去，我辈岂是蓬蒿人。",
  },
  {
    avatar: require("../assets/team/members/刘垚.jpeg"),
    name: "刘垚",
    bio: "但行好事，莫问前程。",
  },
  {
    avatar: require("../assets/team/members/刘雨轩.jpeg"),
    name: "刘雨轩",
    bio: "今年真得环太湖！",
  },
  {
    avatar: require("../assets/team/members/潘智彬.jpeg"),
    name: "潘智彬",
    bio: "用舍由时，行藏在我。",
  },
  {
    avatar: require("../assets/team/members/宋文韬.jpeg"),
    name: "宋文韬",
    bio: "只要肯攀登。",
  },
  {
    avatar: require("../assets/team/members/万宸宇.jpeg"),
    name: "万宸宇",
    bio: "早上好，中午好，晚上好。",
  },
  {
    avatar: require("../assets/team/members/杨滕超.jpeg"),
    name: "杨滕超",
    bio: "学医救中国！",
  },
  {
    avatar: require("../assets/team/members/杨扬.jpeg"),
    name: "杨扬",
    bio: "努力工作长头发！",
  },
  {
    avatar: require("../assets/team/members/杨宇琨.jpeg"),
    name: "杨宇琨",
    bio: "努力学习，天天向上。",
  },
  {
    avatar: require("../assets/team/members/袁俊松.jpeg"),
    name: "袁俊松",
    bio: "埋头做事，抬头作诗。",
  },
  {
    avatar: require("../assets/team/members/张永泽.jpeg"),
    name: "张永泽",
    bio: "做多说少，月圆花好。",
  },
];
</script>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.team-section {
  margin-bottom: 4rem;
}

.section-title {
  color: #2d3748;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #4299e1;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.profile-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
  border: 3px solid #e2e8f0;
  transition: border-color 0.3s ease;
}

.profile-card:hover .avatar {
  border-color: #4299e1;
}

.info {
  text-align: center;
}

.name {
  color: #2d3748;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.position {
  color: #4299e1;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.bio {
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .profile-card {
    padding: 1rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }
}
</style>
