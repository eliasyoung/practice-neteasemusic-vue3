import { ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import type { baseNavType } from "@/models";

export function useBaseNavbar(props: {
  navs: baseNavType[];
  routeNav?: boolean;
}) {
  console.log(props);

  const router = useRouter();
  const route = useRoute();

  const currentActiveNav = ref(0);

  const liClickHandler = (index: number, nav: baseNavType) => {
    changeActiveIndex(index);
    if (nav.to) pushRouterPath(nav.to);
  };

  const changeActiveIndex = (index: number) => {
    currentActiveNav.value = index;
  };

  const pushRouterPath = (to: string) => {
    router.push(to);
  };

  if (props.routeNav) {
    watchEffect(
      //   () => route.fullPath,
      () => {
        props.navs.forEach((nav, index) => {
          if (nav.to === route.fullPath && currentActiveNav.value != index)
            changeActiveIndex(index);
        });
      }
    );
  }

  return {
    currentActiveNav,
    liClickHandler,
  };
}
