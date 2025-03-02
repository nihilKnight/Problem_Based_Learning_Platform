import myAxios from "@/request";

/**
 * Sends a verification code to the specified endpoint.
 *
 * This function makes an asynchronous HTTP GET request to the "api/v1/sendCode" endpoint.
 * The request sends the provided parameters as the data payload.
 *
 * @param {any} params - The parameters to be sent in the request payload.
 * @returns {Promise} A promise that resolves with the response of the HTTP request.
 */
export const SendVerifyCode = async (params: any) => {
  return await myAxios.request({
    url: "api/v1/sendCode",
    method: "POST",
    data: params
  });
};
