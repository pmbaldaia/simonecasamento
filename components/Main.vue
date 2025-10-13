<template>
  <v-container fluid>
    <Home />
    <About />
    <Skills />
    <Footer />
  </v-container>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default {
  components: {
    Home,
    About,
    Skills,
    Footer,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #232020;
}
.portfolio-content {
  background-color: #232020;
  height: 100vh;
}
.wrapper {
  position: relative;
}
</style>
