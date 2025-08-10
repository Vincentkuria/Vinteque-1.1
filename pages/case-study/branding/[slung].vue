<script lang="ts" setup>
  
  const items = ref([
    '/images/pic1.jpg',
    '/images/brand2.png',
    '/images/brand3.png',
    '/images/brand4.png',
    '/images/brand5.png',
  ])

  const masonryBgColor = ref("#00ffff")
</script>

<template>
<div>
  <div class="my-10 mx-5 md:mx-20">
    <div
    class=" border-y-1 border-blue-100">
      <h1 class="font-Berlin-sans-fb text-5xl max-w-lg">
        Brand Identity For A Startup
      </h1>
    </div>

    <div class="py-5">
      <span>Location: <span class="font-bold">Nairobi, Kenya</span></span>
      <div class="bg-blue-600 w-full h-[340px]">
        <NuxtImg src="/images/pic1.jpg" class="h-full w-full object-contain object-center" />
      </div>
      <p class="max-w-5xl py-2">
        Reat! Creating a compelling case study for your branding services can be a powerful trust-builder and sales tool for your website — especially since you’re targeting corporate clients like law firms, HR companies,
      </p>
    </div>

  </div>

  <div>
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Brand Identity Goal</h1>
    <p class="mx-5 md:mx-20 max-w-5xl">
      Fusion HR Solutions is a human resources management practice that provides a comprehensive range of human resources solutions with a business focus. Fusion HR Solutions is the nucleus of a multidisciplinary team of human resources specialists. Fusion HR Solutions is a dynamic organization that excels in consulting and training and we are accomplished in delivering results.
    </p>
  </div>

  <div
  :style="{'background-color': masonryBgColor}"
  class="p-5 md:p-10 my-10">
    <masonry-wall :items="items" :ssr-columns=2 :max-columns=3 :min-columns=2 :gap=5>
        <template #default="{ item, index }">
          <NuxtImg :src="item" class="w-full h-full bg-red-600 rounded-sm" />
        </template>
    </masonry-wall>
  </div>

  <div class="flex flex-col items-center gap-5 my-10">
    <h2 class="text-center font-Berlin-sans-fb max-w-3xl text-6xl">Let’s bring your vision to life</h2>
    <Requestcallback />
  </div>

</div>
</template>