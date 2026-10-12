<script setup lang="ts">
import { computed, ref } from 'vue'
import { Building2, CalendarDays, Clock3, GripVertical } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import Sheet from './ui/sheet/Sheet.vue'
import SheetContent from './ui/sheet/SheetContent.vue'

const funnel=ref<funnelType|null>(null)
const stageName=ref<string|null>(null)

// const {data, status, refresh}= useFetch(useRuntimeConfig().public.baseUrl+'/stages',{
//   method:'GET',
//   params:()=>({
//     stage:stageName.value
//   })
// }) everystage should load its own data, for easy update on scroll and using sse updates

type Stage = {
  id: string
  name: string
  funnel: funnelType
}

enum funnelType{
  INBOUND,
  OUTBOUND,
  INOUTBOUND
}

type Comment = {
  id: string
  text: string
  dateTime: string
}

type StageComments = {
  stageId: string
  stageName: string
  comments: Comment[]
}

type Lead = {
  id: string
  name: string
  email: string
  phone: string
  company: string
  role: string
  source: string
  funnel: funnelType
  comments:StageComments[]
  currentStage: string
  dateAdded: string
  lastContacted: string
  updated_at: string
}

const funnely = ref<{
  stages: Stage[]
  leads: Lead[]
}>({
  stages: [
    {
      id: 'new-lead',
      name: 'New Lead',
    },
    {
      id: 'first-message',
      name: 'First Message Sent',
    },
    {
      id: 'discovery-call',
      name: 'Discovery Call',
    },
    {
      id: 'proposal',
      name: 'Proposal Sent',
    },
    {
      id: 'closed-won',
      name: 'Closed Won',
    },
  ],

  leads: [
    {
      id: 'lead-1',
      name: 'John Doe',
      company: 'Acme Ltd',
      dateAdded: '2026-09-10',
      lastContacted: '2026-09-12',
      stageId: 'new-lead',
    },
    {
      id: 'lead-2',
      name: 'Jane Smith',
      company: 'Example Corp',
      dateAdded: '2026-09-08',
      lastContacted: '2026-09-14',
      stageId: 'new-lead',
    },
    {
      id: 'lead-3',
      name: 'Michael Kamau',
      company: 'Kamau Enterprises',
      dateAdded: '2026-09-07',
      lastContacted: '2026-09-13',
      stageId: 'new-lead',
    },
    {
      id: 'lead-4',
      name: 'Sarah Wanjiku',
      company: 'Nairobi Foods',
      dateAdded: '2026-09-06',
      lastContacted: '2026-09-11',
      stageId: 'new-lead',
    },
    {
      id: 'lead-5',
      name: 'Brian Otieno',
      company: 'Otieno Holdings',
      dateAdded: '2026-09-05',
      lastContacted: '2026-09-10',
      stageId: 'new-lead',
    },
    {
      id: 'lead-6',
      name: 'David Mwangi',
      company: 'Mwangi & Partners',
      dateAdded: '2026-09-04',
      lastContacted: '2026-09-09',
      stageId: 'new-lead',
    },
    {
      id: 'lead-7',
      name: 'Grace Njeri',
      company: 'Green Solutions',
      dateAdded: '2026-09-03',
      lastContacted: '2026-09-08',
      stageId: 'first-message',
    },
    {
      id: 'lead-8',
      name: 'Peter Kariuki',
      company: 'Kariuki Consulting',
      dateAdded: '2026-09-02',
      lastContacted: '2026-09-07',
      stageId: 'first-message',
    },
    {
      id: 'lead-9',
      name: 'Lucy Achieng',
      company: 'Lakeview Ltd',
      dateAdded: '2026-09-01',
      lastContacted: '2026-09-06',
      stageId: 'discovery-call',
    },
    {
      id: 'lead-10',
      name: 'James Maina',
      company: 'Maina Technologies',
      dateAdded: '2026-08-30',
      lastContacted: '2026-09-05',
      stageId: 'proposal',
    },
  ],
})

const draggedLeadId = ref<string | null>(null)
const dragOverStageId = ref<string | null>(null)

