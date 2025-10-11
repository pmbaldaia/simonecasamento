<script setup>
const programacao = [
  { time: "16h00", activity: "Cerimônia religiosa na Igreja Matriz" },
  { time: "17h30", activity: "Coquetel e fotos no jardim" },
  { time: "18h30", activity: "Recepção no Salão Flor do Campo" },
  { time: "20h00", activity: "Jantar e brindes" },
  { time: "22h00", activity: "Dança dos noivos e festa" },
  { time: "00h00", activity: "Encerramento e agradecimentos" },
];
</script>

<template>
  <section class="mt-24 px-6 max-w-screen-xl mx-auto">
    <h2
      class="text-3xl font-serif font-bold text-pink-600 dark:text-pink-400 text-center mb-8"
    >
      Programação do Grande Dia
    </h2>
    <ul class="space-y-6 max-w-md mx-auto">
      <li
        v-for="item in programacao"
        :key="item.time"
        class="flex items-center gap-6 bg-white dark:bg-gray-800 rounded-3xl shadow-md p-6 hover:shadow-pink-400 transition"
      >
        <span
          class="text-pink-600 dark:text-pink-300 font-bold text-xl w-24 text-center font-serif"
        >
          {{ item.time }}
        </span>
        <p class="text-gray-700 dark:text-gray-300 font-medium">
          {{ item.activity }}
        </p>
      </li>
    </ul>
  </section>
</template>
