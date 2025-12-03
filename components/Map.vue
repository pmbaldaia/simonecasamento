<template>
  <v-container fluid class="map-section">
    <v-row class="map-row" align="center" justify="center">
      <v-col cols="12" md="6" class="image-col">
        <div class="map-image"></div>
      </v-col>

      <v-col cols="12" md="6" class="info-col text-center">
        <h2 class="section-title map-title">Aqueduto Eventos</h2>
        <p class="section-subtitle map-subtitle">
          Travessa Alto das Póvoas 96
          <br />
          Póvoa de Varzim
        </p>

        <v-btn
          class="map-btn mt-2 mb-4"
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
    height: 220px;
    background-image: url("../assets/images/Desenho.webp");
    background-size: contain;
    background-position: center;
    border-radius: 16px;

    @media (max-width: 600px) {
      height: 200px;
    }
  }

  .info-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
      margin-top: -15%;
    }

    @media (min-width: 960px) {
      align-items: flex-start;
      text-align: left;
      margin-top: 0;
    }
  }

  .map-title {
    margin-bottom: 0.75rem;
    text-align: center;

    @media (min-width: 960px) {
      text-align: left;
    }
  }

  .map-subtitle {
    text-align: center;

    @media (min-width: 960px) {
      text-align: left;
    }
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
}
</style>
