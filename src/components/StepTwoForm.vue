<script>
import { store } from "../stores/store";

export default {
  name: "StepTwoForm",
  data() {
    return {
      store,
      toggle: false,
      selectedPlan: "arcade",
      choosedPlan: null,
    };
  },
  methods: {
    validate() {
      this.handleChoosedPlan();

      const planDataString = JSON.stringify(this.choosedPlan);
      const modalityString = JSON.stringify(store.modality);
      localStorage.setItem("stepTwoData", planDataString);
      localStorage.setItem("modalityData", modalityString);
      this.$emit("validForm", true);
    },
    handleChoosedPlan() {
      if (this.toggle) {
        store.modality = this.toggle;
        if (this.selectedPlan === "arcade") {
          this.choosedPlan = {
            plan: "arcade",
            price: 90,
          };
        } else if (this.selectedPlan === "advanced") {
          this.choosedPlan = {
            plan: "advanced",
            price: 120,
          };
        } else {
          this.choosedPlan = {
            plan: "pro",
            price: 150,
          };
        }
      } else {
        store.modality = this.toggle;
        if (this.selectedPlan === "arcade") {
          this.choosedPlan = {
            plan: "arcade",
            price: 9,
          };
        } else if (this.selectedPlan === "advanced") {
          this.choosedPlan = {
            plan: "advanced",
            price: 12,
          };
        } else {
          this.choosedPlan = {
            plan: "pro",
            price: 15,
          };
        }
      }
    },
  },
  created() {
    if (localStorage.getItem("stepTwoData")) {
      const storageData = JSON.parse(localStorage.getItem("stepTwoData"));
      this.choosedPlan = storageData;
      this.selectedPlan = storageData.plan;
    }
    if (localStorage.getItem("modalityData")) {
      const storageData = JSON.parse(localStorage.getItem("modalityData"));
      this.toggle = storageData;
    }
  },
};
</script>

<template>
  <form id="steps" @submit.prevent="validate">
    <section class="radio-cards">
      <label
        for="arcade"
        class="card"
        :class="selectedPlan === 'arcade' ? 'active' : null"
      >
        <img
          src="/icon-arcade.svg"
          alt="An icon of a very old video game controller"
        />
        <div>
          <h4>Arcade</h4>
          <small>${{ toggle ? 9 * 10 : 9 }}/{{ toggle ? "yr" : "mo" }}</small>
          <small v-if="toggle" class="price">2 months free</small>
          <input
            v-model="selectedPlan"
            type="radio"
            id="arcade"
            value="arcade"
            :checked="selectedPlan === 'arcade' ? true : false"
          />
        </div>
      </label>

      <label
        for="advanced"
        class="card"
        :class="selectedPlan === 'advanced' ? 'active' : null"
      >
        <img
          src="/icon-advanced.svg"
          alt="An icon of an old video game controller"
        />
        <div>
          <h4>Advanced</h4>
          <small>${{ toggle ? 12 * 10 : 12 }}/{{ toggle ? "yr" : "mo" }}</small>
          <small v-if="toggle" class="price">2 months free</small>
          <input
            v-model="selectedPlan"
            type="radio"
            id="advanced"
            value="advanced"
            :checked="selectedPlan === 'advanced' ? true : false"
          />
        </div>
      </label>

      <label
        for="pro"
        class="card"
        :class="selectedPlan === 'pro' ? 'active' : null"
      >
        <img
          src="/icon-pro.svg"
          alt="An icon of a current video game controller"
        />
        <div>
          <h4>Pro</h4>
          <small>${{ toggle ? 15 * 10 : 15 }}/{{ toggle ? "yr" : "mo" }}</small>
          <small v-if="toggle" class="price">2 months free</small>
          <input
            v-model="selectedPlan"
            type="radio"
            id="pro"
            value="pro"
            :checked="selectedPlan === 'pro' ? true : false"
          />
        </div>
      </label>
    </section>

    <section class="payment-time-method">
      <p :class="toggle ? null : 'checked'">Monthly</p>
      <input v-model="toggle" type="checkbox" name="chk" id="chk" />
      <label for="chk" class="switch">
        <span class="slider"></span>
      </label>
      <p :class="toggle ? 'checked' : null">Yearly</p>
    </section>
  </form>
</template>

<style scoped>
form {
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}

.radio-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
}

.radio-cards div {
  display: flex;
  flex-direction: column;
}

.payment-time-method {
  height: 3rem;
  font-weight: 500;
  color: hsl(231, 11%, 63%);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
  background-color: hsl(231, 100%, 99%);
  border-radius: 0.5rem;
}

#chk {
  display: none;
}
.switch {
  position: relative;
  display: inline-flex;
  height: 1.5rem;
  width: 2.75rem;
  align-items: center;
  border-radius: 9999px;
  background-color: hsl(213, 96%, 18%);
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.slider {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  background-color: #fff;
  transform: translateX(0.25rem);
  transition: all 0.5s ease;
}

#chk:checked ~ .switch .slider {
  transform: translateX(1.5rem);
}

.checked {
  color: hsl(213, 96%, 18%);
}

.card {
  border: 2px solid hsl(229, 24%, 87%);
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  justify-content: left;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.card:hover {
  border-color: hsl(243, 100%, 62%);
}

.card img {
  height: 2.5rem;
  width: 2.5rem;
}

.card small {
  color: hsl(231, 11%, 63%);
  font-weight: 500;
}

.card .price {
  color: hsl(213, 96%, 18%);
  font-weight: 500;
}

.card input {
  visibility: hidden;
}

.card.active {
  border-color: hsl(243, 100%, 62%);
  background-color: hsl(231, 100%, 99%);
}

@media (max-width: 940px) {
  .radio-cards {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 0.5rem;
  }

  .card {
    flex-direction: row;
    column-gap: 1rem;
    padding: 0.25rem 1rem;
    align-items: center;
  }
}
</style>
