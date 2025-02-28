import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: true,
    port: 5174,
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
=======
    port: 5173,
    open: true,
  },
>>>>>>> 9391ef03e70067cb9f5e63bd85e566c203c45142
})
