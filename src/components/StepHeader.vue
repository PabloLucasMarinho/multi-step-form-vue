<script>
export default {
  name: "StepHeader",
  props: ["step"],
};
</script>

<template>
  <article v-if="step === 'stepOne'">
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p>
  </article>
  <article v-else-if="step === 'stepTwo'">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </article>
  <article v-else-if="step === 'stepThree'">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </article>
  <article v-else-if="step === 'stepFour'">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
  </article>
</template>

<style scoped>
article {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

h1 {
  font-size: 1.875rem;
}

p {
  color: hsl(231, 11%, 63%);
}
</style>
