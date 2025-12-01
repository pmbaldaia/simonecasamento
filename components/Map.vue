<template>
  <v-container fluid class="map-section">
    <v-row class="map-row" align="center" justify="center">
      <v-col cols="12" md="4" class="image-col">
        <div class="map-image"></div>
      </v-col>

      <v-col cols="12" md="4" class="info-col text-center">
        <p class="address">Aqueduto Eventos</p>
        <p class="city">Travessa Alto das Póvoas 96</p>
        <p class="city">Póvoa de Varzim</p>

        <v-btn
          class="map-btn mt-2"
          rounded="xl"
          size="large"
          href="https://maps.app.goo.gl/ysJ65kacnqPFDSra6"
          target="_blank"
        >
          Mapa
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>
<style scoped lang="scss">
@use "sass:color";
@use "@/assets/scss/_variables.scss" as vars;

.map-section {
  background-color: vars.$offwhite-color;
  padding-inline: 1.5rem;

  .map-row {
    max-width: 900px;
    margin: 0 auto;
  }

  .image-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-image {
    width: 100%;
    height: 200px;
    background-image: url("../assets/images/Desenho.webp");
    background-size: contain;
    background-position: center;
    border-radius: 16px;
  }

  .info-col {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 960px) {
      align-items: flex-start;
      text-align: left;
    }
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
    margin-bottom: 0.5rem;
  }

  .map-btn {
    background-color: #503e36;
    color: vars.$white-color;
    font-family: vars.$heading-font-family;
    font-weight: 500;
    padding: 0.75rem 5rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background-color: color.adjust(vars.$gold-color, $lightness: -15%);
    }
  }

  @media (max-width: 960px) {
    .map-image {
      height: 220px;
    }
  }

  @media (max-width: 600px) {
    .map-image {
      height: 200px;
    }
  }
}
</style>
