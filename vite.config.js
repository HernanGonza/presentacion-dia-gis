import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Todo (JS, CSS, fuentes, logos y capturas) queda embebido en dist/index.html:
// se abre con doble clic, sin servidor y sin conexión.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: "./",
  build: { assetsInlineLimit: 100_000_000, chunkSizeWarningLimit: 100_000 },
});
