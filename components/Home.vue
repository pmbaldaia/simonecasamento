<template>
  <div class="home-parallax-container" :class="{ 'dark-bg': isScrolled }">
    <div
      class="parallax-background"
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      aria-hidden="true"
    >
      <img
        src="https://cdn.pixabay.com/photo/2017/03/21/18/43/couple-2162950_1280.jpg"
        alt="Simone & João"
      />
      <div class="overlay"></div>
    </div>

    <svg class="mask-defs" width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="aquedutoClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0.15 C0,0 0.15,0 0.5,0 C0.85,0 1,0 1,0.15 L1,0.95 L0,0.95 Z"
          />
        </clipPath>
      </defs>
    </svg>

    <div class="home-content" :style="{ clipPath: 'url(#aquedutoClip)' }">
      <div class="banner-wrapper">
        <h1 class="full-name">Simone & João</h1>
        <div class="wedding-info">
          <p class="date">11 de julho</p>
          <p class="location">Quinta Aqueduto Eventos • Póvoa de Varzim</p>
        </div>
      </div>
      <div class="scroll-gif-container" aria-hidden="true">
        <div class="scroll-gif">
          <img alt="scroll" src="@/assets/images/scroll.gif" />
        </div>
      </div>
    </div>

    <div class="music-player">
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
import { ref, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);
const isScrolled = ref(false);
const audio = ref(null);
const isPlaying = ref(false);
const progress = ref(0);

function handleScroll() {
  scrollY.value = window.scrollY;
  isScrolled.value = window.scrollY > 40;
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
  window.addEventListener("scroll", handleScroll);
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
    /* background: rgba(20, 20, 20, 0.55); */
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    /* box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25); */
    backdrop-filter: blur(10px);
    z-index: 9999;

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

    img {
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
      gap: 0.5rem;
      max-width: 960px;
      padding: 2rem;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.03),
        rgba(0, 0, 0, 0.02)
      );
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    }

    .full-name {
      font-family: $handwriting-font-family;
      font-size: 4.4rem;
      color: $white-color;
      margin-bottom: 0.6rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    .wedding-info {
      .date,
      .location {
        font-family: $heading-font-family;
        font-weight: 500;
        margin: 0.12rem 0;
        text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
      }

      .date {
        color: $gold-color;
        font-size: 1.8rem;
      }

      .location {
        color: $offwhite-color;
        font-size: 1.1rem;
      }

      .quinta-logo {
        margin-top: 1rem;
        width: 160px;
        height: auto;
        object-fit: contain;
        filter: brightness(1.05) contrast(0.95);
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
}

</style>
