<template>
  <div class="copyright">© 2026 Simone Loureiro & João Freire</div>
</template>

<script setup></script>

<style scoped lang="scss">
.copyright {
  font-family: $heading-font-family;
  color: #999999;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
}
</style>
