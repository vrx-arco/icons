<script setup lang="ts">
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()
  const importUrl = computed(() => `import { Icon${props.icon} } from '@vrx-arco/icons-vue'`)
  const template$1 = () => {
    return [
      '<script setup lang="ts">',
      `   ${importUrl.value}`,
      // eslint-disable-next-line no-useless-escape
      '<\/script>',
      '<template>',
      `   <Icon${props.icon} />`,
      '</template>',
    ].join('\n')
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
