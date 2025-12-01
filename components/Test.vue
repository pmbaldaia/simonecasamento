<template>
  <div class="home-parallax-container" :class="{ 'dark-bg': isScrolled }">
    <div
      class="parallax-background"
      :style="{ transform: parallaxTransform }"
      aria-hidden="true"
    >
      <img src="@/assets/images/1U9A9605.webp" alt="Simone & João" />
      <div class="overlay"></div>
    </div>

    <div class="home-content">
      <div class="banner-wrapper">
        <h1 class="couple-names">
          <span class="name">
            Simone
            <img
              class="name-amp"
              src="@/assets/images/&.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
          </span>
          <span class="name">João Pedro</span>
        </h1>
      </div>

      <div class="intro-bottom" aria-hidden="false">
        <p class="intro-text">
          É com muita alegria que vos convidamos<br />
          para o nosso casamento
        </p>
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
        <v-icon size="26" color="white">{{
          isPlaying ? "mdi-pause" : "mdi-play"
        }}</v-icon>
      </v-btn>

      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>

      <audio ref="audio" src="/audio/ordinary.mp3" preload="metadata"></audio>
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
let mq = null;
let audioEl = null;
let onMqChange = null;

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
  mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = mq.matches;
  onMqChange = (e) => (prefersReducedMotion.value = e.matches);
  if (mq.addEventListener) {
    mq.addEventListener("change", onMqChange);
  } else if (mq.addListener) {
    mq.addListener(onMqChange);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  audioEl = audio.value;
  if (audioEl) {
    const onPlay = () => (isPlaying.value = true);
    const onPause = () => (isPlaying.value = false);
    const onTime = () => {
      progress.value = (audioEl.currentTime / audioEl.duration) * 100 || 0;
    };
    audioEl.addEventListener("play", onPlay);
    audioEl.addEventListener("pause", onPause);
    audioEl.addEventListener("timeupdate", onTime);
    audioEl.__onPlay = onPlay;
    audioEl.__onPause = onPause;
    audioEl.__onTime = onTime;
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);

  if (mq) {
    if (mq.removeEventListener) {
      mq.removeEventListener("change", onMqChange);
    } else if (mq.removeListener) {
      mq.removeListener(onMqChange);
    }
  }

  if (audioEl) {
    if (audioEl.__onPlay) audioEl.removeEventListener("play", audioEl.__onPlay);
    if (audioEl.__onPause)
      audioEl.removeEventListener("pause", audioEl.__onPause);
    if (audioEl.__onTime)
      audioEl.removeEventListener("timeupdate", audioEl.__onTime);
    audioEl.__onPlay = audioEl.__onPause = audioEl.__onTime = null;
  }
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

  .music-player {
    position: fixed;
    top: 50px;
    right: 50px;
    left: auto;
    transform: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.5rem 0.8rem;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.45);
    z-index: 9999;
    transition: opacity 0.25s ease, transform 0.18s ease;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.22);
  }

  .music-player .play-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    min-width: 34px;
    padding: 0;
    border-radius: 50%;
    transition: transform 0.18s ease;
  }

  .music-player .play-btn:hover {
    transform: scale(1.12);
  }

  .music-player .play-btn:active {
    transform: scale(0.98);
  }

  .music-player .progress-bar {
    width: 110px;
    height: 4px;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 3px;
    overflow: hidden;
  }

  .music-player .progress-bar .progress {
    height: 100%;
    background: #f1c40f;
    width: 0%;
    transition: width 0.18s linear;
  }

  .parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130%;
    overflow: hidden;
    z-index: 1;
  }

  .parallax-background :deep(img),
  .parallax-background :deep(.v-img__img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% 50%;
    filter: saturate(0.95) contrast(0.95);
  }

  .parallax-background .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
  }

  .home-content {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .banner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 960px;
    width: 100%;
    gap: 1rem;
    padding: 24px;
    background: transparent;
  }

  .intro-bottom {
    position: absolute;
    bottom: 5.2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 100%;
    pointer-events: none;
    padding: 0 1rem;
  }

  .intro-bottom .intro-text {
    margin: 0;
    font-family: $body-font-family !important;
    font-style: italic;
    font-size: clamp(1.1rem, 2.4vw, 1.6rem);
    color: #ffffff;
    line-height: 1.5;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.45);
    padding: 8px 14px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
  }

  .couple-names {
    font-family: "Cormorant", serif !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    line-height: 1;
    transform: translateY(-80%);
    transition: transform 0.22s ease;
  }

  .couple-names .name {
    display: block;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #B8866A;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .couple-names .name .name-amp {
    display: inline-block;
    height: 1em;
    width: auto;
    vertical-align: -0.18em;
    object-fit: contain;
    pointer-events: none;
  }

  .scroll-gif-container {
    bottom: 1.5rem;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 3;
  }

  .scroll-gif-container .scroll-gif {
    width: 70px;
    animation: bounce 2s infinite ease-in-out;
  }

  .scroll-gif-container .scroll-gif img {
    width: 100%;
    display: block;
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

@media (max-width: 480px) {
  .home-parallax-container.parallax-mobile .parallax-background :deep(img),
  .home-parallax-container .parallax-background :deep(img),
  .home-parallax-container .parallax-background :deep(.v-img__img) {
    object-position: 56% 50% !important;
  }

  .home-parallax-container .home-content .couple-names {
    transform: translateY(-150%) !important;
  }

  .music-player {
    right: 2rem !important;
    left: auto !important;
    transform: none !important;
    padding: 0 !important;
    background: transparent !important;
    backdrop-filter: none !important;
    border-radius: 0 !important;
    gap: 0 !important;
    box-shadow: none !important;
  }

  .music-player .progress-bar {
    display: none !important;
  }

  .music-player .play-btn {
    width: 48px !important;
    height: 48px !important;
    min-width: 48px !important;
    padding: 0 !important;
    border-radius: 50% !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .home-parallax-container .home-content .banner-wrapper {
    max-width: 94vw;
    padding: 18px 14px;
  }

  .home-parallax-container .home-content .couple-names .name {
    font-size: 2.5rem;
    letter-spacing: 0.12em;
  }

  .home-parallax-container .home-content .intro-bottom {
    bottom: 5rem;
  }

  .home-parallax-container .home-content .intro-bottom .intro-text {
    font-size: clamp(1.05rem, 4.5vw, 1.4rem);
  }

  .home-parallax-container .home-content .couple-names .name .name-amp {
    height: 1em;
    vertical-align: -0.18em;
  }

  .scroll-gif-container {
    display: none;
  }
}
</style>
