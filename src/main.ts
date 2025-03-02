import { createApp } from "vue";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/reset.css";

export const LoginSuccessCode = 40101;
export const NoLoginCode = 40100;

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(Antd).mount("#app");

