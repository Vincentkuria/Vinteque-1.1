<script lang="ts" setup>
import Requestcallback from '~/components/Requestcallback.vue'

const company=ref()
const logoUrl = ref()
const barColor=ref("#ffffff")
const title=ref()
const deliverables=ref()
const location=ref()
const aboutClient=ref()
const aboutImgUrl=ref()
const challenge=ref()
const solution=ref()
const stack=ref()
const showcaseImgUrls=ref<string[]>([])
const achievements=ref<string[]>([])
const showcaseBgColor=ref()

  // get the slung from the url
  const slung =ref(useRoute().params.slung)

  // fetch the data from the api
  const { data, error, pending, status } = await useFetch(useRuntimeConfig().public.baseUrl + `/items/software/${slung.value}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    query:{
      fields:'*,achievement.name,showcase_imgs.directus_files_id'
    }
  })

  if(status.value == 'success'){
    const caseStudy=ref((data.value as any)['data'])
    // variables
    logoUrl.value =useRuntimeConfig().public.baseUrl+`/assets/${caseStudy.value['logo']}`
    barColor.value = caseStudy.value['bar_color']
    title.value=caseStudy.value['title']
    deliverables.value=caseStudy.value['deliverables']
    location.value=caseStudy.value['location']
    aboutClient.value=caseStudy.value['about_client']
    aboutImgUrl.value=useRuntimeConfig().public.baseUrl+`/assets/${caseStudy.value['about_img']}`
    challenge.value=caseStudy.value['challenge']
    solution.value=caseStudy.value['solution']
    stack.value=caseStudy.value['stack']
    showcaseBgColor.value=caseStudy.value['showcase_bg_color']


    caseStudy.value['showcase_imgs'].forEach((element:any) => {
      showcaseImgUrls.value.push(useRuntimeConfig().public.baseUrl+`/assets/${element['directus_files_id']}` )
    });

    caseStudy.value['achievement'].forEach((element:any) => {
      achievements.value.push(element['name'] as string)
    });

    useHead({
    title: title.value,
    meta:[
        {name:'description', content:`view software development case study for ${company.value} `}
    ]
  })
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
  <div>
    <div
    :style="{'background-color':barColor}"
    class="h-20 md:h-24 px-10 md:px-20 lg:px-30 border-y-1 border-blue-100">
      <NuxtImg format="webp" alt="case study company logo" :src="logoUrl" class="object-contain  h-full" />
    </div>
    

    <div class="flex flex-row mx-5 md:mx-20 my-10">
      <div class="max-w-[90dvw] md:max-w-[60dvw]">
        <h1 class="font-Berlin-sans-fb text-2xl md:text-4xl pe-5 line-clamp-6">
          {{ title }}
        </h1>
        <span>Location: <span class="font-bold">{{location}}</span></span>
      </div>
      <div class="px-5 md:px-10 border-s-2 border-blue-100">
        <h3 class="md:text-lg">Deliverables</h3>
        <span class="font-mono font-bold md:text-lg">{{ deliverables }}</span>
      </div>
    </div>

    <div>
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">About The Client</h1>
      <div v-html="aboutClient" class="v-html mx-5 md:mx-20"/>
    </div>

    <div class="w-full h-[60vh] md:h-[70vh] lg:h-[90vh] mt-5">
      <NuxtImg format="webp" alt="case study software showcase" :src="aboutImgUrl" class="object-contain bg-white w-full h-full" />
    </div>

    <div>
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">The Challenge</h1>
      <div v-html="challenge" class="v-html mx-5 md:mx-20"/>
    </div>
    

    <div class="flex flex-row flex-wrap my-10">
      <div class="max-w-[90dvw] md:max-w-[60dvw]">
        <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">The Solution</h1>
        <div v-html="solution" class="v-html mx-5 md:ms-20"/>
      </div>
      <div class="mx-5 px-5 my-5 py-5 md:px-10 border-t-2 md:border-s-2 md:border-t-0 border-blue-100">
        <h3 class="md:text-lg">Tech Stack</h3>
        <span class="font-mono font-bold md:text-lg">{{ stack }}</span>
      </div>
    </div>

    <div
    :style="{'background-color': showcaseBgColor}"
    class="p-10 my-10">
      <masonry-wall :items="showcaseImgUrls" :ssr-columns=2 :max-columns=3 :min-columns=1 :gap=5>
          <template #default="{ item, index }">
            <NuxtImg format="webp" alt="software showcase" :src="item" class="w-full h-full bg-white rounded-sm" />
          </template>
      </masonry-wall>
    </div>

    <div class="my-10">
      <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Key Achievements</h1>
      <ul class="mx-5 md:mx-20 grid grid-cols-2 justify-around gap-5">
        <li v-for="achievement in achievements"><Icon name="material-symbols:check" class="text-green-500"/>{{achievement}}</li>
      </ul>
    </div>

    <div class="flex flex-col items-center gap-5 my-10">
      <h2 class="text-center font-Berlin-sans-fb max-w-3xl text-6xl">Let’s bring your vision to life</h2>
      <Requestcallback />
    </div>

  </div>
</div>
</template>