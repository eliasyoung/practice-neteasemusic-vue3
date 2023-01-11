import { ref, computed, watch, onMounted } from "vue";
import type { Ref } from "vue";
import type { banner } from "@/models";

export function useCarouselResizeObserver(
  ulOffsetWidth: Ref<number> = ref(1100),
  wrapperEl: Ref<HTMLUListElement | undefined>
) {
  const ro = new ResizeObserver((entries) => {
    for (let entry of entries) {
      // const cr = entry.contentRect;
      // console.log("Element:", entry.target);
      // console.log(`Element size: ${cr.width}px x ${cr.height}px`);
      // console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
      if (entry.target instanceof HTMLElement)
        ulOffsetWidth.value = entry.target.offsetWidth;
    }
  });
  watch(wrapperEl, (newUl) => {
    if (newUl instanceof HTMLUListElement) ro.observe(newUl);
  });
}

export function useInitCarousel(props: { banners: banner[]; height?: number }) {
  const timer = ref<number | null>();
  const ITEM_SCALE = 0.82;
  const ulOffsetWidth = ref(1100);
  const activeIndex = ref(0);

  const prevIndex = computed(() => {
    const index = activeIndex.value;
    return index === 0 ? props.banners.length - 1 : index - 1;
  });

  const nextIndex = computed(() => {
    const index = activeIndex.value;
    return index === props.banners.length - 1 ? 0 : index + 1;
  });

  const inStageIndex = computed<number[]>(() => [
    prevIndex.value,
    activeIndex.value,
    nextIndex.value,
  ]);

  const changeActiveIndex = (step: number) => {
    activeIndex.value = inStageIndex.value[1 + step];
  };

  const startAutoSlide = () => {
    timer.value = setInterval(() => {
      changeActiveIndex(1);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timer.value) clearInterval(timer.value);
  };

  const carouselItemOnClick = (banner: banner, index: number): void => {
    if (index === activeIndex.value) {
      console.log(banner);
    }
  };

  const itemStyle = (index: number) => {
    if (index === prevIndex.value)
      return `transform: translateX(calc(0px - 18% / 2)) scale(${ITEM_SCALE});`;
    else if (index === nextIndex.value)
      return `transform: translateX(calc(${ulOffsetWidth.value}px - 100% + 18% / 2)) scale(${ITEM_SCALE});`;
    else if (index === activeIndex.value)
      return `transform: translateX(calc((${ulOffsetWidth.value}px - 100%)/2)) scale(1);`;
    else
      return `transform: translateX(calc((${ulOffsetWidth.value}px - 100%)/2)) scale(${ITEM_SCALE});`;
  };

  onMounted(() => {
    startAutoSlide();
  });

  return {
    activeIndex,
    ulOffsetWidth,
    inStageIndex,
    changeActiveIndex,
    startAutoSlide,
    stopAutoSlide,
    carouselItemOnClick,
    itemStyle,
  };
}
