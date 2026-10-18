<script setup lang="ts">
const isScrolling = ref(true);
let scrollTimeout: number | null = null;
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentY = window.scrollY;
  isScrolling.value = currentY > lastScrollY.value;
  lastScrollY.value = currentY;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const fbTrack = () => {
  //@ts-ignore
  if (typeof window.fbq === "function") {
    //@ts-ignore
    window.fbq("track", "Lead");
    console.log("FB Pixel Lead event fired ✅");
  } else {
    console.warn("⚠️ fbq not loaded yet.");
  }
};
</script>

<template>
  <div class="relative">
    <NuxtLink
      to="https://wa.me/+254704466984?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank"
    >
      <div
        @click="fbTrack"
        class="bg-[#008069ff] text-white fixed bottom-0 w-full flex justify-center text-xl p-3 z-10"
        :class="{
          'md:opacity-0 md:translate-y-6 md:pointer-events-none': isScrolling,
          'md:opacity-100 md:translate-y-0': !isScrolling,
        }"
      >
        <div class="flex flex-row justify-around items-center gap-5">
          <Icon name="mdi:whatsapp" /> <span>Chat Us on WhatsApp</span>
          <Icon name="material-symbols:chevron-right" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
