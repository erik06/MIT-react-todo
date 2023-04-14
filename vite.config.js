import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://erik06.github.io/MIT-react-todo/",
  root: "dist",
  build: {
    outDir: "../docs",
  },
});
