import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const DEFAULT_SHEET_ID = '15qJiWWGd70_yp4oGqP6zuf3fghMi5alWI3zKK4Vp8rE'
const DEFAULT_SHEET_GID = '0'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Avoid CORS when fetching Google Sheet CSV from localhost
      '/google-sheet-export': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: () =>
          `/spreadsheets/d/${DEFAULT_SHEET_ID}/export?format=csv&gid=${DEFAULT_SHEET_GID}`,
      },
    },
  },
  preview: {
    proxy: {
      '/google-sheet-export': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        secure: true,
        rewrite: () =>
          `/spreadsheets/d/${DEFAULT_SHEET_ID}/export?format=csv&gid=${DEFAULT_SHEET_GID}`,
      },
    },
  },
})
