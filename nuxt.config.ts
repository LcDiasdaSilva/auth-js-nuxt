import { resolve } from "node:path"
export default defineNuxtConfig({
  devtools: { enabled: false },

  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },

  modules: [
    '@hebilicious/authjs-nuxt'
  ],

  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET
    },
    github: {

      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },

    googleFonts: {
      families: {
        Sora: {
          wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },

      }
    },
  },
})
