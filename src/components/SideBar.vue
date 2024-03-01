<script>
import StepItem from "./StepItem.vue";
import { store, SIDEBAR } from "../stores/store";

export default {
  data() {
    return {
      store,
      SIDEBAR,
    };
  },
  components: {
    StepItem,
  },
  watch: {
    "store.currentStep": {
      handler(newStep) {
        if (newStep === "stepOne") {
          SIDEBAR.stepOne.isActive = true;
          SIDEBAR.stepTwo.isActive = false;
          SIDEBAR.stepThree.isActive = false;
          SIDEBAR.stepFour.isActive = false;
        } else if (newStep === "stepTwo") {
          SIDEBAR.stepOne.isActive = false;
          SIDEBAR.stepTwo.isActive = true;
          SIDEBAR.stepThree.isActive = false;
          SIDEBAR.stepFour.isActive = false;
        } else if (newStep === "stepThree") {
          SIDEBAR.stepOne.isActive = false;
          SIDEBAR.stepTwo.isActive = false;
          SIDEBAR.stepThree.isActive = true;
          SIDEBAR.stepFour.isActive = false;
        } else {
          SIDEBAR.stepOne.isActive = false;
          SIDEBAR.stepTwo.isActive = false;
          SIDEBAR.stepThree.isActive = false;
          SIDEBAR.stepFour.isActive = true;
        }
      },
    },
  },
};
</script>

<template>
  <section class="sidebar">
    <ul>
      <template v-for="item in SIDEBAR" :key="item.id">
        <StepItem
          :step="item.step"
          :label="item.label"
          :isActive="{ active: item.isActive }"
        />
      </template>
    </ul>
  </section>
</template>

<style scoped>
.sidebar {
  background-image: url("../assets/bg-sidebar-desktop.svg");
  width: 274px;
  height: 568px;
  padding: 2rem;
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

@media (max-width: 940px) {
  .sidebar {
    background-image: url("../assets/bg-sidebar-mobile.svg");
    position: fixed;
    top: 0;
    width: 375px;
    height: 172px;
  }

  .sidebar ul {
    flex-direction: row;
    column-gap: 1rem;
    justify-content: center;
    z-index: 1;
  }
}
</style>
