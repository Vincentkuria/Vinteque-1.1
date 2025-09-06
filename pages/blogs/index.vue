<script lang="ts" setup>
import Pagination from '~/components/ui/pagination/Pagination.vue'
import PaginationContent from '~/components/ui/pagination/PaginationContent.vue'
import PaginationNext from '~/components/ui/pagination/PaginationNext.vue'
import PaginationPrevious from '~/components/ui/pagination/PaginationPrevious.vue'
import PaginationEllipsis from '~/components/ui/pagination/PaginationEllipsis.vue'
import PaginationItem from '~/components/ui/pagination/PaginationItem.vue'

/* TODO after creating more than 5 blogs
access them from latest created date

and also add limit the componentblog-section to only desplay 7 of them
*/
</script>

<template>
<div>
  <div>
    <!-- Blogs hero section -->
    <div class="bg-secondary-2 px-5 md:px-20 py-10 text-gray-300 ">
      <div
      class="my-10 border-y-1 border-blue-950">
        <h1 class="font-Berlin-sans-fb text-6xl md:text-9xl max-w-lg">
          The Blog
        </h1>
      </div>

      <div class="flex flex-col md:flex-row gap-10">
        <div>
          <div class="w-full md:w-[40vw] my-5 h-fit  hover:cursor-pointer">
              <div class="h-[60%] w-full bg-gray-400">
                  <NuxtImg src="/images/pic1.jpg" class="h-full max-h-[80vh] w-full object-cover object-center" />
              </div>
              <div class="py-3">
                  <span class="font-mono">May 10, 2023</span>
                  <h2 class="w-full font-Berlin-sans-fb text-2xl line-clamp-2">Whats New On Ai Designs in the big city of nairobi On Ai Designs in the big city of nairobi</h2>
                  <p class="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec sed odio dui. 
                  </p>
              </div>
          </div>
        </div>

        <div>
          <div v-for="n in 3" class="py-10 flex flex-row justify-around hover:cursor-pointer border-b-1 border-blue-950">
              <div class="h-30 w-92 bg-gray-400">
                  <NuxtImg src="/images/pic1.jpg" class="h-full w-full object-cover object-center" />
              </div>
              <div class="px-3">
                  <span class="font-mono text-sm">May 10, 2023</span>
                  <h2 class="w-full font-Berlin-sans-fb text-lg line-clamp-2">Whats New On Ai Designs in the big city of nairobi On Ai Designs in the big city of nairobi</h2>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 mx-5 md:mx-20">
      <div v-for="n in 15">
            <div class="w-full h-96 bg-white rounded-2xl  shadow-lg shadow-gray-300 hover:cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-1">
                <div class="h-[60%] w-full bg-green-400">
                    <NuxtImg src="/images/pic1.jpg" class="h-full w-full object-cover object-center" />
                </div>
                <div class="p-3">
                  <span class="font-mono text-sm">May 10, 2023</span>
                  <h2 class="w-full font-Berlin-sans-fb text-lg line-clamp-2">Whats New On Ai Designs in the big city of nairobi On Ai Designs in the big city of nairobi</h2>
                </div>

            </div>
        </div>
    </div>


    <pagination class="my-10" v-slot="{page}" :items-per-page="5" :total="15" :default-page="1">
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