import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 'base: "./"' asegura que los assets se carguen correctamente con rutas relativas
  // Esto previene errores 404 en GitHub Pages (ej: usuario.github.io/repo/)
  base: './',
})