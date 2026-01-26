<script lang="ts" setup>
const slung=ref(useRoute().params.slung)

const {data,status}=await useFetch(useRuntimeConfig().public.baseUrl+`/brands/${slung.value}`,{
  method:'get',
  headers:{
    'Content-Type':'application/json'
  },
  timeout:3000
})

useHead({
    title: (data.value as any)?.title,
    meta:[
        {name:'description', content:`view branding case study for ${(data.value as any)?.companyName} `}
    ]
})
</script>

<template>
<div v-if="status!=='success'&& status!=='pending'" class="min-h-[50vh]">
  <div class="flex flex-col justify-self-center justify-items-center">
    <p class="text-center text-3xl font-bold">Item Not Found</p>
    <NuxtLink to="/" class="text-blue-500 underline">go back to home page</NuxtLink>
  </div>
</div>

<div v-else>
  <div class="my-10 mx-5 md:mx-20">
    <div
    class=" border-y-1 border-blue-100">
      <h1 class="font-Berlin-sans-fb text-5xl max-w-lg">
        {{ (data as any)?.title }}
      </h1>
    </div>

    <div class="py-5">
      <span>Location: <span class="font-bold">{{ (data as any)?.location }}</span></span>
      <div class="w-full h-[340px]" :style="{'background-color': (data as any)?.bgColor}">
        <NuxtImg format="webp" alt="case study logo" :src="useRuntimeConfig().public.baseUrl + `/${(data as any)?.heroImg}`" class="h-full w-full object-contain object-center" />
      </div>
      <div v-html="(data as any)?.aboutClient" class="v-html py-2"/>
    </div>

  </div>

  <div>
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Brand Identity Goal</h1>
    <div v-html="(data as any)?.goal" class="v-html mx-5 md:mx-20"/>
  </div>

  <div
  :style="{'background-color': (data as any)?.showcaseBgColor}"
  class="p-5 md:p-10 my-10">
    <masonry-wall :items="(data as any)?.showcaseImgs" :ssr-columns=2 :max-columns=3 :min-columns=2 :gap=5>
        <template #default="{ item, index }" class="bg-white">
          <NuxtImg format="webp" alt="logo variant and mockup" :src="useRuntimeConfig().public.baseUrl + `/${(item as string)}`" class="w-full h-full rounded-sm" />
        </template>
    </masonry-wall>
  </div>

  <div class="flex flex-col items-center gap-5 my-10">
    <h2 class="text-center font-Berlin-sans-fb max-w-3xl text-6xl">Let’s bring your vision to life</h2>
    <Requestcallback />
  </div>

</div>
</template>