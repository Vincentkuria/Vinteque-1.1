
<script lang="ts" setup>
const slung=ref(useRoute().params.slung)
const title=ref()
const heroImg=ref()
const dateCreated=ref()
const body=ref()

const {data,status}=await useFetch(useRuntimeConfig().public.directus.url+`/items/blog/${slung.value}`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  query:{
    fields:'*'
  }
})


if(status.value=='success'){
  const trimedData=ref((data.value as any)['data'])

  title.value=trimedData.value['title']
  heroImg.value=trimedData.value['hero_img']
  dateCreated.value=trimedData.value['date_created']
  body.value=trimedData.value['body']
}

function convertTime(utcString:string) {
  // to local timezone and human readable
    const date = new Date(utcString);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`
}

</script>

<template>
<div>
  <div class="px-5 md:px-20 my-5">
    <h1 class="font-Berlin-sans-fb text-3xl md:text-5xl">{{ title }}</h1>
    <span class="font-mono text-sm">{{ convertTime(dateCreated) }}</span>
    <div class="my-5 w-full h-[40vh] md:h-[60vh] bg-green-600">
      <NuxtImg :src="useRuntimeConfig().public.directus.url+`/assets/${heroImg}`" class="w-full h-full object-cover"/>
    </div>

    <!-- blogs body -->
    <div v-html="body" class="v-html my-10"/>
  </div>
  <div class="my-10">
    <BlogsSection />
  </div>
</div>
  
</template>
