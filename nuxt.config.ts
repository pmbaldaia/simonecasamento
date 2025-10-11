export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@phosphor-icons/vue"],
    },
    ssr: {
      noExternal: ["@phosphor-icons/vue"],
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
  },
  app: {
    head: {
      title: "Ana & Henrique - O Nosso Casamento",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      meta: [
        {
          name: "description",
          content:
            "Junta-te a Ana & Henrique para celebrar o dia mais especial das suas vidas! Confirma a tua presença e fica a par de todos os detalhes.",
        },
        { property: "og:title", content: "Ana & Henrique - Casamento 2025" },
        {
          property: "og:description",
          content:
            "Junta-te a Ana & Henrique para celebrar o dia mais especial das suas vidas! Confirma a tua presença e fica a par de todos os detalhes.",
        },
        { property: "og:image", content: "/assets/img/casal.png" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://anaehenrique.pt" },
      ],
    },
  },
});
