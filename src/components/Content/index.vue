<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.content {
  margin-left: $sidebar-width;
  padding: 6rem;
}
</style>
