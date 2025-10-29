<template>
  <div class="home-parallax-container" :class="{ 'dark-bg': isScrolled }">
    <div
      class="parallax-background"
      :style="{ transform: parallaxTransform }"
      aria-hidden="true"
    >
      <v-img
        src="https://cdn.pixabay.com/photo/2017/03/21/18/43/couple-2162950_1280.jpg"
        :lazy-src="'https://cdn.pixabay.com/photo/2017/03/21/18/43/couple-2162950_640.jpg'"
        alt="Simone & João"
        cover
        :eager="false"
      />
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
              src="@/assets/images/aqueduto.png"
              alt="Ilustração Aqueduto"
              loading="lazy"
              decoding="async"
            />

            <h1 class="couple-names">
              <span class="name">Simone</span>
              <span class="ampersand">&</span>
              <span class="name">João</span>
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
                Simone · 936 691 881&nbsp;&nbsp;|&nbsp;&nbsp;João · 961 748 963
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-gif-container" aria-hidden="true">
        <div class="scroll-gif">
          <img alt="scroll" src="@/assets/images/scroll.gif" loading="lazy" decoding="async" />
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
    mq.addEventListener("change", (e) => (prefersReducedMotion.value = e.matches));
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
  height: 100vh;
  overflow: hidden;

  &.dark-bg {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.45)
    );
  }

  .music-player {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    z-index: 10;
    transition: opacity 0.3s;

    .play-btn {
      transition: transform 0.2s ease;
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

  .parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    z-index: 1;
    overflow: hidden;
    
    :deep(img), :deep(.v-img__img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
      will-change: transform;
      filter: saturate(0.95) contrast(0.95);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  .home-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 2rem;

    .banner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 980px;
      width: 100%;
      padding: 1.2rem;
      background: transparent;
    }

    .arch-card {
      position: relative;
      width: 100%;
      max-width: clamp(520px, 80vw, 760px);
      padding: 18px;
      z-index: 2;
    }

    .arch-inner {
      position: relative;
      background: rgba(255, 255, 255, 0.92);
      color: #4a3f35;
      border: 2px solid rgba(0, 0, 0, 0.06);
      border-bottom-width: 4px;
      border-radius: 520px 520px 18px 18px;
      padding: clamp(28px, 3vw, 36px) clamp(20px, 2.5vw, 28px)
        clamp(24px, 3vw, 32px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.8em;
      min-height: clamp(420px, 56vh, 560px);
      box-shadow: 0 18px 60px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    }

    .arch-inner::after {
      content: "";
      position: absolute;
      inset: 10px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 520px 520px 14px 14px;
      pointer-events: none;
    }

    .arch-illustration {
      width: clamp(92px, 12vw, 180px);
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
    }
    .arch-top-stroke path {
      fill: none;
      stroke: rgba(0, 0, 0, 0.1);
      stroke-width: 1.5;
    }

    .couple-names {
      font-family: "Giordano Gold Serif", serif;
      font-size: clamp(2.4rem, 4.2vw, 3.6rem);
      color: #8a3e1f;
      margin: 2px 0 8px;
      font-weight: 300;
      letter-spacing: 0.02em;
      background: linear-gradient(180deg, #cf8661 0%, #b55b36 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.1);
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.14),
        0 -1px 0 rgba(255, 255, 255, 0.32);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-style: normal;
    }

    .couple-names .name {
      font-style: normal;
    }

    .couple-names .ampersand {
      font-style: normal;
      font-size: 0.6em;
      line-height: 1;
      letter-spacing: 0.02em;
      opacity: 0.95;
      color: lightgrey
    }

    

    .intro-text {
      font-family: $heading-font-family;
      font-size: 1rem;
      letter-spacing: 0.04em;
      color: #635a53;
      margin: 0 0 14px;
    }

    .day-strong {
      font-family: $heading-font-family;
      color: #8a3e1f;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.06em;
      margin: 8px 0 10px;
    }

    .time {
      font-family: $heading-font-family;
      color: #6a625a;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin: 2px 0 4px;
    }

    .venue {
      font-family: $heading-font-family;
      color: #d07b43;
      font-size: 1.4rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin: 0 0 14px;
    }

    .rsvp {
      text-align: center;
      color: #6b6763;
      font-family: $heading-font-family;
      font-size: 0.95rem;
    }

    .rsvp-deadline {
      margin: 2px 0 8px;
      opacity: 0.9;
    }

    .contacts {
      letter-spacing: 0.06em;
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

@media screen and (max-width: 767px) {
  .music-player {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.3rem 0.4rem;
    gap: 0.3rem;

    .progress-bar {
      display: none;
    }

    .play-btn {
      width: 30px;
      height: 30px;

      v-icon {
        font-size: 18px !important;
      }
    }
  }

  .arch-card {
    max-width: 98vw;
  }

  .arch-inner {
    padding: 18px 12px 18px;
    border-radius: 420px 420px 16px 16px;
    min-height: 394px;
    gap: 1em;
  }
  .arch-inner::after {
    inset: 8px;
    border-radius: 420px 420px 12px 12px;
  }
  .arch-illustration {
    width: 84px;
    margin-bottom: 10px;
  }
  .couple-names {
    font-size: clamp(1.35rem, 5.2vw, 1.7rem);
    white-space: normal;
    gap: 0.25rem;
    letter-spacing: 0.005em;
    line-height: 1.05;
  }
  .couple-names .name {
    display: inline;
  }
  .couple-names {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    text-align: center;
  }
  .couple-names .ampersand {
    font-size: 0.7em;
  }
  
  .intro-text {
    font-size: 0.86rem;
    margin-bottom: 8px;
  }
  .day-strong {
    font-size: 0.86rem;
  }
  .time {
    font-size: 0.78rem;
    letter-spacing: 0.1em;
  }
  .venue {
    font-size: 0.98rem;
  }
  .rsvp {
    font-size: 0.86rem;
  }
  .contacts {
    letter-spacing: 0.04em;
  }
  .scroll-gif-container {
    bottom: 1.2rem;
  }
  .scroll-gif-container .scroll-gif {
    width: 54px;
  }
}

@media screen and (max-width: 768px) {
  .arch-card {
    max-width: 680px;
  }
  .arch-inner {
    padding: 32px 24px 28px;
    min-height: 500px;
    gap: 1.2em;
    border-radius: 480px 480px 18px 18px;
  }
  .arch-inner::after {
    inset: 9px;
    border-radius: 480px 480px 14px 14px;
  }
  .arch-top-stroke {
    width: 66%;
  }
}

@media (max-width: 420px) {
  .home-parallax-container .banner-wrapper {
    padding: 0.8rem;
  }
  .home-parallax-container .scroll-gif-container {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-parallax-container .scroll-gif {
    animation: none !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .arch-card {
    max-width: 680px;
  }
  .arch-inner {
    padding: 32px 24px 28px;
    min-height: 500px;
    border-radius: 480px 480px 18px 18px;
  }
  .arch-inner::after {
    inset: 9px;
    border-radius: 480px 480px 14px 14px;
  }
  .arch-top-stroke {
    width: 66%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  .arch-card {
    max-width: 740px;
  }
  .arch-inner {
    min-height: 520px;
  }
}

@media screen and (min-width: 1440px) {
  .arch-card {
    max-width: 860px;
  }
  .arch-inner {
    padding: 40px 32px 34px;
    min-height: 580px;
    border-radius: 560px 560px 20px 20px;
  }
  .arch-inner::after {
    inset: 12px;
    border-radius: 560px 560px 16px 16px;
  }
  .arch-illustration {
    width: 200px;
  }
  .arch-top-stroke {
    width: 58%;
    height: 38px;
  }
  .couple-names {
    font-size: 4rem;
  }
}
</style>
