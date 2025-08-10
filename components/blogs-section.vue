<script lang="ts" setup>
import { NuxtImg } from '#components';

const blogsscrollcontainer = ref<HTMLElement | null>(null);
const scrollAmount =200;

const scrollLeft = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }
};
const scrollRight = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
}

</script>

<template>
<div class="">
    <div class="flex justify-between mb-5">
      <h1 class="border-s-4 border-primary px-2 ms-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">Blogs</h1>
      <div class="flex flex-row">
        <button @click="scrollLeft" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-left-alt"/></button>
        <button @click="scrollRight" class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"><Icon class="text-center" name="material-symbols:arrow-right-alt"/></button>
      </div>
    </div>

    <div
    ref="blogsscrollcontainer"
    class="ms-10 md:ms-20 my-10 flex flex-row gap-10 overflow-x-scroll scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100">
        <div v-for="n in 15">
            <div class="w-96 m-5 h-96 bg-white rounded-2xl  shadow-lg shadow-blue-300/50 hover:cursor-pointer">
                <div class="h-[60%] w-full bg-green-400">
                    <NuxtImg src="/images/pic1.jpg" class="h-full w-full object-cover object-center" />
                </div>
                <div class="p-3">
                  <span class="font-mono">May 10, 2023</span>
                  <h2 class="w-full font-Berlin-sans-fb text-2xl line-clamp-2">Whats New On Ai Designs in the big city of nairobi On Ai Designs in the big city of nairobi</h2>
                </div>

            </div>
        </div>
        
    </div>
</div>
</template>