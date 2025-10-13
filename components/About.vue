<template>
  <v-container fluid class="wedding-info-container portfolio-container">
    <div id="wedding-info" class="px-4">
      <div class="info-wrapper" data-aos="fade-up">
        <div class="section-title">Informações do Casamento</div>
        <div class="details text-center mb-6">
          <p class="date">12 de Abril de 2026</p>
          <p class="time">Cerimónia: 16h00</p>
          <p class="location">Sítio Bela Vista • Lisboa</p>
        </div>
        <div class="note text-center" data-aos="fade-up">
          <p>
            Traje: Formal / Cocktail <br />
            Por favor, confirme a sua presença através do botão RSVP.
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "WeddingInfo",
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.wedding-info-container {
  color: $text-color;
  padding: 3rem 0;

  .info-wrapper {
    max-width: 800px;
    margin: 0 auto;

    .section-title {
      font-family: $heading-font-family;
      font-size: 2.5rem;
      color: $gold-color;
      text-align: center;
      margin-bottom: 2rem;
    }

    .details {
      font-family: $heading-font-family;
      font-size: 1.5rem;
      margin-bottom: 2rem;

      p {
        margin: 0.5rem 0;
      }

      .date {
        color: $gold-color;
        font-weight: 600;
        font-size: 2rem;
      }

      .time {
        color: $text-color;
      }

      .location {
        color: $text-color;
        font-style: italic;
      }
    }

    .note {
      font-family: $body-font-family;
      font-size: 1.2rem;
      color: $muted-gray;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 767px) {
    .section-title {
      font-size: 2rem;
    }
    .details p {
      font-size: 1.2rem;
    }
    .note {
      font-size: 1rem;
    }
  }
}
</style>
