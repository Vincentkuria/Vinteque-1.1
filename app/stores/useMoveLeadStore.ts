import { defineStore } from 'pinia'

export const useMoveLeadStore = defineStore('moveLeadStore', () => {
  const moveTo=ref<string | null>(null) // This will hold the target stageId to which the lead is being moved
  const moveFrom=ref<string | null>(null)
  const movingLead=ref<Lead | null>(null) // This will hold the lead that is currently being moved

  return {
    moveTo,
    moveFrom,
    movingLead
  }
})
