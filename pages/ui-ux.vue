<script lang="ts" setup>
const valueCards = [
    {
      icon: "tdesign:usergroup",
      title: 'User-Centered Design',
      description: 'Research-driven design process that puts your users at the center of every decision'
    },
    {
      icon: "material-symbols:eye-tracking-outline",
      title: 'Visual Excellence',
      description: 'Beautiful, modern interfaces that capture attention and communicate your brand effectively'
    },
    {
      icon: "ei:pointer",
      title: 'Optimized Experience',
      description: 'Intuitive user journeys that guide users toward desired actions and improve conversions'
    }
  ];

  const designPrinciples = [
    {
      title: 'User-First Approach',
      description: 'Every design decision is validated through user research and testing',
      icon: "material-symbols:person-2-outline"
    },
    {
      title: 'Accessibility by Design',
      description: 'Inclusive design ensuring usability for all users regardless of abilities',
      icon: "material-symbols:favorite-outline"
    },
    {
      title: 'Performance Optimization',
      description: 'Designs optimized for fast loading and smooth interactions',
      icon: "lucide:zap"
    },
    {
      title: 'Scalable Design Systems',
      description: 'Consistent, maintainable design systems that grow with your product',
      icon: "lucide:paintbrush"
    }
  ];

  const designServices = [
    {
      title: 'User Experience (UX) Design',
      description: 'Research-based design strategy focused on user needs and business goals',
      features: ['User Research', 'Persona Development', 'User Journey Mapping', 'Information Architecture', 'Wireframing', 'Prototyping']
    },
    {
      title: 'User Interface (UI) Design',
      description: 'Beautiful, functional interfaces that delight users and drive engagement',
      features: ['Visual Design', 'Design Systems', 'Component Libraries', 'Responsive Design', 'Micro-interactions', 'Style Guides']
    },
    {
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile app designs for iOS and Android',
      features: ['Mobile UX Research', 'Touch Interface Design', 'Platform Guidelines', 'App Store Assets', 'Onboarding Flows', 'Push Notifications']
    },
    {
      title: 'Web Application Design',
      description: 'Complex web application interfaces optimized for productivity and ease of use',
      features: ['Dashboard Design', 'Data Visualization', 'Form Design', 'Navigation Systems', 'Accessibility', 'Performance Optimization']
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
      <span class="text-primary">UI/UX</span> Design
    </h1>

    <div class="flex justify-center w-full mb-10">
      <p class="text-center text-lg max-w-2xl">
        Create <span class="text-primary">exceptional user experiences</span> that delight customers, drive engagement, and <span class="text-primary">accelerate business growth.</span>
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
      <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">UI/UX Design</span>
      <h2 class="font-Berlin-sans-fb text-6xl">Design That <span class="text-primary">Converts</span></h2>
      <p class="max-w-2xl">
        Our user-centered design approach creates interfaces that not only look beautiful but also drive real business results through improved user engagement and conversion rates.
      </p>

      <ul class="flex flex-wrap justify-around gap-2 my-5">
        <li v-for="principle in designPrinciples" class="w-full md:w-1/3 flex flex-row gap-2">
          <div><Icon :name="principle.icon" class="text-green-500"/></div>
          <div>
            <h4 class="font-bold text-sm">{{ principle.title }}</h4>
            <p class="text-sm">{{ principle.description }}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Design Services</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Complete <span class="text-primary">Design Solutions</span></h2>
    <p class="max-w-2xl text-center">
      From research to final implementation, we provide comprehensive design services for all digital touchpoints.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="service in designServices" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">{{ service.title }}</h3>
        <p class="max-w-sm my-2">{{ service.description }}</p>
        <ul>
          <li v-for="feature in service.features"><Icon name="material-symbols:check" class="text-green-500"/> {{ feature }}</li>
        </ul>
      </div>
    </div>
    
  </div>

</div>
</template>