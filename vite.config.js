import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import schemaPlugin from "./scripts/schemaPlugin.js";

export default defineConfig({
  plugins: [react(), schemaPlugin()],
  server: {
    port: 5175,
  },
});
