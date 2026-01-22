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
import * as yup from 'yup';
import { toast } from 'vue-sonner'

useHead({
    title:'Careers',
    meta:[
        {name:'description', content:"Join our passionate team of developers, designers, and innovators who are committed to excellence and growth."}
    ]
})


const currentPage=ref<number>(0)
const isOpen=ref()
const pageLimit=ref(10)

const {data,status}=await useFetch(useRuntimeConfig().public.baseUrl+`/jobs/open`,{
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  query:{

  }
})

const schema=yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  phone: yup.string().required('Phone number is required').min(7),
  resume: yup.mixed<File>().required('Your resume is required').test(
    "fileSize","File too large max 1MB",(value)=>{
      if (!value) return false
      return value.size <= 1 * 1024 * 1024 // 1MB
    }
  ),

})

const submit=async(values:any)=>{
  const formData=new FormData()
  formData.append('name',values.name)
  formData.append('email',values.email)
  formData.append('phone',values.phone)
  formData.append('resume',values.resume)

  const applicationRes = await $fetch(useRuntimeConfig().public.baseUrl+`/applicants/job/${values.jobId}`, {
    method:'POST',
    body:formData,
    onResponse({response}){
      if(response.status>=200 && response.status<300){
        isOpen.value=false
        toast('Application submited successfuly')
      }
    }
  })
}

</script>


<template>
<div>
  
  <h1 class="text-5xl  md:mx-20 text-center font-Berlin-sans-fb"><span class="text-primary">Join Our Team</span> at Vinteque Software Developers</h1>
  <div class="flex justify-center">
    <p class="my-5 max-w-3xl text-center">We're building the future of software development with innovative solutions and cutting-edge technology. Join our passionate team of developers, designers, and innovators who are committed to excellence and growth.</p>
  </div>

  <div v-if="(data as any).totalElements==0" class="h-[50vh] flex justify-center items-center bg-zinc-300 shadow drop-shadow-black m-5">
    <p class="text-2xl font-Berlin-sans-fb text-gray-400">No openings at the moment</p>
  </div>

  <div v-else class="mx-2 lg:mx-10 grid grid-cols-1 lg:grid-cols-2 gap-5 place-self-cente w-full">
    <div v-for="item in (data as any).content" class="m-2 flex justify-center">
      <Card class="hover:shadow-lg transition-shadow w-full lg:w-lg">
        <CardHeader>
          <div>
            <div>
              <CardTitle class="mb-2">{{ item.title }}</CardTitle>
              <CardDescription class="flex items-center gap-4 mb-3">
                <span class="flex items-center gap-1">
                  <Icon name="mdi:account-supervisor-outline" />
                  {{ item.department }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="mdi:map-marker-outline" />
                  {{ item.location }}
                </span>
                <span class="flex items-center gap-1">
                  <Icon name="mdi:clock-time-eight-outline" />
                  {{ item.type }}
                </span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div v-html="item.body" class="v-html mb-4"/>
          
          <Drawer v-model:open="isOpen">
            <DrawerTrigger class="w-full">
              <Button class="w-full hover:bg-blue-950 bg-secondary-2 hover:cursor-pointer">Apply Now</Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle class="text-2xl">
                  Applying for: {{ item.title}}
                </DrawerTitle>
              </DrawerHeader>

              <div>
                <VeeForm @submit="submit" :initial-values="{jobId:item.id}" :validation-schema="schema" class="mx-5 md:mx-10 mb-5 md:w-lg">

                  <VeeField name="job_id" class="hidden"/>

                  <div class="flex flex-col">
                    <label>Name</label>
                    <VeeField name="name" class="bg-gray-300 rounded-full p-2" type="text"/>
                    <VeeErrorMessage class="text-red-400" name="name"/>
                  </div>

                  <div class="flex flex-col">
                    <label>Email</label>
                    <VeeField name="email" class="bg-gray-300 rounded-full p-2" type="email"/>
                    <VeeErrorMessage class="text-red-400" name="email"/>
                  </div>

                  <div class="flex flex-col">
                    <label>Phone Number</label>
                    <VeeField name="phone" class="bg-gray-300 rounded-full p-2" type="text"/>
                    <VeeErrorMessage class="text-red-400" name="phone"/>
                  </div>
                  <div class="flex flex-col">
                    <label class="font-semibold">Resume</label>
                    <VeeField name="resume" class="bg-gray-300 text-xs w-fit text-gray-500 rounded-2xl p-2 mb-3 border-1 transition-all duration-200 cursor-pointer file:bg-blue-950 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-1 file:mr-4 file:cursor-pointer file:transition-colors" accept=".pdf,.doc,.docx" type="file"/>
                    <VeeErrorMessage class="text-red-400" name="resume"/>
                  </div>
                  <Button class="w-full hover:bg-blue-950 bg-secondary-2 hover:cursor-pointer">Submit Application</Button>
                </VeeForm>
              </div>
            </DrawerContent>
          </Drawer>

          
        </CardContent>
      </Card>
    </div>
  </div>
  

  <pagination class="my-10" v-slot="{page}" :items-per-page="pageLimit" :total="(data as any).totalPages" :default-page="1">
    <pagination-content v-slot="{items}">
      <pagination-previous />
      <template v-for="(item, index) in items" :key="index">
        <PaginationItem
        v-if="item.type === 'page'"
        :value="item.value"
        :is-active="item.value === page"
        @click="currentPage=item.value-1"
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