<template>
  <v-container fluid class="pa-0">
    <Home />
    <About />
    <Footer />
  </v-container>
</template>

<script setup>
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

const showMenu = ref(false);
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
