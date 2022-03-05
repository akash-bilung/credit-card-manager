<template>
  <div class="accordion">
    <div class="accordion__header">
      <div class="accordion__header_icon">
        <img width="24" :src="`/icons/${icon}.svg`" alt="" />
      </div>
      <div class="accordion__header_title">{{ title }}</div>
      <button
        class="accordion__header_btn"
        :class="{ active: isOpen }"
        @click="this.isOpen = !this.isOpen"
      >
        <img width="24" src="/icons/down-arrow.svg" alt="" />
      </button>
    </div>
    <template v-if="isOpen">
      <slot />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
};
</script>

<style lang="scss">
.accordion {
  &__header {
    background: $purple-ltr;
    display: flex;
    align-items: center;
    padding: 2.4rem;
    border-radius: 0.8rem;
    border: 1px solid transparent;
    position: relative;
    z-index: 2;
    &_icon,
    &_btn {
    }
    &_icon {
      margin-right: 1.2rem;
    }
    &_title {
      color: $secondary;
      font-size: 1.4rem;
      flex: 1;
    }
    &_btn {
      border: none;
      background: transparent;
      cursor: pointer;
      &.active {
        & > img {
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
