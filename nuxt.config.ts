import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  site:{
    url:'https://vinteque.com/',
    name:'Vinteque Software Developers'
  },

  robots:{
    disallow:['/directus', '/phpmyadmin'],
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-marquee',
    '@vee-validate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  veeValidate:{
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  }
  ,

  runtimeConfig:{
    public:{
      directus:{
        url: 'https://vinteque.com/directus'
      }
    }
  }
})