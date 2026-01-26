
<script lang="ts" setup>

const slung=ref(useRoute().params.slung)

const {data,status}=await useFetch(useRuntimeConfig().public.baseUrl+`/blogs/${slung.value}`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  timeout:3000
})

useHead({
    title: (data.value as any)?.title,
    meta:[
        {name:'description', content: htmlToText((data.value as any)?.body)}
    ]
})

</script>

<template>
<div>
  <div class="px-5 md:px-20 my-5">
    <h1 class="font-Berlin-sans-fb text-3xl md:text-5xl">{{ (data as any)?.title }}</h1>
    <span class="font-mono text-sm">{{ simplifyDate((data as any)?.createdAt) }}</span>
    <div class="my-5 w-full h-[40vh] md:h-[60vh] bg-gray-400">
      <NuxtImg format="webp" alt="blog top display image" :src="useRuntimeConfig().public.baseUrl+`/${(data as any)?.heroImg}`" class="w-full h-full object-cover"/>
    </div>

    <!-- blogs body -->
     <!--TODO add quill editor and use its class-->
    <div v-html="(data as any)?.body" class="reset-tw my-10"/>
  </div>
  <div class="my-10">
    <BlogsSection />
  </div>
</div>
  
</template>

<style scoped>
.reset-tw,
.reset-tw * {
    all: revert !important;
}
</style>
