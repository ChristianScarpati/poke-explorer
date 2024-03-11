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
  },
  server: {
    fs: {
      strict: true
    }
  },
  optimizeDeps: {
    exclude: ["jest"]
  },
  resolve: {
    alias: {
      "@tests": path.resolve(__dirname, "tests")
    }
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }
})
