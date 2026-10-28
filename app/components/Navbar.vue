<script setup lang="ts">
import NavigationMenu from "./ui/navigation-menu/NavigationMenu.vue";
import NavigationMenuList from "./ui/navigation-menu/NavigationMenuList.vue";
import NavigationMenuItem from "./ui/navigation-menu/NavigationMenuItem.vue";
import NavigationMenuTrigger from "./ui/navigation-menu/NavigationMenuTrigger.vue";
import NavigationMenuContent from "./ui/navigation-menu/NavigationMenuContent.vue";
import NavigationMenuLink from "./ui/navigation-menu/NavigationMenuLink.vue";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import Sheet from "./ui/sheet/Sheet.vue";
import SheetTrigger from "./ui/sheet/SheetTrigger.vue";
import SheetContent from "./ui/sheet/SheetContent.vue";
import SheetHeader from "./ui/sheet/SheetHeader.vue";
import SheetTitle from "./ui/sheet/SheetTitle.vue";
import SheetDescription from "./ui/sheet/SheetDescription.vue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion-v";
import * as yup from "yup";
import { toast } from "vue-sonner";
import VueTelNumInput from "vue-tel-num-input";
import "vue-tel-num-input/style.css";
import "vue-tel-num-input/flags.css";
import { useField } from "vee-validate";

const services = [
  {
    title: "Web Apps",
    href: "/web-apps",
  },
  {
    title: "Mobile Apps",
    href: "/mobile-apps",
  },
  {
    title: "Business Website",
    href: "/business-websites",
  },
  {
    title: "Ecommerce Website",
    href: "/ecommerce-websites",
  },
  {
    title: "Product & Marketing Website",
    href: "/marketing-websites",
  },
  {
    title: "Search Engine Optimization (SEO)",
    href: "/seo",
  },
  {
    title: "AI & Automation",
    href: "/automation",
  },
  {
    title: "UI/UX Design",
    href: "/ui-ux",
  },
];

const cases = [
  {
    title: "Software Development",
    href: "/case-study/software",
  },
  {
    title: "Brand Design",
    href: "/case-study/branding",
  },
];

const isFixed = ref(false);

const trigger = ref<HTMLElement | null>(null);

const handleScroll = () => {
  isFixed.value = window.scrollY > 50;
};

const isOpen = ref();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const close = () => {
  trigger.value?.click();
};
const phone = ref<any>(null);
const phoneError = ref<string | null>();

