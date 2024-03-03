<script>
import SideBar from "./components/SideBar.vue";
import FormSection from "./components/FormSection.vue";

export default {
  name: "App",
  components: {
    SideBar,
    FormSection,
  },
};
</script>

<template>
  <main>
    <SideBar />
    <FormSection />
  </main>
  <footer class="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by
    <a href="https://github.com/PabloLucasMarinho" target="_blank"
      >Pablo Marinho</a
    >.
  </footer>
</template>

<style scoped>
main {
  background-color: #fff;
  display: flex;
  border-radius: 1.25rem;
  padding: 1rem;
}

.attribution {
  font-size: 11px;
  text-align: center;
  margin-top: 0.5rem;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (max-width: 940px) {
  main {
    justify-content: center;
    padding-inline: 1rem;
    background-color: unset;
  }

  .attribution {
    position: fixed;
    bottom: 75px;
    left: 0;
    right: 0;
    margin-inline: auto;
  }
}
</style>
