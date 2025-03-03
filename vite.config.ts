import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// import { compression } from 'vite-plugin-compression2'

const srcPath = path.resolve(__dirname, './src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ''),
      },
    },
  },
  publicDir: 'public',
  resolve: {
    alias: {
      app: path.resolve(srcPath, 'app'),
      pages: path.resolve(srcPath, 'pages'),
      widgets: path.resolve(srcPath, 'widgets'),
      features: path.resolve(srcPath, 'features'),
      entities: path.resolve(srcPath, 'entities'),
      shared: path.resolve(srcPath, 'shared'),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Break icons into separate parts
          const isIcon = /iconpack\/icons\/.*\.tsx$/.test(id)
          if (isIcon) {
            const splitted = id.split('/')
            return splitted[splitted.length - 1]
          }

          // Chunk @open-ish
          if (id.includes('@open-ish') || id.includes('tslib')) {
            return '@open-ish'
          }

          // Chunk @react-router
          if (
            id.includes('react-router-dom') ||
            id.includes('react-router') ||
            id.includes('swiper')
          ) {
            return '@react-router'
          }
        },
      },
    },
  },
})
