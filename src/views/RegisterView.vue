<script setup lang="ts">
import { reactive, ref } from "vue";
import { userRegister } from "@/api/user";
import { SendVerifyCode } from "@/api/verifyCode";

const countdown = ref(0);
const form = reactive({
  email: "",
  username: "",
  password: "",
  verifyCode: "",
});
const handleRegister = async () => {
  try {
    const res = await userRegister(form);
    console.log(res);

    res.data.success
      ? (window.location.href = "/#/login")
      : alert(res.data.message);
  } catch (err) {
    console.log(err);
  }
};

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
</script>

<template>
  <div class="register-layout">
    <div class="form-container">
      <h2>注册账号</h2>

      <form method="POST" @submit.prevent="handleRegister">
        <div class="form-group">
          <input
            type="email"
            name="email"
            placeholder="电子邮箱"
            v-model="form.email"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            name="username"
            placeholder="用户名"
            v-model="form.username"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="password"
            name="password"
            placeholder="密码"
            v-model="form.password"
            required
          />
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

        <button type="submit">立即注册</button>
      </form>

      <div class="links">已有账号？<a href="/#/login">立即登录</a></div>
    </div>
  </div>
</template>

<style scoped>
.register-layout {
  font-family: "Segoe UI", sans-serif;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
}

h2 {
  color: #1a73e8;
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.8rem;
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #1557b0;
}

.links {
  margin-top: 1rem;
  text-align: center;
}

a {
  color: #1a73e8;
  text-decoration: none;
  margin: 0 0.5rem;
}

.verification-group {
  display: flex;
  gap: 0.5rem;
}

.send-code {
  white-space: nowrap;
  padding: 0.8rem 1rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.send-code:hover {
  background: #218838;
}
</style>
