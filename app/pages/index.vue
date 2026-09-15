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

useHead({
    title:'Custom Software development & Branding services',
    meta:[
        {name:'description', content:"Vinteque Software Developers is a software development agency specialized in creating customized websites, apps, and brands for businesses and startups."}
    ]
})


const plugin = Autoplay({
  delay: 4000,
  stopOnInteraction:false,
  stopOnMouseEnter:true
})

const servicesOffered=[
  {
    "title": "Web Apps",
    "details": "Custom Development, API, Support",
    "description": "We build powerful, scalable custom web applications tailored to your business processes. Whether it's a dashboard, internal tool, or SaaS platform, our web app development team ensures speed, security, and usability for businesses in Kenya and across Africa."
  },
  {
    "title": "Mobile Apps",
    "details": "iOS, Android, Cross-Platform",
    "description": "Our mobile app development services deliver high-performance apps for Android and iOS. From e-commerce to enterprise solutions, we create mobile experiences that engage users and grow your business."
  },
  {
    "title": "Business Website",
    "details": "Corporate, CMS, Management",
    "description": "We design and develop professional business websites that reflect your brand, communicate your value, and convert visitors into customers. Built for performance and optimized for search engines."
  },
  {
    "title": "Ecommerce Website",
    "details": "Store, Payments, Inventory",
    "description": "We create secure, fast, and user-friendly e-commerce websites that help you sell more online. From product catalogs to secure checkouts, we ensure a smooth shopping experience."
  },
  {
    "title": "Product & Marketing Website",
    "details": "Landing, Campaigns, Conversion",
    "description": "We design and develop marketing-focused websites that showcase your products or campaigns with style. Built to convert and optimized for visibility in search results."
  },
  {
    "title": "Search Engine Optimization (SEO)",
    "details": "On-Page, Off-Page, Local",
    "description": "Our SEO services help your business rank higher on Google and attract more qualified leads. We focus on long-term growth with strategies tailored to your market."
  },
  {
    "title": "AI & Automation",
    "details": "Automation, Chatbots, Analytics",
    "description": "We implement AI-driven solutions to automate tasks, improve decision-making, and boost efficiency. From chatbots to data insights, we help you work smarter."
  },
  {
    "title": "UI/UX Design",
    "details": "Research, Wireframes, Interface",
    "description": "Our UI/UX design services focus on creating beautiful, intuitive, and user-friendly interfaces. We design experiences that keep users engaged and satisfied."
  },
]


const faqs=[
  {
    "question": "What is custom software development?",
    "answer": "Custom software development is the process of designing, building, and maintaining software tailored to the unique needs of a business or organization. It ensures solutions meet specific workflows, goals, and customer requirements."
  },
  {
    "question": "Why should I choose custom software over ready-made solutions?",
    "answer": "Custom software offers flexibility, scalability, and full control over features. Unlike off-the-shelf options, it is built to fit your exact business processes, integrates with existing systems, and grows with you, which is vital for businesses operating in diverse markets like Africa."
  },
  {
    "question": "How much does custom software development cost?",
    "answer": "The cost depends on complexity, features, and technology. Small applications might cost a few thousand dollars or Kenyan shillings, while enterprise-level systems require a larger investment. We provide clear, tailored quotes for each project."
  },
  {
    "question": "How long does it take to build custom software?",
    "answer": "Timelines vary by scope and complexity. Simple applications can take 1–3 months, while complex enterprise systems may take 6–12 months or more. Using agile development, we deliver core features early and enhance them over time."
  },
  {
    "question": "Do you provide mobile app development along with custom software?",
    "answer": "Yes. We develop mobile apps for Android and iOS that integrate with your custom software, ensuring seamless access for both employees and customers."
  },
  {
    "question": "What technologies do you use for software development?",
    "answer": "We work with modern technologies such as Java, Kotlin, Spring Boot, .NET, Node.js, React, Vue, Angular, Flutter, and cloud platforms like AWS, Azure, and Google Cloud. The tech stack is chosen based on performance, scalability, and security needs."
  },
  {
    "question": "Can you integrate custom software with my existing systems?",
    "answer": "Absolutely. We specialize in integrating new software with existing CRM, ERP, accounting, and other systems to improve efficiency and reduce manual work."
  },
  {
    "question": "Do you offer ongoing support and maintenance?",
    "answer": "Yes. We provide ongoing support including bug fixes, updates, security patches, and feature enhancements to keep your software reliable."
  },
  {
    "question": "How do you ensure security in custom software development?",
    "answer": "We follow best practices like data encryption, secure authentication, vulnerability testing, and compliance with standards such as GDPR and ISO."
  },
  {
    "question": "Can you migrate my existing software or data to a new custom system?",
    "answer": "Yes. We handle secure data migration with minimal downtime, ensuring accuracy and smooth transition to your new software."
  },
  {
    "question": "How do you handle communication during the development process?",
    "answer": "We maintain transparency with regular updates, milestone reviews, and open communication through tools like Slack, Trello, or Jira."
  },
  {
    "question": "Do you offer cloud-based custom software solutions?",
    "answer": "Yes. We develop cloud-native applications hosted on AWS, Azure, or Google Cloud for reliability, scalability, and cost efficiency."
  },
  {
    "question": "How do I get started with a custom software development project?",
    "answer": "Simply contact us with your requirements. We’ll offer a free consultation, suggest the best technical approach, and provide a proposal with timelines and costs."
  }
]

