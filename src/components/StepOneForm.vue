<script>
export default {
  name: "StepOneForm",
  emits: ["validForm"],

  data() {
    return {
      name: "",
      email: "",
      tel: "",
      nameIsValid: true,
      emailIsValid: true,
      telIsValid: true,
      formIsValid: true,
    };
  },
  methods: {
    validate() {
      this.handleName();
      this.handleEmail();
      this.handleTel();

      if (this.formIsValid) {
        const userData = {
          name: this.name,
          email: this.email.trim(),
          tel: this.tel,
        };
        const userDataString = JSON.stringify(userData);
        localStorage.setItem("stepOneData", userDataString);
        this.$emit("validForm", true);
      } else {
        return;
      }
    },
    handleNameNumberless() {
      let newName = this.name.replace(/\d/g, "");

      this.name = newName;
    },
    handleName() {
      let words = this.name.trim().toLowerCase().split(" ");
      if (!this.name) {
        this.nameIsValid = false;
        this.formIsValid = false;
      } else {
        if (this.name) {
          for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
          }
        }

        this.name = words.join(" ");

        this.nameIsValid = true;
        this.formIsValid = true;
      }
    },
    trimEmail() {
      this.email = this.email.trim();
    },
    handleEmail() {
      !this.email ? (this.emailIsValid = false) : (this.emailIsValid = true);
      const regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
      return (this.emailIsValid = regex.test(this.email));
    },
    handleTelMask() {
      const numbers = this.tel.replace(/\D/g, "");
      const regex = /^(\d{1})(\d{3})(\d{3})(\d{3})$/;
      let resolve = numbers.replace(regex, "+$1 $2 $3 $4");

      this.tel = resolve;
    },
    handleTel() {
      if (!this.tel) {
        this.telIsValid = false;
        this.formIsValid = false;
      } else {
        if (this.tel.length !== 14) {
          this.telIsValid = false;
          this.formIsValid = false;
        } else {
          this.telIsValid = true;
          this.formIsValid = true;
        }
      }
    },
  },
  created() {
    if (localStorage.getItem("stepOneData")) {
      const storageData = JSON.parse(localStorage.getItem("stepOneData"));
      this.name = storageData.name;
      this.email = storageData.email;
      this.tel = storageData.tel;
    }
  },
};
</script>

<template>
  <form class="form-field" id="steps" @submit.prevent="validate">
    <label for="name" class="form-label">
      <p class="label">
        <span>Name</span>
        <small v-if="!nameIsValid">This field is required</small>
      </p>
      <input
        v-model="name"
        @input="handleNameNumberless"
        @blur="handleName"
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
        autocomplete="name"
        class="form-input"
        :class="{ error: !nameIsValid }"
      />
    </label>
    <label for="email" class="form-label">
      <p class="label">
        <span>Email Address</span>
        <small v-if="!emailIsValid">Invalid email</small>
      </p>
      <input
        v-model="email"
        @input="handleEmail"
        type="email"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        autocomplete="email"
        class="form-input"
        :class="{ error: !emailIsValid }"
      />
    </label>
    <label for="tel" class="form-label">
      <p class="label">
        <span>Phone Number</span>
        <small v-if="!telIsValid">This field is required</small>
      </p>
      <input
        v-model="tel"
        @input="handleTelMask"
        @blur="handleTel"
        type="tel"
        name="tel"
        id="tel"
        placeholder="e.g. +1 234 567 890"
        autocomplete="tel"
        maxlength="14"
        class="form-input"
        :class="{ error: !telIsValid }"
      />
    </label>
  </form>
</template>

<style scoped>
.form-field {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-top: 2.5rem;
}

.form-label {
  display: flex;
  flex-direction: column;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.label small {
  color: hsl(354, 84%, 57%);
  font-weight: 700;
}

.form-input {
  margin-top: 0.5rem;
  color: hsl(213, 96%, 18%);
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 2px solid hsl(229, 24%, 87%);
  outline-color: hsl(243, 100%, 62%);
}

.form-label ::placeholder {
  color: hsl(231, 11%, 63%);
}

.error {
  border-color: hsl(354, 84%, 57%);
}
</style>
