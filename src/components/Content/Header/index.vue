<template>
  <div class="header">
    <p class="font--sm mb-16">Available balance</p>
    <div class="header__actions">
      <div class="header__amount">
        <span class="header__amount-cur font--bold">S$</span>
        <span class="header__amount-num font--bold">3,000</span>
      </div>
      <button class="btn btn--secondary-lt btn--icon">
        <img width="16" src="/icons/box.svg" alt="" />
        <span class="font--bold">New Card</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
