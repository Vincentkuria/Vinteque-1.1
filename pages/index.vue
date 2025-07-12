<script setup lang="ts">
import BlurReveal from '~/components/ui/blur-reveal/BlurReveal.vue'
import SparklesText from '~/components/ui/sparkles-text/SparklesText.vue'
import Requestcallback from '~/components/Requestcallback.vue'

</script>

<template>
<div>
  <div class="mx-5 my-5 lg:mx-20 lg:my-10">
    <BlurReveal
    :delay="0.2"
    :duration="0.75"
    class="mb-10"
    >
    <h1 class="font-Berlin-sans-fb text-black text-6xl lg:text-8xl">
      We Create 
      <span>
        <SparklesText
        text="Custom"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="10"
        class="text-primary"
        />
      </span> Websites, Apps & Brands
    </h1>
    </BlurReveal>
    <Requestcallback />
  </div>
  
</div>
</template>