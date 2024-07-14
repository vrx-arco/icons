<script setup lang="ts">
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const template_vue = () => {
    return [
      '<script setup lang="ts">',
      `   import { Icon } from '@iconify/vue'`,
      // eslint-disable-next-line no-useless-escape
      '<\/script>',
      '<template>',
      `   <Icon icon="${props.icon}" />`,
      '</template>',
    ].join('\n')
  }

  const template_react = () => {
    return `import { Icon } from '@iconify/react'

export const App = () => { 
    return <Icon name="${props.icon}" />
}`
  }

  const template_wc = () => {
    return `<Icon icon="${props.icon}"></Icon>`
  }

  const str = computed(() => {
    if (!props.icon) {
      return {
        vue: '',
        react: '',
        wc: '',
      }
    }
    return { vue: template_vue(), react: template_react(), wc: template_wc() }
  })
</script>

<template>
  <p class="mb-10px">简单使用</p>
  <CodeString :text="str.wc" />
  <p class="my-10px">vue</p>
  <CodeString :text="str.vue" />
  <p class="my-10px">react</p>
  <CodeString :text="str.react" />
</template>
