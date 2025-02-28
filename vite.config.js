import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: true,
    strictPort: false,
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'src/background.js', // Adjust path as needed
        content: 'src/content.js', // Adjust path as needed
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  base: '/'
})
