import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE environment variable during CI/deploy to set correct base path
// Example: VITE_BASE=/owner/repo/ for GitHub Pages serving from /owner/repo/
const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
