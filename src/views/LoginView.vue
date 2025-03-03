<script setup lang="ts">
import { ref, reactive } from "vue";
import { getCaptcha } from "@/api/captcha";
import { userLogin } from "@/api/user";
import { LoginSuccessCode } from "@/main";

const captchaSrc = ref<string>("");
const refreshCaptcha = async () => {
  const res = await getCaptcha();

  const base64Img = btoa(
    new Uint8Array(res.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  captchaSrc.value = `data:image/png;base64,${base64Img}`;
};

refreshCaptcha();

const form = reactive({
  account: "",
  password: "",
  captcha: "",
});

const handleLogin = async () => {
  try {
    const res = await userLogin(form);

    res.data.code === LoginSuccessCode
      ? (window.location.href = "/#/")
      : alert(res.data.message);
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="login-layout">
    <div class="form-container">
      <h2>登录</h2>

      <form method="POST" @submit.prevent="handleLogin">
        <div class="form-group">
          <input
            type="text"
            name="account"
            placeholder="用户名/邮箱"
            v-model="form.account"
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

        <div class="form-group captcha-group">
          <input
            type="text"
            name="captcha"
            placeholder="验证码"
            v-model="form.captcha"
            required
          />
          <img :src="captchaSrc" alt="验证码" @click="refreshCaptcha" />
        </div>

        <button type="submit">登录</button>
      </form>

      <div class="links">
        <a href="/#/register">立即注册</a>
        <!--<a href="#forgot-password">忘记密码？</a>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-layout {
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

.captcha-group {
  display: flex;
  gap: 0.5rem;
}

.captcha-group img {
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}
</style>
