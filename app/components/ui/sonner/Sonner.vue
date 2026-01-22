<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { Toaster as Sonner } from "vue-sonner"

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
    class="toaster group"
    v-bind="props"
    :style="{
      '--normal-bg': 'var(--primary)',
      '--normal-text': 'var(--primary-foreground)',
      '--normal-border': 'var(--border)',

    }"
  />
</template>
