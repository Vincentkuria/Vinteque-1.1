<script lang="ts" setup>
import { Building2, CalendarDays, Clock3, GripVertical } from "lucide-vue-next";
import { Card, CardContent } from "@/components/ui/card";

import { Drawer, DrawerContent } from "@/components/ui/drawer";

const props = defineProps({
  stage: {
    type: Object as PropType<Stage>,
    required: true,
  },
});

function formatDate(date: string | null | undefined) {
  if (!date) {
    return;
  }
  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

const leads = ref<Array<Lead>>([]);
const currentPage = ref<number>(1);

const draggedLeadId = ref<string | null>(null);
const dragOverStageId = ref<string | null>(null);

const drawerOpen = ref(false);
const selectedLead = ref<Lead | null>(null);

const { data, status, refresh } = useFetch("/myapi/leads", {
  method: "GET",
  params:()=> ({
    stageName: props.stage.name,
    pageNumber: currentPage.value - 1,
  }),
});

const store = useMoveLeadStore()
const { moveTo, moveFrom, movingLead } = storeToRefs(store)

watch(
  moveTo,
  async(newMoveTo) => {
    
    if(newMoveTo){
      
      if(moveFrom.value==props.stage.id){
        console.log(newMoveTo)
        const leadIndex = leads.value.findIndex(lead => lead.id === movingLead.value?.id)
        if (leadIndex !== -1) {
          console.log(leadIndex)
          leads.value.splice(leadIndex, 1)
        }else{
          // console.log(leadIndex + " not found")
        }
      }else{
        
        // console.log("moveFrom is not this stage id: ", moveFrom.value)
      }

      if(newMoveTo==props.stage.id){
        leads.value.push(movingLead.value!)
        await $fetch("/myapi/leads/move",{
          method:"POST",
          body:{
            leadId: movingLead.value?.id,
            toStage: newMoveTo
          }
        })
      }
      
    }
  }
);    

watch(
  data,
  (newData, oldData) => {
    const content = newData?.content;
    if (Array.isArray(content)) {
      leads.value.push(...content);
    }
  },
  { immediate: true },
);

const startDrag = (lead: Lead, event: DragEvent) => {
  draggedLeadId.value = lead.id;

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("lead", JSON.stringify(lead));
    event.dataTransfer.setData("moveFrom", props.stage.id);
  }
};

const endDrag = () => {
  draggedLeadId.value = null;
  dragOverStageId.value = null;
};

const dragOver = (stageId: string, event: DragEvent) => {
  event.preventDefault();

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }

  dragOverStageId.value = stageId;
};

const dragLeave = (stageId: string) => {
  if (dragOverStageId.value === stageId) {
    dragOverStageId.value = null;
  }
};

const dropLead = (stageId: string, event: DragEvent) => {
  event.preventDefault();

  const leadJson = event.dataTransfer?.getData("lead");
  const lead: Lead | null = leadJson ? JSON.parse(leadJson) : null;
  const leadId = lead?.id;

  if (!leadId) {
    endDrag();
    return;
  }

  moveFrom.value = event.dataTransfer?.getData("moveFrom")||null;
  movingLead.value = lead
  moveTo.value = props.stage.id
  //TODO: change the lead's stage in the backend using an API call

  endDrag();
};

const openLead = (lead: Lead) => {
  selectedLead.value = lead;
  drawerOpen.value = true;
};
</script>

<template>
  <div
    class="flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-xl border bg-muted/40 transition-colors"
    :class="{
      'ring-2 ring-primary/40 bg-primary/5': dragOverStageId === props.stage.id,
    }"
    @dragover="dragOver(props.stage.id, $event)"
    @dragleave="dragLeave(props.stage.id)"
    @drop="dropLead(props.stage.id, $event)"
  >
    <div class="shrink-0 border-b bg-background/95 p-4">
      <div class="flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="truncate text-sm font-semibold">
            {{ props.stage.name }}
          </h2>

          <p class="mt-1 text-xs text-muted-foreground">
            {{ data?.totalElements ?? 0 }}
            {{ data?.totalElements === 1 ? "lead" : "leads" }}
          </p>
        </div>
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto p-3">
      <div class="flex flex-col gap-3">

        <div
          v-if="leads.length === 0"
          class="flex min-h-32 items-center justify-center rounded-lg border border-dashed bg-background/50"
        >
          <p class="text-xs text-muted-foreground">Drop leads here</p>
        </div>

        <Card
          v-for="lead in leads"
          :key="lead.id"
          draggable="true"
          class="cursor-grab select-none transition-all hover:border-primary/40 hover:shadow-sm active:cursor-grabbing"
          :class="{
            'opacity-50': draggedLeadId === lead.id,
          }"
          @dragstart="startDrag(lead, $event)"
          @dragend="endDrag"
          @click="openLead(lead)"
        >
          <CardContent class="p-4">
            <div class="flex items-start gap-3">
              <div class="mt-0.5 text-muted-foreground">
                <GripVertical class="size-4" />
              </div>

              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">
                      {{ lead.name ?? "" }}
                    </p>

                    <div
                      class="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <Building2 class="size-3.5 shrink-0" />

                      <span class="truncate">
                        {{ lead.company ?? "" }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="mt-4 grid grid-cols-2 gap-3">
                  <div class="min-w-0">
                    <div
                      class="flex items-center gap-1.5 text-[11px] text-muted-foreground"
                    >
                      <CalendarDays class="size-3" />
                      Added
                    </div>

                    <p class="mt-1 truncate text-xs">
                      {{ formatDate(lead.dateAdded) ?? "" }}
                    </p>
                  </div>

                  <div class="min-w-0">
                    <div
                      class="flex items-center gap-1.5 text-[11px] text-muted-foreground"
                    >
                      <Clock3 class="size-3" />
                      Contacted
                    </div>

                    <p class="mt-1 truncate text-xs">
                      {{ formatDate(lead.lastContacted) ?? "Not Contacted" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>

  <Drawer v-model:open="drawerOpen">
    <DrawerContent class="min-h-fit">
      <div class="mx-auto w-full max-w-6xl">
        <UserDetails :lead="selectedLead!" />
      </div>
    </DrawerContent>
  </Drawer>
</template>
