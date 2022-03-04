<template>
  <div class="card__actions_item">
    <div class="card__actions_icon">
      <img width="32" height="32" :src="icon" alt="" />
    </div>
    <div class="card__actions_title" v-html="action.title"></div>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    icon() {
      return `/icons/actions/${this.action.icon}.svg`;
    },
  },
};
</script>

<style lang="scss">
.card {
  &__actions {
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &_icon {
      margin-bottom: 1rem;
    }
    &_title {
      font-size: 1.3rem;
      color: $secondary;
    }
  }
}
</style>
