import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType:"autoUpdate",
      manifest:{
        name: "Rishi Bakshi's Portfolio",
        short_name: "Rishi's Portfolio",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        scope: "/portfolio",
        start_url: "/portfolio",
        icons: [
          {
            src: "maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      }
    })
  ],
  base:"/portfolio/",
})
