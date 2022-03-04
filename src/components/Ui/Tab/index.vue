<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
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

<style></style>
