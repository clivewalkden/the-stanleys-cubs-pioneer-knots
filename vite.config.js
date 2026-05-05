import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'cubs-logo.svg'],
      manifest: {
        name: 'Cubs Knots - Pioneer Badge',
        short_name: 'Cubs Knots',
        description: 'Knot tying guide for Cubs Pioneer Badge - Base 1',
        theme_color: '#00a650',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.youtube\.com\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'youtube-cache' },
          },
        ],
      },
    }),
  ],
})
