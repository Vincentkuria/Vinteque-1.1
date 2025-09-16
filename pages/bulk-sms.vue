<script lang="ts" setup>

useHead({
    title:'Bulk SMS Services',
    meta:[
        {name:'description', content:"Reach your customers instantly with powerful SMS marketing that delivers high engagement and measurable results."}
    ]
})

const valueCards = [
  {
    icon: "ri:send-plane-line",
    title: 'Instant Delivery',
    description: 'Send thousands of messages instantly with 99.9% delivery rates to any mobile network worldwide'
  },
  {
    icon: "mingcute:target-line",
    title: 'Targeted Messaging',
    description: 'Segment your audience and send personalized messages that drive engagement and conversions'
  },
  {
    icon: "material-symbols:bar-chart",
    title: 'Real-time Analytics',
    description: 'Track delivery rates, open rates, and campaign performance with detailed analytics and reporting'
  }
];

const features = [
  {
    title: 'Global Reach',
    description: 'Send messages to over 200 countries worldwide',
    metric: '200+ countries'
  },
  {
    title: 'High Delivery Rate',
    description: 'Industry-leading delivery success rate',
    metric: '99.9% delivery'
  },
  {
    title: 'Fast Processing',
    description: 'Messages delivered within seconds',
    metric: '<30 seconds'
  },
  {
    title: 'Bulk Capacity',
    description: 'Send millions of messages per hour',
    metric: '1M+ per hour'
  }
];

const smsServices = [
  {
    title: 'Bulk SMS Campaigns',
    description: 'Send promotional messages to thousands of recipients simultaneously',
    features: ['Mass Messaging', 'Campaign Scheduling', 'Contact Lists', 'Message Templates', 'A/B Testing', 'Performance Tracking']
  },
  {
    title: 'Transactional SMS',
    description: 'Automated messages for order confirmations, OTPs, and notifications',
    features: ['Order Updates', 'Payment Confirmations', 'OTP Delivery', 'Appointment Reminders', 'Account Alerts', 'API Integration']
  },
  {
    title: 'Two-Way SMS',
    description: 'Interactive messaging for customer support and engagement',
    features: ['Customer Support', 'Survey Responses', 'Opt-in/Opt-out', 'Keyword Campaigns', 'Auto-replies', 'Conversation Management']
  },
  {
    title: 'SMS Marketing Automation',
    description: 'Automated SMS sequences based on customer behavior and triggers',
    features: ['Drip Campaigns', 'Behavioral Triggers', 'Customer Journey SMS', 'Abandoned Cart Recovery', 'Birthday Messages', 'Welcome Series']
  }
];
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
      <span class="text-primary">Bulk SMS</span> Services
    </h1>

    <div class="flex justify-center w-full mb-10">
      <p class="text-center text-lg max-w-2xl">
        Reach your customers instantly with <span class="text-primary">powerful SMS marketing</span> that delivers high engagement and <span class="text-primary">measurable results.</span>
      </p>
    </div>
    
    <div class="flex justify-center w-full">
      <Requestcallback/>
    </div>
    </BlurReveal>
  </div>


  <div class="my-10 mx-5 md:mx-20 flex flex-col md:justify-around md:flex-row gap-5">
    <div class="w-full md:w-1/3 flex flex-col gap-5 justify-around">

      <div v-for="card in valueCards" class="w-full flex flex-row bg-white rounded-lg p-5 shadow-blue-100 drop-shadow-2xl">
        <div class="mr-2">
          <Icon :name="card.icon" class="text-2xl align-text-bottom"/>
        </div>
        <div>
          <h2 class="font-Berlin-sans-fb text-2xl">{{ card.title }}</h2>
          <p>{{ card.description }}</p>
        </div>
        

      </div>
    </div>

    <div class="w-full md:w-2/3 p-5">
      <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Bulk SMS Services</span>
      <h2 class="font-Berlin-sans-fb text-6xl">Connect with <span class="text-primary">Every Customer</span></h2>
      <p class="max-w-2xl">
        Our bulk SMS platform delivers your messages instantly to millions of customers worldwide with enterprise-grade reliability and comprehensive analytics.
      </p>

      <div class="flex justify-center my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div v-for="feature in features" class="w-fit p-5  rounded-2xl shadow bg-white shadow-black/20 flex flex-col gap-2 items-center">
          <span class="font-bold text-2xl text-primary"> {{ feature.metric }}</span>
          <span>{{ feature.title }}</span>
          <span class="text-xs text-gray-600 max-w-xs">{{ feature.description }}</span>
        </div>
      </div>
      </div>

    </div>
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">SMS Solutions</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Complete <span class="text-primary">SMS Platform</span></h2>
    <p class="max-w-2xl text-center">
      From marketing campaigns to transactional messages, we provide comprehensive SMS solutions.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="service in smsServices" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">{{ service.title }}</h3>
        <p class="max-w-sm my-2">{{ service.description }}</p>
        <ul>
          <li v-for="feature in service.features"><Icon name="material-symbols:check" class="text-green-500"/> {{ feature }}</li>
        </ul>
      </div>
    </div>
    
  </div>

  <!-- Add transparent Pricing -->

</div>
</template>