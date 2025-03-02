import axios, { AxiosInstance } from "axios";
// import { NoLoginCode } from "@/main";

const myAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 10000,
  withCredentials: true,
});

// add a request interceptor
myAxios.interceptors.request.use(
  function (config) {
    // do sth before request is sent
    return config;
  },
  function (error) {
    // do sth with request error
    return Promise.reject(error);
  }
);

// add a response interceptor
myAxios.interceptors.response.use(
  function (response) {
    // any status code lying within the range of 2xx cause this function to trigger
    // do sth with response data

    // console.log(response);

    // no login (with code 40100)
    // const { data } = response;
    // if (data.code === NoLoginCode) {
    //   if (
    //     !response.request.responseURL.include("user/current") &&
    //     !window.location.pathname.includes("/user/login")
    //   ) {
    //     window.location.href = `/user/login?redirect=${window.location.href}`;
    //   }
    // }

    return response;
  },
  function (error) {
    // any status codes failing outside the range of 2xx cause this function to trigger
    // do sth with response error
    return Promise.reject(error);
  }
);

export default myAxios;
