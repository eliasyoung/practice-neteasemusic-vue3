<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconClassName" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
    required: false,
  },
  color: {
    type: String,
    default: "currentColor",
    required: false,
  },
});

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  } else return "svg-icon";
});

const iconClassName = computed(() => {
  return `#${props.iconName}`;
});
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  /* vertical-align: -2px; */
  max-height: 100%;
}
</style>
