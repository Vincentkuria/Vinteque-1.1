<script lang="ts" setup>

useHead({
    title:'Branding - Case study ',
    meta:[
        {name:'description', content:"Explore Vinteque’s branding case studies showcasing how we’ve transformed businesses with impactful identities, websites, and digital strategies."}
    ]
})

const { data,status } = await useFetch(useRuntimeConfig().public.baseUrl + '/items/brand', {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
  query:{
    fields:'id,title,display_img'
  }
})

</script>

<template>
<div>

  <div>
    <h1 class="border-s-4 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Brand Identity Case Studies</h1>
    <p class="mx-5 md:mx-20 max-w-3xl">
      Discover how our strategic branding services help businesses create a powerful identity, connect with their audience, and stand out in competitive markets through impactful design and messaging
    </p>
  </div>

  <div class="flex justify-center">
    <div class="grid md:grid-cols-2 gap-5 my-10 md:m-10">
      <div v-for="item in (data as any)['data']">
        <NuxtLink :to="`/case-study/branding/${item.id}`" class="md:p-5 flex flex-col w-fit h-fit shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50">
        <div>
          <h1 class="px-2 mx-5 font-bold">{{ item['title'] }}</h1>
        </div>
        <div class="w-full md:w-[500px] h-[340px]">
          <NuxtImg format="webp" alt="a branded logo display" :src="useRuntimeConfig().public.baseUrl+`/assets/${item['display_img']}`" class="object-contain w-full h-full"/>
        </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  
</div>
</template>