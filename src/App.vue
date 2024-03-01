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
</template>

<style scoped>
main {
  background-color: #fff;
  display: flex;
  border-radius: 1.25rem;
  padding: 1rem;
}

@media (max-width: 940px) {
  main {
    justify-content: center;
    padding-inline: 1rem;
    background-color: unset;
  }
}
</style>
