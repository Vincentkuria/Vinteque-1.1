<script setup lang="ts">
import Dialog from './ui/dialog/Dialog.vue'
import DialogTrigger from './ui/dialog/DialogTrigger.vue'
import DialogContent from './ui/dialog/DialogContent.vue'
import DialogHeader from './ui/dialog/DialogHeader.vue'
import DialogTitle from './ui/dialog/DialogTitle.vue'
import DialogDescription from './ui/dialog/DialogDescription.vue'
import ShimmerButton from './ui/shimmer-button/ShimmerButton.vue'
import * as yup from 'yup';

const submit=(values:object)=>{ 
 console.log(values)
}

const schema = yup.object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required().min(7)
})


</script>

<template>
    <div>
        <Dialog>
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
                    <VeeForm @submit="submit" :validation-schema="schema" class="p-5 flex flex-col gap-4">
                      <VeeField name="first_name" type="text" placeholder="First Name" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <VeeErrorMessage class="text-red-400" name="first_name"/>
                      <VeeField name="last_name" type="text" placeholder="Last Name" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <VeeErrorMessage class="text-red-400" name="last_name" />
                      <VeeField name="email" type="email" placeholder="Email" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <VeeErrorMessage class="text-red-400" name="email"/>
                      <VeeField name="phone" type="text" placeholder="Phone" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <VeeErrorMessage class="text-red-400" name="phone"/>

                      <button type="submit" class="text-white bg-primary rounded-full p-2 w-full cursor-pointer">Submit</button>
                    </VeeForm>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
    
</template>