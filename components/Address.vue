<template>
  <v-container fluid class="map-section pb-0 pt-0">
    <v-row class="map-row" align="center" justify="space-between" no-gutters>
      <v-col cols="12" md="4" class="info-col text-left">
        <h2 class="section-title ceremony-title">
          Cerimónia
          <br />
          <span class="ceremony-de">de</span> Casamento
        </h2>
        <p class="section-subtitle ceremony-subtitle">
          Sábado, 11 de julho de 2026
        </p>
        <div class="section-subtitle countdown">
          <div class="countdown-unit">
            <transition name="countdown-flip">
              <div class="countdown-card" :key="paddedDays">
                <span class="countdown-number">{{ paddedDays }}</span>
              </div>
            </transition>
            <span class="countdown-label">DIAS</span>
          </div>
          <div class="countdown-unit">
            <transition name="countdown-flip">
              <div class="countdown-card" :key="paddedHours">
                <span class="countdown-number">{{ paddedHours }}</span>
              </div>
            </transition>
            <span class="countdown-label">HORAS</span>
          </div>
          <div class="countdown-unit">
            <transition name="countdown-flip">
              <div class="countdown-card" :key="paddedMinutes">
                <span class="countdown-number">{{ paddedMinutes }}</span>
              </div>
            </transition>
            <span class="countdown-label">MIN</span>
          </div>
          <div class="countdown-unit">
            <transition name="countdown-flip">
              <div class="countdown-card" :key="paddedSeconds">
                <span class="countdown-number">{{ paddedSeconds }}</span>
              </div>
            </transition>
            <span class="countdown-label">SEG</span>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="image-col">
        <div class="map-image"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, computed } from "vue";

const targetDate = new Date("2026-07-11T15:00:00");

const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    countdown.days = 0;
    countdown.hours = 0;
    countdown.minutes = 0;
    countdown.seconds = 0;

    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }

    return;
  }

  countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdown.hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  countdown.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
}

const paddedDays = computed(() =>
  String(countdown.days).padStart(2, "0")
);
const paddedHours = computed(() =>
  String(countdown.hours).padStart(2, "0")
);
const paddedMinutes = computed(() =>
  String(countdown.minutes).padStart(2, "0")
);
const paddedSeconds = computed(() =>
  String(countdown.seconds).padStart(2, "0")
);

let timerId;

onMounted(() => {
  updateCountdown();
  timerId = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  if (timerId) {
    window.clearInterval(timerId);
  }
});
</script>

<style scoped lang="scss">
@use "@/assets/scss/_variables.scss" as vars;

.map-section {
  background-color: vars.$offwhite-color;
  padding-inline: 0;

  .map-row {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .image-col {
    display: flex;
    justify-content: flex-end;
  }

  .map-image {
    width: 100%;
    min-height: 500px;
    margin-left: calc(50% - 50vw);
    margin-right: 0;
    background-image: url("@/assets/images/1U9A9624.webp");
    background-size: cover;
    background-position: center;
  }

  .info-col {
    position: relative;
    z-index: 2;
    padding: 1rem;
    opacity: 1;
  }

  .ceremony-title {
    margin-bottom: 0.75rem;
    text-align: left;
  }

  .ceremony-de {
    font-family: vars.$secondary-font-family;
    font-style: italic;
    letter-spacing: 0.05em;
  }

  .ceremony-subtitle {
    text-align: left;
    font-size: 2rem;
  }

  .countdown {
    margin-top: 1rem;
    display: inline-flex;
    align-items: flex-end;
    gap: 0.9rem;
    text-align: left;
  }

  .countdown-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    min-width: 64px;
  }

  .countdown-card {
    position: relative;
    width: 64px;
    height: 78px;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 800px;
    transform-style: preserve-3d;
    transform-origin: center center;
  }

  .countdown-card::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }

  .countdown-card::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -6px;
    right: -6px;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }

  .countdown-number {
    font-family: vars.$heading-font-family;
    font-size: 2.1rem;
    font-weight: 600;
    color: vars.$text-color;
    line-height: 1;
    display: block;
    transform-origin: center center;
    backface-visibility: hidden;
  }

  .countdown-label {
    font-family: vars.$body-font-family;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: vars.$soft-gray;
  }

  .countdown-flip-enter-active {
    animation: countdown-flip-in 0.5s cubic-bezier(0.25, 0.15, 0.1, 1);
  }

  .countdown-flip-leave-active {
    display: none;
  }

  @keyframes countdown-flip-in {
    0% {
      transform: rotateX(90deg);
      opacity: 0;
    }
    50% {
      transform: rotateX(-10deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding-inline: 0;

    .map-row {
      justify-content: center;
      text-align: center;
    }

    .info-col {
      padding: 2.75rem 1rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .ceremony-title,
    .ceremony-subtitle {
      text-align: center;
    }

    .map-image {
      min-height: 220px;
      width: 100vw;
      margin-left: calc(50% - 50vw);
      margin-right: calc(50% - 50vw);
      border-radius: 0;
      box-shadow: none;
    }
  }

  @media (max-width: 960px) {
    .map-image {
      min-height: 400px;
    }
  }
}
</style>
