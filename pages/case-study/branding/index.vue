<script lang="ts" setup>

</script>

<template>
<div>

  <div>
    <h1 class="border-s-4 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Brand Identity Case Studies</h1>
    <p class="mx-5 md:mx-20 max-w-3xl">
      Discover how our strategic branding services help businesses create a powerful identity, connect with their audience, and stand out in competitive markets through impactful design and messaging
    </p>
  </div>

  <div class="flex justify-center">
    <div class="grid md:grid-cols-2 gap-5 my-10 md:m-10">
      <div v-for="n in 15" class="md:p-5 flex flex-col w-fit h-fit shadow-lg drop-shadow-zinc-100/50  shadow-zinc-800/50">
        <div>
          <h1 class="px-2 mx-5 font-bold">Fusion HR- Nairobi, Kenya</h1>
        </div>
        <div class="w-full md:w-[500px] h-[340px]">
          <NuxtImg src="/2.png" class="object-contain w-full h-full"/>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>