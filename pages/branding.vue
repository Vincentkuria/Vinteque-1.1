<script lang="ts" setup>
const valueCards = [
    {
      icon: "carbon:strategy-play",
      title: 'Brand Strategy',
      description: 'Comprehensive brand strategy that aligns with your business goals and resonates with your audience'
    },
    {
      icon: "material-symbols:palette-outline",
      title: 'Visual Identity',
      description: 'Distinctive visual identity that captures your brand essence and stands out in the marketplace'
    },
    {
      icon: "mingcute:target-line",
      title: 'Brand Positioning',
      description: 'Strategic positioning that differentiates your brand and creates lasting competitive advantage'
    }
  ];

  const brandMetrics = [
    {
      title: 'Brand Recognition',
      value: '75%',
      timeframe: 'within 6 months'
    },
    {
      title: 'Customer Loyalty',
      value: '45%',
      timeframe: 'year over year'
    },
    {
      title: 'Market Differentiation',
      value: '60%',
      timeframe: 'vs. competitors'
    },
    {
      title: 'Business Growth',
      value: '35%',
      timeframe: 'within 12 months'
    }
  ];

  const brandingServices = [
    {
      title: 'Brand Strategy & Positioning',
      description: 'Foundation work that defines your brand purpose, values, and market position',
      features: ['Brand Audit', 'Competitive Analysis', 'Brand Positioning', 'Brand Messaging', 'Brand Voice & Tone', 'Brand Guidelines']
    },
    {
      title: 'Logo & Visual Identity',
      description: 'Distinctive visual elements that represent your brand across all touchpoints',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Iconography', 'Visual Style', 'Brand Assets']
    },
    {
      title: 'Brand Collateral Design',
      description: 'Consistent brand application across all marketing and business materials',
      features: ['Business Cards', 'Letterheads', 'Brochures', 'Packaging Design', 'Signage', 'Digital Assets']
    },
    {
      title: 'Brand Experience Design',
      description: 'Cohesive brand experience across all customer touchpoints',
      features: ['Website Design', 'Social Media Templates', 'Presentation Templates', 'Email Templates', 'Marketing Materials', 'Environmental Design']
    }
  ];

  const brandElements = [
    {
      title: 'Logo Design',
      description: 'Distinctive mark that represents your brand essence',
      deliverables: ['Primary Logo', 'Logo Variations', 'Logo Usage Guidelines', 'File Formats (AI, EPS, PNG, SVG)']
    },
    {
      title: 'Color System',
      description: 'Strategic color palette that evokes the right emotions',
      deliverables: ['Primary Colors', 'Secondary Colors', 'Color Combinations', 'Color Psychology', 'Print & Digital Specifications']
    },
    {
      title: 'Typography',
      description: 'Font selections that enhance readability and brand personality',
      deliverables: ['Primary Typeface', 'Secondary Fonts', 'Typography Hierarchy', 'Usage Guidelines', 'Web Font Specifications']
    },
    {
      title: 'Brand Voice',
      description: 'Consistent tone and messaging across all communications',
      deliverables: ['Brand Personality', 'Voice & Tone Guidelines', 'Messaging Framework', 'Communication Examples']
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
      <span class="text-primary">Brand</span> Design
    </h1>

    <div class="flex justify-center w-full mb-10">
      <p class="text-center text-lg max-w-2xl">
        Build a <span class="text-primary">memorable brand identity</span> that connects with your audience, differentiates your business, and <span clas="text-primary">drives lasting success.</span>
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
      <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Brand Design</span>
      <h2 class="font-Berlin-sans-fb text-6xl">Build a <span class="text-primary">Powerful</span> Brand</h2>
      <p class="max-w-2xl">
        Our comprehensive branding services create distinctive, memorable brands that resonate with your target audience and drive business growth through strategic positioning and compelling visual identity.
      </p>

      <div class="flex justify-center my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div v-for="metric in brandMetrics" class="w-fit p-5  rounded-2xl shadow bg-white shadow-black/20 flex flex-col gap-2 items-center">
          <span class="font-bold text-2xl text-primary"> {{ metric.value }}</span>
          <span>{{ metric.title }}</span>
          <span class="text-xs text-gray-600">{{ metric.timeframe }}</span>
        </div>
      </div>
      </div>

    </div>
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Branding Services</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Complete <span class="text-primary">Brand Solutions</span></h2>
    <p class="max-w-2xl text-center">
      From research to final implementation, we provide comprehensive design services for all digital touchpoints.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="service in brandingServices" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">{{ service.title }}</h3>
        <p class="max-w-sm my-2">{{ service.description }}</p>
        <ul>
          <li v-for="feature in service.features"><Icon name="material-symbols:check" class="text-green-500"/> {{ feature }}</li>
        </ul>
      </div>
    </div>
    
  </div>

  <div class="flex flex-col items-center justify-center">
    <span class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300  text-primary font-semibold px-2 py-1">Brand Elements</span>
    <h2 class="font-Berlin-sans-fb text-6xl">Essential <span class="text-primary">Brand Components</span></h2>
    <p class="max-w-2xl text-center">
      Every element of your brand is carefully crafted to work together and create a cohesive brand experience.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
      <div v-for="element in brandElements" class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm">
        <h3 class="font-bold text-primary text-lg">{{ element.title }}</h3>
        <p class="max-w-sm my-2">{{ element.description }}</p>
        <ul>
          <li v-for="feature in element.deliverables"><Icon name="material-symbols:check" class="text-green-500"/> {{ feature }}</li>
        </ul>
      </div>
    </div>
    
  </div>

</div>
</template>