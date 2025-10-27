import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Set this to '/<REPO_NAME>/' when deploying to GitHub Pages
  // or use env var as below:
  // base: process.env.GITHUB_PAGES ? '/my-vue-app/' : '/'
})
