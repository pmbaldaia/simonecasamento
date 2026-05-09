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
      <div id="footer-text" class="image-text">
      <!--   <p class="line line--lead section-subtitle">
          Agradecemos a confirmação até <strong>31 de março de 2026</strong>
        </p> -->
        <p class="section-subtitle">
          Simone – 936 691 881 | João Pedro – 961 748 963
        </p>
      </div>
    </div>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/scss/_variables.scss" as vars;

.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  min-height: 70vh;
  overflow: hidden;
  padding: 0;

  .footer-image {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;

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
  }

  .image-text {
    position: relative;
    z-index: 4;
    max-width: 880px;
    padding: 0 1rem;
    color: #2b2b2b;
    font-family: vars.$body-font-family;
    font-style: normal;
    font-size: 0.9rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum" 1, "pnum" 1;

    p {
      margin: 0.2rem 0;
      text-decoration: none;
      font-size: 0.9rem;
      font-style: normal;
      color: #2b2b2b;
    }

    strong {
      font-weight: 700;
      font-style: normal;
      text-decoration: none;
      font-variant-numeric: lining-nums;
      font-feature-settings: "lnum" 1, "pnum" 1;
    }

    .line--lead {
      margin: 0 0 0.4rem 0;
      font-size: 0.9rem;
      line-height: 1.3;
      text-decoration: none;
    }
  }

  .section-subtitle {
    font-family: vars.$body-font-family;
    font-size: 0.9rem;
    font-style: normal;
    text-align: center;
    color: #2b2b2b;
    font-variant-numeric: lining-nums;
    font-feature-settings: "lnum" 1, "pnum" 1;
    margin: 0;
    text-decoration: none;
  }

  @media screen and (max-width: 767px) {
    min-height: 45vh;

    .footer-image {
      img {
        object-position: center 48%;
        transform: scale(1.03);
      }

      .image-top-fade {
        height: 45%;
        filter: blur(16px);
      }
    }

    .fog {
      filter: blur(28px);
    }

    .image-text {
      padding: 0 1.25rem;
      font-size: 0.90rem !important;

      p {
        font-size: 0.90rem !important;
      }

      .line--lead {
        font-size: 0.90rem !important;
      }
    }

    .section-subtitle {
      font-size: 0.90rem !important;
    }
  }
}
</style>
