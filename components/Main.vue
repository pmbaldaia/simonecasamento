<template>
  <div class="app-wrapper">
    <div class="logo-ring">
      <v-icon color="white" size="64">mdi-ring</v-icon>
    </div>

    <div v-if="showEnvelope" class="envelope-wrapper">
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

      <div class="envelope">
        <div class="flap"></div>

        <img
          class="stamp"
          :src="stampImg"
          alt="Carimbo"
          @click="openEnvelope"
        />

        <div class="click-hint">&#8593; Clica no carimbo &#8593;</div>

        <div class="body"></div>
      </div>
    </div>

    <transition name="slide-up">
      <v-container v-if="!showEnvelope" fluid class="pa-0">
        <Home />
        <About />
        <Footer />
      </v-container>
    </transition>

    <Copyright class="fixed-copyright" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
import Copyright from "@/components/Copyright.vue";
import stampImg from "assets/images/stamp.png";

const showEnvelope = ref(true);
const scrollY = ref(0);

function openEnvelope() {
  showEnvelope.value = false;
}

function handleScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.logo-ring {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  border-radius: 50%;
  padding: 8px;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.envelope-wrapper {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  z-index: 9999;

  .parallax-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      will-change: transform;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
}

.envelope {
  position: relative;
  width: 900px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  .body {
    width: 100%;
    height: 100%;
    background: $white-color;
    border-radius: 6px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .flap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: $background-color;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    z-index: 2;
  }

  .stamp {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    z-index: 3;
    cursor: pointer;
    transition: transform 0.2s ease;
    animation: glow 1.5s infinite ease-in-out;
  }

  .stamp:hover {
    transform: translate(-50%, -50%) scale(1.05);
  }

  .click-hint {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: $gold-color;
    font-size: 0.2rem;
    font-weight: 600;
    animation: pulse 1.6s infinite ease-in-out;
    z-index: 4;
    pointer-events: none;
  }
}

.fixed-copyright {
  position: fixed;
  bottom: 40px;
  width: 100%;
  text-align: center;
  z-index: 10001;
  pointer-events: none;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.9);
  }
  100% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 0.2);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.4;
    transform: translate(-50%, -4px);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, 4px);
  }
  100% {
    opacity: 0.4;
    transform: translate(-50%, -4px);
  }
}

@media (max-width: 1024px) {
  .envelope {
    width: 700px;
    height: 400px;

    .flap {
      height: 160px;
    }

    .stamp {
      top: 160px;
      width: 200px;
      height: 200px;
    }

    .click-hint {
      top: 80%;
      font-size: 1.1rem;
    }
  }

  .logo-ring {
    top: 16px;
    transform: translateX(-50%) scale(0.9);
  }
}

@media (max-width: 768px) {
  .envelope {
    width: 90%;
    height: 300px;

    .flap {
      height: 120px;
    }

    .stamp {
      top: 120px;
      width: 150px;
      height: 150px;
    }

    .click-hint {
      top: 80%;
      font-size: 1rem;
    }
  }

  .logo-ring {
    top: 14px;
    transform: translateX(-50%) scale(0.8);
  }
}

@media (max-width: 480px) {
  .envelope {
    width: 95%;
    height: 240px;

    .flap {
      height: 100px;
    }

    .stamp {
      top: 100px;
      width: 120px;
      height: 120px;
    }

    .click-hint {
      top: 80%;
      font-size: 0.9rem;
    }
  }

  .logo-ring {
    top: 12px;
    transform: translateX(-50%) scale(0.75);
  }
}

.slide-up-enter-active {
  animation: slideUp 1s ease forwards;
}

@keyframes slideUp {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