const { data:testimonialData,status:testimonialStatus } = await useFetch(useRuntimeConfig().public.baseUrl + '/testimonials', {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout:3000
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
      We Build  
      <span>
        <SparklesText
        text="Custom Software"
        :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
        :sparkles-count="10"
        class="text-primary"
        />
      </span> That Grows Your Business
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
        <NuxtImg format="webp" src="/images/brand1.png" alt="logo" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand2.png" alt="logo" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand3.png" alt="logo" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand4.png" alt="logo" class="object-contain h-12 md:h-16 md:w-70 px-5" />
        <NuxtImg format="webp" src="/images/brand5.png" alt="logo" class="object-contain h-12 md:h-16 md:w-70 px-5" />
      </NuxtMarquee>
    </div>
    
  </div>

  <div class="border-s-4 border-primary px-2 m-5 md:px-5 md:m-10 lg:px-10 lg:m-20">
    <h2 class="font-Berlin-sans-fb text-2xl pb-2">Vinteque Software Developers</h2>
    <p>
      We're a Nairobi-based software development company helping businesses and startups build powerful digital solutions that solve real business problems. We specialize in developing custom websites, web applications, mobile applications, and enterprise software that are fast, secure, scalable, and built to grow with your business.<br><br>
      Whether you need a professional business website, a customer portal, an e-commerce platform, an internal management system, or a fully custom software solution, we design and develop technology tailored to your unique requirements. Every project is built with performance, usability, and long-term scalability in mind.<br><br>
      At Vinteque, we work closely with businesses to simplify how they operate, improve how they serve their customers, and build software that actually solves real problems. We stay involved from the early idea and planning stage all the way through development, launch, and ongoing support, making sure everything we build is practical, reliable, and built to last.
    </p>
  </div>

  <div>
    <div>
      <SuccessStories />
    </div>
  </div>

  <div class="my-10">
    <h2 class="border-s-4 border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:mx-20 font-Berlin-sans-fb text-2xl">What We Can Do For You</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-20">
      <div v-for="service in servicesOffered" class="bg-accent p-5">
        <div class="bg-white p-2 w-12 h-12 flex items-center rounded-sm shadow-black shadow-2xl"><Icon name="material-symbols-light:desktop-windows-outline-rounded" class="text-primary text-4xl"/></div>
        <h2 class="font-Berlin-sans-fb pt-2 text-2xl">{{ service.title }}</h2>
        <h3 class="font-mono py-1">{{ service.details }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>

  <div>
    <h2 class="text-center font-Berlin-sans-fb text-2xl">Our Tech Stack</h2>
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
      <Icon class="mx-5" name="logos:react" size="2rem"/>
      <Icon class="mx-5" name="devicon:vitejs" size="2rem"/>
      <Icon class="mx-5" name="devicon:cplusplus" size="2rem"/>
      <Icon class="mx-5" name="logos:python" size="2rem"/>
      <Icon class="mx-5" name="logos:swift" size="2rem"/>
      <Icon class="mx-5" name="devicon:nextjs" size="2rem"/>
      <Icon class="mx-5" name="logos:django-icon" size="2rem"/>
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
        <NuxtImg format="webp" alt="hand pointing at a screen" src="/images/pic1.jpg" class="h-64 md:h-94 md:w-96 object-cover object-top" />
      </div>
    </div>

    <div class="flex flex-wrap text-black items-center justify-around px-10 md:px-20">
      <div>
        <NuxtImg format="webp" src="/images/pic2.jpg" alt="hand pointing at a screen" class="h-64 md:h-94 md:w-96 object-cover object-center" />
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
        <NuxtImg format="webp" src="/images/pic3.jpg" alt="hand pointing at a tablet screen" class="h-64 md:h-94 md:w-96 object-cover object-top" />
      </div>
    </div>
  </div>

  <Carousel
  v-if="(testimonialData as Array<any>)?.length!=0"
  class="relative mx-14 lg:mx-20 mt-20" 
  :opts="{align:'center',loop:true}"
  :plugins="[plugin]"
  dir="ltr"
  >
      <CarouselContent>
          <CarouselItem v-for="item,index in (testimonialData as Array<any>)" :key="index" class="md:basis-1/2 lg:basis-1/1">
              <div class="w-full p-2 flex flex-col items-center gap-2">
                  <p class="text-center lg:w-[50dvw]"><Icon name="icon-park:quote" class="text-2xl"/>{{ item.testimony }}<Icon name="icon-park:quote" class="text-2xl scale-y-[-1] scale-x-[-1]"/></p>
                  <NuxtImg format="webp" alt="profile picture" :src="useRuntimeConfig().public.baseUrl+`/${item.profilePic}`" class="rounded-full w-18 h-18" />
                  <span class="italic text-center">{{ item.name, item.role - item.company  }}</span>
              </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious  class="text-slate-300 bg-zinc-400"/>
      <CarouselNext class="text-slate-300 bg-zinc-400"/>
  </Carousel>
  <div v-if="(testimonialData as Array<any>)?.length!=0" class="flex justify-center mt-5 mb-20">
    <Requestcallback/>
  </div>

  <div class="md:flex">
    <h2 class="border-s-4 max-w-96 h-fit border-primary px-2 m-5 md:px-5 md:mx-10 lg:px-10 lg:ms-20 font-Berlin-sans-fb text-2xl md:text-4xl">Frequently asked questions</h2>
    <div class="px-2 m-5 md:px-5 md:mx-10flex">
      <Accordion class="w-fit min-w-[70dvw] lg:min-w-[40dvw] lg:max-w-[80dvw]" type="single" :default-value="'0'">
        <AccordionItem v-for="item,index in faqs" :value="index.toString()">
          <AccordionTrigger class="text-base">{{ item.question }}</AccordionTrigger>
          <AccordionContent>
            <p>{{ item.answer }}</p>
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