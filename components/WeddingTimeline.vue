<template>
  <section class="timeline-section">
    <v-container>
      <h2 class="section-title">Cronograma do Casamento</h2>

      <div class="timeline">
        <div class="timeline-line"></div>

        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-step"
        >
          <div class="icon">
            <v-icon :icon="item.icon" size="28"></v-icon>
          </div>
          <div class="time">{{ item.time }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
const timeline = [
  {
    label: "Receção aos Convidados",
    time: "14h30",
    icon: "mdi-account-multiple-outline",
  },
  { label: "Cerimónia", time: "15h00", icon: "mdi-ring" },
  { label: "Cocktail", time: "16h30", icon: "mdi-glass-cocktail" },
  { label: "Jantar", time: "20h00", icon: "mdi-silverware-fork-knife" },
  { label: "Corte do Bolo", time: "23h00", icon: "mdi-cake-variant-outline" },
  { label: "Dança", time: "00h00", icon: "mdi-party-popper" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.timeline-section {
  background: vars.$offwhite-color;
  text-align: center;
}

.section-title {
  font-family: vars.$heading-font-family;
  font-size: 2.4rem;
  color: vars.$gold-color;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4rem;
}

/* --- Timeline principal --- */
.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

/* --- Linha dourada contínua --- */
.timeline-line {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  height: 2px;
  background: vars.$gold-color;
  opacity: 0.25;
  z-index: 0;
}

/* --- Step uniforme --- */
.timeline-step {
  position: relative;
  z-index: 1;
  background: transparent;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  text-align: center;
  padding: 0 1rem;

  .icon {
    width: 70px;
    height: 70px;
    border: 2px solid vars.$gold-color;
    border-radius: 50%;
    background: vars.$white-color;
    color: vars.$gold-color;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: vars.$gold-color;
      color: vars.$white-color;
    }
  }

  .time {
    font-family: vars.$heading-font-family;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .label {
    font-family: vars.$body-font-family;
    font-size: 0.9rem;
    color: vars.$muted-gray;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

/* --- Responsivo --- */
@media (max-width: 900px) {
  .timeline {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0rem;
  }

  .timeline-line {
    display: none;
  }

  .timeline-step {
    flex: 1 1 45%;
    min-width: 160px;
    padding: 1.5rem 0;
  }
}

@media (max-width: 600px) {
  .timeline {
    flex-direction: column;
    align-items: center;
  }

  .timeline-step {
    width: 100%;
    max-width: 320px;
  }

  .timeline-line {
    display: none;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
