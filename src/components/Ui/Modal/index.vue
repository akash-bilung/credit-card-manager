<template>
  <div class="modal">
    <div class="modal__dialog">
      <p v-if="title" class="modal__title">{{ title }}</p>

      <add-new-card v-if="comp === 'card'" @form-submitted="cancel">
        <div class="modal__buttons">
          <button @click="cancel" class="moda__buttons-btn btn btn--gray-200">
            Cancel
          </button>
          <button type="submit" class="moda__buttons-btn btn btn--success">
            Proceed
          </button>
        </div>
      </add-new-card>
    </div>
  </div>
</template>

<script>
import AddNewCard from "@/components/Ui/Form";
export default {
  props: {
    comp: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  components: {
    AddNewCard,
  },
  methods: {
    cancel() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  &,
  &::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    background: rgba($black, 0.8);
    z-index: -1;
  }
  &__dialog {
    background: $white;
    max-width: 40rem;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
  }
  &__title {
    margin-bottom: 3rem;
    font-weight: 700;
  }
  &__buttons {
    & > * {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
