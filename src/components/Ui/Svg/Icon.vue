<template>
  <svg class="icon">
    <use :xlink:href="icon" :href="icon"></use>
  </svg>
</template>

<script>
export default {
  props: {
    sprite: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    icon() {
      return `@/icons/sprites/${this.sprite}.svg#${this.name}`;
    },
  },
};
</script>

<style></style>
