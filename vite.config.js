import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  alias: {
    // the key must start and end with a slash
    '/@assets/': path.join(__dirname, '/src/assets/'),
    '/@components/': path.join(__dirname, '/src/components/'),
    '/@store/': path.join(__dirname, '/src/store/'),
  }
});
