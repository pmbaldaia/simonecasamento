<template>
  <v-app>
    <v-main
      class="d-flex flex-column align-center justify-center"
      style="height: 100vh"
    >
      <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
      <h1 v-else>{{ otherError }}</h1>
      <NuxtLink to="/" class="mt-4 text-decoration-none"> Home page </NuxtLink>
    </v-main>
  </v-app>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 500 }),
  },
});

const pageNotFound = "404 Not Found";
const otherError = "An error occurred";

useHead({
  title: error.statusCode === 404 ? pageNotFound : otherError,
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
}
</style>
