// plugins/vuetify.ts
import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import { pt } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#ffffff",
            secondary: "#d4af37",
            accent: "#f5deb3",
            info: "#64b5f6",
            warning: "#ffb300",
            error: "#d84315",
            success: "#00e676",
            background: "#fffdf8",
          },
        },
      },
    },
    locale: {
      locale: "pt",
      messages: { pt },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
