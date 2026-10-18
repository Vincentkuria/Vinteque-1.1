<script setup lang="ts">
import { MessageSquare } from "@lucide/vue";
import {
  Funnel,
  MessageCircleHeartIcon,
  NewspaperIcon,
  Settings2,
  Workflow,
} from "lucide-vue-next";
import Blogs from "~/components/Blogs.vue";
import Casestudies from "~/components/Casestudies.vue";
import Jobs from "~/components/Jobs.vue";
import Messages from "~/components/Messages.vue";
import SalesFunnel from "~/components/sales-funnel.vue";

definePageMeta({
  layout: "admin",
});

enum Sidebar {
  funnel,
  messages,
  jobs,
  casestudies,
  testimonials,
  blogs,
}

const { data } = await useFetch(
  useRuntimeConfig().public.baseUrl + "/messages/unread-count",
  {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  },
);

const currentTab = ref<Sidebar>(Sidebar.funnel);
</script>

<template>
  <UiSidebarProvider>
    <UiSidebar collapsible="icon">
      <UiSidebarHeader>
        <UiSidebarMenu>
          <UiSidebarMenuItem>
            <UiSidebarMenuButton size="lg">
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground"
              >
                <NuxtImg src="/vinteque.png" />
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Vinteque Admin</span>
                <span class="truncate text-xs">Enterprise</span>
              </div>
            </UiSidebarMenuButton>
          </UiSidebarMenuItem>
        </UiSidebarMenu>
      </UiSidebarHeader>
      <UiSidebarContent>
        <UiSidebarGroup>
          <UiSidebarGroupLabel>Sales</UiSidebarGroupLabel>
          <UiSidebarGroupContent>
            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.funnel"
                  as-child
                >
                  <a href="#">
                    <Funnel />
                    <span>Sales Funnel</span>
                  </a>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>
          </UiSidebarGroupContent>
        </UiSidebarGroup>

        <UiSidebarGroup>
          <UiSidebarGroupLabel>General</UiSidebarGroupLabel>
          <UiSidebarGroupContent>
            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.messages"
                  as-child
                >
                  <a href="#">
                    <MessageSquare />
                    <span>Messages</span>
                  </a>
                  <UiSidebarMenuBadge>{{
                    (data as any)?.count
                  }}</UiSidebarMenuBadge>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>

            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.jobs"
                  as-child
                >
                  <a href="#">
                    <Workflow />
                    <span>Jobs</span>
                  </a>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>
          </UiSidebarGroupContent>
        </UiSidebarGroup>

        <UiSidebarGroup>
          <UiSidebarGroupLabel>System</UiSidebarGroupLabel>
          <UiSidebarGroupContent>
            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.casestudies"
                  as-child
                >
                  <a href="#">
                    <Settings2 />
                    <span>Casestudies</span>
                  </a>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>

            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.testimonials"
                  as-child
                >
                  <a href="#">
                    <MessageCircleHeartIcon />
                    <span>Testimonials</span>
                  </a>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>

            <UiSidebarMenu>
              <UiSidebarMenuItem>
                <UiSidebarMenuButton
                  @click="currentTab = Sidebar.blogs"
                  as-child
                >
                  <a href="#">
                    <NewspaperIcon />
                    <span>Blogs</span>
                  </a>
                </UiSidebarMenuButton>
              </UiSidebarMenuItem>
            </UiSidebarMenu>
          </UiSidebarGroupContent>
        </UiSidebarGroup>
      </UiSidebarContent>
      <UiSidebarRail />
    </UiSidebar>
    <UiSidebarInset class="max-h-dvh">
      <header
        class="flex bg-primary-foreground top-0 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <UiSidebarTrigger class="-ml-1" />
        </div>
        <div class="flex-1 flex justify-between">
          <div class="font-bold mx-2">
            {{
              Sidebar[currentTab].charAt(0).toUpperCase() +
              Sidebar[currentTab].slice(1)
            }}
          </div>
          <div class="mx-10 lg:mx-20">
            <!-- place action icons here, such as delete -->
          </div>
        </div>
      </header>

      <div class="flex-1 flex-col overflow-y-scroll">
        <SalesFunnel v-if="currentTab == Sidebar.funnel" />
        <Messages v-if="currentTab == Sidebar.messages" />
        <Jobs v-else-if="currentTab == Sidebar.jobs" />
        <Casestudies v-else-if="currentTab == Sidebar.casestudies" />
        <Testimonials v-else-if="currentTab == Sidebar.testimonials" />
        <Blogs v-else-if="currentTab == Sidebar.blogs" />
      </div>
    </UiSidebarInset>
  </UiSidebarProvider>
</template>
