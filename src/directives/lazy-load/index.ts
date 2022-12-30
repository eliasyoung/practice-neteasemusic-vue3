import type { Directive, DirectiveBinding } from "vue";
import defaultImg from "@/assets/images/music3.png";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (!(el instanceof HTMLImageElement)) {
      return;
    }
    if (typeof binding.value != "string") return;

    el.src = defaultImg;

    el.onerror = function () {
      this.src = defaultImg;
      this.onerror = null;
    };

    if ("IntersectionObserver" in window) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.src = binding.value;
              intersectionObserver.unobserve(el);
            }
          });
        },
        { rootMargin: "0px", threshold: 0.1 }
      );

      intersectionObserver.observe(el);
    } else {
      el.src = binding.value;
    }
  },
} as Directive;
