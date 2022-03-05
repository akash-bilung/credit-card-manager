<template>
  <li class="card__list_item">
    <div class="card__list_icon">
      <img :src="icon" alt="" />
    </div>
    <div class="card__list_content">
      <h4 class="font--sm mb-05">{{ item.title }}</h4>
      <p class="font--xs text--gray-150 mb-14">
        {{ moment(item.date).format("DD MMM YYYY") }}
      </p>
      <div class="card__list__label">
        <div class="card__list__label_icon">
          <img src="/icons/business-and-finance.svg" alt="" />
        </div>
        <div class="card__list__label_text font--semibold">
          {{ item.label.text }}
        </div>
      </div>
    </div>
    <button
      class="card__list_action font--bold font--sm"
      :class="{ 'text--primary': item.type === 'debit' }"
    >
      <span>{{ amountStr }}</span>
      <img height="12" src="/icons/Next.svg" alt="" />
    </button>
  </li>
</template>

<script>
import moment from "moment";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    icon() {
      return `/icons/${this.item.icon}.svg`;
    },
    amountStr() {
      let type = "+";
      if (this.item.type === "debit") {
        type = "-";
      }
      return `${type} S$ ${this.item.amount}`;
    },
  },
  created() {
    this.moment = moment;
  },
};
</script>

<style lang="scss">
$icon-size: 4.8rem;

.card {
  &__list {
    &_item {
      display: flex;
      align-items: flex-start;
      &:not(:last-child) {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid $gray-110;
      }
      & > * {
        &:not(:last-child) {
          margin-right: 1.2rem;
        }
      }
      &:nth-child(5n + 1) {
        .card__list_icon {
          background: $blue-lt;
        }
      }
      &:nth-child(5n + 2) {
        .card__list_icon {
          background: $green-lt;
        }
      }
      &:nth-child(5n + 3) {
        .card__list_icon {
          background: $red-lt;
        }
      }
    }
    &_icon {
      flex: 0 0 $icon-size;
      max-width: $icon-size;
      width: $icon-size;
      height: $icon-size;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      & > img {
        width: 1.6rem;
      }
    }
    &_content {
      flex: 1;
    }
    &__label {
      display: flex;
      align-items: center;
      &_icon {
        flex: 0 0 2rem;
        max-width: 2rem;
        background: $secondary-lt;
        padding: 0.6rem 0.7rem;
        border-radius: 1rem;
        margin-right: 0.8rem;
      }
      &_text {
        font-size: 1.2rem;
        color: $secondary-lt;
        flex: 1;
      }
    }
    &_action {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;
      & > span {
        margin-right: 1rem;
      }
    }
  }
}
</style>
