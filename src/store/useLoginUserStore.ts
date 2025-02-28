import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";

export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({ username: "" });

  // fetch login user info remotely.
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    console.log(res.data);
    if (res.data.code === 0) {
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
