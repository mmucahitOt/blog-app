import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./frontend",
  plugins: [
    react({
      // Enable the new JSX transform (React 17+)
      jsxRuntime: "automatic",
      // This allows using JSX without importing React
      jsxImportSource: "react",
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./testSetup.js",
  },
  build: {
    outDir: "../dist/frontend",
    emptyOutDir: true,
  },
});
