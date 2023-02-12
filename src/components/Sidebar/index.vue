<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header_logo">FCCM</div>
      <p class="sidebar__header_title">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
    </div>
    <sidebar-nav />
  </aside>
</template>

<script>
import SidebarNav from "./Nav";
export default {
  components: { SidebarNav },
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: $sidebar-width;
  background: $secondary;
  padding: 4.8rem;

  &__header {
    &_logo {
      color: $primary;
      font-size: 3rem;
      font-weight: 800;
      // max-width: 12.5rem;
      margin-bottom: 1.9rem;
    }
    &_title {
      font-size: 1.5rem;
      color: $white-03;
    }
    @include responsive(handhelds) {
      display: none;
    }
  }

  @include responsive(handhelds) {
    box-shadow: 0 -0.3rem 0.6rem rgba($black, 0.08);
    z-index: 100;
    background: $white;
    width: 100%;
    height: auto;
    top: unset;
    bottom: 0;
    padding: 1rem 3.1rem;
  }
}
</style>
