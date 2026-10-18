<script setup lang="ts">
import { Phone, Reply } from "@lucide/vue";

const messages = ref<Array<any>>([]);
const currentMessage = ref<any>(null);
const clickedMessageId = ref<number | null>(null);
let eventSource: EventSource | null = null;
const currentPage = ref<number>(1);
const pageSize = ref<number>(2);

const { refresh, data, status } = await useFetch(
  useRuntimeConfig().public.baseUrl + "/messages",
  {
    method: "get",
    query: () => ({
      page: currentPage.value - 1,
      size: pageSize.value,
    }),
  },
);

watch(
  data,
  (newData) => {
    clickedMessageId.value = null;
    currentMessage.value = null;
    messages.value = (newData as any)?.content;
  },
  { immediate: true },
);

onMounted(() => {
  eventSource = new EventSource(
    useRuntimeConfig().public.baseUrl + "/messages/sse",
  );
  eventSource.addEventListener("new_message", (event) => {
    const message = JSON.parse(event.data);
    if (currentPage.value == 0) {
      messages.value.unshift(message);
    }

    // send notification
    notify(message);
  });
});

const notify = (message: any) => {
  if ("Notification" in window && Notification.permission != "granted") {
    Notification.requestPermission().then((permission) => {
      console.log(`permission in ${permission}`);
    });
  }

  if (Notification.permission == "granted") {
    const options = {
      body: `${message.message}`,
      icon: "/vinteque.png",
    };

    new Notification("New Message", options);
  }
};

const messageItemClicked = async (message: any) => {
  // mark the message as read
  if (message.status == "unread") {
    await $fetch(
      useRuntimeConfig().public.baseUrl + `/messages/${message.id}/read`,
      {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
        onResponse({ response }) {
          if (response?.status == 200) {
            messages.value.forEach((m, index) => {
              if (m.id == message.id) {
                messages.value[index].status = "read";
              }
            });
          }
        },
      },
    );
  }

  // display message
  clickedMessageId.value = message.id;
  currentMessage.value = message;
};

function addMessage(message: any) {
  const exists = messages.value.some((m) => m.id === message.id);

  if (!exists) {
    messages.value.unshift(message);
  }
}

const deleteMessage = async (id: number) => {
  await $fetch(useRuntimeConfig().public.baseUrl + "/messages/" + id, {
    method: "DELETE",
    onResponse({ response }) {
      if (response?.status == 204) {
        messages.value.forEach((m, index) => {
          if (m.id == id) {
            messages.value.splice(index, 1);
          }
        });
        clickedMessageId.value = null;
        currentMessage.value = null;
      }
    },
  });
};
</script>

