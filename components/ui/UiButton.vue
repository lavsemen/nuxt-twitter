<template>
  <button
    @click="action"
    :class="[color, hover, classes]"
    class="
      py-2
      px-4
      flex
      items-center
      justify-center
      text-2xl
      rounded-lg
      transition-all
      duration-200
      text-white
    "
  >
    <slot />
  </button>
</template>

<script>
import utils from "~/utils/utils";
export default {
  name: "UiButton",
  props: {
    color: {
      type: String,
      default: "bg-blue-400",
    },
    routeLink: String,
    classes: String,
    hover: {
      type: String,
      default: 'hover:bg-blue-500'
    }
  },
  methods: {
    action() {
      if (this.routeLink) {
        this.$router.push(this.routeLink);
      } else {
        this.$emit("action");
      }
    },
  }
};
</script>
