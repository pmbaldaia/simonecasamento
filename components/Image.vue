<template>
  <section
    class="full-image-section"
    role="img"
    aria-label="Foto do local do casamento com informação de confirmação"
  >
    <div class="full-image" aria-hidden="true">
      <div class="overlay"></div>
      <div class="image-text" aria-hidden="false">
        <p class="line line--lead">
          Agradecemos a confirmação até 31 de março de 2026
        </p>
        <p class="line">Simone – 936 691 881 | João Pedro – 961 748 963</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.full-image-section {
  width: 100%;
  padding: 0;
  margin: 0;
}

.full-image {
  width: 100%;
  height: 520px;
  position: relative;
  background-image: url("@/assets/images/1U9A9640.JPG");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.image-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(92%, 980px);
  text-align: center;
  z-index: 2;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.image-text .line {
  margin: 0;
  padding: 0.1rem 0;
  font-family: vars.$heading-font-family;
  font-weight: 500;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.55);
  letter-spacing: 0.02em;
  line-height: 1.35;
}

.image-text .line--lead {
  font-size: clamp(1.1rem, 2.6vw, 1.6rem);
  margin-bottom: 0.45rem;
  font-weight: 600;
  text-transform: none;
}

.image-text .line {
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
  opacity: 0.96;
}

@media (min-width: 1200px) {
  .image-text .line--lead {
    font-size: 1.9rem;
  }
  .image-text .line {
    font-size: 1.15rem;
  }
}

@media (max-width: 600px) {
  .full-image {
    height: 380px;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.55);
  }
  .image-text {
    width: min(94%, 640px);
    transform: translate(-50%, -50%);
  }
  .image-text .line--lead {
    font-size: clamp(1rem, 4.5vw, 1.25rem);
  }
  .image-text .line {
    font-size: clamp(0.9rem, 4vw, 1rem);
  }
}
</style>
