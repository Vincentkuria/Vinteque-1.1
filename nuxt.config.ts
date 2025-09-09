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
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-marquee',
    '@vee-validate/nuxt'
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
        url: 'http://new.vinteque.com/directus'
      }
    }
  }
})