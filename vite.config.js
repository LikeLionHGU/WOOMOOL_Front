import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              ssr: false,
              pure: true,
              displayName: true,
              fileName: false,
              meaninglessFileNames: ["index", "styles"],
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
