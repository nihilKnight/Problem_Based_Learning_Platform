import MyAxios from "@/request";

export const getCourseList = async () => {
  return await MyAxios.request({
    url: "/api/v1/course/all",
    method: "GET",
  });
};

export const getCourseDetail = async (course_id: number) => {
  return await MyAxios.request({
    url: "/api/v1/course/" + course_id,
    method: "GET",
  });
};
