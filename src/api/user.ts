import myAxios from "@/request";

/**
 * User register.
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
 * User Login.
 * @param params
 */
export const userLogin = async (params: any) => {
  console.log(params);
  return await myAxios.request({
    url: "/api/v1/user/login",
    method: "POST",
    data: params,
  });
};

/**
 * Current user logout.
 */
export const userLogout = async () => {
  return await myAxios.request({
    url: "/api/v1/user/logout",
    method: "GET"
  });
}

/**
 * Get current user; if not login, return response with 40100 code.
 */
export const getCurrentUser = async () => {
  return await myAxios.request({
    url: "/api/v1/user/current",
    method: "GET",
  });
};

/**
 * Update user info.
 * @param params
 */
export const updateUserInfo = async (params: any) => {
  return await myAxios.request({
    url: "/api/v1/user/update",
    method: "POST",
    data: params,
  });
};
