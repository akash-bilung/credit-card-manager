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

<style lang="scss">
.tab__content {
  padding: 3rem 4rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 1.2rem rgba($black, 0.08);
  @include responsive(handhelds) {
    padding: $gutter-sm $gutter-sm 0;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
