<template>
  <section class="image-section">
    <div class="image-bg"></div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.image-section {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-bg {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/1U9A9605.webp");
  background-size: cover;
  background-position: center;
}
</style>
