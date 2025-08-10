<script lang="ts" setup>

</script>

<template>
<div>
  <!-- Hero section -->
  <div class="mx-2 my-5 lg:mx-20 lg:my-10 flex items-center justify-center">
    <BlurReveal
    :delay="0"
    :duration="0.75"
    >
    <h1 class="font-Berlin-sans-fb text-black text-6xl text-center md:text-8xl mb-5">
      <span class="text-primary">Business</span> Websites
    </h1>

    <div class="flex justify-center w-full mb-10">
      <p class="text-center text-lg max-w-2xl">
        Establish your <span class="text-primary">professional online presence</span> with custom websites that attract customers, build trust, and <span class="text-primary">grow your business.</span>
      </p>
    </div>
    
    <div class="flex justify-center w-full">
      <Requestcallback/>
    </div>
    </BlurReveal>
  </div>


  <div class="my-10 mx-5 md:mx-20 flex flex-col md:justify-around md:flex-row gap-5">
    <div class="w-full md:w-1/3 flex flex-col gap-5 justify-around">

      <div v-for="n in 3" class="w-full flex flex-row bg-white rounded-lg p-5 shadow-blue-100 drop-shadow-2xl">
        <div class="mr-2">
          <Icon name="streamline-emojis:rocket" class="text-2xl align-text-bottom"/>
        </div>
        <div>
          <h2 class="font-Berlin-sans-fb text-2xl">Lightning Fast Performance</h2>
          <p>Optimized web applications that load in under 2 seconds with progressive web app capabilities</p>
        </div>
        

      </div>
    </div>

    <div class="w-full md:w-2/3 p-5">
      <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Business Websites</span>
      <h2 class="font-Berlin-sans-fb text-6xl">Your <span class="text-primary">Professional</span> Online Presences</h2>
      <p class="max-w-2xl">
        Make a powerful first impression with a professional website that showcases your business, builds credibility, and converts visitors into customers. Every business needs a strong online presence to compete in today's market.
      </p>

      <ul class="flex flex-wrap justify-around gap-2 my-5">
        <li v-for="n in 10" class="w-full md:w-1/3 flex flex-row gap-2">
          <div><Icon name="material-symbols:check" class="text-green-500"/></div>
          <div>
            <h4 class="font-bold text-sm">Lorem ipsum dolor sit</h4>
            <p class="text-sm">amet consectetur adipisicing elit.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Website Types</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Websites for Every <span class="text-primary">Business Type</span></h2>
    <p class="max-w-2xl text-center">
      We specialize in building mobile applications across various industries and use cases.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="n in 4" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">Business Apps</h3>
        <p class="max-w-sm my-2">Streamline operations, boost productivity, and drive growth for your business</p>
        <ul>
          <li v-for="n in 3"><Icon name="material-symbols:check" class="text-green-500"/> CRM Mobile Apps</li>
        </ul>
      </div>
    </div>
    
  </div>

</div>
</template>