<script lang="ts" setup>
import { ClientOnly } from '#components';
import CardContainer from './ui/card-3d/CardContainer.vue'
import CardBody from './ui/card-3d/CardBody.vue'
import CardItem from './ui/card-3d/CardItem.vue'

const softwarescrollcontainer = ref<HTMLElement | null>(null);
const brandingscrollcontainer = ref<HTMLElement | null>(null);
const scrollAmount =200;

const scrollLeft = (scroller:string) => {
  if (brandingscrollcontainer.value && scroller === 'branding') {
    brandingscrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  } else if (softwarescrollcontainer.value && scroller === 'software') {
    softwarescrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }
};
const scrollRight = (scroller:string) => {
  if (brandingscrollcontainer.value && scroller === 'branding') {
    brandingscrollcontainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  } else if (softwarescrollcontainer.value && scroller === 'software') {
    softwarescrollcontainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
};

const { data:softwareData, error, pending, status:softwareStatus } = await useFetch(useRuntimeConfig().public.baseUrl + `/items/software`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })

const { data:brandData,status:brandStatus } = await useFetch(useRuntimeConfig().public.baseUrl + '/items/brand', {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
})

  const customStyling=(logoId:string)=>{
    const img=useRuntimeConfig().public.baseUrl+`/assets/${logoId}`
    return `background-image: url(${img}); background-position: center; background-size: cover`
    
  }

</script>

<template>
<div>
  <div>
    <div class="flex justify-between mb-5">
      <h2 class="border-s-4 border-primary px-2 ms-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Our Software Success Stories</h2>
      <div class="flex flex-row">
        <button @click="scrollLeft('software')" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-left-alt"/></button>
        <button @click="scrollRight('software')" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-right-alt"/></button>
      </div>
    </div>

    <div 
    ref="softwarescrollcontainer"
    class="flex flex-row overflow-x-scroll scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100 ms-10 md:ms-20">
      <ClientOnly v-for="item in ((softwareData as any)?.data)" class="m-2">
        <NuxtLink :to="`/case-study/software/${item['id']}`">
        <CardContainer  class="shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50">
          <CardBody class="flex flex-col justify-between p-5 lg:p-10 w-[90dvw] md:w-[60dvw] md:h-[50vh] lg:w-[40dvw] lg:h-[90vh] hover:cursor-pointer" :style="customStyling(item['mockup_back_img'])">
            <CardItem 
            class="h-3/12 flex flex-row gap-3 items-center"
            :translate-z="50">
              <NuxtImg format="webp" alt="a company's logo" :src="useRuntimeConfig().public.baseUrl+`/assets/${item['logo']}`" class="object-contain h-full"/>
              <h3 class="font-bold text-lg">{{ item['title'] }}</h3>
              
            </CardItem>
            <CardItem
            class="h-6/12 w-full"
            :translate-z="150"
            >
              <NuxtImg format="webp" alt="web display on different gadgets" :src="useRuntimeConfig().public.baseUrl+`/assets/${item['mockup_img']}`" class="object-contain w-full h-full"/>
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
    <div>
      <NuxtLink to="/case-study/software">
        <p class="text-end font-semibold hover:text-primary me-5 py-5 md:me-20">View More <Icon name="nrk:arrow-right-long"  class="text-primary align-middle ps-1"/></p>
      </NuxtLink>
      
    </div>
  </div>

  <!-- Branding Stories -->
  <div>
    <div class="flex justify-between mb-5">
      <h2 class="border-s-4 border-primary px-2 ms-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Our Branding Success Stories</h2>
      <div class="flex flex-row">
        <button @click="scrollLeft('branding')" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-left-alt"/></button>
        <button @click="scrollRight('branding')" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-right-alt"/></button>
      </div>
    </div>

    <div 
    ref="brandingscrollcontainer"
    class="flex flex-row overflow-x-scroll scroll-smooth scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100 ms-10 md:ms-20">
      <div v-for="item in (brandData as any)?.data">
      <NuxtLink :to="`/case-study/branding/${item.id}`">
        <div class="m-2 w-[500px] h-[340px] shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50 hover:cursor-pointer">
          <NuxtImg format="webp" alt="logo branding display" :src="useRuntimeConfig().public.baseUrl+`/assets/${item['display_img']}`" class="object-contain w-full h-full"/>
        </div>
      </NuxtLink>
      </div>
      
    </div>
    <div>
      <NuxtLink to="/case-study/branding">
        <p class="text-end font-semibold hover:text-primary me-5 py-5 md:me-20">View More <Icon name="nrk:arrow-right-long"  class="text-primary align-middle ps-1"/></p>
      </NuxtLink>
      
    </div>
  </div>
  
</div>
</template>

<style>

</style>