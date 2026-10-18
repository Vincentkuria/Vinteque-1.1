<script lang="ts" setup>
import { NuxtImg } from "#components";

const blogsscrollcontainer = ref<HTMLElement | null>(null);
const scrollAmount = 200;

onMounted(() => {
  refresh();
});

const scrollLeft = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
};
const scrollRight = () => {
  if (blogsscrollcontainer.value) {
    blogsscrollcontainer.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

const { data, status, refresh } = await useFetch(
  useRuntimeConfig().public.baseUrl + `/blogs/published`,
  {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 3000,
  },
);
</script>

<template>
  <div v-if="(data as any)?.totalElements != 0" class="">
    <div class="flex justify-between mb-5">
      <h2
        class="border-s-4 border-primary px-2 ms-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl"
      >
        Blogs
      </h2>
      <div class="flex flex-row">
        <button
          @click="scrollLeft"
          class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"
        >
          <Icon class="text-center" name="material-symbols:arrow-left-alt" />
        </button>
        <button
          @click="scrollRight"
          class="px-3 md:px-5 md:py-1 rounded-xs mx-3 bg-primary hover:bg-secondary-2 hover:cursor-pointer text-white text-xl"
        >
          <Icon class="text-center" name="material-symbols:arrow-right-alt" />
        </button>
      </div>
    </div>

    <div
      ref="blogsscrollcontainer"
      class="ms-10 md:ms-20 my-10 flex flex-row gap-10 overflow-x-scroll scrollbar scrollbar-thumb-secondary-2 scrollbar-track-blue-100"
    >
      <div v-for="item in (data as any)?.content">
        <NuxtLink :to="`/blogs/${item.id}`">
          <div
            class="w-96 m-5 h-96 bg-white rounded-2xl shadow-lg shadow-blue-300/50 hover:cursor-pointer"
          >
            <div class="h-[60%] w-full bg-green-400">
              <NuxtImg
                format="webp"
                alt="blog pic"
                :src="useRuntimeConfig().public.baseUrl + `/${item.heroImg}`"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="p-3">
              <span class="font-mono">{{ simplifyDate(item.createdAt) }}</span>
              <h2 class="w-full font-Berlin-sans-fb text-2xl line-clamp-2">
                {{ item.title }}
              </h2>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
