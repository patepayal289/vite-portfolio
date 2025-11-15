import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // EXACTLY your repo name
  plugins: [react()],
});
