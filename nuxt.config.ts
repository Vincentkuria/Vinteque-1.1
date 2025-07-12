import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-directus',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  runtimeConfig:{
    public:{
      directus:{
        url: 'http://localhost:8055'
      }
    }
  }
})