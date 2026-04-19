import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  // Use the repo subpath only for GitHub Pages deploys.
  base: isGithubPagesBuild ? '/Personal-Portfolio/' : '/',
})
