<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Building2,
  CalendarDays,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  User,
} from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

enum funnelType{
  INBOUND,
  OUTBOUND,
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



const data = ref<Lead>({
    id: 'lead-1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+254 712 345 678',
    company: 'Acme Ltd',
    role:'unknown',
    source: 'Google Maps',
    funnel: 'Website Funnel',
    comments:[
    {
      stageId: 'new-lead',
      stageName: 'New Lead',
      comments: [
        {
          id: 'comment-1',
          text: 'Lead added from Google Maps.',
          dateTime: '2026-09-10T10:30:00',
        },
        {
          id: 'comment-2',
          text: 'Company appears to be a good fit for our services.',
          dateTime: '2026-09-10T11:45:00',
        },
      ],
    },
    {
      stageId: 'first-message',
      stageName: 'First Message Sent',
      comments: [
        {
          id: 'comment-3',
          text: 'Failed to respond.',
          dateTime: '2026-09-12T14:15:00',
        },
        {
          id: 'comment-4',
          text: 'Sent a follow-up message.',
          dateTime: '2026-09-14T09:45:00',
        },
      ],
    },
    {
      stageId: 'discovery-call',
      stageName: 'Discovery Call',
      comments: [
        {
          id: 'comment-5',
          text: 'Discovery call scheduled.',
          dateTime: '2026-09-16T11:00:00',
        },
      ],
    },
  ],
    currentStage: 'first-message',
    dateAdded: '2026-09-10',
    lastContacted: '2026-09-14',
  },
)

const newComment = ref('')

const currentStage = computed(() => {
  return data.value.stageComments.find(
    stage => stage.stageId === data.value.lead.currentStage,
  )
})

function formatDateTime(dateTime: string) {
  return new Intl.DateTimeFormat('en-KE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(dateTime))
}

function addComment() {
  const text = newComment.value.trim()

  if (!text || !currentStage.value) {
    return
  }

  currentStage.value.comments.push({
    id: `comment-${Date.now()}`,
    text,
    dateTime: new Date().toISOString(),
  })

  newComment.value = ''
}
</script>

<template>
  <div class="flex h-[90vh] min-h-0 bg-background">
    <!-- Left: Lead Details -->
    <aside class="flex w-90 shrink-0 flex-col border-r">
      <!-- Lead Information -->
      <div class="flex-1 overflow-y-auto px-6">
        <div class="flex flex-col gap-6">
          <!-- Lead Identity -->
          <div class="flex items-center gap-4">
            <div
              class="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted"
            >
              <User class="size-5 text-muted-foreground" />
            </div>

            <div class="min-w-0">
              <h2 class="truncate font-semibold">
                {{ data.lead.name }}
              </h2>

              <p class="truncate text-sm text-muted-foreground">
                CEO, {{ data.lead.company }}
              </p>
            </div>
          </div>

          <Separator />

          <!-- Contact Information -->
          <div class="space-y-4">
            <div>
              <p
                class="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground"
              >
                Contact Information
              </p>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <Mail class="size-4 text-muted-foreground" />

                  <div class="min-w-0">
                    <p class="text-xs text-muted-foreground">
                      Email
                    </p>

                    <a :href="`mailto:${data.lead.email}`">
                    <p class="truncate text-sm">
                      {{ data.lead.email }}
                    </p>
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <Phone class="size-4 text-muted-foreground" />

                  <div class="min-w-0">
                    <p class="text-xs text-muted-foreground">
                      Phone
                    </p>

                    <a :href="`tel:${data.lead.phone}`">
                    <p class="text-sm">
                      {{ data.lead.phone }}
                    </p>
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <Building2 class="size-4 text-muted-foreground" />

                  <div class="min-w-0">
                    <p class="text-xs text-muted-foreground">
                      Company
                    </p>

                    <p class="truncate text-sm">
                      {{ data.lead.company }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <!-- Funnel Information -->
          <div class="space-y-4">
            <p
              class="text-xs font-medium uppercase tracking-wide text-muted-foreground"
            >
              Funnel Information
            </p>

            <div class="grid gap-4">
              <div>
                <p class="text-xs text-muted-foreground">
                  Lead Source
                </p>

                <div class="mt-1">
                  <Badge variant="outline">
                    {{ data.lead.source }}
                  </Badge>
                </div>
              </div>

              <div>
                <p class="text-xs text-muted-foreground">
                  Funnel
                </p>

                <p class="mt-1 text-sm font-medium">
                  {{ data.lead.funnel }}
                </p>
              </div>

              <div>
                <p class="text-xs text-muted-foreground">
                  Current Stage
                </p>

                <p class="mt-1 text-sm font-medium">
                  {{ currentStage?.stageName }}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <!-- Dates -->
          <div class="space-y-4">
            <p
              class="text-xs font-medium uppercase tracking-wide text-muted-foreground"
            >
              Timeline
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <CalendarDays class="size-4 text-muted-foreground" />

                <div>
                  <p class="text-xs text-muted-foreground">
                    Date Added
                  </p>

                  <p class="text-sm">
                    {{ formatDateTime(data.lead.dateAdded) }}
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <Clock3 class="size-4 text-muted-foreground" />

                <div>
                  <p class="text-xs text-muted-foreground">
                    Last Contacted
                  </p>

                  <p class="text-sm">
                    {{ formatDateTime(data.lead.lastContacted) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Right: Activity -->
    <main class="flex min-w-0 flex-1 flex-col">
      <!-- Activity Header -->
      <div class="shrink-0 border-b p-3">
        <div class="flex items-center gap-3">
          <div
            class="flex size-9 items-center justify-center rounded-lg bg-muted"
          >
            <MessageSquare class="size-4 text-muted-foreground" />
          </div>

          <div>
            <h2 class="font-semibold">
              Stage Activity
            </h2>

            <p class="text-sm text-muted-foreground">
              Notes and comments from the sales process
            </p>
          </div>
        </div>
      </div>

      <!-- Scrollable Activity -->
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto w-full max-w-3xl p-6">
          <div class="space-y-6">
            <template
              v-for="(stage, stageIndex) in data.stageComments"
              :key="stage.stageId"
            >
              <!-- Stage -->
              <section>
                <div class="mb-4 flex items-center justify-between gap-3">
                  <div class="flex items-center gap-3">
                    <div
                      class="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background text-xs font-medium"
                    >
                      {{ stageIndex + 1 }}
                    </div>

                    <div>
                      <h3 class="text-sm font-semibold">
                        {{ stage.stageName }}
                      </h3>

                      <p class="text-xs text-muted-foreground">
                        {{ stage.comments.length }}
                        {{
                          stage.comments.length === 1
                            ? 'comment'
                            : 'comments'
                        }}
                      </p>
                    </div>
                  </div>

                  <Badge
                    v-if="stage.stageId === data.lead.currentStage"
                    variant="secondary"
                  >
                    Current Stage
                  </Badge>
                </div>

                <!-- Comments -->
                <div
                  v-if="stage.comments.length"
                  class="ml-4 border-l pl-7"
                >
                  <div class="space-y-1">
                    <Card
                      v-for="comment in stage.comments"
                      :key="comment.id"
                    >
                      <CardContent>
                        <p class="text-sm leading-6">
                          {{ comment.text }}
                        </p>

                        <div
                          class="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"
                        >
                          <Clock3 class="size-3.5" />

                          <span>
                            {{ formatDateTime(comment.dateTime) }}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <!-- Empty Stage -->
                <div
                  v-else
                  class="ml-4 border-l pl-7"
                >
                  <p class="text-sm italic text-muted-foreground">
                    No comments for this stage.
                  </p>
                </div>
              </section>

              <!-- Stage Separator -->
              <Separator
                v-if="stageIndex < data.stageComments.length - 1"
              />
            </template>
          </div>
        </div>
      </div>

      <!-- Fixed Comment Composer -->
      <div class="shrink-0 border-t bg-background p-4">
        <div class="mx-auto w-full max-w-3xl">
          <div class="mb-2 flex items-center justify-between">
            <div>
              <p class="text-sm font-medium">
                Add Comment
              </p>

              <p class="text-xs text-muted-foreground">
                Adding a comment to
                {{ currentStage?.stageName }}
              </p>
            </div>

            <Badge variant="outline">
              {{ currentStage?.stageName }}
            </Badge>
          </div>

          <div class="flex gap-3">
            <Textarea
              v-model="newComment"
              placeholder="Write a comment about this lead..."
              class="min-h-20 resize-none"
              @keydown.ctrl.enter="addComment"
            />

            <Button
              class="self-end"
              :disabled="!newComment.trim()"
              @click="addComment"
            >
              Add Comment
            </Button>
          </div>

          <p class="mt-2 text-[11px] text-muted-foreground">
            Press Ctrl + Enter to add the comment
          </p>
        </div>
      </div>
    </main>
  </div>
</template>