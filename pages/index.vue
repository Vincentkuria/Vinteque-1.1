<script setup lang="ts">
import BlurReveal from '~/components/ui/blur-reveal/BlurReveal.vue'
import SparklesText from '~/components/ui/sparkles-text/SparklesText.vue'
import Requestcallback from '~/components/Requestcallback.vue'

const pa="dhdhdhdhddhh \n dhdhddjd \n dhdhdj dhdhdhdhddhh <br> dhdhddjd \n dhdhdj dhdhdhdhddhh \N dhdhddjd \n dhdhdj dhdhdhdhddhh \N dhdhddjd \n dhdhdj"
</script>

<template>
<div>
  <div class="mx-2 my-5 lg:mx-20 lg:my-10 min-h-[50vh] flex items-center">
    <BlurReveal
    :delay="0.2"
    :duration="0.75"
    >
    <h1 class="font-Berlin-sans-fb text-black text-6xl text-center lg:text-8xl mb-10">
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
    <div class="flex justify-center w-full">
      <Requestcallback/>
    </div>
    
    </BlurReveal>
    <!--  -->
  </div>

  <div>
    <ul class="flex flex-row justify-around border-y-1 border-black py-2 px-1 gap-2">
      <li ><Icon name="logos:google-icon" class="text-2xl align-text-bottom"/> 5.0 <span class="whitespace-nowrap"><Icon v-for="i in 5" name="material-symbols:star-rate" class="text-yellow-400 text-xl align-text-bottom"/></span></li>
      <li><Icon name="twemoji:flag-for-flag-kenya" class="text-2xl align-text-bottom"/> Based in Nairobi, Kenya</li>
      <li><Icon name="streamline-emojis:artist-palette" class="align-text-bottom text-2xl"/>Design centric approach</li>
      <li><Icon name="streamline-emojis:rocket" class="text-2xl align-text-bottom"/> 50+ Projects Completed</li>
    </ul>
    <NuxtMarquee class="h-20" :gradient="true" dir="ltr">
      <NuxtImg format="webp" src="/images/brand1.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      <NuxtImg format="webp" src="/images/brand2.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      <NuxtImg format="webp" src="/images/brand3.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      <NuxtImg format="webp" src="/images/brand4.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      <NuxtImg format="webp" src="/images/brand5.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
    </NuxtMarquee>
  </div>

  <div class="border-s-4 border-primary px-2 m-5 md:px-5 md:m-10 lg:px-10 lg:m-20">
    <h1 class="font-Berlin-sans-fb text-2xl pb-2">Vinteque Software Developers</h1>
    <p>{{ pa }}</p>
  </div>

  <div>
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:m-10 lg:px-10 lg:m-20 font-Berlin-sans-fb text-2xl">Featured Projects</h1>
    <div>
      <!-- Todo featured -->
    </div>
  </div>

  <div>
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:m-10 lg:px-10 lg:m-20 font-Berlin-sans-fb text-2xl">What We Can Do For You</h1>
    <div>
      <!-- Todo services -->
    </div>
  </div>

  <div>
    <h1 class="text-center font-Berlin-sans-fb text-2xl">Our Tech Stack</h1>
    <div>

    </div>
  </div>

  <div class="h-[100vh] mt-5">
    <NuxtMarquee class="h-20" :gradient="true" dir="ltr">
      <Icon class="mx-5" name="logos:laravel" size="2rem"/>
      <Icon class="mx-5" name="logos:spring-icon" size="2rem"/>
      <Icon class="mx-5" name="logos:php" size="2rem"/>
      <Icon class="mx-5" name="logos:vue" size="2rem"/>
      <Icon class="mx-5" name="logos:javascript" size="2rem"/>
      <Icon class="mx-5" name="devicon:androidstudio" size="2rem"/>
      <Icon class="mx-5" name="logos:kotlin" size="2rem"/>
      <Icon class="mx-5" name="logos:flutter" size="2rem"/>
      <Icon class="mx-5" name="logos:dart" size="2rem"/>
      <Icon class="mx-5" name="devicon:java-wordmark" size="2rem"/>
      <Icon class="mx-5" name="logos:nuxt-icon" size="2rem"/>
      <Icon class="mx-5" name="logos:tailwindcss-icon" size="2rem"/>
      <Icon class="mx-5" name="logos:graphql" size="2rem"/>
      <Icon class="mx-5" name="devicon:typescript" size="2rem"/>
      <Icon class="mx-5" name="catppuccin:typescript-react" size="2rem"/>
      <Icon class="mx-5" name="devicon:vitejs" size="2rem"/>
      <Icon class="mx-5" name="devicon:cplusplus" size="2rem"/>
      <Icon class="mx-5" name="vscode-icons:file-type-python" size="2rem"/>
      <Icon class="mx-5" name="vscode-icons:file-type-swift" size="2rem"/>
      <Icon class="mx-5" name="devicon:nextjs" size="2rem"/>
      <Icon class="mx-5" name="skill-icons:django" size="2rem"/>
    </NuxtMarquee>
  </div>
  
</div>
</template>