<script setup lang="ts">
import Dialog from './ui/dialog/Dialog.vue'
import DialogTrigger from './ui/dialog/DialogTrigger.vue'
import DialogContent from './ui/dialog/DialogContent.vue'
import DialogHeader from './ui/dialog/DialogHeader.vue'
import DialogTitle from './ui/dialog/DialogTitle.vue'
import DialogDescription from './ui/dialog/DialogDescription.vue'
import ShimmerButton from './ui/shimmer-button/ShimmerButton.vue'
import * as yup from 'yup';

const isOpen=ref()

const submit=async(values:object)=>{ 
 const response= await $fetch(useRuntimeConfig().public.directus.url +`/items/callback`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: values,
    onResponse({response}){
        console.log(response.status)
        if (response.status>=200 && response.status<300) {
            console.log(response.status)
            isOpen.value=false
        }
    }
 })
}

const schema = yup.object({
    name: yup.string().required('First name is required'),
    email: yup.string().required('Email is required').email('Must be a valid email'),
    phone: yup.string().required('Phone number is required').min(7),
    description: yup.string().required('Project description required')
    
})


</script>

<template>
    <div>
        <Dialog v-model:open="isOpen">
            <DialogTrigger>
                <ShimmerButton
                class="shadow-2xl"
                shimmer-size="2px"
                >
                    <span
                      class="text-nowrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg"
                    >
                      Request Callback
                    </span>
                </ShimmerButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle class="font-Berlin-sans-fb font-normal text-4xl">
                        Let’s Get in Touch
                    </DialogTitle>
                    <DialogDescription>
                        Share your contact details and we’ll follow up, locally via phone or internationally via Google Meet. It’s a simple, no-pressure way to explore your ideas with our expert team.
                    </DialogDescription>
                </DialogHeader>

                <VeeForm @submit="submit" :validation-schema="schema" class="p-5 flex flex-col gap-4">
                  <VeeField name="name" type="text" placeholder="Name" class="bg-gray-300 rounded-full p-2 w-full" required/>
                  <VeeErrorMessage class="text-red-400" name="name"/>
                  <VeeField name="email" type="email" placeholder="Email" class="bg-gray-300 rounded-full p-2 w-full" required/>
                  <VeeErrorMessage class="text-red-400" name="email"/>
                  <VeeField name="phone" type="text" placeholder="Phone number" class="bg-gray-300 rounded-full p-2 w-full" required/>
                  <VeeErrorMessage class="text-red-400" name="phone"/>

                  <VeeField name="description" as="textarea" type="text" placeholder="Describe your project or needs" class="bg-gray-300 rounded-sm p-2 w-full" required/>
                  <VeeErrorMessage class="text-red-400" name="description"/>

                  <button type="submit" class="text-white bg-primary rounded-full p-2 w-full cursor-pointer">Submit</button>
                </VeeForm>
            </DialogContent>
            
        </Dialog>
    </div>
    
</template>