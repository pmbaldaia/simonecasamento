<template>
  <v-container fluid class="info-section py-4">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="section-title mb-10">Cronograma do Casamento</h2>

        <div class="timeline">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="timeline-item"
            :class="{ 'timeline-item--right': index % 2 !== 0 }"
          >
            <div class="content-box">
              <p class="label">{{ item.label }}</p>
              <p class="time">{{ item.time }}</p>
            </div>

            <div class="icon-wrapper">
              <v-icon size="36">{{ item.icon }}</v-icon>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const timeline = [
  {
    label: "Receção aos Convidados",
    time: "14h30",
    icon: "mdi-account-group-outline",
  },
  { label: "Cerimónia", time: "15h00", icon: "mdi-flower-outline" },
  { label: "Cocktail", time: "16h30", icon: "mdi-glass-wine" },
  { label: "Jantar", time: "20h00", icon: "mdi-silverware" },
  { label: "Corte do Bolo", time: "23h00", icon: "mdi-cake-variant-outline" },
  { label: "Dança", time: "24h00", icon: "mdi-music-note-outline" },
];
</script>

<style scoped lang="scss">
.info-section {
  background: linear-gradient(180deg, #fffaf7 0%, #fff6f0 100%);
  color: #3e3e3e;
  text-align: center;

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    color: #c5a46d;
  }

  .timeline {
    position: relative;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: rgba(197, 164, 109, 0.3);
      left: 50%;
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 1rem 0;

      .content-box {
        background: #fff;
        border: 2px solid #c5a46d;
        border-radius: 1rem;
        padding: 1.5rem 2rem;
        width: 40%;
        text-align: right;
        box-shadow: 0 4px 10px rgba(197, 164, 109, 0.15);
        transition: all 0.3s ease;

        .label {
          font-family: "Playfair Display", serif;
          font-size: 1.3rem;
          color: #3e3e3e;
          margin: 0;
        }

        .time {
          font-size: 1rem;
          color: #8c8c8c;
          margin-top: 0.2rem;
        }

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(197, 164, 109, 0.25);
        }
      }

      .icon-wrapper {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border: 3px solid #c5a46d;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        box-shadow: 0 4px 10px rgba(197, 164, 109, 0.25);
        transition: all 0.3s ease;

        .v-icon {
          color: #c5a46d;
        }

        &:hover {
          background-color: #c5a46d;

          .v-icon {
            color: #fff;
          }
        }
      }

      &--right {
        justify-content: flex-start;

        .content-box {
          text-align: left;
        }
      }
    }

    @media (max-width: 960px) {
      .timeline-item {
        margin: 2rem 0;

        .content-box {
          width: 35%;
          padding: 1.2rem;

          .label {
            font-size: 1rem;
          }
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
        }
      }
    }

    @media (max-width: 600px) {
      .timeline-item {
        .content-box {
          width: 35%;
          padding: 1rem;

          .label {
            font-size: 1rem;
          }
        }

        .icon-wrapper {
          width: 55px;
          height: 55px;
        }
      }
    }
  }
}
</style>
