<script lang="ts" setup>
import Requestcallback from '~/components/Requestcallback.vue'

const logoBarColor=ref("#ffffff")

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
  <div>
    <div
    :style="{'background-color':logoBarColor}"
    class="h-20 px-10 md:px-20 lg:px-30 border-y-1 border-blue-100">
      <NuxtImg src="/1.png" class="object-contain h-full" />
    </div>

    <div class="flex flex-row mx-5 md:mx-20 my-10">
      <div class="max-w-[90dvw] md:max-w-[60dvw]">
        <h1 class="font-Berlin-sans-fb text-2xl md:text-4xl line-clamp-6">
          Fusion HR Solutions Fusion HR Solutions Fusion HR Solutions Fusion HR Solutions Fusion HR Solutions
        </h1>
      </div>
      <div class="px-5 md:px-10 border-s-2 border-blue-100">
        <h3 class="md:text-lg">Deliverables</h3>
        <span class="font-mono font-bold md:text-lg">UI, UX, Web Redesign</span>
      </div>
    </div>

    <div>
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">About The Client</h1>
      <p class="mx-5 md:mx-20 max-w-5xl">
        Fusion HR Solutions is a human resources management practice that provides a comprehensive range of human resources solutions with a business focus. Fusion HR Solutions is the nucleus of a multidisciplinary team of human resources specialists. Fusion HR Solutions is a dynamic organization that excels in consulting and training and we are accomplished in delivering results.
      </p>
    </div>

    <div class="w-[90dvw] h-[60vh] md:h-[70vh] lg:h-[90vh]">
      <NuxtImg src="/images/web.png" class="object-contain w-full h-full" />
    </div>

    <div>
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">The Challenge</h1>
      <p class="mx-5 md:mx-20 max-w-5xl">
        Fusion HR Solutions is a human resources management practice that provides a comprehensive range of human resources solutions with a business focus. Fusion HR Solutions is the nucleus of a multidisciplinary team of human resources specialists. Fusion HR Solutions is a dynamic organization that excels in consulting and training and we are accomplished in delivering results.
      </p>
    </div>
    

    <div class="flex flex-row flex-wrap my-10">
      <div class="max-w-[90dvw] md:max-w-[60dvw]">
        <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">The Solution</h1>
        <p class="mx-5 md:mx-20 max-w-5xl">
        Fusion HR Solutions is a human resources management practice that provides a comprehensive range of human resources solutions with a business focus. Fusion HR Solutions is the nucleus of a multidisciplinary team of human resources specialists. Fusion HR Solutions is a dynamic organization that excels in consulting and training and we are accomplished in delivering results.
      </p>
      </div>
      <div class="mx-5 px-5 my-5 py-5 md:px-10 border-t-2 md:border-s-2 md:border-t-0 border-blue-100">
        <h3 class="md:text-lg">Tech Stack</h3>
        <span class="font-mono font-bold md:text-lg">UI, UX, Web Redesign</span>
      </div>
    </div>

    <div
    :style="{'background-color': masonryBgColor}"
    class="p-10 my-10">
      <masonry-wall :items="items" :ssr-columns=2 :max-columns=3 :min-columns=1 :gap=5>
          <template #default="{ item, index }">
            <NuxtImg :src="item" class="w-full h-full bg-red-600 rounded-sm" />
          </template>
      </masonry-wall>
    </div>

    <div class="my-10">
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Key Achievements</h1>
      <ul class="mx-5 md:mx-20 flex flex-wrap justify-around gap-5">
        <li v-for="n in 10"><Icon name="material-symbols:check" class="text-green-500"/> Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
    </div>

    <div class="flex flex-col items-center gap-5 my-10">
      <h2 class="text-center font-Berlin-sans-fb max-w-3xl text-6xl">Let’s bring your vision to life</h2>
      <Requestcallback />
    </div>

  </div>
</div>
</template>