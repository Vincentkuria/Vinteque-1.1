<script lang="ts" setup>
useHead({
  title: "Mobile App Development",
  meta: [
    {
      name: "description",
      content:
        "Create engaging mobile experiences that connect with your users anywhere, anytime with native performance and cutting-edge features.",
    },
  ],
});

const valueCards = [
  {
    icon: "pepicons-print:smartphone-home-button",
    title: "Native Performance",
    description:
      "Built for iOS and Android with native performance, smooth animations, and platform-specific features",
  },
  {
    icon: "ic:twotone-shield",
    title: "Secure & Reliable",
    description:
      "Bank-grade security with encrypted data storage, secure authentication, and privacy compliance",
  },
  {
    icon: "material-symbols:notifications-outline",
    title: "Real-time Features",
    description:
      "Push notifications, real-time updates, offline functionality, and seamless synchronization",
  },
];

const features = [
  {
    title: "Cross-Platform Development",
    description:
      "Single codebase for both iOS and Android using React Native or Flutter",
  },
  {
    title: "Offline Functionality",
    description:
      "Work seamlessly even without internet connection with smart data synchronization",
  },
  {
    title: "Push Notifications",
    description:
      "Engage users with targeted notifications and in-app messaging",
  },
  {
    title: "Biometric Authentication",
    description:
      "Secure login with fingerprint, Face ID, and other biometric options",
  },
  {
    title: "Camera & Media Integration",
    description:
      "Photo capture, video recording, and media processing capabilities",
  },
  {
    title: "GPS & Location Services",
    description:
      "Location-based features, mapping, and geofencing capabilities",
  },
];

