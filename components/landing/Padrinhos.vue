<script setup>
const padrinhos = [
  {
    name: "Lucas & Mariana",
    role: "Padrinhos de casamento",
    photo:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // casal sorrindo em campo
  },
  {
    name: "Felipe & Amanda",
    role: "Padrinhos de casamento",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // casal na praia de mãos dadas
  },
  {
    name: "João & Carla",
    role: "Padrinhos de casamento",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // casal abraçado sorrindo
  },
];
</script>

<template>
  <section class="mt-24 px-6 max-w-screen-xl mx-auto text-center">
    <h2
      class="text-3xl font-serif font-bold text-pink-600 dark:text-pink-400 mb-8"
    >
      Os Nossos Padrinhos
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
      <div
        v-for="p in padrinhos"
        :key="p.name"
        class="flex flex-col items-center"
      >
        <img
          :src="p.photo"
          :alt="p.name"
          class="w-40 h-40 rounded-2xl object-cover mb-4"
          loading="lazy"
        />
        <h3
          class="text-xl font-semibold font-serif text-pink-700 dark:text-pink-300"
        >
          {{ p.name }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400">{{ p.role }}</p>
      </div>
    </div>
  </section>
</template>
