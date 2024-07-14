<script setup lang="ts">
  import { iconToHTML, iconToSVG, prettifySVG } from '@iconify/utils'
  import { getIcon } from '@iconify/vue'
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const str = computed(() => {
    if (!props.icon) {
      return ''
    }
    const svg = iconToSVG(getIcon(props.icon)!)
    return prettifySVG(iconToHTML(svg.body, svg.attributes)) || ''
  })
</script>

<template>
  <CodeString :text="str" class="max-h-300px" />
</template>
