<template>
  <div class="accordion__content">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.accordion__content {
  position: relative;
  z-index: 1;
  background: $white;
  border: 1px solid $gray-120;
  margin-top: -0.5rem;
  padding: 2.4rem;
  border-radius: 0 0 0.8rem 0.8rem;
}
</style>
