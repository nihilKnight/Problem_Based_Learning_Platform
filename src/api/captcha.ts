import myAxios from "@/request";

export const getCaptcha = async () => {
  return await myAxios.request({
    url: "api/v1/captcha",
    method: "GET",
    responseType: "arraybuffer",
  });

};
