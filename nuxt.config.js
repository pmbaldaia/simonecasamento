import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s - Simone & Incógnita",
    title: "Casamento de Simone & Incógnita",
    htmlAttrs: { lang: "pt" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Celebração do amor entre Simone e Incógnita — um casamento repleto de emoção, amizade e momentos inesquecíveis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Casamento de Simone & Incógnita" },
      { property: "og:url", content: "https://simone-e-incognita.pt/" },
      {
        property: "og:image",
        content: "https://example.com/imagens/simone-e-incognita-casamento.jpg",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loadingIndicator: {
    name: "rectangle-bounce",
    color: "#d4af37",
    background: "#ffffff",
  },
  css: ["aos/dist/aos.css", "~/assets/font/biko.css"],
  plugins: [
    { src: "~/plugins/typed", mode: "client" },
    { src: "~/plugins/aos", mode: "client" },
  ],
  buildModules: ["@nuxtjs/vuetify"],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa", "vue-scrollto/nuxt"],
  axios: {},
  vuetify: {
    customVariables: ["~/assets/scss/main.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#ffffff",
          secondary: "#d4af37",
          accent: "#f5deb3",
          info: colors.blue.lighten2,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: "#fffdf8",
        },
      },
    },
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
  build: { extractCSS: true, optimizeCSS: true },
};
