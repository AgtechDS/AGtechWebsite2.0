import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Remove the import for agtech-tagger since it's not available
// import { componentTagger } from "agtech-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Remove the componentTagger plugin since it's not available
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
