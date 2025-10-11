<script setup>
const details = [
  {
    title: "Cerimónia",
    description: "Igreja Matriz São João - 16h00",
    icon: "mdi:church",
  },
  {
    title: "Receção",
    description: "Salão de Festas Flor do Campo - 18h00",
    icon: "mdi:glass-cocktail",
  },
  {
    title: "Traje",
    description: "Traje passeio completo. Venha elegante e confortável.",
    icon: "mdi:tshirt-crew",
  },
  {
    title: "Estacionamento",
    description: "Há estacionamento disponível no local da receção.",
    icon: "mdi:car-parking-lights",
  },
  {
    title: "Acomodações",
    description: "Hotéis parceiros próximos com tarifas especiais.",
    icon: "mdi:hotel",
  },
  {
    title: "Contacto",
    description: "Dúvidas? Envie mensagem para (11) 99999-9999.",
    icon: "mdi:phone",
  },
];
</script>

<template>
  <section class="mt-16 pt-5 pb-12 px-6 max-w-screen-xl mx-auto text-center">
    <h2
      class="text-3xl font-serif font-bold text-pink-600 dark:text-pink-400 mb-4"
    >
      Detalhes do Evento
    </h2>
    <p class="text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto">
      Tudo o que precisa de saber para aproveitar ao máximo o nosso grande dia.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        v-for="(item, index) in details"
        :key="item.title"
        class="flex flex-col items-center text-center gap-4 p-4"
      >
        <div
          :class="[
            'p-4 rounded-full text-white text-3xl',
            index % 2 === 0 ? 'bg-pink-500' : 'bg-pink-700',
          ]"
        >
          <Icon :name="item.icon" />
        </div>
        <h3
          class="text-xl font-semibold text-pink-700 dark:text-pink-300 font-serif"
        >
          {{ item.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 max-w-xs">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>
