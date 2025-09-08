<script lang="ts" setup>
import Card from '~/components/ui/card/Card.vue'
import CardHeader from '~/components/ui/card/CardHeader.vue'
import CardTitle from '~/components/ui/card/CardTitle.vue'
import CardDescription from '~/components/ui/card/CardDescription.vue'
import CardContent from '~/components/ui/card/CardContent.vue'
import Button from '~/components/ui/button/Button.vue'
import Pagination from '~/components/ui/pagination/Pagination.vue'
import PaginationContent from '~/components/ui/pagination/PaginationContent.vue'
import PaginationPrevious from '~/components/ui/pagination/PaginationPrevious.vue'
import PaginationItem from '~/components/ui/pagination/PaginationItem.vue'
import PaginationEllipsis from '~/components/ui/pagination/PaginationEllipsis.vue'
import PaginationNext from '~/components/ui/pagination/PaginationNext.vue'
import Drawer from '~/components/ui/drawer/Drawer.vue'
import DrawerTrigger from '~/components/ui/drawer/DrawerTrigger.vue'
import DrawerContent from '~/components/ui/drawer/DrawerContent.vue'
import DrawerHeader from '~/components/ui/drawer/DrawerHeader.vue'
import DrawerTitle from '~/components/ui/drawer/DrawerTitle.vue'

const currentPage=ref<number>(1)

const {data:countData,status:countStatus}=await useFetch(useRuntimeConfig().public.directus.url+`/items/job`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  query:{
    'aggregate[count]':'*'
  }
})
const totalJobs=ref<number>(0)
countStatus.value=='success'? totalJobs.value=(countData.value as any)['data'][0]['count'] as number:''
const pageLimit=ref(6)

const {data,status}=await useFetch(useRuntimeConfig().public.directus.url+`/items/job`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  query:{
    fields:'*',
    limit:pageLimit.value,
    page:currentPage.value,
    sort:'sort,-date_created'
  }
})
</script>


<template>
<div>
  
  <h1 class="text-5xl  md:mx-20 text-center font-Berlin-sans-fb"><span class="text-primary">Join Our Team</span> at Vinteque Software Developers</h1>
  <div class="flex justify-center">
    <p class="my-5 max-w-3xl text-center">We're building the future of software development with innovative solutions and cutting-edge technology. Join our passionate team of developers, designers, and innovators who are committed to excellence and growth.</p>
  </div>

  <div v-if="totalJobs<1" class="h-[50vh] flex justify-center items-center bg-zinc-300 shadow drop-shadow-black m-5">
    <p class="text-2xl font-Berlin-sans-fb text-gray-400">No openings at the moment</p>
  </div>

  <div v-else class="mx-2 lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-5 place-self-center">
    <div v-for="item in (data as any)['data']">
      <Card class="hover:shadow-lg transition-shadow w-full lg:w-lg">
        <CardHeader>
          <div>
            <div>
              <CardTitle class="mb-2">{{ item['title'] }}</CardTitle>
              <CardDescription class="flex items-center gap-4 mb-3">
                <span class="flex items-center gap-1">
                  <Icon name="mdi:account-supervisor-outline" />
                  {{ item['department'] }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="mdi:map-marker-outline" />
                  {{ item['location'] }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="mdi:clock-time-eight-outline" />
                  {{ item['type'] }}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div v-html="item['body']" class="v-html mb-4"/>
          
          <Drawer>
            <DrawerTrigger class="w-full">
              <Button class="w-full hover:bg-blue-950 bg-secondary-2 hover:cursor-pointer">Apply Now</Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle class="text-2xl">
                  Applying for: {{ item['title'] }}
                </DrawerTitle>
              </DrawerHeader>

              <div>
                <form class="mx-5 md:mx-10 mb-5 md:w-lg">
                  <div class="flex flex-col">
                    <label>Name</label>
                    <input class="bg-gray-300 rounded-full p-2" type="text"/>
                  </div>

                  <div class="flex flex-col">
                    <label>Email</label>
                    <input class="bg-gray-300 rounded-full p-2" type="email">
                  </div>

                  <div class="flex flex-col">
                    <label>Phone Number</label>
                    <input class="bg-gray-300 rounded-full p-2" type="text"/>
                  </div>
                  <div class="flex flex-col">
                    <label class="font-semibold">Resume</label>
                    <input class="bg-gray-300 text-xs w-fit text-gray-500 rounded-2xl p-2 mb-3 border-1 transition-all duration-200 cursor-pointer file:bg-blue-950 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-1 file:mr-4 file:cursor-pointer file:transition-colors" accept=".pdf,.doc,.docx" type="file"/>
                  </div>
                  <Button class="w-full hover:bg-blue-950 bg-secondary-2 hover:cursor-pointer">Submit Application</Button>
                </form>
              </div>
            </DrawerContent>
          </Drawer>

          
        </CardContent>
      </Card>
    </div>
  </div>
  

  <pagination class="my-10" v-slot="{page}" :items-per-page="pageLimit" :total="totalJobs" :default-page="1">
    <pagination-content v-slot="{items}">
      <pagination-previous />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
        v-if="item.type === 'page'"
        :value="item.value"
        :is-active="item.value === page"
        @click="currentPage=item.value"
      >
        {{ item.value }}
      </PaginationItem>
      </template>
      <pagination-ellipsis :Index="4"/>
      <pagination-next />
    </pagination-content>
  </pagination>
  
</div>
</template>