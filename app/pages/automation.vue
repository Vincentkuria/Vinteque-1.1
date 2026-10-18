<script lang="ts" setup>
useHead({
  title: "AI & Automation",
  meta: [
    {
      name: "description",
      content:
        "Transform your business with intelligent automation and AI-powered solutions that scale your operations.",
    },
  ],
});

const valueCards = [
  {
    icon: "carbon:workflow-automation",
    title: "Process Automation",
    description:
      "Automate repetitive tasks and workflows to increase efficiency and reduce human error",
  },
  {
    icon: "hugeicons:ai-brain-03",
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence to make smarter decisions and provide intelligent insights",
  },
  {
    icon: "tabler:message-chatbot",
    title: "Intelligent Chatbots",
    description:
      "24/7 customer support with AI chatbots that understand and respond naturally",
  },
];

const automationTypes = [
  {
    title: "Business Process Automation",
    description:
      "Streamline complex business workflows and reduce manual tasks",
    features: [
      "Workflow Automation",
      "Document Processing",
      "Approval Workflows",
      "Data Entry Automation",
      "Report Generation",
      "Email Automation",
    ],
  },
  {
    title: "Customer Service Automation",
    description: "Enhance customer experience with intelligent automation",
    features: [
      "AI Chatbots",
      "Ticket Routing",
      "Response Templates",
      "Escalation Rules",
      "Knowledge Base",
      "Sentiment Analysis",
    ],
  },
  {
    title: "Sales & Marketing Automation",
    description:
      "Automate lead generation, nurturing, and conversion processes",
    features: [
      "Lead Scoring",
      "Email Campaigns",
      "Social Media Posting",
      "Follow-up Sequences",
      "Pipeline Management",
      "Performance Analytics",
    ],
  },
  {
    title: "Data & Analytics Automation",
    description: "Automated data collection, processing, and reporting",
    features: [
      "Data Integration",
      "Real-time Dashboards",
      "Automated Reports",
      "Predictive Analytics",
      "Data Cleansing",
      "Alert Systems",
    ],
  },
];

const automationBenefits = [
  {
    title: "Cost Reduction",
    description: "Reduce operational costs through automated processes",
    value: "40-60%",
    detail: "average cost savings",
  },
  {
    title: "Time Savings",
    description: "Free up valuable time for strategic work",
    value: "80%",
    detail: "reduction in manual tasks",
  },
  {
    title: "Accuracy Improvement",
    description: "Eliminate human errors in repetitive processes",
    value: "99.9%",
    detail: "process accuracy",
  },
  {
    title: "Productivity Boost",
    description: "Increase overall team productivity and output",
    value: "3x",
    detail: "productivity increase",
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
          <span class="text-primary">AI</span> & Automation
        </h1>

        <div class="flex justify-center w-full mb-10">
          <p class="text-center text-lg max-w-2xl">
            Transform your business with
            <span class="text-primary">intelligent automation</span> and
            AI-powered solutions that
            <span class="text-primary">scale your operations.</span>
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
          >AI & Automation</span
        >
        <h2 class="font-Berlin-sans-fb text-5xl">
          <span class="text-primary">Intelligent</span> Business Transformation
        </h2>
        <p class="max-w-2xl">
          Our marketing websites are designed with one goal in mind: driving
          conversions. Every element, from headlines to buttons, is
          strategically crafted to guide visitors toward your desired action.
        </p>

        <div class="flex justify-center my-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              v-for="benefit in automationBenefits"
              class="w-fit p-5 rounded-2xl shadow bg-white shadow-black/20 flex flex-col gap-2 items-center"
            >
              <span class="font-bold text-2xl text-primary">
                {{ benefit.value }}</span
              >
              <span>{{ benefit.title }}</span>
              <span class="text-xs text-gray-600">{{ benefit.detail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center">
      <span
        class="font-mono text-xs rounded-2xl bg-blue-100 hover:bg-blue-200 transition-all duration-300 text-primary font-semibold px-2 py-1"
        >Automation Solutions</span
      >
      <h2 class="font-Berlin-sans-fb text-5xl">
        Comprehensive <span class="text-primary">Automation</span> Services
      </h2>
      <p class="max-w-2xl text-center">
        We provide end-to-end automation solutions tailored to your specific
        business needs and industry requirements.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 my-10">
        <div
          v-for="type in automationTypes"
          class="bg-white p-5 rounded-lg shadow-black drop-shadow-2xl md:w-sm"
        >
          <h3 class="font-bold text-primary text-lg">{{ type.title }}</h3>
          <p class="max-w-sm my-2">{{ type.description }}</p>
          <ul>
            <li v-for="feature in type.features">
              <Icon name="material-symbols:check" class="text-green-500" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
