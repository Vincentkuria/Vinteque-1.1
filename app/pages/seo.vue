<script lang="ts" setup>
useHead({
  title: "SEO Services",
  meta: [
    {
      name: "description",
      content:
        "Dominate search results and drive organic growth with data-driven SEO strategies that deliver measurable results.",
    },
  ],
});

const valueCards = [
  {
    icon: "ri:seo-line",
    title: "Higher Rankings",
    description:
      "Proven strategies to improve your search engine rankings and increase organic visibility",
  },
  {
    icon: "fluent:arrow-trending-checkmark-20-regular",
    title: "Increased Traffic",
    description:
      "Drive more qualified traffic to your website with targeted SEO optimization",
  },
  {
    icon: "mingcute:target-line",
    title: "Better Conversions",
    description:
      "Attract the right audience with intent-based keywords and optimized user experience",
  },
];

const seoServices = [
  {
    title: "Technical SEO",
    description:
      "Foundation optimization for search engine crawling and indexing",
    features: [
      "Site Speed Optimization",
      "Mobile Responsiveness",
      "Schema Markup",
      "XML Sitemaps",
      "Robots.txt",
      "Core Web Vitals",
    ],
  },
  {
    title: "On-Page SEO",
    description: "Content and page-level optimization for target keywords",
    features: [
      "Keyword Research",
      "Title Optimization",
      "Meta Descriptions",
      "Header Tags",
      "Internal Linking",
      "Content Optimization",
    ],
  },
  {
    title: "Off-Page SEO",
    description: "Building authority and trust through external signals",
    features: [
      "Link Building",
      "Citation Building",
      "Directory Submissions",
      "Social Signals",
      "Brand Mentions",
      "Review Management",
    ],
  },
  {
    title: "Local SEO",
    description: "Optimization for local search and geographic targeting",
    features: [
      "Google My Business",
      "Local Citations",
      "Location Pages",
      "Review Management",
      "Local Schema",
      "NAP Consistency",
    ],
  },
];

const seoMetrics = [
  {
    title: "Organic Traffic Growth",
    value: "175%",
    timeframe: "within 6 months",
  },
  {
    title: "Keyword Rankings",
    value: "85%",
    timeframe: "of target keywords",
  },
  {
    title: "Conversion Rate",
    value: "45%",
    timeframe: "average increase",
  },
  {
    title: "ROI Performance",
    value: "400%",
    timeframe: "average ROI",
  },
];
</script>

<template>
  <div>
    <!-- Hero section -->
    <div class="mx-2 my-5 lg:mx-20 lg:my-10 flex items-center justify-center">
      <BlurReveal :delay="0" :duration="0.75">
        <h1
          class="font-Berlin-sans-fb text-black text-6xl text-center md:text-8xl mb-5"
        >
          <span class="text-primary">SEO</span> Services
        </h1>

        <div class="flex justify-center w-full mb-10">
          <p class="text-center text-lg max-w-2xl">
            Dominate search results and
            <span class="text-primary">drive organic growth</span> with
            data-driven SEO strategies that
            <span class="text-primary">deliver measurable results.</span>
          </p>
        </div>

        <div class="flex justify-center w-full">
          <Requestcallback />
        </div>
      </BlurReveal>
    </div>

    <div
      class="my-10 mx-5 md:mx-20 flex flex-col md:justify-around md:flex-row gap-5"
    >
      <div class="w-full md:w-1/3 flex flex-col gap-5 justify-around">
        <div
          v-for="card in valueCards"
          class="w-full flex flex-row bg-white rounded-lg p-5 shadow-blue-100 drop-shadow-2xl"
        >
          <div class="mr-2">
            <Icon :name="card.icon" class="text-2xl align-text-bottom" />
          </div>
          <div>
            <h2 class="font-Berlin-sans-fb text-2xl">{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-2/3 p-5">
        <span
          class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300 text-primary font-semibold px-2 py-1"
          >Search Engine Optimization</span
        >
        <h2 class="font-Berlin-sans-fb text-6xl">
          Get Found by <span class="text-primary">Your Customers</span>
        </h2>
        <p class="max-w-2xl">
          Our comprehensive SEO services help your business rank higher in
          search results, attract more qualified traffic, and convert visitors
          into customers through proven optimization strategies.
        </p>

        <div class="flex justify-center my-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              v-for="metric in seoMetrics"
              class="w-fit p-5 rounded-2xl shadow bg-white shadow-black/20 flex flex-col gap-2 items-center"
            >
              <span class="font-bold text-2xl text-primary">
                {{ metric.value }}</span
              >
              <span class="font-semibold">{{ metric.title }}</span>
              <span class="text-xs text-gray-600">{{ metric.timeframe }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center">
      <span
        class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300 text-primary font-semibold px-2 py-1"
        >Store Categories</span
      >
      <h2 class="font-Berlin-sans-fb text-6xl">
        Stores for <span class="text-primary">Every Industry</span>
      </h2>
      <p class="max-w-2xl text-center">
        We build specialized e-commerce solutions tailored to your specific
        industry requirements.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
        <div
          v-for="service in seoServices"
          class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm"
        >
          <h3 class="font-bold text-primary text-lg">{{ service.title }}</h3>
          <p class="max-w-sm my-2">{{ service.description }}</p>
          <ul>
            <li v-for="feature in service.features">
              <Icon name="material-symbols:check" class="text-green-500" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
