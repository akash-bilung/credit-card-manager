<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        :class="{ active: selectedTitle === title }"
        @click="selectedTitle = title"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const titles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(titles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      titles,
    };
  },
  methods: {
    updateTitle(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
.tabs {
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