const submit = async (values: any) => {
  if (!phone.value.valid) {
    phoneError.value = "please give a valid phone number";
    return;
  }

  values.phone = phone.value.value;
  console.log(values);
  const response = await $fetch(
    useRuntimeConfig().public.baseUrl + `/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: values,
      onResponse({ response }) {
        if (response.status >= 200 && response.status < 300) {
          //@ts-ignore
          if (typeof window.fbq === "function") {
            //@ts-ignore
            window.fbq("track", "Lead");
            console.log("FB Pixel Lead event fired ✅");
          } else {
            console.warn("⚠️ fbq not loaded yet.");
          }

          toast.success("Message submitted successfully");
          isOpen.value = false;
        }
      },
    },
  );
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
  message: yup.string().required("Messsage is required"),
});
</script>

<template>
  <motion.div
    :class="
      isFixed
        ? 'fixed top-0  bg-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]'
        : 'relative'
    "
    class="z-10 bg-white w-full"
  >
    <div class="flex justify-between md:justify-around p-2 items-center">
      <NuxtLink to="/">
        <div class="w-fit flex flex-col">
          <NuxtImg
            format="webp"
            alt="vinteque logo"
            src="/vinteque.png"
            :class="isFixed ? 'w-12 h-12 ease-in-out' : 'w-20 h-20'"
            class="object-contain self-center"
          />
          <div class="flex justify-center">
            <h1
              :class="isFixed ? 'text-base' : 'text-2xl'"
              class="font-Berlin-sans-fb self-center"
            >
              Vinteque
            </h1>
          </div>
        </div>
      </NuxtLink>

      <NavigationMenu class="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()"
              >Home</NavigationMenuLink
            >
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                class="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150"
              >
                <li v-for="service in services" :key="service.title">
                  <NavigationMenuLink as-child>
                    <a
                      :href="service.href"
                      class="block border-b select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div class="text-sm font-medium leading-none">
                        {{ service.title }}
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/case-study"
              :class="navigationMenuTriggerStyle()"
              >Case Study</NavigationMenuLink
            >
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/careers"
              :class="navigationMenuTriggerStyle()"
              >Careers</NavigationMenuLink
            >
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blogs"
              :class="navigationMenuTriggerStyle()"
              >Blogs</NavigationMenuLink
            >
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div class="flex flex-row items-center">
        <Motion
          :while-hover="{ scale: 1.01 }"
          :while-press="{ scale: 0.95 }"
          as-child
        >
          <div>
            <a
              href="tel:+254704466984"
              class="me-3 font-bold hover:text-primary text-nowrap hidden lg:block"
              >+2547-0446-6984</a
            >
          </div>
        </Motion>

        <Sheet v-model:open="isOpen">
          <SheetTrigger>
            <Motion
              :while-hover="{ scale: 1.1 }"
              :while-press="{ scale: 0.95 }"
              as-child
            >
              <div
                class="bg-primary text-white rounded-full md:px-5 md:py-2 px-2 py-1 text-nowrap font-semibold hover:cursor-pointer"
              >
                Get In Touch
              </div>
            </Motion>
          </SheetTrigger>
          <SheetContent class="overflow-y-scroll">
            <SheetHeader>
              <SheetTitle class="text-3xl font-Berlin-sans-fb font-medium">
                Let's Build Something Great Together
              </SheetTitle>
              <SheetDescription>
                Tell us about your project, whether it's a web app, mobile app,
                or business website. Share your goals, timelines, or any
                challenges you're facing. Our team will review everything and
                get back to you with a thoughtful response.
              </SheetDescription>
            </SheetHeader>

            <VeeForm
              @submit="submit"
              :validation-schema="schema"
              class="p-5 flex flex-col gap-4"
            >
              <VeeField
                name="name"
                type="text"
                placeholder="Name"
                class="bg-gray-300 rounded-full p-2 w-full"
                required
              />
              <VeeErrorMessage class="text-red-400" name="name" />
              <VeeField
                name="email"
                type="email"
                placeholder="Email"
                class="bg-gray-300 rounded-full p-2 w-full"
                required
              />
              <VeeErrorMessage class="text-red-400" name="email" />
              <VueTelNumInput
                v-on:blur="
                  () => {
                    phoneError =
                      phone.valid == true ? null : 'Invalid phone number';
                  }
                "
                name="phone"
                v-model="phone"
                :input="{ lockCountryCode: true, formatterEnabled: true }"
                default-country-code="KE"
                :prefix="{ hideCountryName: true, hideCode: true }"
              />
              <span v-if="phoneError" class="text-red-400">{{
                phoneError
              }}</span>
              <VeeField
                name="message"
                as="textarea"
                placeholder="Message"
                class="bg-gray-300 rounded-sm p-2 w-full"
                required
              />
              <VeeErrorMessage class="text-red-400" name="message" />
              <button
                type="submit"
                class="text-white bg-primary rounded-full p-2 w-full cursor-pointer"
              >
                Submit
              </button>
            </VeeForm>
          </SheetContent>
        </Sheet>

        <Sheet>
          <SheetTrigger>
            <span ref="trigger" class="ms-2 md:hidden w-fit h-fit"
              ><Icon
                name="solar:hamburger-menu-broken"
                class="text-4xl text-primary"
            /></span>
          </SheetTrigger>
          <SheetContent class="p-2">
            <SheetHeader>
              <SheetTitle
                class="text-2xl text-primary font-medium font-Berlin-sans-fb"
              >
                Vinteque
              </SheetTitle>
              <SheetDescription> MENU </SheetDescription>
            </SheetHeader>
            <div class="block">
              <Accordion type="single" class="w-full" collapsible>
                <AccordionItem :value="'Home'">
                  <NuxtLink @click="close" to="/"
                    ><div class="my-4">
                      Home
                      <Icon
                        name="nrk:arrow-right-long"
                        class="text-primary align-middle ps-1"
                      /></div
                  ></NuxtLink>
                </AccordionItem>

                <AccordionItem :value="'services'">
                  <AccordionTrigger>Services</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li v-for="service in services" class="p-2">
                        <NuxtLink @click="close" :to="service.href"
                          >{{ service.title
                          }}<Icon
                            name="nrk:arrow-right-long"
                            class="text-primary align-middle ps-1"
                        /></NuxtLink>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem :value="'Case'">
                  <NuxtLink @click="close" to="/case-study"
                    ><div class="my-4">
                      Case Study
                      <Icon
                        name="nrk:arrow-right-long"
                        class="text-primary align-middle ps-1"
                      /></div
                  ></NuxtLink>
                </AccordionItem>

                <AccordionItem :value="'Careers'">
                  <NuxtLink @click="close" to="/careers"
                    ><div class="my-4">
                      Careers
                      <Icon
                        name="nrk:arrow-right-long"
                        class="text-primary align-middle ps-1"
                      /></div
                  ></NuxtLink>
                </AccordionItem>

                <AccordionItem :value="'Blogs'">
                  <NuxtLink @click="close" to="/blogs"
                    ><div class="my-4">
                      Blogs
                      <Icon
                        name="nrk:arrow-right-long"
                        class="text-primary align-middle ps-1"
                      /></div
                  ></NuxtLink>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </motion.div>
</template>
