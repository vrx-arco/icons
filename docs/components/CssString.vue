<script setup lang="ts">
  import { computed } from 'vue'
  import { getIconCSS, getIconContentCSS } from '@iconify/utils'
  import { getIcon } from '@iconify/vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const mask = computed(() => {
    if (!props.icon) {
      return ''
    }

    const iconData = getIcon(props.icon)!

    return getIconCSS(iconData, {
      iconSelector: `.${props.icon.replace(':', '--')}`,
    })
  })

  const content = computed(() => {
    if (!props.icon) {
      return ''
    }

    const iconData = getIcon(props.icon)!

    return getIconContentCSS(iconData, {
      iconSelector: `.${props.icon.replace(':', '--')}::after`,
      height: iconData.height,
    })
  })
</script>

<template>
  <p class="mb-10px">mask</p>
  <CodeString :text="mask" />
  <p class="my-10px">content</p>
  <CodeString :text="content" />
</template>
