import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' 


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://tch-q467.onrender.com',
        secure: true,
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
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-hook-form']
  }
})
