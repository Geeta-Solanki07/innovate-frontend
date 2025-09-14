import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: "rgb(48,67,40)",
            primaryLight: "#9acd32",
            darkBg: "#121212",
            cardBg: "#1e1e1e",
            textLight: "#f0f0f0",
            textGray: "#a0a0a0",
          },
        },
      },
    }),
  ],
})
