<script lang="ts" setup>
const valueCards = [
    {
      icon: "mingcute:target-line",
      title: 'Conversion Optimized',
      description: 'Strategic design and copy that guides visitors towards your desired actions and maximizes conversions'
    },
    {
      icon: "fluent:arrow-trending-checkmark-20-regular",
      title: 'Performance Tracking',
      description: 'Built-in analytics and A/B testing capabilities to measure and improve campaign performance'
    },
    {
      icon: "material-symbols:bar-chart",
      title: 'Data-Driven Insights',
      description: 'Advanced tracking and reporting to understand user behavior and optimize marketing ROI'
    }
  ];

  const features = [
    {
      title: 'Landing Page Design',
      description: 'High-converting landing pages tailored for specific campaigns and audiences'
    },
    {
      title: 'Lead Generation',
      description: 'Optimized forms and lead magnets to capture and nurture potential customers'
    },
    {
      title: 'A/B Testing',
      description: 'Built-in testing framework to optimize headlines, CTAs, and page elements'
    },
    {
      title: 'Marketing Automation',
      description: 'Integration with email marketing and CRM systems for automated follow-up'
    },
    {
      title: 'Analytics Integration',
      description: 'Comprehensive tracking with Google Analytics, Facebook Pixel, and custom events'
    },
    {
      title: 'Social Proof',
      description: 'Testimonials, reviews, and trust signals strategically placed for maximum impact'
    }
  ];

  const websiteTypes = [
    {
      title: 'Product Launch Pages',
      description: 'High-impact pages designed to generate buzz and drive pre-orders',
      features: ['Product Showcase', 'Pre-order Forms', 'Countdown Timers', 'Social Sharing', 'Email Capture', 'Press Kit Download']
    },
    {
      title: 'Lead Generation Sites',
      description: 'Focused on capturing qualified leads for your sales team',
      features: ['Lead Magnets', 'Multi-step Forms', 'Progressive Profiling', 'Score Tracking', 'CRM Integration', 'Nurture Sequences']
    },
    {
      title: 'Event Landing Pages',
      description: 'Drive registrations and engagement for webinars, conferences, and events',
      features: ['Event Details', 'Speaker Profiles', 'Registration Forms', 'Calendar Integration', 'Social Proof', 'Agenda Display']
    },
    {
      title: 'Campaign Microsites',
      description: 'Dedicated sites for specific marketing campaigns and promotions',
      features: ['Campaign Branding', 'Limited-time Offers', 'Contest Integration', 'Viral Sharing', 'Promo Codes', 'Campaign Analytics']
    }
  ];

  const conversionFeatures = [
    {
      title: 'Strategic CTAs',
      description: 'Strategically placed call-to-action buttons that guide users toward conversion',
      impact: '35% higher click-through rates'
    },
    {
      title: 'Social Proof',
      description: 'Customer testimonials, reviews, and trust badges to build credibility',
      impact: '42% increase in conversions'
    },
    {
      title: 'Urgency & Scarcity',
      description: 'Limited-time offers and countdown timers to encourage immediate action',
      impact: '28% faster decision making'
    },
    {
      title: 'Trust Signals',
      description: 'Security badges, certifications, and guarantees to reduce purchase anxiety',
      impact: '25% reduction in cart abandonment'
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
      <span class="text-primary">Marketing</span> Websites
    </h1>

    <div class="flex justify-center w-full mb-10">
      <p class="text-center text-lg max-w-2xl">
        Create <span class="text-primary">high-converting landing pages</span> and marketing websites that drive results, capture leads, and <span class="text-primary">maximize your ROI.</span>
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
      <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Marketing Websites</span>
      <h2 class="font-Berlin-sans-fb text-6xl"><span class="text-primary">Convert</span> Visitors into <span class="text-primary">Customers</span></h2>
      <p class="max-w-2xl">
        Our marketing websites are designed with one goal in mind: driving conversions. Every element, from headlines to buttons, is strategically crafted to guide visitors toward your desired action.
      </p>

      <ul class="flex flex-wrap justify-around gap-2 my-5">
        <li v-for="feature in features" class="w-full md:w-1/3 flex flex-row gap-2">
          <div><Icon name="material-symbols:check" class="text-green-500"/></div>
          <div>
            <h4 class="font-bold text-sm">{{ feature.title }}</h4>
            <p class="text-sm">{{ feature.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Marketing Solutions</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Websites That <span class="text-primary">Drive Results</span></h2>
    <p class="max-w-2xl text-center">
      From product launches to lead generation, we create marketing websites tailored to your specific goals.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="type in websiteTypes" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">{{ type.title }}</h3>
        <p class="max-w-sm my-2">{{ type.description }}</p>
        <ul>
          <li v-for="feature in type.features"><Icon name="material-symbols:check" class="text-green-500"/> {{ feature  }}</li>
        </ul>
      </div>
    </div>
    
  </div>

    <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Conversion Optimization</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Proven <span class="text-primary">Conversion</span> Strategies</h2>
    <p class="max-w-2xl text-center">
      We implement battle-tested conversion optimization techniques to maximize your marketing ROI.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="feature in conversionFeatures" class="w-full flex flex-row bg-white rounded-lg p-5 shadow-blue-100 drop-shadow-2xl">
        <div class="mr-2">
          <Icon name="material-symbols:trending-up-rounded" class="text-2xl align-text-bottom"/>
        </div>
        <div>
          <h2 class="font-Berlin-sans-fb text-2xl">{{ feature.title }}</h2>
          <p class="max-w-sm">{{ feature.description }}</p>
          <span class="text-primary font-bold text-xs">{{ feature.impact }}</span>
        </div>
        

      </div>
    </div>
    
  </div>


  <!-- Development Process -->
    <section class="py-20 bg-white px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-Berlin-sans-fb text-gray-900 mb-4">Our <span class="text-primary">Proven</span> Development Process</h2>
          <p class="text-lg max-w-3xl mx-auto">A transparent, step-by-step approach to building quality software</p>
        </div>

        <div class="md:relative z-0">
          <!-- Timeline -->
          <div class="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-secondary-2 to-primary"></div>

          <div class="space-y-12 md:space-y-0">
            <!-- Process Item 1 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <!-- Timeline dot -->
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">1</span>
              </div>

              <!-- Content -->
              <div class="md:w-1/2 md:pe-16 md:text-end mb-8 md:mb-0">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      1
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Requirements & Planning</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">Requirements & Planning</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Meet stakeholders to clarify needs</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Define scope and success criteria</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Create requirements document</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Requirements document, Initial backlog</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 2 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      2
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">System Design & Architecture</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">System Design & Architecture</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Choose tech stack and tools</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Design database schema</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Create wireframes/mockups</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Architecture diagram, Database schema, UI designs</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 3 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">3</span>
              </div>
              <div class="md:w-1/2 md:pe-16 md:text-end">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      3
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Development</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">Development</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Follow coding standards</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Use Git with proper branching</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Write unit tests</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Source code, Passing tests</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 4 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">4</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      4
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Testing & QA</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">Testing & QA</h3>
                  <div class="mb-6">
                    <h4 class="font-medium text-gray-900 mb-3">Testing Types:</h4>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Unit</span>
                      <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">Integration</span>
                      <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">System</span>
                      <span class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">UAT</span>
                    </div>
                  </div>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Ensure software works as intended</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Identify and resolve bugs</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Test reports, Bug resolutions</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 5 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">5</span>
              </div>
              <div class="md:w-1/2 md:pe-16 md:text-end">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      5
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Deployment</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">Deployment</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Prepare production environment</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Use CI/CD pipelines</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Run smoke tests</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Production software, Deployment docs</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 6 -->
            <div class="flex flex-col md:flex-row items-center md:items-start relative">
              <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10">
                <span class="text-white font-bold text-lg">6</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="flex md:hidden items-center mb-6">
                    <div class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      6
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">Maintenance</h3>
                  </div>
                  <h3 class="hidden md:block text-2xl font-semibold text-gray-900 mb-6">Maintenance</h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Monitor performance</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Fix bugs and issues</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"></span>
                      <span>Release updates</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">Deliverables:</h4>
                    <p class="text-gray-600">Updated codebase, Performance reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
</template>