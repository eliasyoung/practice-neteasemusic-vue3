import { computed } from "vue";

interface coverImageProps {
  picUrl: string;
  playCount?: number;
  width?: number;
  height?: number;
  centerPlay?: boolean;
  topHoverInfo?: string;
  bottomRightPlayButton?: boolean;
  topLeftPlayButton?: boolean;
}

type coverImageEmits = {
  (event: "coverImageOnClick" | "bottomRightPlayOnClick", ...args: any[]): void;
};

export function useCoverImage(props: coverImageProps, emits: coverImageEmits) {
  const imageStyle = computed(() => {
    return {
      height: props.width ? props.height + "px" : undefined,
      width: props.width ? props.width + "px" : undefined,
    };
  });

  const coverOnClick = () => {
    emits("coverImageOnClick");
    console.log("coverImageOnClick");
  };

  const bottomRightPlayOnClick = () => {
    emits("bottomRightPlayOnClick");
    console.log("bottomRightPlayOnClick");
  };

  return {
    imageStyle,
    coverOnClick,
    bottomRightPlayOnClick,
  };
}
