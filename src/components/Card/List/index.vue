<template>
  <ul class="card__list">
    <card-list-item v-for="(item, index) in lists" :key="index" :item="item" />
  </ul>
</template>

<script>
import CardListItem from "@/components/Card/List/Item";
export default {
  components: {
    CardListItem,
  },
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
