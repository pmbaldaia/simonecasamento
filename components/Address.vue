<template>
  <v-container fluid class="map-section pb-0 pt-0">
    <v-row class="map-row" align="center" justify="space-between" no-gutters>
      <v-col cols="12" md="4" class="info-col text-left">
        <p class="address">Cerimónia</p>
        <p class="address">de Casamento</p>
        <p class="city">Sábado, 11 de julho de 2026</p>
      </v-col>

      <v-col cols="12" md="6" class="image-col">
        <div class="map-image"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.map-section {
  background-color: vars.$offwhite-color;
  padding-inline: 0;

  .map-row {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image-col {
    display: flex;
    justify-content: flex-end;
  }

  .map-image {
    width: 100%;
    min-height: 360px;
    margin-left: calc(50% - 50vw);
    margin-right: 0;
    background-image: url("@/assets/images/1U9A9624.webp");
    background-size: cover;
    background-position: center;
  }

  .info-col {
    position: relative;
    z-index: 2;
    padding: 1rem;
    opacity: 1;
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

  @media (max-width: 600px) {
    padding-inline: 0;

    .map-row {
      justify-content: center;
      text-align: center;
    }

    .info-col {
      padding: 2.75rem 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .map-image {
      min-height: 220px;
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      border-radius: 0;
      box-shadow: none;
    }
  }

  @media (max-width: 960px) {
    .map-image {
      min-height: 400px;
    }
  }
}
</style>