const appTypes = [
  {
    title: "Business Apps",
    description:
      "Internal tools, productivity apps, and business process automation",
    examples: [
      "CRM Mobile Apps",
      "Field Service Apps",
      "Inventory Management",
      "Employee Portals",
    ],
  },
  {
    title: "E-commerce Apps",
    description: "Shopping apps, marketplaces, and mobile commerce solutions",
    examples: [
      "Online Stores",
      "Marketplace Apps",
      "B2B Ordering",
      "Subscription Apps",
    ],
  },
  {
    title: "Social & Community",
    description:
      "Social networking, community building, and communication apps",
    examples: [
      "Social Networks",
      "Dating Apps",
      "Community Forums",
      "Messaging Apps",
    ],
  },
  {
    title: "On-Demand Services",
    description: "Service marketplace and on-demand booking applications",
    examples: [
      "Food Delivery",
      "Ride Booking",
      "Home Services",
      "Healthcare Apps",
    ],
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
          <span class="text-primary">Mobile App</span> Development
        </h1>

        <div class="flex justify-center w-full mb-10">
          <p class="text-center text-lg max-w-2xl">
            Create
            <span class="text-primary">engaging mobile experiences</span> that
            connect with your users anywhere, anytime with
            <span class="text-primary">native performance</span> and
            cutting-edge features.
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
          >Moblie App Development</span
        >
        <h2 class="font-Berlin-sans-fb text-6xl">
          Build <span class="text-primary">Native</span> Mobile Experiences
        </h2>
        <p class="max-w-2xl">
          Our mobile applications combine beautiful design with powerful
          functionality, delivering exceptional user experiences that engage
          customers and drive business growth across iOS and Android platforms.
        </p>

        <ul class="flex flex-wrap justify-around gap-2 my-5">
          <li
            v-for="feature in features"
            class="w-full md:w-1/3 flex flex-row gap-2"
          >
            <div>
              <Icon name="material-symbols:check" class="text-green-500" />
            </div>
            <div>
              <h4 class="font-bold text-sm">{{ feature.title }}</h4>
              <p class="text-sm">{{ feature.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center">
      <span
        class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300 text-primary font-semibold px-2 py-1"
        >App Categories</span
      >
      <h2 class="font-Berlin-sans-fb text-6xl">
        Apps for Every <span class="text-primary">Industry</span>
      </h2>
      <p class="max-w-2xl text-center">
        We specialize in building mobile applications across various industries
        and use cases.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
        <div
          v-for="(appType, index) in appTypes"
          class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm"
        >
          <h3 class="font-bold text-primary text-lg">{{ appType.title }}</h3>
          <p class="max-w-sm my-2">{{ appType.description }}</p>
          <ul>
            <li v-for="example in appType.examples">
              <Icon name="material-symbols:check" class="text-green-500" />
              {{ example }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Development Process -->
    <section class="py-20 bg-white px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-Berlin-sans-fb text-gray-900 mb-4">
            Our <span class="text-primary">Proven</span> Development Process
          </h2>
          <p class="text-lg max-w-3xl mx-auto">
            A transparent, step-by-step approach to building quality software
          </p>
        </div>

        <div class="md:relative z-0">
          <!-- Timeline -->
          <div
            class="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-secondary-2 to-primary"
          ></div>

          <div class="space-y-12 md:space-y-0">
            <!-- Process Item 1 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <!-- Timeline dot -->
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">1</span>
              </div>

              <!-- Content -->
              <div class="md:w-1/2 md:pe-16 md:text-end mb-8 md:mb-0">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      1
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      Requirements & Planning
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    Requirements & Planning
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Meet stakeholders to clarify needs</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Define scope and success criteria</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Create requirements document</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">
                      Requirements document, Initial backlog
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 2 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      2
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      System Design & Architecture
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    System Design & Architecture
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Choose tech stack and tools</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Design database schema</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Create wireframes/mockups</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">
                      Architecture diagram, Database schema, UI designs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 3 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">3</span>
              </div>
              <div class="md:w-1/2 md:pe-16 md:text-end">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      3
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      Development
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    Development
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Follow coding standards</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Use Git with proper branching</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Write unit tests</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">Source code, Passing tests</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 4 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">4</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      4
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      Testing & QA
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    Testing & QA
                  </h3>
                  <div class="mb-6">
                    <h4 class="font-medium text-gray-900 mb-3">
                      Testing Types:
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                        class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                        >Unit</span
                      >
                      <span
                        class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                        >Integration</span
                      >
                      <span
                        class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                        >System</span
                      >
                      <span
                        class="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                        >UAT</span
                      >
                    </div>
                  </div>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Ensure software works as intended</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Identify and resolve bugs</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">Test reports, Bug resolutions</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 5 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">5</span>
              </div>
              <div class="md:w-1/2 md:pe-16 md:text-end">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      5
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      Deployment
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    Deployment
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Prepare production environment</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Use CI/CD pipelines</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Run smoke tests</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">
                      Production software, Deployment docs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Item 6 -->
            <div
              class="flex flex-col md:flex-row items-center md:items-start relative"
            >
              <div
                class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-6 w-12 h-12 rounded-full bg-secondary-2 border-4 border-white shadow-lg items-center justify-center z-10"
              >
                <span class="text-white font-bold text-lg">6</span>
              </div>
              <div class="md:w-1/2 md:ps-16 md:text-start md:ms-auto">
                <div
                  class="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div class="flex md:hidden items-center mb-6">
                    <div
                      class="bg-secondary-2 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold"
                    >
                      6
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900">
                      Maintenance
                    </h3>
                  </div>
                  <h3
                    class="hidden md:block text-2xl font-semibold text-gray-900 mb-6"
                  >
                    Maintenance
                  </h3>
                  <ul class="space-y-3 text-gray-700">
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Monitor performance</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Fix bugs and issues</span>
                    </li>
                    <li class="flex items-start">
                      <span
                        class="inline-block w-2 h-2 bg-secondary-2 rounded-full mt-2 me-3"
                      ></span>
                      <span>Release updates</span>
                    </li>
                  </ul>
                  <div class="mt-6 pt-4 border-t border-gray-200">
                    <h4 class="font-medium text-gray-900 mb-2">
                      Deliverables:
                    </h4>
                    <p class="text-gray-600">
                      Updated codebase, Performance reports
                    </p>
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
