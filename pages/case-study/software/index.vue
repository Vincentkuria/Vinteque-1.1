<script lang="ts" setup>
import CardContainer from '~/components/ui/card-3d/CardContainer.vue'
import CardBody from '~/components/ui/card-3d/CardBody.vue'
import CardItem from '~/components/ui/card-3d/CardItem.vue'


</script>

<template>
<div>

  <div>
    <h1 class="border-s-4 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Software Case Studies</h1>
    <p class="mx-5 md:mx-20 max-w-3xl">
      Explore real-world case studies showcasing how our custom software solutions have helped clients streamline operations, boost efficiency, and drive business growth across various industries.
    </p>
  </div>
  <div class="grid md:grid-cols-2">
    <ClientOnly v-for="item in 6" class="m-2">
        <CardContainer  class="shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50 hover:cursor-pointer">
          <CardBody class="flex flex-col w-full md:w-[45dvw] justify-between p-5" style="background-image: url('/images/bg.jpg'); background-position: center; background-size: cover">
            <CardItem 
            class="h-1/12 flex flex-row gap-3 items-center"
            :translate-z="50">
              <NuxtImg src="/vinteque.png" class="object-contain h-full"/>
              <h3 class="font-bold text-lg">Fusion HR - Web app</h3>
              
            </CardItem>
            <CardItem
            class="h-6/12 w-full"
            :translate-z="100"
            >
              <NuxtImg src="/images/web.png" class="object-contain w-full h-full"/>
            </CardItem>
            <CardItem
            :translate-z="50"
            class="h-fit w-full"
            >
              <p class="line-clamp-3">
                Fusion HR is a web app that automates HR processes and helps HR managers and HR staff manage employee data, payroll, and leave requests.
                Fusion HR is a web app that automates HR processes and helps HR managers and HR staff manage employee data, payroll, and leave requests.
                Fusion HR is a web app that automates HR processes and helps HR managers and HR staff manage employee data, payroll, and leave requests.
                Fusion HR is a web app that automates HR processes and helps HR managers and HR staff manage employee data, payroll, and leave requests.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </ClientOnly>
  </div>
</div>
</template>

<style>

</style>