import { ref, watch, computed, type Ref } from "vue";
import {
  getBanner,
  getPersonalized,
  getPrivateContent,
  getNewSong,
  getPersonalizedMv,
} from "@/api/api";

import type {
  banner,
  songlistInfo,
  privateContent,
  songInfo,
  mvInfo,
} from "@/models";

export function useDiscoverHomeData() {
  const banners = ref<banner[]>();
  const personalized = ref<songlistInfo[]>();
  const privateContent = ref<privateContent[]>();
  const newSong = ref<songInfo[]>();
  const mv = ref<mvInfo[]>();

  async function fetchPageData() {
    const getBannerPromise = getBanner();
    const getPersonalizedPromise = getPersonalized(10);
    const getPrivateContentPromise = getPrivateContent();
    const getNewSongPromise = await getNewSong(12);
    const getPersonalizedMvPromise = await getPersonalizedMv();
    try {
      const [
        { banners: bannersResult },
        { result: personalizedResult },
        { result: privateContentResult },
        { result: newSongResult },
        { result: mvResult },
      ] = await Promise.all([
        getBannerPromise,
        getPersonalizedPromise,
        getPrivateContentPromise,
        getNewSongPromise,
        getPersonalizedMvPromise,
      ]);
      banners.value = bannersResult;
      personalized.value = personalizedResult;
      privateContent.value = privateContentResult;
      newSong.value = newSongResult;
      mv.value = mvResult;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    banners,
    personalized,
    privateContent,
    newSong,
    mv,
    fetchPageData,
  };
}

export function useResizeObserver() {
  const containerEl = ref<HTMLDivElement>();
  const divOffsetWidth = ref<number>(1100);

  const ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.target instanceof HTMLElement)
        divOffsetWidth.value = entry.target.offsetWidth;
    }
  });

  const divWatcher = watch(containerEl, (newDiv) => {
    if (newDiv instanceof HTMLDivElement) {
      ro.observe(newDiv);
      divWatcher(); // 获取到div元素后取消watch
    }
  });

  return {
    containerEl,
    divOffsetWidth,
  };
}

export function useComputedData(
  divWidth: Ref<number>,
  mv: Ref<mvInfo[] | undefined>
) {
  const MV_ASPECT_RATIO = 16 / 9;   //mv图片分辨率

  const computedMvData = computed(() => {
    if (mv.value) {
      return {
        mvData: mv.value.slice(0, mvNum.value),
        mvStyle: `grid-template-columns: repeat(${mvNum.value}, 1fr)`,
        height: calculatedMvHeight.value,
        width: calculatedMvWidth.value,
      };
    } else return { mvData: undefined, mvStyle: undefined };
  });

  const calculatedMvWidth = computed(() => {
    return (divWidth.value - 18 * (mvNum.value - 1)) / mvNum.value;
  });

  const calculatedMvHeight = computed(() => {
    return calculatedMvWidth.value / MV_ASPECT_RATIO;
  });

  const mvNum = computed(() => {
    if (divWidth.value <= 744) return 3;
    else return 4;
  });

  return { computedMvData };
}
