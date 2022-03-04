<template>
  <div class="tab__content" v-if="title === selectedTitle">
    <slot />
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    const selectedTitle = inject("selectedTitle");
    return {
      selectedTitle,
    };
  },
};
</script>

<style></style>
