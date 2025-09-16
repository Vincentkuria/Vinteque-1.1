<script setup>
import { NuxtPage } from '#components';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

useHead({
  titleTemplate:'Vinteque | %s',
  link:{
    rel:'icon', type:'image/png',href:'/vinteque.png'
  },
  htmlAttrs:{
    lang:'en'
  },
  script:[
     {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Vinteque Software Developers",
        "url": "https://vinteque.com",
        "logo": "https://vinteque.com/vinteque.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+254712051540",
          "contactType": "Customer Service",
          "email": "vinvincent254@gmail.com"
        },
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "KE"
        },
        "sameAs": [
          "https://www.linkedin.com/company/101524155",
          "https://www.facebook.com/p/Vinteque-software-developers-100066813943645"
        ],
        "description": "Vinteque Software Developers is a Kenyan software development agency specialized in creating customized websites, apps, and brands for businesses and startups."
      }
    },
  ]
})

useSeoMeta({
  ogTitle: 'Vinteque Software Developers',
  ogDescription: "Full package for your companies success",
  ogImage: '/vinteque.png',
})
</script>

<template>
  <div>
    <Navbar />
    <div>
      <NuxtPage/>
    </div>
    <Footer />
    <Toaster />
  </div>
</template>

<style>
.v-html ul{
  list-style: square;
  list-style-position: inside;
  padding-left: 2rem;
}

.v-html h1, h2, h3, h4, h5, h6{
  font-weight: bold;
}

</style>
