import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/taskManagerTaskQuestion/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
  define: {
    __IS_PROD__: JSON.stringify(true),
  },
});
