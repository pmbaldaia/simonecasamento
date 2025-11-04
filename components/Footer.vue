<template>
  <v-container id="footer" fluid class="footer portfolio-container">
    <div class="footer-image" aria-hidden="true">
      <img src="@/assets/images/1U9A9773.JPG" alt="Detalhe decorativo" />
    </div>

    <div class="footer-content">
      <div class="footer-message">
        "O amor tudo suporta, tudo crê, tudo espera, tudo suporta." – 1
        Coríntios 13:7
      </div>

      <div class="copyright">© 2026 Simone Loureiro & João Freire</div>
    </div>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 30vh;
  background-color: #f9f6f2;
  overflow: hidden;
  padding: 2.5rem 1rem;

  .footer-image {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.25;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 55%;
      filter: saturate(0.9) contrast(0.95) brightness(0.95) blur(0.5px);
      transform: scale(1.05);
      transition: object-position 0.4s ease;
    }
  }

  .footer-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    max-width: 800px;
    width: 100%;
  }

  .footer-message {
    font-family: $heading-font-family;
    color: #232020;
    font-size: 1.4rem;
    line-height: 1.7;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 1.2rem 2rem;
    border-radius: 12px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  }

  .copyright {
    font-family: $heading-font-family;
    color: #6f6f6f;
    font-size: 1rem;
    opacity: 0.85;
  }

  @media screen and (max-width: 767px) {
    min-height: 25vh;
    padding: 2rem 1rem;

    .footer-message {
      font-size: 1rem;
      padding: 1rem 1.2rem;
    }

    .footer-image img {
      object-position: center center;
    }
  }
}
</style>
