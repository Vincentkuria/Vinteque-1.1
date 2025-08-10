<script setup lang="ts">
import BlurReveal from '~/components/ui/blur-reveal/BlurReveal.vue'
import SparklesText from '~/components/ui/sparkles-text/SparklesText.vue'
import Requestcallback from '~/components/Requestcallback.vue'
import Autoplay from 'embla-carousel-autoplay'
import Carousel from '~/components/ui/carousel/Carousel.vue'
import CarouselContent from '~/components/ui/carousel/CarouselContent.vue'
import CarouselPrevious from '~/components/ui/carousel/CarouselPrevious.vue'
import CarouselNext from '~/components/ui/carousel/CarouselNext.vue'
import CarouselItem from '~/components/ui/carousel/CarouselItem.vue'
import Accordion from '~/components/ui/accordion/Accordion.vue'
import AccordionItem from '~/components/ui/accordion/AccordionItem.vue'
import AccordionTrigger from '~/components/ui/accordion/AccordionTrigger.vue'
import AccordionContent from '~/components/ui/accordion/AccordionContent.vue'
import SuccessStories from '~/components/success-stories.vue'
import BlogsSection from '~/components/blogs-section.vue'

const pa="dhdhdhdhddhh \n dhdhddjd \n dhdhdj dhdhdhdhddhh <br> dhdhddjd \n dhdhdj dhdhdhdhddhh \N dhdhddjd \n dhdhdj dhdhdhdhddhh \N dhdhddjd \n dhdhdj"

const plugin = Autoplay({
  delay: 4000,
  stopOnInteraction:false,
  stopOnMouseEnter:true
})

</script>

<template>
<div>
  <div class="mx-2 my-5 lg:mx-20 lg:my-10 min-h-[50vh] flex items-center">
    <BlurReveal
    :delay="0"
    :duration="0.75"
    >
    <h1 class="font-Berlin-sans-fb text-black text-6xl text-center md:text-8xl mb-10">
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
    <ul class="flex flex-row justify-around border-y-1 border-blue-200 py-2 px-1 gap-2">
      <li ><Icon name="logos:google-icon" class="text-2xl align-text-bottom"/> 5.0 <span class="whitespace-nowrap"><Icon v-for="i in 5" name="material-symbols:star-rate" class="text-yellow-400 text-xl align-text-bottom"/></span></li>
      <li><Icon name="twemoji:flag-for-flag-kenya" class="text-2xl align-text-bottom"/> Based in Nairobi, Kenya</li>
      <li><Icon name="streamline-emojis:artist-palette" class="align-text-bottom text-2xl"/>Design centric approach</li>
      <li><Icon name="streamline-emojis:rocket" class="text-2xl align-text-bottom"/> 50+ Projects Completed</li>
    </ul>
    <div class="flex justify-center">
      <NuxtMarquee class="h-20 max-w-[1500px]" :gradient="true" dir="ltr">
        <NuxtImg format="webp" src="/images/brand1.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand2.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand3.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand4.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand5.png" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      </NuxtMarquee>
    </div>
    
  </div>

  <div class="border-s-4 border-primary px-2 m-5 md:px-5 md:m-10 lg:px-10 lg:m-20">
    <h1 class="font-Berlin-sans-fb text-2xl pb-2">Vinteque Software Developers</h1>
    <p>Looking for a custom software development company in Kenya? Based in Nairobi, we specialize in building powerful websites, mobile apps, and brand identities tailored to your unique business needs. As experienced Nairobi software developers, we help startups and enterprises scale with world-class digital solutions from modern website design to mobile app development and professional branding.<br>
      <br>
      Whether you're a local business or a global company, our team is committed to delivering custom-built platforms that elevate your digital presence, drive growth, and position your brand for success.<br>
      <br>
      Partner with us for reliable, scalable, and results-driven software development services in Kenya.Your full-stack partner for websites, apps, and branding.</p>
  </div>

  <div>
    <div>
      <SuccessStories />
    </div>
  </div>

  <div class="my-10">
    <h1 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">What We Can Do For You</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-20">
      <div v-for="n in 8" class="bg-accent p-5">
        <div class="bg-white p-2 w-12 h-12 flex items-center rounded-sm shadow-black shadow-2xl"><Icon name="material-symbols-light:desktop-windows-outline-rounded" class="text-primary text-4xl"/></div>
        <h1 class="font-Berlin-sans-fb pt-2 text-2xl">Web Apps</h1>
        <h2 class="font-mono py-1">Dev & Support</h2>
        <p>We build powerful, scalable custom web applications tailored to your business processes. Whether it's a dashboard, internal tool, or SaaS platform, our web app development team in Kenya ensures speed, security, and usability.</p>
      </div>
    </div>
  </div>

  <div>
    <h1 class="text-center font-Berlin-sans-fb text-2xl">Our Tech Stack</h1>
  </div>

  <div class="mt-5 flex justify-center">
    <NuxtMarquee class="h-20 max-w-[1500px]" :gradient="true" dir="ltr">
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
  
  <div class="flex flex-col gap-20 my-10">
    <div class="flex flex-wrap bg-secondary-2 text-white items-center justify-around px-10 md:px-20">
      <div class="md:max-w-[40dvw] flex flex-col gap-3 py-10 order-2 md:order-1">
        <h2 class="font-Berlin-sans-fb text-4xl">Still Using Spreadsheets to Run Your Business?</h2>
        <p>Upgrade to a powerful custom web app that automates tasks, boosts productivity, and scales with your needs.</p>
        <Requestcallback/>
      </div>
      <div class="order-1 md:order-2">
        <NuxtImg src="/images/pic1.jpg" class="h-64 md:h-94 md:w-96 object-cover object-top" />
      </div>
    </div>

    <div class="flex flex-wrap text-black items-center justify-around px-10 md:px-20">
      <div>
        <NuxtImg src="/images/pic2.jpg" class="h-64 md:h-94 md:w-96 object-cover object-center" />
      </div>
      <div class="md:max-w-[40dvw] flex flex-col gap-3 py-10">
        <h2 class="font-Berlin-sans-fb text-4xl">Tired of Switching Between 5 Different Tools?</h2>
        <p>Consolidate your workflow into one smart app - custom-built to match your business processes. One login. One system. Full control. Stop paying for bloated software. Let’s simplify your life.</p>
        <Requestcallback/>
      </div>
    </div>

    <div class="flex flex-wrap bg-secondary-2 text-white items-center justify-around px-10 md:px-20">
      <div class="md:max-w-[40dvw] flex flex-col gap-3 py-10 order-2 md:order-1">
        <h2 class="font-Berlin-sans-fb text-4xl">Is Your Team Still Doing Everything Manually?</h2>
        <p>From approvals to reports get a custom web app that automates your routine tasks and saves your team countless hours.
