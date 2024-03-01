<script>
import { store } from "../stores/store";
export default {
  name: "StepThreeForm",
  data() {
    return {
      store,
      selectedAddons: [],
      finalAddons: [],
    };
  },
  methods: {
    validate() {
      this.finalAddons = [];
      this.selectedAddons.map((item) => {
        if (item === "Online service") {
          this.finalAddons.push({
            addon: item,
            price: store.modality ? 10 : 1,
          });
        } else {
          this.finalAddons.push({
            addon: item,
            price: store.modality ? 20 : 2,
          });
        }
      });
      const addonsDataString = JSON.stringify(this.finalAddons);
      localStorage.setItem("stepThreeData", addonsDataString);
      this.$emit("validForm", true);
    },
  },
  created() {
    if (localStorage.getItem("stepThreeData")) {
      localStorage.removeItem("stepThreeData");
    }
    if (localStorage.getItem("stepThreeData")) {
      const storageData = JSON.parse(localStorage.getItem("stepThreeData"));
      this.selectedAddons = storageData;
    }
  },
};
</script>

<template>
  <form id="steps" @submit.prevent="validate">
    <label
      for="online-service"
      :class="
        selectedAddons.indexOf('Online service') !== -1 ? 'checked' : null
      "
    >
      <div>
        <input
          type="checkbox"
          id="online-service"
          value="Online service"
          v-model="selectedAddons"
        />
        <p class="details">
          <span>Online service</span>
          <small>Access to multiplayer games</small>
        </p>
      </div>
      <p class="price">
        +${{ store.modality ? 10 : 1 }}/{{ store.modality ? "yr" : "mo" }}
      </p>
    </label>

    <label
      for="larger-storage"
      :class="
        selectedAddons.indexOf('Larger storage') !== -1 ? 'checked' : null
      "
    >
      <div>
        <input
          type="checkbox"
          id="larger-storage"
          value="Larger storage"
          v-model="selectedAddons"
          @change="handleSelect"
        />
        <p class="details">
          <span>Larger storage</span>
          <small>Extra 1TB of cloud save</small>
        </p>
      </div>
      <p class="price">
        +${{ store.modality ? 20 : 2 }}/{{ store.modality ? "yr" : "mo" }}
      </p>
    </label>

    <label
      for="customizable-profile"
      :class="
        selectedAddons.indexOf('Customizable Profile') !== -1 ? 'checked' : null
      "
    >
      <div>
        <input
          type="checkbox"
          id="customizable-profile"
          value="Customizable Profile"
          v-model="selectedAddons"
          @change="handleSelect"
        />
        <p class="details">
          <span>Customizable Profile</span>
          <small>Custom theme on your profile</small>
        </p>
      </div>
      <p class="price">
        +${{ store.modality ? 20 : 2 }}/{{ store.modality ? "yr" : "mo" }}
      </p>
    </label>
  </form>
</template>

<style scoped>
form {
  padding-top: 2.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  color: hsl(213, 96%, 18%);
  row-gap: 1rem;
}

label {
  display: flex;
  border: 2px solid hsl(229, 24%, 87%);
  border-radius: 0.5rem;
  padding-inline: 1.5rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}

label:hover {
  border-color: hsl(243, 100%, 62%);
}

label div {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
}

.details span {
  font-weight: 700;
}

.details small {
  font-weight: 500;
  color: hsl(231, 11%, 63%);
}

.price {
  color: hsl(243, 100%, 62%);
}

label.checked {
  background-color: hsl(217, 100%, 97%);
}
</style>
