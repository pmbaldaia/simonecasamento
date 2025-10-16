<template>
  <v-container fluid class="map-section py-12">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="section-title">Localização</h2>
        <p class="section-description">
          O nosso casamento será na <strong>Quinta do Aqueduto</strong>, Póvoa
          de Varzim. Consulta o mapa abaixo para saber como chegar.
        </p>
      </v-col>

      <v-col cols="12" md="10" class="d-flex justify-center">
        <v-card
          elevation="10"
          rounded="xl"
          style="overflow: hidden; width: 100%; max-width: 900px"
        >
          <iframe
            class="map-iframe"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4324.048877848509!2d-8.733059022888764!3d41.42241657129543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2445f3c5a348f9%3A0x2e0e4641546d755d!2sAqueduto%20Eventos!5e1!3m2!1spt-PT!2spt!4v1760612905750!5m2!1spt-PT!2spt"
          ></iframe>
          <p class="address">
            <strong>Morada:</strong> Travessa Alto das Póvoas 96, Póvoa de
            Varzim
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" class="text-center mt-6">
        <v-btn
          class="map-btn"
          rounded="xl"
          size="large"
          href="https://maps.app.goo.gl/ysJ65kacnqPFDSra6"
          target="_blank"
        >
          Ver no Google Maps
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
    font-size: 2.5rem;
    color: vars.$gold-color;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .section-description,
  .address {
    font-family: vars.$body-font-family;
    color: #5a5a5a;
    max-width: 600px;
    margin: 0 auto 1rem;
  }

  .section-description {
    font-size: 1.1rem;
  }

  .address {
    font-size: 1rem;
  }

  .map-iframe {
    width: 100%;
    height: 450px;
    border: 0;
  }

  .map-btn {
    background-color: vars.$gold-color;
    color: vars.$white-color;
    font-family: vars.$heading-font-family;
    font-weight: 500;
    padding: 0.75rem 2rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: color.adjust(vars.$gold-color, $lightness: -15%);
    }
  }

  @media (max-width: 960px) {
    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1rem;
    }

    .address {
      font-size: 0.95rem;
    }

    .map-iframe {
      height: 360px;
    }
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 1.6rem;
    }

    .section-description {
      font-size: 0.95rem;
    }

    .address {
      font-size: 0.9rem;
    }

    .map-iframe {
      height: 300px;
    }
  }
}
</style>
