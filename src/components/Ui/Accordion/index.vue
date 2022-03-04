<template>
  <div class="accordion">
    <div class="accordion__header" @click="this.isOpen = !this.isOpen">
      {{ title }}
    </div>
    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
.accordion {
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    & > li {
      padding-bottom: 0.5rem;
      border-bottom: 0.2rem solid transparent;
      color: rgba($gray-400, 0.3);
      font-size: 1.4rem;
      cursor: pointer;
      &.active {
        border-color: $blue;
        color: $gray-400;
        font-weight: 700;
      }
      &:not(:last-child) {
        margin-right: 3.2rem;
      }
    }
  }
}
</style>
