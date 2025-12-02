<template>
  <section class="image-section">
    <div class="image-bg"></div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.image-section {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-bg {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/1U9A9601.webp");
  background-size: cover;
  background-position: center 85%;
}

@media (min-width: 1024px) {
  .image-section {
    height: 750px;
  }

  .image-bg {
    background-position: center 75%;
  }
}
</style>
