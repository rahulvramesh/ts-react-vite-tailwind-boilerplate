import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from "vite-plugin-fonts"

// Constastants
const SILENT = Boolean(process.env.SILENT) ?? false
const SOURCE_MAP = Boolean(process.env.SOURCE_MAP) ?? false
const SITEMAP_HOST = process.env.SITEMAP_HOST || 'http://localhost:3000/'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/my-subdirectory/',
  base: '/',
  // Directory to serve as plain static assets.
  publicDir: 'public',
  // Adjust console output verbosity.
  logLevel: SILENT ? 'error' : 'info',
  //alias definitions
  resolve: {
    alias: [
      {
        find: '/@src/',
        replacement: `/src/`,
      },
    ],
  },
  //Plugins
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Fira Code',
            styles: 'wght@400;600',
          },
          {
            name: 'Montserrat',
            styles: 'wght@500;600;700;800;900',
          },
          {
            name: 'Roboto',
            styles: 'wght@300;400;500;600;700',
          },
        ],
      },
    }),
  ],

})
