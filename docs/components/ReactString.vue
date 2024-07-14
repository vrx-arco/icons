<script setup lang="ts">
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const importUrl = computed(() => `import { Icon${props.icon} } from '@vrx-arco/icons-react'`)
  const template$1 = () => {
    return `${importUrl.value}

export const App = () => { 
    return <Icon${props.icon} />
}`
  }

  const str = computed(() => {
    if (!props.icon) {
      return ''
    }
    return template$1()
  })
</script>

<template>
  <CodeString :text="importUrl" />
  <p class="my-10px">简单示例</p>
  <CodeString :text="str" />
</template>
