<script>
export default {
  name: "Final",
};
</script>

<template>
  <section>
    <img src="/icon-thank-you.svg" alt="An icon of a check mark." />
    <h1>Thank you!</h1>
    <p>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </section>
</template>

<style scoped>
section {
  height: 568px;
  margin-inline: 5rem;
  padding-top: 2rem;
  width: 28rem;
  color: hsl(213, 96%, 18%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 4rem;
  margin-bottom: 1.5rem;
}

h1 {
  margin-bottom: 1rem;
}

p {
  color: hsl(231, 11%, 63%);
}

@media (max-width: 940px) {
  section {
    background-color: #fff;
    z-index: 2;
    height: fit-content;
    padding: 4rem;
    width: 350px;
    border-radius: 0.5rem;
  }
}
</style>
