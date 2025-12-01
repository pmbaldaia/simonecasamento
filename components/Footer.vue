<template>
  <v-container
    id="footer"
    fluid
    class="footer portfolio-container"
    aria-labelledby="footer-text"
  >
    <div class="footer-image" aria-hidden="true">
      <img src="@/assets/images/1U9A9773.webp" alt="Detalhe decorativo" />
      <div class="image-top-fade" />
    </div>

    <div class="fog-bar" role="region" aria-label="Confirmação">
      <div class="fog" />
      <div
        id="footer-text"
        class="image-text"
        style="font-family: serif; font-size: 0.9rem; font-style: italic"
      >
        <p class="line line--lead">
          Agradecemos a confirmação até <strong>31 de março de 2026</strong>
        </p>

        <p>Simone – 936 691 881 | João Pedro – 961 748 963</p>
      </div>
    </div>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
$bg: #f9f6f2;

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  min-height: 70vh;
  background-color: $bg;
  overflow: hidden;
  padding: 0;

  .footer-image {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.95;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 60%;
      display: block;
      filter: saturate(0.98) contrast(0.98);
    }

    .image-top-fade {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 40%;
      z-index: 1;
      pointer-events: none;
      background: linear-gradient(
        to bottom,
        rgba(249, 246, 242, 0.95) 0%,
        rgba(249, 246, 242, 0.75) 30%,
        rgba(249, 246, 242, 0.45) 60%,
        rgba(249, 246, 242, 0) 100%
      );
      filter: blur(18px);
      mix-blend-mode: normal;
    }
  }

  .fog-bar {
    position: relative;
    z-index: 3;
    width: 100%;
    padding: 2.25rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .fog {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.7) 30%,
      rgba(255, 255, 255, 0.45) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(34px);
  }

  .image-text {
    position: relative;
    z-index: 4;
    max-width: 880px;
    padding: 0 1rem;
    color: #2b2b2b;

    .line--lead {
      margin: 0 0 0.6rem 0;
      font-size: 1.05rem;
      line-height: 1.3;
    }

    p {
      margin: 0.2rem 0;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: 45vh;

    .footer-image {
      img {
        object-position: center 45%;
        transform: scale(1.08);
      }

      .image-top-fade {
        height: 60%;
        filter: blur(24px);
      }
    }

    .fog {
      filter: blur(28px);
    }

    .image-text {
      padding: 0 1.25rem;
      font-size: 0.75rem !important;

      .line--lead {
        font-size: 0.85rem !important;
      }
    }
  }
}
</style>
