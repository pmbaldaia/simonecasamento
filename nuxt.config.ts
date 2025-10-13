import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-10-13",
  app: {
    head: {
      title: "Casamento de Simone & Incógnita",
      htmlAttrs: { lang: "pt" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Celebração do amor entre Simone e Incógnita — um casamento repleto de emoção, amizade e momentos inesquecíveis.",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Casamento de Simone & Incógnita" },
        { property: "og:url", content: "https://simone-e-incognita.pt/" },
        {
          property: "og:image",
          content:
            "https://example.com/imagens/simone-e-incognita-casamento.jpg",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: [
    "aos/dist/aos.css",
    "~/assets/font/biko.css",
    "~/assets/scss/main.scss",
  ],

  plugins: ["~/plugins/aos.client.js", "~/plugins/typed.client.ts"],

  modules: ["@vite-pwa/nuxt"],

  vite: {
    ssr: { noExternal: ["vuetify"] },
    plugins: [vuetify()],
  },

  build: {
    transpile: ["vuetify"],
  },

  pwa: {
    manifest: {
      name: "Casamento de Simone & Incógnita",
      short_name: "Simone & Incógnita",
      lang: "pt",
      background_color: "#fffdf8",
      theme_color: "#d4af37",
    },
  },
});
