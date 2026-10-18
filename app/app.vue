<script setup>
import { NuxtPage } from "#components";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";

useHead({
  titleTemplate: "Vinteque | %s",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/vinteque.png",
    },
    {
      rel: "canonical",
      href: "https://vinteque.com",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Vinteque Software Developers",
        alternateName: ["Vintech", "Vin-Tech"],
        url: "https://vinteque.com",
        logo: "https://vinteque.com/vinteque.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254704466984",
          contactType: "Customer Service",
          email: "info@vinteque.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        sameAs: [
          "https://www.linkedin.com/company/101524155",
          "https://www.facebook.com/p/Vinteque-software-developers-100066813943645",
        ],
        description:
          "Vinteque Software Developers is a Kenyan software development agency specialized in creating customized websites, apps, and brands for businesses and startups.",
      }),
    },
  ],

  script: [
    {
      innerHTML: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1096419631946426');
fbq('track', 'PageView');`,

      type: "text/javascript",
    },
  ],
  noscript: [
    {
      innerHTML:
        '<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1096419631946426&ev=PageView&noscript=1"/>',
    },
  ],
});

useSeoMeta({
  ogTitle: "Vinteque Software Developers",
  ogDescription: "Full package for your companies success",
  ogImage: "/vinteque.png",
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster />
  </div>
</template>
