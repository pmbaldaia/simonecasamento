<template>
  <v-container fluid class="alojamento-section py-12">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="section-title mb-10">Sugestões de Alojamento</h2>

        <v-row class="alojamento-grid" justify="center" align="stretch" dense>
          <v-col
            v-for="(hotel, index) in alojamentos"
            :key="index"
            cols="12"
            md="6"
            class="mb-6"
          >
            <v-card class="alojamento-card" elevation="3">
              <div class="alojamento-content">
                <div class="info">
                  <h3 class="hotel-nome">Sugestão {{ index + 1 }}</h3>
                  <p class="hotel-endereco">{{ hotel.nome }}</p>
                  <v-btn
                    :href="hotel.link"
                    target="_blank"
                    color="#c5a46d"
                    variant="tonal"
                    class="mt-2"
                  >
                    Ver Alojamento
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const alojamentos = [
  {
    nome: "Hotel Axis Vermar Conference & Beach Hotel",
    link: "https://www.axishoteis.com/axis-vermar.html",
  },
  {
    nome: "Grande Hotel da Póvoa",
    link: "https://www.grandehoteldapovoa.com/",
  },
  { nome: "Hotel Contriz", link: "http://hotel-contriz.com.es/" },
];
</script>

<style scoped lang="scss">
.alojamento-section {
  background: linear-gradient(180deg, #fffaf7 0%, #fff6f0 100%);
  color: #3e3e3e;
  text-align: center;

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    color: #c5a46d;
  }

  .alojamento-card {
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(197, 164, 109, 0.15);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 18px rgba(197, 164, 109, 0.25);
    }

    .hotel-nome {
      font-family: "Playfair Display", serif;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }

    .hotel-endereco {
      font-size: 1rem;
      color: #8c8c8c;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 960px) {
    .alojamento-card {
      .hotel-nome {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
