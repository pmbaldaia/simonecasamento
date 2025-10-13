<template>
  <v-container fluid class="wedding-info-container portfolio-container">
    <div id="wedding-info" class="px-4">
      <div class="info-wrapper" data-aos="fade-up">
        <div class="section-title">Informações do Casamento</div>
        <div class="icons-row text-center mb-6">
          <div class="icon-item">
            <v-icon size="48" color="#d4af37">mdi-ring</v-icon>
            <p class="label">Cerimónia</p>
            <p class="time">16h00</p>
          </div>
          <div class="icon-item">
            <v-icon size="48" color="#d4af37">mdi-weather-sunset</v-icon>
            <p class="label">Sunset</p>
            <p class="time">18h30</p>
          </div>
          <div class="icon-item">
            <v-icon size="48" color="#d4af37">mdi-silverware-fork-knife</v-icon>
            <p class="label">Jantar</p>
            <p class="time">20h00</p>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.wedding-info-container {
  color: #232020;
  padding: 3rem 0;

  .info-wrapper {
    max-width: 800px;
    margin: 0 auto;

    .section-title {
      font-family: $heading-font-family;
      font-size: 2.5rem;
      color: #d4af37;
      text-align: center;
      margin-bottom: 2rem;
    }

    .icons-row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 2rem;

      .icon-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;

        .label {
          margin-top: 0.5rem;
          font-family: $heading-font-family;
          font-size: 1.3rem;
          color: #232020;
        }

        .time {
          margin-top: 0.25rem;
          font-family: $body-font-family;
          font-size: 1.1rem;
          color: #999999;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .info-wrapper .section-title {
      font-size: 1.5rem;
    }
    .icons-row .icon-item {
      margin: 0.75rem;
    }
    .icons-row .icon-item .label {
      font-size: 1.1rem;
    }
    .icons-row .icon-item .time {
      font-size: 1rem;
    }
  }
}
</style>
