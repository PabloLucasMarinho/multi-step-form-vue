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

export const stepTwoOptions = reactive({
  arcade: {
    image: "icon-arcade.svg",
    alt: "An icon of a very old video game controller",
    title: "arcade",
    price: 9,
    isActive: false,
  },
  advanced: {
    image: "icon-advanced.svg",
    alt: "An icon of an old video game controller",
    title: "advanced",
    price: 12,
    isActive: false,
  },
  pro: {
    image: "icon-pro.svg",
    alt: "An icon of a current video game controller",
    title: "pro",
    price: 15,
    isActive: false,
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
