import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'  // Para Tailwind v4

export default defineConfig({
  plugins: [
    vue(),  // Obligatorio primero
    tailwindcss()  // Luego Tailwind si usas v4
  ]
})
