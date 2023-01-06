import http from "@/api/http";

/* types */
import type {
  banner,
  songlistInfo,
  privateContent,
  songInfo,
  mvInfo,
} from "@/models";

export const getBanner = () => {
  return http.get<{ banners: banner[]; code: number }>("/banner");
};

export const getPersonalized = (limit?: number) => {
  return http.get<{ result: songlistInfo[] }>("/personalized", { limit });
};

/* 入口处独家放送 */
export const getPrivateContent = () => {
  return http.get<{ result: privateContent[]; code: number; name: string }>(
    "/personalized/privatecontent"
  );
};

export const getNewSong = (limit?: number) => {
  return http.get<{ result: songInfo[]; code: number }>(
    "/personalized/newsong",
    { limit }
  );
};

export const getPersonalizedMv = () => {
  return http.get<{ result: mvInfo[]; code: number }>("/personalized/mv");
};
