import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, "styles")],
        prependData: "@import '_variables.scss';"
      }
    }
  }
})
