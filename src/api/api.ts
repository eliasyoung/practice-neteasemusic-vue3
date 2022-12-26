import http from "@/api/http";

/* types */
import type { banner } from "@/models";

export const getBanner = () => {
  return http.get<{ banners: banner[]; code: number }>("/banner");
};
