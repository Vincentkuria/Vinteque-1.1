<script lang="ts" setup>
import CardContainer from '~/components/ui/card-3d/CardContainer.vue'
import CardBody from '~/components/ui/card-3d/CardBody.vue'
import CardItem from '~/components/ui/card-3d/CardItem.vue'

useHead({
    title:'Software development - Case study ',
    meta:[
        {name:'description', content:"Explore Vinteque’s Software development case studies showcasing how we’ve transformed businesses with impactful identities, websites, and digital strategies."}
    ]
})

const { data, error, pending, status } = await useFetch(useRuntimeConfig().public.directus.url + `/items/software`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    query:{
      fields:'id,logo,title,mockup_img,mockup_back_img,software_desc'
    }
  })

  const customStyling=(logoId:string)=>{
    const img=useRuntimeConfig().public.directus.url+`/assets/${logoId}`
    return `background-image: url(${img}); background-position: center; background-size: cover`
    
  }

</script>

<template>
<div>

  <div>
    <h1 class="border-s-4 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Software Case Studies</h1>
    <p class="mx-5 md:mx-20 max-w-3xl">
      Explore real-world case studies showcasing how our custom software solutions have helped clients streamline operations, boost efficiency, and drive business growth across various industries.
    </p>
  </div>
  <div class="grid md:grid-cols-2">
    
    <ClientOnly v-for="item in ((data as any)['data'])" class="m-2">
      <NuxtLink :to="`/case-study/software/${item['id']}`">
        <CardContainer  class="shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50 hover:cursor-pointer">
          <CardBody class="flex flex-col w-full md:w-[45dvw] justify-between p-5" :style="customStyling(item['mockup_back_img'])">
            <CardItem 
            class="h-3/12 flex flex-row gap-3 items-center"
            :translate-z="50">
              <NuxtImg format="webp" alt="case study company's logo" :src="useRuntimeConfig().public.directus.url+`/assets/${item['logo']}`" class="object-contain h-full"/>
              <h3 class="font-bold text-lg">{{ item['title'] }}</h3>
              
            </CardItem>
            <CardItem
            class="h-6/12 w-full"
            :translate-z="100"
            >
              <NuxtImg format="webp" alt="software display on a gadget for case study" :src="useRuntimeConfig().public.directus.url+`/assets/${item['mockup_img']}`" class="object-contain w-full h-full"/>
            </CardItem>
            <CardItem
            :translate-z="50"
            class="h-fit w-full"
            >
              <p class="line-clamp-3">
                {{ item['software_desc'] }}
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
        </NuxtLink>
      </ClientOnly>
      
  </div>
</div>
</template>

<style>

</style>