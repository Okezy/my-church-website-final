import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ADD THIS BASE PATH FOR GITHUB PAGES
  // The value must be the name of your GitHub repository, surrounded by slashes.
  base: "/my-church-website/", 
})