import { resolve } from "node:path"
export default defineNuxtConfig({
  devtools: { enabled: false },

  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },

  modules: [
    '@hebilicious/authjs-nuxt', '@nuxtjs/google-fonts'
  ],

  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL,
        verifyClientOnEveryRequest: true
      }
    }
  },

  googleFonts: {
    families: {
      Sora: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },

    }
  },

})
