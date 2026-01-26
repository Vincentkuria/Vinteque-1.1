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
    disallow:['/api','/abz'],
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
      posthogPublicKey: 'phc_5XLrt4fe8m5Z2TfWcCkFiAAekPCJu9tapC5BSoHSV4O',
      posthogHost: 'https://vinteque.com/abz',
      posthogDefaults: '2025-05-24',
      baseUrl: 'https://vinteque.com/api'
    }
  }
})