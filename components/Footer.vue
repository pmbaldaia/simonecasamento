<template>
  <v-container id="footer" fluid class="footer portfolio-container">
    <div class="fog-bar">
      <div class="fog"></div>

      <div
        class="image-text"
        style="font-family: serif; font-size: 0.8rem; font-style: italic;"
      >
        <p class="line line--lead">
          Agradecemos a confirmação até 31 de março de 2026
        </p>

        <p>Simone – 936 691 881 | João Pedro – 961 748 963</p>
      </div>
    </div>

    <!-- Foto -->
    <div class="footer-image" aria-hidden="true">
      <img src="@/assets/images/1U9A9773.JPG" alt="Detalhe decorativo" />
    </div>
  </v-container>
</template>
<script setup></script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* texto no topo */
  align-items: center;
  text-align: center;
  min-height: 60vh;
  background-color: #f9f6f2;
  overflow: hidden;
  padding: 0; /* a faixa vai gerir a própria altura */

  /* Foto mantém o efeito original */
  .footer-image {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.75;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 60%;
    }
  }

  /* Faixa superior com nevoeiro + texto */
  .fog-bar {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 2.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Nevoeiro atrás do texto */
  .fog {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.6) 40%,
      rgba(255, 255, 255, 0.3) 80%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(35px);
  }

  /* Texto */
  .image-text {
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 767px) {
    min-height: 40vh;

    .fog {
      filter: blur(28px);
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.65) 40%,
        rgba(255, 255, 255, 0.35) 80%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
}
</style>
