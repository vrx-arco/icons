<script setup lang="ts">
  import { computed } from 'vue'
  import CodeString from './CodeString.vue'

  const props = defineProps<{ icon?: string }>()

  const str = computed(() => {
    if (!props.icon) {
      return ''
    }

    return `<div class="icon-[${props.icon.replace(':', '--')}]"></div>`
  })
</script>

<template>
  <CodeString :text="str" />
  <p class="my-10px"> 需要额外安装 </p>
  <CodeString text="pnpm add @iconify/tailwind -D" />
</template>
