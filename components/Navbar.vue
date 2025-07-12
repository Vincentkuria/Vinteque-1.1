<script setup lang="ts">
import NavigationMenu from './ui/navigation-menu/NavigationMenu.vue'
import NavigationMenuList from './ui/navigation-menu/NavigationMenuList.vue'
import NavigationMenuItem from './ui/navigation-menu/NavigationMenuItem.vue'
import NavigationMenuTrigger from './ui/navigation-menu/NavigationMenuTrigger.vue'
import NavigationMenuContent from './ui/navigation-menu/NavigationMenuContent.vue'
import NavigationMenuLink from './ui/navigation-menu/NavigationMenuLink.vue'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import Sheet from './ui/sheet/Sheet.vue'
import SheetTrigger from './ui/sheet/SheetTrigger.vue'
import SheetContent from './ui/sheet/SheetContent.vue'
import SheetHeader from './ui/sheet/SheetHeader.vue'
import SheetTitle from './ui/sheet/SheetTitle.vue'
import SheetDescription from './ui/sheet/SheetDescription.vue'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Home } from 'lucide-vue-next'


const services=[
    {
       title: "Web Apps",
       href:"/web-apps"
    },
    {
        title:"Mobile Apps",
        href:"/mobile-apps"
    },
    {
        title:"Business Website",
        href:"/business-websites"
    },
    {
        title:"Ecommerce Website",
        href:"/ecommerce-website"
    },
    {
        title:"Prodict & Marketing Website",
        href:"/marketing-website"
    },
    {
        title:"Search Engine Optimization (SEO)",
        href:"/seo"
    },
    {
        title:"AI & Automation",
        href:"/automation"
    },
    {
        title:"UI/UX Design",
        href:"/ui-ux",
    },
    {
        title:"Branding",
        href:"/branding"
    }
]

const cases=[
    {
        title:"Software Development",
        href:"/case/software"
    },
    {
        title:"Brand Design",
        href:"/case/branding"
    }
]

</script>

<template>
<div>
    <div class=" flex justify-between md:justify-around m-3 items-center">
        <NuxtLink to="/">  
            <div class="w-fit flex flex-col">
                <NuxtImg src="/vinteque.png" class="w-20 h-20 object-contain self-center"/>
                <div class="flex justify-center"><h1 class="font-Berlin-sans-fb text-2xl self-center">Vinteque</h1></div>
            </div>
        </NuxtLink>

        <NavigationMenu class="hidden md:block">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">Home</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          <li v-for="service in services" :key="service.title">
                            <NavigationMenuLink as-child>
                              <a
                                :href="service.href"
                                class="block border-b-1 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div class="text-sm font-medium leading-none">{{ service.title }}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Case Study</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          <li v-for="cas in cases" :key="cas.title">
                            <NavigationMenuLink as-child>
                              <a
                                :href="cas.href"
                                class="block border-b-1 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div class="text-sm font-medium leading-none">{{ cas.title }}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/careers" :class="navigationMenuTriggerStyle()">Careers</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink href="/blogs" :class="navigationMenuTriggerStyle()">Blogs</NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
        
        <div class="flex flex-row items-center">
            <a href="tel:+254712051540" class="me-3 font-bold hover:text-primary text-nowrap hidden lg:block">+2547-1205-1540</a>
            
            <Sheet>
                <SheetTrigger>
                    <div class="bg-primary text-white rounded-full md:px-5 md:py-2 px-2 py-1 text-nowrap font-semibold hover:cursor-pointer">Get In Touch</div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle class="text-3xl font-Berlin-sans-fb font-medium">
                            Let's Build Something Great Together
                        </SheetTitle>
                        <SheetDescription>
                            Tell us about your project, whether it's a web app, mobile app, or business website. Share your goals, timelines, or any challenges you're facing. Our team will review everything and get back to you with a thoughtful response.
                        </SheetDescription>
                    </SheetHeader>

                    <from class="p-5 flex flex-col gap-4">
                      <input type="text" placeholder="Name" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <input type="email" placeholder="Email" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <input type="text" placeholder="Phone" class="bg-gray-300 rounded-full p-2 w-full" required/>
                      <textarea placeholder="Message" class="bg-gray-300 rounded-sm p-2 w-full" required/>
                      <button type="submit" class="text-white bg-primary rounded-full p-2 w-full cursor-pointer">Submit</button>
                    </from>
                </SheetContent>
            </Sheet>

            <Sheet>
                <SheetTrigger>
                    <span class="ms-2 md:hidden w-fit h-fit"><Icon name="solar:hamburger-menu-broken" class="text-4xl text-primary" /></span>
                </SheetTrigger>
                <SheetContent class="p-2">
                    <SheetHeader>
                        <SheetTitle class="text-2xl text-primary font-medium font-Berlin-sans-fb">
                            Vinteque
                        </SheetTitle>
                        <SheetDescription>
                            MENU
                        </SheetDescription>
                    </SheetHeader>
                    <div class="block">
                        <Accordion type="single" class="w-full" collapsible>
                          <AccordionItem :value="'Home'">
                            <NuxtLink to="/"><div class="my-4">Home</div></NuxtLink>
                          </AccordionItem>
                          
                          <AccordionItem :value="'services'">
                            <AccordionTrigger>Services</AccordionTrigger>
                            <AccordionContent>
                              wololo
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem :value="'Case'">
                            <AccordionTrigger>Case Study</AccordionTrigger>
                            <AccordionContent>
                              wololo
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem :value="'Careers'">
                            <NuxtLink to="/"><div class="my-4">Careers</div></NuxtLink>
                          </AccordionItem>

                          <AccordionItem :value="'Blogs'">
                            <NuxtLink to="/"><div class="my-4">Blogs</div></NuxtLink>
                          </AccordionItem>

                        </Accordion>
                    </div>
                    
                </SheetContent>
            </Sheet>
            
            
        </div>
    </div>
</div>
</template>