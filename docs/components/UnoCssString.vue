<script setup lang="ts">
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const str = computed(() => {
    if (!props.icon) {
      return ''
    }

    return `<div class="i-${props.icon} w-1em h-1em"></div>`
  })
</script>

<template>
  <CodeString :text="str" />
</template>
