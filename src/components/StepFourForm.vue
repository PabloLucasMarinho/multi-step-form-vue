<script>
import { store } from "../stores/store";
export default {
  name: "StepFourForm",
  data() {
    return {
      store,
      modality: null,
      plan: "",
      planPrice: null,
      totalPrice: 0,
      addons: [],
    };
  },
  methods: {
    handleClick() {
      store.count = 0;

      store.nextStep();
    },
  },
  created() {
    if (localStorage.getItem("modalityData")) {
      const modalityData = JSON.parse(localStorage.getItem("modalityData"));
      this.modality = modalityData;
    }
    if (localStorage.getItem("stepTwoData")) {
      const stepTwoData = JSON.parse(localStorage.getItem("stepTwoData"));
      this.plan = stepTwoData.plan;
      this.planPrice = stepTwoData.price;
    }
    if (localStorage.getItem("stepThreeData")) {
      const stepThreeData = JSON.parse(localStorage.getItem("stepThreeData"));
      this.addons = stepThreeData;
    }
  },
  mounted() {
    this.totalPrice += this.planPrice;
    this.addons.map((item) => {
      this.totalPrice += item.price;
    });

    return this.totalPrice;
  },
};
</script>

<template>
  <section class="summary-section">
    <article class="plan-summary">
      <div>
        <p>{{ plan }} ({{ modality ? "Yearly" : "Monthly" }})</p>
        <button @click="handleClick">Change</button>
      </div>
      <p>${{ planPrice }}/{{ modality ? "yr" : "mo" }}</p>
    </article>
    <hr />
    <article class="addons-summary">
      <template v-for="item in addons" :key="item.index">
        <p>
          <small>{{ item.addon }}</small>
          <span>+${{ item.price }}/{{ modality ? "yr" : "mo" }}</span>
        </p>
      </template>
    </article>
  </section>
  <section class="total-section">
    <small>Total ({{ modality ? "per year" : "per month" }})</small>
    <p>+${{ totalPrice }}/{{ modality ? "yr" : "mo" }}</p>
  </section>
</template>

<style scoped>
.summary-section {
  margin-top: 2.5rem;
  background-color: hsl(231, 100%, 99%);
  border-radius: 0.5rem;
  padding: 1.25rem;
  height: fit-content;
}

.total-section {
  padding-inline: 1.25rem;
  display: flex;
  justify-content: space-between;
}

.plan-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-summary div p {
  font-weight: 700;
  text-transform: capitalize;
}

.plan-summary div button {
  background: none;
  border: none;
  text-decoration: underline;
  font-weight: 700;
  color: hsl(231, 11%, 63%);
  cursor: pointer;
}

.plan-summary div button:hover {
  color: hsl(243, 100%, 62%);
}

.plan-summary > p {
  font-weight: 700;
}

hr {
  margin-top: 1rem;
  border: 1px solid hsl(229, 24%, 87%);
}

.addons-summary {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.addons-summary p {
  display: flex;
  justify-content: space-between;
}

.addons-summary p small {
  font-weight: 500;
  color: hsl(231, 11%, 63%);
}

.total-section small {
  color: hsl(231, 11%, 63%);
  font-weight: 500;
}

.total-section p {
  font-weight: 700;
  color: hsl(243, 100%, 62%);
}
</style>
