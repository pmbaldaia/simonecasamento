<template>
  <v-container fluid class="info-section py-14">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="section-title mb-10">Cronograma do Casamento</h2>

        <div class="timeline-wrapper">
          <div class="timeline">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="timeline-item"
            >
              <div class="icon-circle">
                <v-icon :icon="item.icon" size="36"></v-icon>
              </div>
              <div class="time">{{ item.time }}</div>
              <div class="label">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const timeline = [
  { label: "Receção aos Convidados", time: "14h30", icon: "mdi-account-multiple-outline" },
  { label: "Cerimónia", time: "15h00", icon: "mdi-ring" },
  { label: "Cocktail", time: "16h30", icon: "mdi-glass-cocktail" },
  { label: "Jantar", time: "20h00", icon: "mdi-silverware-fork-knife" },
  { label: "Corte do Bolo", time: "23h00", icon: "mdi-cake-variant-outline" },
  { label: "Dança", time: "24h00", icon: "mdi-party-popper" },
];
</script>

<style scoped lang="scss">
.info-section {
  background: linear-gradient(180deg, #fffaf7 0%, #fff6f0 100%);
  color: #3e3e3e;
  text-align: center;

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #c5a46d;
    letter-spacing: 1px;
  }

  .timeline-wrapper {
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

  .timeline {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    min-width: max-content;
    padding: 0 1rem;
    transition: all 0.3s ease;
  }

  .timeline-item {
    background: #fff;
    border: 1px solid rgba(197, 164, 109, 0.25);
    border-radius: 1rem;
    padding: 2rem 1.25rem 2.25rem;
    width: 180px;
    min-width: 180px;
    box-shadow: 0 4px 10px rgba(197, 164, 109, 0.15);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      transform: translateY(-6px);
      border-color: #c5a46d;
      box-shadow: 0 10px 24px rgba(197, 164, 109, 0.25);
      background: linear-gradient(180deg, #fffdfb 0%, #fff7f0 100%);
    }

    .icon-circle {
      width: 90px;
      height: 90px;
      margin: 0 auto 1.25rem;
      border-radius: 50%;
      border: 3px solid #c5a46d;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #c5a46d;
      background: #fff;
      transition: all 0.3s ease;

      &:hover {
        background: #c5a46d;
        color: #fff;
      }
    }

    .time {
      font-family: "Playfair Display", serif;
      font-size: 1.8rem;
      color: #3e3e3e;
      margin-bottom: 0.35rem;
    }

    .label {
      font-weight: 500;
      color: #8c8c8c;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
    }
  }

  /* 🔸 Responsivo */
  @media (max-width: 960px) {
    .timeline-item {
      width: 160px;
      min-width: 160px;
      padding: 1.75rem 1rem 2rem;

      .icon-circle {
        width: 80px;
        height: 80px;
      }

      .time {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    .timeline {
      justify-content: flex-start;
      gap: 1.25rem;
    }

    .timeline-item {
      width: 140px;
      min-width: 140px;
    }
  }
}
</style>
