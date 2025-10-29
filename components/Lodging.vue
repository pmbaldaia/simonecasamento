<template>
  <v-container fluid class="alojamento-section py-14">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="section-title mb-10">Sugestões de Alojamento</h2>

        <div class="alojamento-wrapper">
          <div class="alojamento-list">
            <div
              v-for="(hotel, index) in alojamentos"
              :key="index"
              class="alojamento-card"
            >
              <h3 class="hotel-nome">Sugestão {{ index + 1 }}</h3>
              <p class="hotel-endereco">{{ hotel.nome }}</p>
              <v-btn
                :href="hotel.link"
                target="_blank"
                color="#c5a46d"
                variant="tonal"
                class="ver-btn"
              >
                Ver Alojamento
              </v-btn>
            </div>
          </div>
        </div>
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
  {
    nome: "Hotel Contriz",
    link: "http://hotel-contriz.com.es/",
  },
];
</script>

<style scoped lang="scss">
.alojamento-section {
  background: linear-gradient(180deg, #fffaf7 0%, #fff6f0 100%);
  color: #3e3e3e;
  text-align: center;

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #c5a46d;
    letter-spacing: 1px;
  }

  .alojamento-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #c5a46d #fffaf7;
    padding-bottom: 1rem;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: #c5a46d;
      border-radius: 3px;
    }
  }

  .alojamento-list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    min-width: max-content;
    padding: 0 1rem;
    transition: all 0.3s ease;
  }

  .alojamento-card {
    background: #ffffff;
    border: 1px solid rgba(197, 164, 109, 0.25);
    border-radius: 1.25rem;
    padding: 2rem 1.75rem;
    min-width: 260px;
    width: 260px;
    box-shadow: 0 6px 18px rgba(197, 164, 109, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 28px rgba(197, 164, 109, 0.25);
      background: linear-gradient(180deg, #fffdfb 0%, #fff7f0 100%);
    }

    .hotel-nome {
      font-family: "Playfair Display", serif;
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #3e3e3e;
    }

    .hotel-endereco {
      font-size: 1rem;
      color: #8c8c8c;
      line-height: 1.4;
      margin-bottom: 1rem;
    }

    .ver-btn {
      text-transform: none;
      font-weight: 500;
      border-radius: 9999px;
      padding: 0.5rem 1.25rem;
      transition: all 0.3s ease;
      margin-top: auto;
      align-self: center;

      &:hover {
        background-color: #c5a46d !important;
        color: #fff !important;
      }
    }
  }

  @media (max-width: 960px) {
    .alojamento-list {
      justify-content: flex-start;
      gap: 1.5rem;
    }

    .alojamento-card {
      width: 220px;
      min-width: 220px;
      padding: 1.75rem 1.25rem;

      .hotel-nome {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 600px) {
    .alojamento-card {
      width: 200px;
      min-width: 200px;
      padding: 1.5rem 1rem;

      .hotel-nome {
        font-size: 1.1rem;
      }

      .ver-btn {
        font-size: 0.85rem;
      }
    }
  }
}
</style>