<template>
  <div class="w-full flex h-[90%]">
    <div class="h-full w-70 border-r border-sidebar-border overflow-y-scroll">
      <UiItem
        v-if="status == 'pending'"
        variant="outline"
        v-for="n in 3"
        class="transition-all duration-200 ease-in-out"
      >
        <UiItemContent>
          <UiItemHeader><UiSkeleton class="w-30 h-5" /></UiItemHeader>
          <UiItemDescription
            ><UiSkeleton class="w-3xs h-10"
          /></UiItemDescription>
        </UiItemContent>
      </UiItem>

      <div
        v-else-if="(data as any)?.totalElements == 0"
        class="text-muted-foreground text-sm text-center pt-4 transition-all duration-200 ease-in-out"
      >
        You have 0 unread messages
      </div>

      <UiItem
        v-else
        variant="outline"
        v-for="(message, index) in messages"
        @click="messageItemClicked(message)"
        :class="{
          'bg-card-foreground text-muted': clickedMessageId == message.id,
        }"
        class="transition-all duration-200 ease-in-out"
      >
        <UiItemContent class="hover:cursor-default">
          <UiItemHeader :class="{ 'font-bold': message.status == 'unread' }">{{
            message.name
          }}</UiItemHeader>
          <UiItemDescription
            :class="{ 'font-semibold': message.status == 'unread' }"
            >{{ message.message }}</UiItemDescription
          >
        </UiItemContent>
      </UiItem>
    </div>

    <div class="h-full flex-1">
      <div
        v-if="status == 'pending'"
        class="px-2 transition-all duration-200 ease-in-out"
      >
        <UiCard>
          <UiCardHeader>
            <UiSkeleton class="w-3xs h-5 rounded-full" />
            <UiSkeleton class="w-3xs h-5 rounded-full" />
            <UiCardAction>
              <UiSkeleton class="w-20 h-10 me-2" />
            </UiCardAction>
          </UiCardHeader>
          <UiCardContent>
            <UiSkeleton class="w-full h-36 rounded-2xl" />
          </UiCardContent>
          <UiCardFooter>
            <UiSkeleton class="w-30 h-5 rounded-full" />
          </UiCardFooter>
        </UiCard>
      </div>

      <div
        v-else-if="status == 'error'"
        class="w-full h-full flex items-center transition-all duration-200 ease-in-out"
      >
        <div class="text-center w-full text-red-400 text-lg">
          <span class="font-bold text-2xl">Error Loading</span><br />
          reload this page or check your network
        </div>
      </div>

      <div
        v-else-if="currentMessage == null"
        class="w-full h-full flex items-center transition-all duration-200 ease-in-out"
      >
        <div class="text-center w-full text-gray-400 text-xl">
          <span class="font-bold text-2xl">No Message Selected</span><br />
          Select message to view
        </div>
      </div>

      <div v-else class="px-2 transition-all duration-200 ease-in-out">
        <UiCard>
          <UiCardHeader>
            <UiCardTitle>{{ currentMessage.name }}</UiCardTitle>
            <UiCardDescription>
              <span>{{ currentMessage.email }}</span> |
              <span>{{ currentMessage.phone }}</span>
            </UiCardDescription>
            <UiCardAction>
              <UiButton
                variant="ghost"
                size="icon"
                class="me-2 hover:cursor-pointer"
              >
                <a :href="'tel:' + currentMessage.phone">
                  <Phone />
                </a>
              </UiButton>

              <UiButton
                variant="ghost"
                size="icon"
                class="hover:cursor-pointer"
              >
                <a :href="'mailto:' + currentMessage.email">
                  <Reply />
                </a>
              </UiButton>
            </UiCardAction>
          </UiCardHeader>
          <UiCardContent>
            <p>{{ currentMessage.message }}</p>
          </UiCardContent>
          <UiCardFooter>
            <div class="w-full flex flex-row justify-between">
              <span class="text-sm text-muted-foreground">{{
                simplifyDate(currentMessage.createdAt)
              }}</span>

              <UiAlertDialog>
                <UiAlertDialogTrigger>
                  <UiButton size="sm" class="hover:cursor-pointer">
                    Delete
                  </UiButton>
                </UiAlertDialogTrigger>
                <UiAlertDialogContent>
                  <UiAlertDialogHeader>
                    <UiAlertDialogTitle
                      >Are you absolutely sure?</UiAlertDialogTitle
                    >
                    <UiAlertDialogDescription>
                      Make sure that you have Contacted the client before
                      clicking delete. Either through email or a call
                    </UiAlertDialogDescription>
                  </UiAlertDialogHeader>

                  <UiAlertDialogFooter>
                    <UiAlertDialogCancel>No</UiAlertDialogCancel>
                    <UiAlertDialogAction
                      @click="deleteMessage(currentMessage.id)"
                      >Yes</UiAlertDialogAction
                    >
                  </UiAlertDialogFooter>
                </UiAlertDialogContent>
              </UiAlertDialog>
            </div>
          </UiCardFooter>
        </UiCard>
      </div>
    </div>
  </div>

  <div class="w-full h-[10%]">
    <UiPagination
      v-slot="{ page }"
      v-model:page="currentPage"
      :items-per-page="pageSize"
      :total="(data as any)?.totalElements"
      :default-page="1"
    >
      <UiPagination-content v-slot="{ items }">
        <UiPagination-previous />
        <template v-for="(item, index) in items" :key="index">
          <UiPaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </UiPaginationItem>
        </template>
        <UiPagination-ellipsis :Index="4" />
        <UiPagination-next />
      </UiPagination-content>
    </UiPagination>
  </div>
</template>
