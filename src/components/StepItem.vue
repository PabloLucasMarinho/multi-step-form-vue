<script>
export default {
  props: ["step", "label", "isActive"],
};
</script>

<template>
  <li>
    <span class="step-number" :class="isActive">{{ step }}</span>
    <span class="step-info">
      <p>Step {{ step }}</p>
      <p>{{ label }}</p>
    </span>
  </li>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  color: hsl(231, 100%, 99%);
}

.step-number {
  font-weight: 500;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 2px solid hsl(206, 94%, 87%);
  line-height: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-info {
  text-transform: uppercase;
}

.step-info :first-child {
  color: hsl(228, 100%, 84%);
}

.step-info :last-child {
  color: hsl(231, 100%, 99%);
  font-weight: 700;
}

.active {
  background-color: hsl(206, 94%, 87%);
  color: hsl(213, 96%, 18%);
}

@media (max-width: 940px) {
  .step-info {
    display: none;
  }
}
</style>
