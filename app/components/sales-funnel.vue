<script setup lang="ts">
import { Upload } from 'lucide-vue-next';
import { Button } from './ui/button';
import { InputGroup, InputGroupInput } from './ui/input-group';
import Badge from './ui/badge/Badge.vue';

const { data, status, refresh } = useFetch("/myapi/stages", {
  method: "GET",
});

type Stage = {
  id: string;
  name: string;
  funnel: funnelType;
};

enum funnelType {
  INBOUND,
  OUTBOUND,
  INOUTBOUND,
}
const xlsxfile=ref()
const importMessage=ref()
const importSuccess=ref<boolean|null>(null)
const uploadFileChanged= (event:Event)=>{
  importSuccess.value=null
  const input = event.target as HTMLInputElement
  xlsxfile.value= input.files?.[0]
}

const handleFileUpload = async () => {
  if (!xlsxfile.value) return

  const formData = new FormData()
  formData.append('file', xlsxfile.value)

  try {
    const response = await fetch('/myapi/leads/import', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('File upload failed')
    }

    const result = await response.json()
    importMessage.value=result.message
    importSuccess.value=result.success
    downloadFailedRows(result.failedFile)
    refresh()
  } catch (error) {
    console.error(error)
  }
}

const downloadFailedRows = (failedFile:string|null) => {
  if (!failedFile) return

  const binary = atob(failedFile)
  const bytes = new Uint8Array(binary.length)

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }

  const blob = new Blob([bytes], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'failed-rows.xlsx'
  link.click()

  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="flex h-full min-h-0 flex-col bg-muted/30">
    <!-- Main Funnel -->
    <div class="min-h-0 flex-1 overflow-x-auto overflow-y-hidden">
      <div class="flex h-full min-w-max gap-4 p-6">
        <FunnelStage
          v-for="stage in data as Array<Stage>"
          :key="stage.id"
          :stage="stage"
        />
      </div>
    </div>
  </div>

  <Teleport to="#top-bar-actions">
  <InputGroup >
    <InputGroupInput type="file" accept=".xlsx" @change="uploadFileChanged"/>
    <InputGroupAddon>
      <Button @click="handleFileUpload()" size="icon" class="hover:cursor-pointer">
        <Upload/>
      </Button>
    </InputGroupAddon>
  </InputGroup>
  <span v-if="importSuccess!==null" :class="importSuccess?'text-green-500' : 'text-red-500'" class="text-xs">{{ importMessage }}</span>
  </Teleport>
</template>
