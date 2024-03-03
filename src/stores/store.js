import { reactive } from "vue";

export const store = reactive({
  steps: ["stepOne", "stepTwo", "stepThree", "stepFour", "final"],
  count: 0,
  currentStep: "stepOne",
  period: true,
  modality: null,
  nextStep() {
    this.currentStep = this.steps[++this.count];
  },
  backStep() {
    if (this.count < 1) {
      return;
    } else {
      this.currentStep = this.steps[--this.count];
    }
  },
});

export const SIDEBAR = reactive({
  stepOne: {
    id: "stepOne",
    step: 1,
    label: "Your info",
    isActive: true,
  },
  stepTwo: {
    id: "stepTwo",
    step: 2,
    label: "Select plan",
    isActive: false,
  },
  stepThree: {
    id: "stepThree",
    step: 3,
    label: "Add-ons",
    isActive: false,
  },
  stepFour: {
    id: "stepFour",
    step: 4,
    label: "Summary",
    isActive: false,
  },
});
