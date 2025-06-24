import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/FUTURE-FS-02/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Map '/src' to './src' for component imports
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Root-level HTML
    },
  },
  base: "./", // Critical for GitHub Pages
});
