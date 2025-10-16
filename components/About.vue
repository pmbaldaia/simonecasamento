<template>
  <v-container fluid class="info-section py-12">
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="section-title">Informações do Casamento</h2>
      </v-col>

      <v-col cols="12" md="10" class="text-center">
        <v-row justify="center" align="center">
          <v-col cols="12" md="4" class="info-item">
            <v-icon color="#c5a46d" size="56">mdi-ring</v-icon>
            <p class="label">Cerimónia</p>
            <p class="time">14h30</p>
          </v-col>
          <v-col cols="12" md="4" class="info-item">
            <v-icon color="#c5a46d" size="56">mdi-weather-sunset</v-icon>
            <p class="label">Cocktail</p>
            <p class="time">16h30</p>
          </v-col>
          <v-col cols="12" md="4" class="info-item">
            <v-icon color="#c5a46d" size="56">mdi-silverware-fork-knife</v-icon>
            <p class="label">Jantar</p>
            <p class="time">20h00</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped lang="scss">
.info-section {
  background-color: #fffaf7;
  text-align: center;
  color: #3e3e3e;

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 2.5rem;
    color: #c5a46d;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .info-item {
    margin-bottom: 2rem;

    .label {
      font-family: "Playfair Display", serif;
      font-size: 1.4rem;
      margin-top: 0.5rem;
      color: #3e3e3e;
    }

    .time {
      font-size: 1.2rem;
      color: #8c8c8c;
    }
  }

  @media (max-width: 960px) {
    .section-title {
      font-size: 2rem;
    }

    .info-item .label {
      font-size: 1.2rem;
    }

    .info-item .time {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    .section-title {
      font-size: 1.6rem;
    }

    .info-item .label {
      font-size: 1.1rem;
    }

    .info-item .time {
      font-size: 0.95rem;
    }
  }
}
</style>
