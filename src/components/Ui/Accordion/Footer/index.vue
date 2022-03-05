<template>
  <div class="accordion__footer">
    <button
      class="accordion__footer_btn font--semibold"
      @click.prevent="accordionAction"
    >
      {{ title }}
    </button>
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
  methods: {
    accordionAction() {
      this.$emit("accordionAction");
    },
  },
};
</script>

<style lang="scss">
.accordion__footer {
  border: 1px solid $green-dk;
  margin-top: -0.5rem;
  background: $green-ltr;
  border-radius: 0 0 0.8rem 0.8rem;
  padding: 2rem 1.6rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &_btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: $primary;
    font-size: 1.3rem;
  }
}
</style>
