import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: { configFile: "src/assets/scss/_variables.scss" },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "~/assets/scss/_variables.scss" as *;
        `,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
