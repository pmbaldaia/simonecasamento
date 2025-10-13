<template>
  <div class="home-parallax-container">
    <div
      class="parallax-background"
      :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
    >
      <img
        src="https://cdn.pixabay.com/photo/2017/03/21/18/43/couple-2162950_1280.jpg"
        alt="Simone & Teste"
      />
      <div class="overlay"></div>
    </div>

    <v-container fluid class="home-content">
      <div class="logo-ring">
        <v-icon size="64" color="white">mdi-ring</v-icon>
      </div>
      <div class="banner-wrapper">
        <h1 class="full-name">Simone & Teste</h1>
        <div class="wedding-info">
          <p class="date">12 de Abril de 2026</p>
          <p class="location">Sítio Bela Vista • Lisboa</p>
        </div>
      </div>
      <div class="scroll-gif-container">
        <div class="scroll-gif">
          <img alt="scroll" src="@/assets/images/scroll.gif" />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollY = ref(0);
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.home-parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;

  .parallax-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      will-change: transform;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
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

    .logo-ring {
      position: absolute;
      top: 2rem;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .banner-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .full-name {
      font-family: $handwriting-font-family;
      font-size: 5rem;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
    }

    .wedding-info {
      .date,
      .location {
        font-family: $heading-font-family;
        font-weight: 500;
        margin: 0.15rem 0;
        text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4);
      }

      .date {
        color: #d4af37;
        font-size: 2rem;
      }

      .location {
        color: #f5f5f5;
        font-size: 1.5rem;
      }
    }

    .scroll-gif-container {
      position: absolute;
      bottom: 2rem;
      width: 100%;
      display: flex;
      justify-content: center;

      .scroll-gif {
        width: 80px;
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

  @media screen and (max-width: 767px) {
    .home-content .full-name {
      font-size: 3rem;
    }
    .home-content .wedding-info .date {
      font-size: 1.5rem;
    }
    .home-content .wedding-info .location {
      font-size: 1.2rem;
    }
    .scroll-gif-container .scroll-gif {
      width: 60px;
    }
  }
}
</style>
