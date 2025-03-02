import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";
import { LoginSuccessCode, NoLoginCode } from "@/main";

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({ username: "", code: NoLoginCode });

  // fetch login user info remotely.
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.code === LoginSuccessCode) {
      loginUser.value = res.data;
    }
  }

  // set login user info manually.
  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return {
    loginUser,
    fetchLoginUser,
    setLoginUser,
  };
});
