<template>
  <div class="home-parallax-container" :class="{ 'dark-bg': isScrolled }">
    <div
      class="parallax-background"
      :style="{ transform: parallaxTransform }"
      aria-hidden="true"
    >
      <img src="../assets/images/1U9A9624.JPG" alt="Simone & João" />
      <div class="overlay"></div>
    </div>

    <div class="home-content">
      <div class="banner-wrapper">
        <div class="arch-card" data-aos="fade-up" data-aos-duration="900">
          <div class="arch-inner">
            <svg
              class="arch-top-stroke"
              viewBox="0 0 100 50"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,50 A50,50 0 0 1 100,50" />
            </svg>
            <img
              class="arch-illustration"
              src="@/assets/images/quinta.png"
              alt="Ilustração Quinta"
              loading="lazy"
              decoding="async"
            />

            <h1 class="couple-names">
              <span class="name">Simone &</span>
              <span class="name">João Pedro</span>
            </h1>

            <p class="intro-text">
              É com muita alegria que vos convidamos<br />
              para o nosso casamento
            </p>

            <p class="day-strong">Sábado, 11 de julho de 2026</p>

            <p class="time">Pelas 14h30 no</p>
            <p class="venue">Aqueduto Eventos</p>

            <div class="rsvp">
              <p class="rsvp-deadline">
                Agradecemos confirmação até 30 de abril de 2026
              </p>
              <p class="contacts">
                Simone · 936 691 881&nbsp;&nbsp;|&nbsp;&nbsp;João Pedro · 961
                748 963
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-gif-container" aria-hidden="true">
        <div class="scroll-gif">
          <img
            alt="scroll"
            src="@/assets/images/scroll.gif"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <div class="music-player" v-show="showPlayer">
      <v-btn
        variant="text"
        icon
        size="small"
        class="play-btn"
        @click="togglePlay"
      >
        <v-icon size="26" color="white">
          {{ isPlaying ? "mdi-pause" : "mdi-play" }}
        </v-icon>
      </v-btn>

      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>

      <audio ref="audio" src="/audio/ordinary.mp3"></audio>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useDisplay } from "vuetify";

const scrollY = ref(0);
const isScrolled = ref(false);
const audio = ref(null);
const isPlaying = ref(false);
const progress = ref(0);
const showPlayer = ref(true);
const prefersReducedMotion = ref(false);

const { mobile } = useDisplay();

const parallaxTransform = computed(() => {
  if (prefersReducedMotion.value) return "translateY(0px)";
  const factor = mobile.value ? 0.25 : 0.5;
  return `translateY(${scrollY.value * factor}px)`;
});

let ticking = false;
function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const y = window.scrollY;
      scrollY.value = y;
      isScrolled.value = y > 40;
      showPlayer.value = y < Math.max(360, window.innerHeight * 0.65);
      ticking = false;
    });
    ticking = true;
  }
}

function togglePlay() {
  if (!audio.value) return;
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
}

