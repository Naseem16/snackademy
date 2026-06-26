import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Base path for GitHub Pages. When deployed to https://<user>.github.io/<repo>/
// the assets must be served from /<repo>/. Override with BASE_PATH env if the
// repo name differs. For a custom domain or user-page, set BASE_PATH=/.
const base = process.env.BASE_PATH ?? '/aws-ai-practitioner-learning-app/'

export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'CertPrep — AWS Certification Learning',
        short_name: 'CertPrep',
        description:
          'Fun, card-based, mobile-first prep for AWS AI Practitioner, Solutions Architect and more.',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        start_url: base,
        scope: base,
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
    }),
  ],
})
