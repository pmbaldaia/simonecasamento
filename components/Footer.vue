<template>
  <v-container id="footer" fluid class="footer portfolio-container">
    <div class="footer-message">
      "O amor tudo suporta, tudo crê, tudo espera, tudo suporta." – 1 Coríntios
      13:7
    </div>
    <div class="footer">
      <div class="copyright">© 2026 Simone & Teste</div>
    </div>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;

  .footer-message {
    font-family: $heading-font-family;
    color: #232020;
    font-size: 1.2rem;
    max-width: 700px;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    padding: 1rem 1.5rem;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .copyright {
    font-family: $heading-font-family;
    color: #999999;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    padding: 1.5rem 1rem;

    .footer-message {
      font-size: 1rem;
      padding: 0.75rem 1rem;
    }

    .copyright {
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }
  }
}
</style>
