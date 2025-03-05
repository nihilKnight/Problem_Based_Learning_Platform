import myAxios from "@/request";

export const getCarousel = async () => {
  return await myAxios({
    url: "/api/v1/carousel",
    method: "GET",
  });
};
