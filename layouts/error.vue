<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-pink-50 dark:bg-gray-900 text-pink-700 dark:text-pink-300 font-serif"
  >
    <img
      src="/assets/img/casal.png"
      alt="Logo do Casamento"
      class="w-32 h-auto mb-10 rounded-full"
    />

    <h1 class="text-7xl font-bold mb-6">404</h1>

    <h2 class="text-2xl font-semibold mb-4">
      Ups... este convite foi dar uma volta! 🎉
    </h2>

    <p class="text-lg mb-12 max-w-md">
      Tal como o Henrique sem a Ana, ou o arroz sem o polvo... esta página está
      um bocadinho perdida no meio da festa!
    </p>

    <div class="rings-animation mb-16">
      <div class="ring ring1"></div>
      <div class="ring ring2"></div>
    </div>

    <NuxtLink
      to="/"
      class="bg-pink-700 dark:bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-900 dark:hover:bg-pink-700 transition"
    >
      Voltar à festa 💕
    </NuxtLink>
  </section>
</template>

<style scoped>
.rings-animation {
  position: relative;
  width: 120px;
  height: 120px;
}

.ring {
  position: absolute;
  border: 6px solid #db2777;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  top: 20px;
  left: 20px;
  box-sizing: border-box;
  animation-timing-function: ease-in-out;
}

.ring1 {
  animation: ring-move 3s infinite alternate;
}

.ring2 {
  border-color: #be185d;
  width: 100px;
  height: 100px;
  top: 10px;
  left: 40px;
  animation: ring-move-reverse 3s infinite alternate;
}

@keyframes ring-move {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(10px) translateY(-10px) rotate(20deg);
  }
}

@keyframes ring-move-reverse {
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  100% {
    transform: translateX(-10px) translateY(10px) rotate(-20deg);
  }
}
</style>
