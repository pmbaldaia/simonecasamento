<template>
  <section class="image-section">
    <img src="@/assets/images/1U9A9619.webp" alt="hero" class="image-bg" />
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
  overflow: hidden;
}

.image-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 85%;
  display: block;
}

@media (min-width: 1024px) {
  .image-section {
    height: 950px;
  }

  .image-bg {
    object-position: center 60%;
  }
}

@media (min-width: 1440px) {
  .image-section {
    height: 950px;
  }

  .image-bg {
    object-position: center 50%;
  }
}

@media (min-width: 1920px) {
  .image-section {
    height: 1100px;
  }
}
</style>
