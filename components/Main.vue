<template>
  <div class="app-wrapper">
    <div class="logo-ring">
      <img :src="logoImg" alt="Logo Aqueduto" class="logo-img" />
    </div>

    <transition name="fade">
      <v-container fluid class="pa-0 main-content">
        <Home />
        <About />
        <Map />
        <Lodging />
        <Footer />
      </v-container>
    </transition>

    <button
      v-show="showBackToTop"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <img alt="Aqueduto" src="@/assets/images/aqueduto.png" />
      <span class="up-arrow"></span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import Lodging from "./Lodging.vue";
import logoImg from "@/assets/images/logo-quinta.png";

const showBackToTop = ref(false);

function handleScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  showBackToTop.value = scrollTop + windowHeight >= fullHeight - 50;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: $background-color;
}

.logo-ring {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 12px;
  backdrop-filter: blur(8px);

  .logo-img {
    width: 100px;
    height: auto;
    filter: brightness(0) invert(1);
  }
}

.main-content {
  position: relative;
  z-index: 1;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10001;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: $gold-color;
  color: $white-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  overflow: visible;

  img {
    width: 24px;
    height: auto;
    display: block;
  }

  .up-arrow {
    position: absolute;
    top: 6px; 
    width: 0;
    height: 0;
    border-left: 4px solid transparent;  
    border-right: 4px solid transparent; 
    border-bottom: 5px solid $black-color; 
    pointer-events: none;
  }

  &:hover {
    background: $light-gold-color;
    transform: scale(1.1);
  }
}

.fade-enter-active {
  animation: fadeIn 1.2s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
