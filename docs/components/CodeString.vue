<script setup lang="ts">
  import { useClipboard } from '@vueuse/core'
  import { toast } from 'vue-sonner'

  defineProps<{ text: string }>()

  const { copy } = useClipboard({ legacy: true })

  const handleCopy = async (str: string) => {
    await copy(str)
    toast.success('已复制至剪切板')
  }
</script>
<template>
  <code
    class="bg-$vp-c-default-3 rounded p-10px color-$vp-c-text-2 cursor-copy whitespace-pre block overflow-auto"
    @click="handleCopy(text)"
  >
    {{ text }}
  </code>
</template>
