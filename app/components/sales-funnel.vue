<script setup lang="ts">
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
</template>
