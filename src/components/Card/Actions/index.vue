<template>
  <div class="card__actions">
    <card-item
      v-for="(action, index) in actions"
      :key="index"
      :action="action"
    />
  </div>
</template>

<script>
import CardItem from "@/components/Card/Actions/Item";
export default {
  props: {
    actions: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CardItem,
  },
};
</script>

<style lang="scss">
$action-radius: 1.6rem;
.card {
  &__actions {
    background: $purple-lt;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: $action-radius;
    padding: 2rem 2.5rem;
    text-align: center;
    @include responsive(handhelds) {
      border-radius: $action-radius $action-radius 0 0;
    }
  }
}
</style>
