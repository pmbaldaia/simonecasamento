<template>
  <v-container fluid class="map-section py-12">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="section-title">Onde Celebramos</h2>
        <p class="address">Travessa Alto das Póvoas 96</p>
        <p class="city">Póvoa de Varzim</p>
        <p class="coordinates">41.422609680721095, -8.730484099999998</p>
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
  text-align: center;
  padding-inline: 1.5rem;

  .section-title {
    font-family: vars.$heading-font-family;
    font-size: 2.8rem;
    color: vars.$gold-color;
    margin-bottom: 2rem;
    line-height: 1.2;
    font-weight: 600;
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

  .coordinates {
    font-family: vars.$body-font-family;
    font-size: 0.95rem;
    color: #777;
    margin-bottom: 2rem;
  }

  .map-btn {
    background-color: vars.$gold-color;
    color: vars.$white-color;
    font-family: vars.$heading-font-family;
    font-weight: 500;
    padding: 0.75rem 2.5rem;
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: color.adjust(vars.$gold-color, $lightness: -15%);
    }
  }

  @media (max-width: 960px) {
    .section-title {
      font-size: 2.2rem;
    }

    .address {
      font-size: 1.25rem;
    }

    .city {
      font-size: 1rem;
    }

    .coordinates {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 1.8rem;
    }

    .address {
      font-size: 1.1rem;
    }

    .city {
      font-size: 0.95rem;
    }

    .coordinates {
      font-size: 0.85rem;
    }
  }
}
</style>
