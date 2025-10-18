import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE environment variable during CI/deploy to set correct base path
// Example: VITE_BASE=/owner/repo/ for GitHub Pages serving from /owner/repo/
// Use a relative base by default so built assets reference paths relative to index.html.
// This is more robust for GitHub Pages and subpath deployments.
// Trim and validate the environment value to avoid accidental whitespace causing Vite
// to treat the base as invalid and fall back to '/'.
const rawBase = process.env.VITE_BASE ?? './'
const baseCandidate = String(rawBase).trim()
// Acceptable values: absolute URL path starting with '/', './', or empty string
const base = (baseCandidate === '' || baseCandidate === './' || baseCandidate.startsWith('/'))
  ? baseCandidate || './'
  : './'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
