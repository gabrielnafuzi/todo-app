import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.join(__dirname, 'src') }]
  },
  plugins: [
    react(),
    VitePWA({
      base: '/',
      manifest: {
        name: 'todo app',
        short_name: 'todoapp',
        description: 'a simple todo app',
        theme_color: '#2F80ED',
        icons: [
          {
            src: 'img/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'img/cover.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
