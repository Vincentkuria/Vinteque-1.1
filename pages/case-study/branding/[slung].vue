<script lang="ts" setup>
const slung=ref(useRoute().params.slung)
const title=ref()
const bgColor=ref()
const location=ref()
const heroImgUrl=ref()
const aboutClient=ref()
const goal=ref()
const showcaseImgUrls=ref<string[]>([])
const showcaseBgColor=ref()

const {data,status}=await useFetch(useRuntimeConfig().public.directus.url+`/items/brand/${slung.value}`,{
  method:'get',
  headers:{
    'Content-Type':'application/json'
  },
  query:{
    fields:'*,showcase_imgs.directus_files_id'
  }
})

if (status.value=='success') {
  const caseStudy=ref((data.value as any)['data'])
  
  title.value=caseStudy.value['title']
  bgColor.value=caseStudy.value['bg_color']
  location.value=caseStudy.value['location']
  heroImgUrl.value=useRuntimeConfig().public.directus.url+`/assets/${caseStudy.value['hero_img']}`
  aboutClient.value=caseStudy.value['about_client']
  goal.value=caseStudy.value['goal']
  caseStudy.value['showcase_imgs'].forEach((element:any) => {
    showcaseImgUrls.value.push(useRuntimeConfig().public.directus.url+`/assets/${element['directus_files_id']}`)
  });
  showcaseBgColor.value=caseStudy.value['showcase_bg_color'] 
}
</script>

<template>
<div v-if="status!=='success'" class="min-h-[50vh]">
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
        {{ title }}
      </h1>
    </div>

    <div class="py-5">
      <span>Location: <span class="font-bold">{{ location }}</span></span>
      <div class="w-full h-[340px]" :style="{'background-color': bgColor}">
        <NuxtImg format="webp" :src="heroImgUrl" class="h-full w-full object-contain object-center" />
      </div>
      <div v-html="aboutClient" class="v-html py-2"/>
    </div>

  </div>

  <div>
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Brand Identity Goal</h1>
    <div v-html="goal" class="v-html mx-5 md:mx-20"/>
  </div>

  <div
  :style="{'background-color': showcaseBgColor}"
  class="p-5 md:p-10 my-10">
    <masonry-wall :items="showcaseImgUrls" :ssr-columns=2 :max-columns=3 :min-columns=2 :gap=5>
        <template #default="{ item, index }" class="bg-white">
          <NuxtImg format="webp" :src="item" class="w-full h-full rounded-sm" />
        </template>
    </masonry-wall>
  </div>

  <div class="flex flex-col items-center gap-5 my-10">
    <h2 class="text-center font-Berlin-sans-fb max-w-3xl text-6xl">Let’s bring your vision to life</h2>
    <Requestcallback />
  </div>

</div>
</template>