const drawerOpen = ref(false)
const selectedLead = ref<Lead | null>(null)

const leadsByStage = computed(() => {
  return funnel.value.stages.reduce<Record<string, Lead[]>>((result, stage) => {
    result[stage.id] = funnel.value.leads.filter(
      lead => lead.stageId === stage.id,
    )

    return result
  }, {})
})

function getLeadsForStage(stageId: string) {
  return leadsByStage.value[stageId] ?? []
}

function startDrag(lead: Lead, event: DragEvent) {
  draggedLeadId.value = lead.id

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', lead.id)
  }
}

function endDrag() {
  draggedLeadId.value = null
  dragOverStageId.value = null
}

function dragOver(stageId: string, event: DragEvent) {
  event.preventDefault()

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }

  dragOverStageId.value = stageId
}

function dragLeave(stageId: string) {
  if (dragOverStageId.value === stageId) {
    dragOverStageId.value = null
  }
}

function dropLead(stageId: string, event: DragEvent) {
  event.preventDefault()

  const leadId =
    event.dataTransfer?.getData('text/plain') || draggedLeadId.value

  if (!leadId) {
    endDrag()
    return
  }

  const lead = funnel.value.leads.find(item => item.id === leadId)

  if (lead) {
    lead.stageId = stageId
  }

  endDrag()
}

function openLead(lead: Lead) {
  selectedLead.value = lead
  drawerOpen.value = true
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}
</script>

<template>
  <div class="flex h-full min-h-0 flex-col bg-muted/30">
    <!-- Main Funnel -->
    <div class="min-h-0 flex-1 overflow-x-auto overflow-y-hidden">
      <div class="flex h-full min-w-max gap-4 p-6">
        <div
          v-for="stage in funnel.stages"
          :key="stage.id"
          class="flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-xl border bg-muted/40 transition-colors"
          :class="{
            'ring-2 ring-primary/40 bg-primary/5':
              dragOverStageId === stage.id,
          }"
          @dragover="dragOver(stage.id, $event)"
          @dragleave="dragLeave(stage.id)"
          @drop="dropLead(stage.id, $event)"
        >
          <!-- Column Header -->
          <div class="shrink-0 border-b bg-background/95 p-4">
            <div class="flex items-center justify-between gap-3">
              <div class="min-w-0">
                <h2 class="truncate text-sm font-semibold">
                  {{ stage.name }}
                </h2>

                <p class="mt-1 text-xs text-muted-foreground">
                  {{ getLeadsForStage(stage.id).length }}
                  {{
                    getLeadsForStage(stage.id).length === 1
                      ? 'lead'
                      : 'leads'
                  }}
                </p>
              </div>

              <Badge variant="outline">
                {{ getLeadsForStage(stage.id).length }}
              </Badge>
            </div>
          </div>

          <!-- Independently Scrollable Column -->
          <div class="min-h-0 flex-1 overflow-y-auto p-3">
            <div class="flex flex-col gap-3">
              <Card
                v-for="lead in getLeadsForStage(stage.id)"
                :key="lead.id"
                draggable="true"
                class="cursor-grab select-none transition-all hover:border-primary/40 hover:shadow-sm active:cursor-grabbing"
                :class="{
                  'opacity-50':
                    draggedLeadId === lead.id,
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
                            {{ lead.name }}
                          </p>

                          <div
                            class="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"
                          >
                            <Building2 class="size-3.5 shrink-0" />

                            <span class="truncate">
                              {{ lead.company }}
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
                            {{ formatDate(lead.dateAdded) }}
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
                            {{ formatDate(lead.lastContacted) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <!-- Empty Column -->
              <div
                v-if="getLeadsForStage(stage.id).length === 0"
                class="flex min-h-32 items-center justify-center rounded-lg border border-dashed bg-background/50"
              >
                <p class="text-xs text-muted-foreground">
                  Drop leads here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty Lead Drawer -->
    <Drawer v-model:open="drawerOpen">
      <DrawerContent class="min-h-fit">
        <div class="mx-auto w-full max-w-6xl">
          <UserDetails/>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>