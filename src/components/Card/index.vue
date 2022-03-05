<template>
  <div class="card">
    <div class="card__logo">
      <img :src="card.bank.url" alt="" />
    </div>
    <div class="card__title font--bold">{{ card.name }}</div>
    <ul class="card__number">
      <li v-for="(number, index) in numbers" :key="index">
        <span class="font--md" v-if="isFirstThree(index)">
          &#9679; &#9679; &#9679; &#9679;
        </span>
        <span v-else>{{ number }}</span>
      </li>
    </ul>
    <ul class="card__details">
      <li>
        <span class="font--bold">Thru:</span>
        <span>{{ moment(card.expiry).format("MM/YY") }}</span>
      </li>
      <li>
        <span class="font--bold">CVV:</span>
        <span class="font--lg">***</span>
      </li>
    </ul>
    <div class="card__type">
      <img :src="type" alt="" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.moment = moment;
  },
  methods: {
    isFirstThree(index) {
      return !this.card.visible && index + 1 !== this.numbers.length;
    },
  },
  computed: {
    numbers() {
      const num = this.card.numbers.match(/.{1,4}/g);
      return num;
    },
    type() {
      return `/icons/${this.card.type}.svg`;
    },
  },
};
</script>

<style lang="scss">
.card {
  background: $primary;
  border-radius: 1rem;
  padding: 2.8rem;
  color: $white;
  &__logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2.8rem;
    & > img {
      width: 100%;
      max-width: 8.3rem;
    }
  }
  &__title {
    font-size: 2.4rem;
    margin-bottom: 3.3rem;
  }
  &__number {
    margin-bottom: 1.7rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    height: 2em;
    & > li {
      letter-spacing: 2px;
      &:not(:last-child) {
        margin-right: 2.7rem;
        @include responsive(handhelds) {
          margin-right: 1rem;
        }
      }
    }
  }
  &__details {
    display: flex;
    margin-bottom: 0.5rem;
    & > li {
      &:not(:last-child) {
        margin-right: 3.7rem;
      }
      font-size: 1.3rem;
      display: flex;
      & > span {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
        &.font--lg {
          line-height: 1em;
        }
      }
    }
  }
  &__type {
    display: flex;
    justify-content: flex-end;
    & > img {
      width: 100%;
      max-width: 6.7rem;
    }
  }
}
</style>
