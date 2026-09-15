<script lang="ts" setup>
import { Edit, PlusCircle, Trash2 } from 'lucide-vue-next';
import { useForm, Field as VeeField } from 'vee-validate';
import TestimonialInputs from './testimonial-inputs.vue';
import * as yup from 'yup';
import { toast } from 'vue-sonner';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const openDialog=ref(false)

const {data, status, refresh}=await useFetch(useRuntimeConfig().public.baseUrl + '/testimonials',{
  method:'GET',
})


const deleteTestimonial=async(id:number)=>{
  await $fetch(useRuntimeConfig().public.baseUrl + "/testimonials/"+id,{
    method:'DELETE',
    onResponse({response}){
      if(response.status==204){
        refresh()
      }
    }
  })
}


const testimonialSchema=yup.object({
  name:yup.string().required(),
  role:yup.string().required(),
  company:yup.string().required(),
  testimony:yup.string().required(),
  profilePic:yup.mixed<File>().required()
  .test('filesize','File size is too large (Max 5MB)',(value)=>{
    return !value || (value && (value as any).size <= MAX_FILE_SIZE);
  })
  .test('fileFormat', 'Unsupported file format', (value) => {
    // Check if file exists and validate mime type
    return !value || (value && SUPPORTED_FORMATS.includes((value as any).type));
  }),
})

const {handleSubmit}=useForm({
  validationSchema:testimonialSchema
})

const onSubmit=handleSubmit(async (data)=>{
  const formData=new FormData()
  formData.append('name',data.name)
  formData.append('role',data.role)
  formData.append('company',data.company)
  formData.append('testimony',data.testimony)
  formData.append('profilePic',data.profilePic)

  await $fetch(useRuntimeConfig().public.baseUrl + '/testimonials',{
    method:'POST',
    body:formData,
    onResponse({response}){
      if (response.status==201) {
        toast.success('Testimonial created successfully ')
        refresh()
        openDialog.value=false
      }
    }
  })
})

</script>
<template>
  <div class="w-full h-full overflow-y-scroll">
    <div>
      

      <UiDialog v-model:open="openDialog">

          <form>
            <UiDialogTrigger as-child>
              <UiButton>
                <PlusCircle/> <span>New Testimonial</span>
              </UiButton>
            </UiDialogTrigger>

            <UiDialogContent>
              <UiDialogHeader>
                <UiDialogTitle>New testimonial</UiDialogTitle>
                <UiDialogDescription>
                  Fill the details for the new testimonial
                </UiDialogDescription>
              </UiDialogHeader>

              <TestimonialInputs/>

              <UiDialogFooter>
                <UiDialogClose as-child>
                  <UiButton variant="outline">
                    Cancel
                  </UiButton>
                </UiDialogClose>
                <UiDialogClose>
                  <UiButton @click="onSubmit">
                    Save changes
                  </UiButton>
                </UiDialogClose>
                
              </UiDialogFooter>
            </UiDialogContent>

          </form>
            
        </UiDialog>

    </div>
    <UiItem v-if="status=='pending'" v-for="n in 3" class="transition-all duration-200 ease-in-out">
      <UiItemMedia>
        <UiSkeleton class="rounded-full w-12 h-12" />
      </UiItemMedia>
      <UiItemContent>
        <UiSkeleton class="rounded-full w-3xs h-5" />
        <UiItemDescription>
          <UiSkeleton class="rounded-2xl w-full h-20"/>
        </UiItemDescription>
      </UiItemContent>
      <UiItemActions>
        <UiSkeleton class="rounded-xl w-20 h-10"/>
      </UiItemActions>
    </UiItem>

    <div v-else-if="status=='error'" class="w-full h-full flex items-center transition-all duration-200 ease-in-out">
      <div class="text-center w-full text-red-400 text-lg">
        <span class="font-bold text-2xl">Error Loading</span><br/>
        reload this page or check your network
      </div> 
    </div>

    <div v-else-if="(data as Array<any>).length==0" class="w-full h-full flex items-center transition-all duration-200 ease-in-out">
      <div class="text-center w-full text-gray-400 text-lg">
        <span class="font-bold text-2xl">You have 0  testimonials</span><br/>
      </div> 
    </div>

    <UiItem v-else v-for="testimonial in (data as Array<any>)" class="transition-all duration-200 ease-in-out">
      <UiItemMedia>
        <NuxtImg format="webp" alt="profile picture" :src="useRuntimeConfig().public.baseUrl+`/${testimonial.profilePic}`" class="rounded-full w-12 h-12" />
      </UiItemMedia>
      <UiItemContent>
        <UiItemTitle>{{ testimonial.name }}  {{ testimonial.role }}, {{ testimonial.company }}</UiItemTitle>
        <UiItemDescription>
          {{ testimonial.testimony }}
        </UiItemDescription>
      </UiItemContent>
      <UiItemActions>
        
        <UiAlertDialog>
          <UiAlertDialogTrigger>
            <Trash2 :size="16"/>
          </UiAlertDialogTrigger>

          <UiAlertDialogContent>
            <UiAlertDialogHeader>
              <UiAlertDialogTitle>Are you sure you want to delete?</UiAlertDialogTitle>
              <UiAlertDialogDescription>
                Note: Testimonials deleted can not be recovered
              </UiAlertDialogDescription>
            </UiAlertDialogHeader>
            <UiAlertDialogFooter>
              <UiAlertDialogCancel>
                No
              </UiAlertDialogCancel>
              <UiAlertDialogAction @click="deleteTestimonial(testimonial.id)">
                Yes
              </UiAlertDialogAction>
            </UiAlertDialogFooter>
          </UiAlertDialogContent>
        </UiAlertDialog>
        
      </UiItemActions>
    </UiItem>
  </div>
</template>
