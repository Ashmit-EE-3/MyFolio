import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' 


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://myfolio-u8tp.onrender.com',
        secure: true,
        changeOrigin: true
      },
    },
  },
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
      babel: {
        plugins: [],
        babelrc: false,
        configFile: false,
      }
    }),
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-hook-form']
  }
})
