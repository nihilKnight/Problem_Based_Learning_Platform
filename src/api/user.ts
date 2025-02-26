import myAxios from "@/request";

/**
 * 用户注册
 * @param params
 */
export const userRegister = async (params: any) => {
  return await myAxios.request({
    url: "/api/v1/user/register",
    method: "POST",
    data: params,
  });
};

/**
 * 获取当前用户
 * @param params
 */
export const getCurrentUser = async () => {
  return await myAxios.request({
    url: "/api/v1/user/current",
    method: "GET",
  });
};
