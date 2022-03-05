<template>
  <modal
    title="Add New Card"
    v-if="modalIsOpen"
    comp="card"
    @closeModal="closeModal"
  ></modal>
  <div class="header">
    <p class="font--sm mb-16">Available balance</p>
    <div class="header__actions">
      <div class="header__amount">
        <span class="header__amount-cur font--bold">S$</span>
        <span class="header__amount-num font--bold">{{ balance }}</span>
      </div>
      <button
        class="btn btn--secondary-lt btn--icon header__btn"
        @click.prevent="modalIsOpen = !modalIsOpen"
      >
        <img width="16" src="/icons/box.svg" alt="" />
        <span class="font--bold">New Card</span>
      </button>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Ui/Modal";
export default {
  data() {
    return {
      modalIsOpen: false,
    };
  },
  props: {
    balance: {
      type: Number,
      default: null,
    },
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.modalIsOpen = false;
    },
  },
};
</script>

<style lang="scss">
.header {
  @include responsive(handhelds) {
    color: $white;
    padding: ($gutter-sm * 2) $gutter-sm $gutter-sm;
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.7rem;
    @include responsive(handhelds) {
      margin-bottom: 0;
    }
    .header__btn {
      @include responsive(handhelds) {
        background: transparent;
        padding: 0;
        color: $blue;
        & > img {
          @include recolor($blue, 1);
        }
      }
    }
  }
  &__amount {
    display: flex;
    align-items: center;
    &-cur {
      padding: 0.25rem 1.3rem;
      background: $primary;
      font-size: 1.3rem;
      border-radius: 0.4rem;
      color: $white;
      margin-right: 1.2rem;
    }
    &-num {
      font-size: 2.6rem;
    }
  }
}
</style>
