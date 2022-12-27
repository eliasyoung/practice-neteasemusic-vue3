import http from "@/api/http";

/* types */
import type { banner, songlistInfo } from "@/models";

export const getBanner = () => {
  return http.get<{ banners: banner[]; code: number }>("/banner");
};

export const getPersonalized = (limit?: number) => {
  return http.get<{ result: songlistInfo[] }>("/personalized", { limit });
};
