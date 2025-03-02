import myAxios from "@/request";

/**
 * Fetches a captcha image from the server.
 *
 * This asynchronous function sends a GET request to the "api/v1/captcha"
 * endpoint and retrieves the captcha image as a binary array buffer.
 * The function uses an Axios instance (`myAxios`) to handle the HTTP request.
 *
 * @returns {Promise<ArrayBuffer>} A promise that resolves to the binary data representing the captcha image.
 * @throws {Error} Throws an error if the request fails or the server does not respond correctly.
 */
export const getCaptcha = async () => {
  return await myAxios.request({
    url: "api/v1/captcha",
    method: "GET",
    responseType: "arraybuffer",
  });
};
