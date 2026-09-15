<script lang="ts" setup>
import Pagination from '~/components/ui/pagination/Pagination.vue'
import PaginationContent from '~/components/ui/pagination/PaginationContent.vue'
import PaginationNext from '~/components/ui/pagination/PaginationNext.vue'
import PaginationPrevious from '~/components/ui/pagination/PaginationPrevious.vue'
import PaginationEllipsis from '~/components/ui/pagination/PaginationEllipsis.vue'
import PaginationItem from '~/components/ui/pagination/PaginationItem.vue'

useHead({
    title:'The Blog',
    meta:[
        {name:'description', content:"Read expert insights, guides, and tips on software development, websites, mobile apps, and branding from Vinteque Software Developers."}
    ]
})


const currentPage=ref<number>(0)
const mainArticle=ref()
const pageLimit=ref(15)

if (currentPage.value==0) {
  const {data:latestData,status:latestDataStatus}=await useFetch(useRuntimeConfig().public.baseUrl+`/blogs/published`,{
    method:'get',
    headers:{
      'Content-Type':'application/json',
    },
    query:{
      size:1,
      page:0
    },
    timeout:3000
  })

  if (latestDataStatus.value=='success') {
    mainArticle.value=(latestData.value as any)?.content[0]
  }
}


const {data,status}=await useFetch(useRuntimeConfig().public.baseUrl+`/blogs/published`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  query:()=>({
    size:pageLimit.value,
    page:currentPage.value-1,
  }),
  timeout:3000
})

const subMainArticle=ref<any[]>()
const fakeMainArticle=ref()
if (status.value=='success' && currentPage.value==0) {

  subMainArticle.value=((data.value as any)?.content as Array<any>).splice(0,4)
  // the fake is just to get rid of the first element which is not usable in this case 
  fakeMainArticle.value=subMainArticle.value.splice(0,1)[0]
}


</script>

<template>
<div>
  <div>
    <!-- Blogs hero section -->
    <div class="bg-secondary-2 px-5 md:px-20 py-10 text-gray-300 ">
      <div
      class="my-10 border-y border-blue-950">
        <h1 class="font-Berlin-sans-fb text-6xl md:text-9xl max-w-lg">
          The Blog
        </h1>
      </div>

      <div v-if="currentPage==0" class="flex flex-col md:flex-row gap-10">
        <div>
          <NuxtLink :to="`/blogs/${mainArticle?.id}`">
          <div class="w-full md:w-[40vw] my-5 h-fit  hover:cursor-pointer">
              <div class="h-[60%] w-full bg-gray-400">
                  <NuxtImg format="webp" alt="blog image" :src="useRuntimeConfig().public.baseUrl+`/${mainArticle?.heroImg}`" class="h-full max-h-[80vh] w-full object-cover object-center" />
              </div>
              <div class="py-3">
                  <span class="font-mono">{{ simplifyDate(mainArticle?.createdAt) }}</span>
                  <h2 class="w-full font-Berlin-sans-fb text-2xl line-clamp-2">{{ mainArticle?.title }}</h2>
                  <p class="text-gray-500 line-clamp-4">
                    {{ htmlToText(mainArticle?.body) }}
                  </p>
              </div>
          </div>
          </NuxtLink>
        </div>

        <div>
          <div v-for="item in subMainArticle">
            <NuxtLink :to="`/blogs/${item.id}`" class="py-10 flex flex-row justify-around hover:cursor-pointer border-b-1 border-blue-950">
              <div class="h-30 w-92 bg-gray-400">
                  <NuxtImg format="webp" alt="blog image" :src="useRuntimeConfig().public.baseUrl+`/${item.heroImg}`" class="h-full w-full object-cover object-center" />
              </div>
              <div class="px-3">
                  <span class="font-mono text-sm">{{ simplifyDate(item.createdAt) }}</span>
                  <h2 class="w-full font-Berlin-sans-fb text-lg line-clamp-2">{{ item.title }}</h2>
              </div>
            </NuxtLink>
          </div>
        </div>
        
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 mx-5 md:mx-20">
      <div v-for="item in (data as any)?.content">
        <NuxtLink :to="`/blogs/${item.id}`">
            <div class="w-full h-96 bg-white rounded-2xl  shadow-lg shadow-gray-300 hover:cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-1">
                <div class="h-[60%] w-full bg-green-400">
                    <NuxtImg format="webp" alt="blog image" :src="useRuntimeConfig().public.baseUrl+`/${item.heroImg}`" class="h-full w-full object-cover object-center" />
                </div>
                <div class="p-3">
                  <span class="font-mono text-sm">{{ simplifyDate(item.createdAt) }}</span>
                  <h2 class="w-full font-Berlin-sans-fb text-lg line-clamp-2">{{ item.title }}</h2>
                </div>

            </div>
        </NuxtLink>
      </div>
    </div>


    <pagination class="my-10" v-slot="{page}" v-model:page="currentPage" :items-per-page="pageLimit" :total="(data as any)?.totalElements" :default-page="1">
      <pagination-content v-slot="{items}">
        <pagination-previous />
        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
          v-if="item.type === 'page'"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </PaginationItem>
        </template>
        <pagination-ellipsis :Index="4"/>
        <pagination-next />
      </pagination-content>
    </pagination>

  </div>
</div>
</template>