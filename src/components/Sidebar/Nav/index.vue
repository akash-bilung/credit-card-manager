<template>
  <svg-sprite />
  <ul class="sidebar__nav">
    <li v-for="(nav, index) in navigations" :key="index">
      <router-link :to="nav.url">
        <img :src="`/icons/${nav.icon}.svg`" />
        <span>{{ nav.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        {
          icon: "Home",
          title: "Home",
          url: "/",
        },
        {
          icon: "Card",
          title: "Cards",
          url: "/cards",
        },
        {
          icon: "Payments",
          title: "Payments",
          url: "/payments",
        },
        {
          icon: "Credit",
          title: "Credit",
          url: "/credit",
        },
        {
          icon: "Account",
          title: "Settings",
          url: "/settings",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.sidebar__nav {
  padding-top: 8.1rem;
  & > li {
    &:not(:last-child) {
      margin-bottom: 6rem;
    }
    & > a {
      display: flex;
      align-items: center;
      color: $white;
      & > img {
        transition: 0.25s filter ease-in-out;
        margin-right: 1.6rem;
        width: 2.4rem;
      }
      & > span {
      }
      &.router-link-exact-active {
        color: $primary;
        font-weight: 700;
        & > img {
          @include recolor($primary, 1);
        }
      }

      @include responsive(handhelds) {
        color: $gray-200;
        flex-direction: column;
        font-size: 0.9rem;
        & > img {
          margin-right: 0;
          margin-bottom: 0.5rem;
          @include recolor($gray-200, 1);
        }
      }
    }
  }

  @include responsive(handhelds) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    & > li {
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
