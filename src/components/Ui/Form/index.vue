<template>
  <form action="" id="form" @submit.prevent="submitForm">
    <div class="form__group">
      <label for="">Full Name</label>
      <input type="text" v-model="form.name" placeholder="Enter Full Name" />
    </div>
    <div class="form__group">
      <label for="">Card Number</label>
      <input
        type="text"
        v-model="form.numbers"
        placeholder="Enter Card Number"
      />
    </div>
    <div class="form__group">
      <label for="">Expiry Date</label>
      <input
        type="text"
        v-model="form.expiry"
        placeholder="Enter Expiry Date"
      />
    </div>
    <div class="mb-32">
      <div class="form__group">
        <label for="">CVV</label>
        <input type="text" v-model="form.cvv" placeholder="Enter CVV" />
      </div>
    </div>
    <slot />
  </form>
</template>

<script>
export default {
  emits: ["form-submitted"],
  data() {
    return {
      form: {
        name: "",
        // Add this by default
        numbers: `${Math.floor(Math.random() * 1e16)}`,
        expiry: this.randomDate(new Date(), new Date(2050, 0, 1)),
        cvv: "777",
        type: "visa",
      },
    };
  },
  methods: {
    randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    },
    submitForm() {
      this.$store.dispatch("cards/addCard", this.form);
      this.$emit("form-submitted", false);
    },
  },
};
</script>

<style lang="scss">
.form {
  &__group {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    label {
      font-size: 1.3rem;
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      display: block;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid $gray-120;
    }
  }
}
</style>
