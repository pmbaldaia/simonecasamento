<template>
  <v-container fluid class="map-section py-12">
    <v-row class="map-row" align="center" justify="center" no-gutters>
      <v-col cols="12" md="4" class="info-col text-center">
        <p class="address">Aqueduto Eventos</p>
        <p class="city">Travessa Alto das Póvoas 96</p>
        <p class="city">Póvoa de Varzim</p>
      </v-col>

      <v-col cols="12" md="6" class="image-col">
        <div
          class="map-image"
          role="img"
          aria-label="Foto do local do casamento"
        ></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Sem JS — todo o comportamento é controlado por CSS
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.map-section {
  background-color: vars.$offwhite-color;
  padding-inline: 1.5rem;

  .map-row {
    max-width: 1100px;
    margin: 0 auto;
    gap: 1.5rem;
    align-items: stretch;
  }

  .image-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-image {
    width: 100%;
    min-height: 360px;
    border-radius: 16px;
    background-image: url("@/assets/images/1U9A9619.JPG");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* Sem transform/anim — estática */
  }

  .info-col {
    position: relative;
    z-index: 2;
    padding: 1rem;
    opacity: 1; /* sempre visível */
    transform: none;
  }

  .address {
    font-family: vars.$heading-font-family;
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .city {
    font-family: vars.$body-font-family;
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 0.25rem;
  }

  /* RESPONSIVE: no mobile fazemos a imagem ocupar 100vw */
  @media (max-width: 600px) {
    /* removemos o padding lateral do container visualmente para a imagem */
    padding-inline: 0;

    .map-row {
      gap: 0.75rem;
    }

    .map-image {
      min-height: 220px;
      border-radius: 0;
      /* truque para estender a imagem até às extremidades do viewport */
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      box-shadow: none;
    }

    .info-col {
      padding: 0.75rem 1rem;
      text-align: center;
    }
  }

  @media (max-width: 960px) {
    .map-image {
      min-height: 300px;
    }
  }
}
</style>
