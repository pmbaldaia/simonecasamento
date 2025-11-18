<template>
  <section class="timeline-section">
    <v-container>
      <div class="timeline">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-step"
        >
          <div class="icon">
            <v-icon :icon="item.icon" size="20" />
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
  { label: "Receção", time: "14h30", icon: "mdi-account-multiple-outline" },
  { label: "Cerimónia", time: "15h00", icon: "mdi-ring" },
  { label: "Cocktail", time: "16h30", icon: "mdi-glass-cocktail" },
  { label: "Jantar", time: "20h00", icon: "mdi-silverware-fork-knife" },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.timeline-section {
  background: vars.$copper-dark;
  text-align: center;
  color: vars.$white-color;
  padding: 4rem 0; /* mais padding top e bottom */
}

.timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  flex-wrap: nowrap;
}

.timeline-step {
  position: relative;
  background: transparent;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  text-align: center;
  padding: 0 1rem;
}

.icon {
  width: 66px;
  height: 66px;
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  background: transparent;
  color: vars.$white-color;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.2s ease;
}

.icon:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.time {
  font-family: vars.$heading-font-family;
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  color: vars.$white-color;
}

.label {
  font-family: vars.$body-font-family;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.95);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* tablet */
@media (max-width: 900px) {
  .timeline {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .timeline-step {
    flex: 1 1 45%;
    min-width: 160px;
  }
}

/* mobile SEM SLIDE */
@media (max-width: 600px) {
  .timeline {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    overflow: visible; /* remove slide */
  }

  .timeline-step {
    width: 100%;
    max-width: 260px;
  }
}
</style>
