<template>
  <div class="app-wrapper">
    <div class="logo-ring">
      <img
        v-if="logoImg"
        :src="logoImg"
        alt="Logo Aqueduto"
        class="logo-img"
      />
      <v-icon v-else color="white" size="64">mdi-ring</v-icon>
    </div>

    <transition name="fade">
      <v-container fluid class="pa-0 main-content">
        <Home />
        <About />
        <Map />
        <Footer />
      </v-container>
    </transition>

  </div>
</template>

<script setup>
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Map from "@/components/Map.vue";
import Footer from "@/components/Footer.vue";
import logoImg from "@/assets/images/logo-quinta.png";
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: #f9f8f7;
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

.fixed-copyright {
  position: fixed;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 10001;
  pointer-events: none;
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
