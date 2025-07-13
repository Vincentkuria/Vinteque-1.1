<script setup lang="ts">
import Dialog from './ui/dialog/Dialog.vue'
import DialogTrigger from './ui/dialog/DialogTrigger.vue'
import DialogContent from './ui/dialog/DialogContent.vue'
import DialogHeader from './ui/dialog/DialogHeader.vue'
import DialogTitle from './ui/dialog/DialogTitle.vue'
import DialogDescription from './ui/dialog/DialogDescription.vue'
import ShimmerButton from './ui/shimmer-button/ShimmerButton.vue'


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
                    <from class="p-5 flex flex-col gap-4">
                      <input type="text" placeholder="Name" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <input type="email" placeholder="Email" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <input type="text" placeholder="Phone" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <select placeholder="Preferred Call Method" class="bg-gray-300 rounded-full p-2 w-full" required>
                        <option value="">Select preferred call method</option>
                        <option value="phone">Phone Call</option>
                        <option value="google-meet">Google Meet</option>
                        <option value="either">Either is fine</option>
                      </select>
                      <div>
                        <labe for="time">Preferred Time</labe>
                        <input type="datetime-local" id="time" placeholder="Preferred Time" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      </div>
                      
                      <button type="submit" class="text-white bg-primary rounded-full p-2 w-full cursor-pointer">Submit</button>
                    </from>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
    
</template>