<template>
  <main
    class="relative flex items-center justify-center h-[85vh] w-full bg-white dark:bg-black overflow-hidden"
  >
    <img
      src="/assets/img/casal.png"
      alt="Ana e Henrique"
      class="absolute inset-0 w-full h-full object-cover opacity-80 grayscale dark:grayscale-0 z-0"
    />
    <div
      class="absolute inset-0 bg-white bg-opacity-40 dark:bg-black dark:bg-opacity-60 z-10"
    ></div>
    <div class="relative z-20 text-center w-full max-w-3xl px-6 sm:px-0">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight text-pink-700 dark:text-pink-400"
      >
        Ana & Henrique
      </h1>
      <p
        class="mt-3 text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-wide text-gray-800 dark:text-gray-200"
      >
        Vão casar! 💍 <br />
        20 de Setembro de 2025
      </p>
      <p
        class="mt-6 text-lg sm:text-xl italic max-w-md mx-auto font-serif text-gray-700 dark:text-gray-300"
      >
        "O amor não consiste em olhar um para o outro, mas sim em olhar juntos
        na mesma direção."
      </p>
      <div
        class="mt-10 flex flex-col sm:flex-row gap-6 justify-center max-w-xs mx-auto sm:max-w-none"
      >
        <a
          href="/rsvp"
          class="w-full sm:w-auto bg-pink-600 text-white hover:bg-pink-700 px-6 py-3 rounded-full font-semibold transition text-center shadow-lg"
        >
          Confirmar Presença
        </a>
        <a
          href="/detalhes"
          class="w-full sm:w-auto border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-3 rounded-full font-semibold transition text-center shadow-lg"
        >
          Ver Detalhes do Evento
        </a>
      </div>
    </div>
  </main>
</template>