More time. More focus.  More results.</p>
        <Requestcallback/>
      </div>
      <div class="order-1 md:order-2">
        <NuxtImg src="/images/pic3.jpg" class="h-64 md:h-94 md:w-96 object-cover object-top" />
      </div>
    </div>
  </div>

  <Carousel
  class="relative mx-14 lg:mx-20 mt-20" 
  :opts="{align:'center',loop:true}"
  :plugins="[plugin]"
  dir="ltr"
  >
      <CarouselContent>
          <CarouselItem v-for="n,index in 7" :key="index" class="md:basis-1/2 lg:basis-1/1">
              <div class="w-full p-2 flex flex-col items-center gap-2">
                  <p class="text-center lg:w-[50dvw]"><Icon name="icon-park:quote" class="text-2xl"/>We came to them with just an idea, and they turned it into a fully functioning web platform that’s now running our entire business. The team was incredibly responsive, professional, and genuinely cared about the outcome. They didn’t just build what we asked for, they made it better.<Icon name="icon-park:quote" class="text-2xl scale-y-[-1] scale-x-[-1]"/></p>
                  <NuxtImg src="/images/pic1.jpg" class="rounded-full w-18 h-18" />
                  <span class="italic text-center">Vincent Kuria - CEO, Vinteque Software Developers</span>
              </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious  class="text-slate-300 bg-zinc-400"/>
      <CarouselNext class="text-slate-300 bg-zinc-400"/>
  </Carousel>
  <div class="flex justify-center mt-5 mb-20">
    <Requestcallback/>
  </div>

  <div class="md:flex">
    <h1 class="border-s-4 max-w-96 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Frequently asked questions</h1>
    <div class="px-2 m-5 md:px-5 md:mx-10flex">
      <Accordion class="w-fit min-w-[70dvw] lg:min-w-[40dvw] lg:max-w-[80dvw]" type="single" :default-value="'1'">
        <AccordionItem v-for="n,index in 7" :value="index.toString()">
          <AccordionTrigger class="text-base">Hello</AccordionTrigger>
          <AccordionContent>
            Wewe
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>

  <div class="my-10">
    <BlogsSection />
  </div>
</div>
</template>