onMounted(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = mq.matches;
  if (mq.addEventListener) {
    mq.addEventListener(
      "change",
      (e) => (prefersReducedMotion.value = e.matches)
    );
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  const el = audio.value;
  if (el) {
    el.addEventListener("play", () => (isPlaying.value = true));
    el.addEventListener("pause", () => (isPlaying.value = false));
    el.addEventListener("timeupdate", () => {
      progress.value = (el.currentTime / el.duration) * 100 || 0;
    });
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.home-parallax-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  &.dark-bg {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.45)
    );
  }

  /* --- PLAYER DE MÚSICA --- */
  .music-player {
    position: fixed;
    bottom: 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0.8rem;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    z-index: 10;
    transition: opacity 0.3s;

    .play-btn {
      transition: transform 0.2s ease;
      width: 34px;
      height: 34px;
      &:hover {
        transform: scale(1.15);
      }
    }

    .progress-bar {
      width: 110px;
      height: 4px;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 3px;
      overflow: hidden;

      .progress {
        height: 100%;
        background: #f1c40f;
        transition: width 0.2s linear;
      }
    }
  }

  /* --- PARALLAX --- */
  .parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    z-index: 1;
    overflow: hidden;

    :deep(img),
    :deep(.v-img__img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      will-change: transform;
      filter: saturate(0.95) contrast(0.95);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  /* --- CONTEÚDO PRINCIPAL --- */
  .home-content {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;

    .banner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 960px;
      width: 100%;
    }

    .arch-card {
      position: relative;
      width: 100%;
      max-width: clamp(480px, 80vw, 760px);
      padding: 10px;
      z-index: 2;
    }

    .arch-inner {
      position: relative;
      background: rgba(255, 255, 255, 0.92);
      color: #4a3f35;
      border: 2px solid rgba(0, 0, 0, 0.06);
      border-bottom-width: 4px;
      border-radius: 520px 520px 18px 18px;
      padding: clamp(24px, 3vw, 36px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6em;
      min-height: clamp(420px, 56vh, 560px);
      box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    }

    .arch-inner::after {
      content: "";
      position: absolute;
      inset: 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: inherit;
      pointer-events: none;
    }

    .arch-illustration {
      width: clamp(92px, 12vw, 160px);
      margin: 0 auto 18px;
      display: block;
    }

    .arch-top-stroke {
      position: absolute;
      top: 10px;
      left: 50%;
      width: 62%;
      height: 34px;
      transform: translateX(-50%);
      pointer-events: none;

      path {
        fill: none;
        stroke: rgba(0, 0, 0, 0.1);
        stroke-width: 1.5;
      }
    }

    .couple-names {
      font-family: "Giordano Gold Serif", serif;
      font-size: clamp(1.8rem, 5vw, 3rem);
      color: transparent;
      background: linear-gradient(180deg, #cf8661 0%, #b55b36 100%);
      -webkit-background-clip: text;
      -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.1);
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.14),
        0 -1px 0 rgba(255, 255, 255, 0.32);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.15rem;
    }

    .intro-text,
    .day-strong,
    .time,
    .venue,
    .rsvp {
      font-family: $heading-font-family;
      color: #635a53;
      line-height: 1.4;
    }

    .intro-text {
      font-size: clamp(0.9rem, 2vw, 1rem);
      margin-bottom: 0.6rem;
    }

    .day-strong {
      color: #8a3e1f;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.06em;
      margin: 6px 0 10px;
    }

    .time {
      color: #6a625a;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 0.9rem;
      margin: 4px 0;
    }

    .venue {
      color: #d07b43;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin: 0 0 12px;
    }

    .rsvp {
      font-size: 0.9rem;
      color: #6b6763;
      text-align: center;

      .rsvp-deadline {
        margin-bottom: 6px;
        opacity: 0.9;
      }
    }

    .scroll-gif-container {
      position: absolute;
      bottom: 2rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .scroll-gif {
        width: 70px;
        animation: bounce 2s infinite ease-in-out;

        img {
          width: 100%;
          display: block;
        }
      }
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}

/* --- MOBILE PEQUENO (iPhone SE, <360px) --- */
@media screen and (max-width: 360px) {
  .home-parallax-container {
    min-height: 100vh;
    overflow: visible;

    .parallax-background {
      height: 110%;
      img {
        object-position: center top;
      }
    }

    .home-content {
      padding: 0.8rem;

      .arch-card {
        max-width: 94vw;
      }

      .arch-inner {
        padding: 18px 14px;
        border-radius: 320px 320px 12px 12px;
        min-height: auto;
        gap: 0.7em;
      }

      .arch-illustration {
        width: 70px;
        margin-bottom: 8px;
      }

      .couple-names {
        font-size: 1.3rem;
      }
      .intro-text,
      .day-strong,
      .time,
      .venue,
      .rsvp {
        font-size: 0.85rem;
      }
    }

    .music-player {
      bottom: 0.4rem;
      .progress-bar {
        display: none;
      }
    }

    .scroll-gif-container {
      display: none;
    }
  }
}

/* --- TABLET --- */
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .arch-card {
    max-width: 680px;
  }
  .arch-inner {
    padding: 32px 24px 28px;
    min-height: 480px;
    border-radius: 460px 460px 18px 18px;
  }
  .arch-illustration {
    width: 140px;
  }
}

/* --- LAPTOP MÉDIO --- */
@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .arch-card {
    max-width: 740px;
  }
  .arch-inner {
    min-height: 520px;
  }
  .arch-illustration {
    width: 160px;
  }
}

/* --- DESKTOP GRANDE --- */
@media screen and (min-width: 1440px) {
  .arch-card {
    max-width: 860px;
  }
  .arch-inner {
    padding: 40px 32px 34px;
    min-height: 580px;
    border-radius: 560px 560px 20px 20px;
  }
  .arch-illustration {
    width: 200px;
  }
  .couple-names {
    font-size: 3.5rem;
  }
}
</style>
