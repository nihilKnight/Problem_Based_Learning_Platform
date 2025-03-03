<script setup>
import { ref, reactive, onMounted } from "vue";

// 假设使用Pinia进行状态管理
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { updateUserInfo, userLogout } from "@/api/user";
import { NoLoginCode } from "@/main";
import { SendVerifyCode } from "@/api/verifyCode";

const loginUserStore = useLoginUserStore();

// 响应式状态
const editMode = ref(false);
const countdown = ref(0);
const form = reactive({
  username: "",
  email: "",
  newPassword: "",
  currentPassword: "",
  verifyCode: "",
});

// 初始化用户数据
onMounted(async () => {
  await loginUserStore.fetchLoginUser();
  Object.assign(form, {
    username: loginUserStore.loginUser.username,
    email: loginUserStore.loginUser.email,
  });
});

// 切换编辑模式
const toggleEdit = () => {
  editMode.value = !editMode.value;
};

// 提交表单
const handleSubmit = async () => {
  try {
    const res = await updateUserInfo(form);

    res.data.success
      ? console.log("Success to update info.")
      : alert(res.data.message);
    editMode.value = false;
  } catch (error) {
    alert("更新失败，请重试");
  }
};

// 发送验证码
const sendVerificationCode = async () => {
  if (countdown.value > 0) return;

  try {
    const res = await SendVerifyCode(form);

    res.data.success
      ? console.log("Success to send verify code.")
      : alert(res.data.message);

    countdown.value = 60;
    const timer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) clearInterval(timer);
    }, 1000);
  } catch (error) {
    console.error("发送验证码失败:", error);
  }
};

// 处理登出
const handleLogout = async () => {
  try {
    const res = await userLogout();

    if (res.data.code === NoLoginCode) {
      loginUserStore.setLoginUser({
        username: "",
        email: "",
        code: NoLoginCode,
      });
      window.location.href = "/#/";
    }
  } catch (e) {
    console.log(e);
    alert("登出失败，请重试");
  }
};
</script>

<template>
  <div class="profile-container">
    <!-- 信息展示模式 -->
    <div v-if="!editMode" class="profile-info">
      <h2>用户资料</h2>
      <div class="info-item">
        <label>用户名:</label>
        <span>{{ loginUserStore.loginUser.username }}</span>
      </div>
      <div class="info-item">
        <label>邮箱:</label>
        <span>{{ loginUserStore.loginUser.email }}</span>
      </div>
      <button @click="toggleEdit" class="edit-btn">修改信息</button>
    </div>

    <!-- 编辑模式 -->
    <form v-else @submit.prevent="handleSubmit" class="edit-form">
      <h2>编辑资料</h2>
      <div class="form-group">
        <label>用户名:</label>
        <input v-model="form.username" type="text" required />
      </div>

      <div class="form-group">
        <label>邮箱:</label>
        <input v-model="form.email" type="email" required />
      </div>

      <div class="form-group verification-group">
        <input
          v-model="form.verifyCode"
          type="text"
          placeholder="验证码"
          required
        />
        <button
          type="button"
          class="send-code"
          :disabled="countdown > 0"
          @click="sendVerificationCode"
        >
          {{ countdown > 0 ? `${countdown}秒后重试` : "发送验证码" }}
        </button>
      </div>

      <div class="form-group">
        <label>新密码:</label>
        <input v-model="form.newPassword" type="password" />
      </div>

      <div class="form-group">
        <label>当前密码:</label>
        <input v-model="form.currentPassword" type="password" required />
      </div>

      <div class="form-actions">
        <button type="button" @click="toggleEdit" class="cancel-btn">
          取消
        </button>
        <button type="submit" class="submit-btn">保存更改</button>
      </div>
    </form>

    <!-- 登出按钮 -->
    <button @click="handleLogout" class="logout-btn">退出登录</button>
  </div>
</template>

<style scoped>
/* 基础架构 */
.profile-container {
  --primary-color: #2d3748; /* 石墨灰 */
  --accent-color: #4299e1; /* 天空蓝 */
  --success-color: #48bb78; /* 森林绿 */
  --danger-color: #f56565; /* 珊瑚红 */
  --surface-color: #ffffff; /* 纯净白 */
  --border-radius: 8px;
  --transition-speed: 0.2s;

  font-family: "Inter", system-ui, sans-serif;
  max-width: 480px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface-color);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
}

/* 排版系统 */
h2 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: -0.025em;
}

.profile-info {
  display: grid;
  gap: 1.25rem;
}

.info-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  padding: 0.75rem;
  background: rgba(237, 242, 247, 0.3);
  border-radius: 6px;
  transition: background 0.2s ease;
}

.info-item:hover {
  background: rgba(237, 242, 247, 0.5);
}

.info-item label {
  color: #718096;
  font-size: 0.875rem;
  font-weight: 500;
}

.info-item span {
  color: #2d3748;
  font-weight: 500;
  word-break: break-word;
}

/* 表单组件 */
.form-group {
  margin-bottom: 1.25rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  transition: border-color var(--transition-speed);
}

input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

/* 按钮系统 */
button {
  width: 100%;
  padding: 0.75rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  border: none;
  transition: background-color var(--transition-speed), transform 0.1s;
}

button:active {
  transform: scale(0.98);
}

.edit-btn {
  margin-top: 1rem;
  background: var(--accent-color);
  padding: 0.75rem;
  border-radius: 6px;
  color: white;
}

.submit-btn {
  background: #2196f3;
  color: white;
}

.cancel-btn {
  background: #9e9e9e;
  color: white;
}

.logout-btn {
  background: #f44336;
  color: white;
}

/* 验证码模块 */
.verification-group {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.75rem;
  align-items: center;
}

/* 响应式处理 */
@media (max-width: 480px) {
  .profile-container {
    margin: 1rem;
    padding: 1.5rem;
    box-shadow: none;
    border: 1px solid #edf2f7;
  }
}

/* 微交互增强 */
button:hover {
  filter: brightness(0.95);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* 视觉层次处理 */
.form-actions {
  margin-top: 2rem;
  display: grid;
  gap: 0.75rem;
}

.logout-btn {
  margin-top: 1.5rem;
}
</style>
