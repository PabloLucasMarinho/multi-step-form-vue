<script>
import StepHeader from "./StepHeader.vue";
import StepOneForm from "./StepOneForm.vue";
import StepTwoForm from "./StepTwoForm.vue";
import StepThreeForm from "./StepThreeForm.vue";
import StepFourForm from "./StepFourForm.vue";
import Final from "./Final.vue";
import { store } from "../stores/store";

export default {
  data() {
    return {
      store,
      formIsValid: null,
    };
  },
  components: {
    StepOneForm,
    StepTwoForm,
    StepHeader,
    StepThreeForm,
    StepFourForm,
    Final,
  },
  methods: {
    handleValidForm(validForm) {
      if (validForm) {
        store.nextStep();
      }
    },
    handleClick() {
      if (store.currentStep === "stepFour") {
        store.nextStep();
      }
    },
  },
};
</script>

<template>
  <section v-if="store.currentStep !== 'final'" class="form-section">
    <StepHeader :step="store.currentStep" />
    <StepOneForm
      @valid-form="handleValidForm"
      v-if="store.currentStep === 'stepOne'"
    />
    <StepTwoForm
      @valid-form="handleValidForm"
      v-else-if="store.currentStep === 'stepTwo'"
    />
    <StepThreeForm
      @valid-form="handleValidForm"
      v-else-if="store.currentStep === 'stepThree'"
    />
    <StepFourForm v-else-if="store.currentStep === 'stepFour'" />
    <section class="buttons-section">
      <button
        class="back"
        :class="store.currentStep === 'stepOne' ? null : 'show'"
        @click="store.backStep"
      >
        Go Back
      </button>
      <button
        type="submit"
        class="next"
        form="steps"
        :class="store.currentStep === 'stepFour' ? 'final' : null"
        @click="handleClick"
      >
        {{ store.currentStep !== "stepFour" ? "Next Step" : "Confirm" }}
      </button>
    </section>
  </section>
  <Final v-else />
</template>

<style scoped>
.form-section {
  display: grid;
  grid-template-rows: min-content;
  height: 568px;
  margin-inline: 5rem;
  padding-top: 2rem;
  width: 28rem;
  color: hsl(213, 96%, 18%);
}

.buttons-section {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.back {
  visibility: hidden;
  margin-bottom: 1rem;
  background: none;
  border: none;
  outline: none;
  font-weight: 700;
  color: hsl(231, 11%, 63%);
  cursor: pointer;
}

.back.show {
  visibility: visible;
}

.back:hover {
  color: hsl(213, 96%, 18%);
}

.next {
  border: none;
  outline: none;
  background-color: hsl(213, 96%, 18%);
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.next:hover {
  background-color: hsl(213, 96%, 30%);
}

.next.final {
  background-color: hsl(243, 100%, 62%);
}

.next.final:hover {
  background-color: hsla(243, 100%, 62%, 0.651);
}

@media (max-width: 940px) {
  .form-section {
    z-index: 2;
    background-color: #fff;
    margin: 0;
    width: 350px;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    position: fixed;
    top: 6.2rem;
  }

  .buttons-section {
    position: fixed;
    width: 375px;
    background-color: #fff;
    padding: 1rem;
    bottom: 0;
    right: 0;
    left: 0;
    margin-inline: auto;
  }
}
</style>
