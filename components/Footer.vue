<script lang="ts" setup>
import { NuxtImg } from '#components';

const year =new Date().getFullYear()
</script>

<template>
<div class="bg-[#00163D] py-10 flex justify-center">
  <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 align-bottom text-white">
    <div class="flex flex-col items-center lg:items-start order-3 lg:order-1">
      <h1 class="font-Berlin-sans-fb text-xl">Contacts</h1>
      <span class="hover:text-primary"><a href="tel:+254712051540">+2547 12 051 540</a></span>
      <span class="hover:text-primary"><a href="mailto:info@vinteque.com">info@vinteque.com</a></span>
    </div>

    <div class="flex flex-col items-center order-1 lg:order-2">
      <NuxtImg format="webp" src="/vinteque.png" class="w-20 h-20"/>
      <span class="font-Berlin-sans-fb text-2xl">Vinteque Software Developers</span>
      <span>Full package for your company's success.</span>
      <span>@{{ year }} Vinteque. All Rights Reserved</span>
    </div>

    <div class="flex flex-col order-2 items-end lg:order-3">
      <div class="flex justify-around w-10/12">
        <NuxtLink target="_blank" to="https://www.linkedin.com/company/101524155" class="hover:text-primary"><Icon name="bx:bxl-linkedin"/></NuxtLink>
        <NuxtLink target="_blank" to="https://x.com/Vinteque_dev" class="hover:text-primary"><Icon name="garden:twitter-stroke-12"/></NuxtLink>
        <NuxtLink target="_blank" to="https://www.instagram.com/vinteque_software_developers/" class="hover:text-primary"><Icon name="simple-icons:instagram"/></NuxtLink>
        <NuxtLink target="_blank" to="https://www.facebook.com/profile.php?id=100066813943645" class="hover:text-primary"><Icon name="fa6-brands:facebook-f"/></NuxtLink>
      </div>
      <span class="w-fit text-center"><NuxtLink to="/privacy-policy" class="hover:text-primary">Privacy Policy</NuxtLink> | <NuxtLink to="/terms-of-service" class="hover:text-primary">Terms & Conditions</NuxtLink></span>
    </div>
  </div>
</div>
</template>