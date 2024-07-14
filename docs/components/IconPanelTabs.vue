<script setup lang="ts">
  import { markRaw } from 'vue'
  import { IconItemType } from './types'

  const active = defineModel<IconItemType>()

  const tabs = markRaw([
    { label: 'SVG', value: IconItemType.SVG },
    { label: 'Vue', value: IconItemType.VUE },
    { label: 'React', value: IconItemType.REACT },
    { label: 'Unplugin Icons', value: IconItemType.UN_PLUGIN_ICONS },
    { label: 'Iconify Icon', value: IconItemType.ICONIFY_ICON },
    { label: 'UnoCSS', value: IconItemType.UNO_CSS },
    { label: 'Tailwind CSS', value: IconItemType.TAILWIND },
    { label: 'CSS', value: IconItemType.CSS },
  ])
  const handleChange = (v) => {
    active.value = v
  }
</script>
<template>
  <div class="rounded mb-10px inline-flex bg-$vp-c-default-3 p-2px flex-wrap">
    <div
      v-for="item in tabs"
      :key="item.value"
      class="px-10px py-3px rounded cursor-pointer"
      :class="{ 'bg-$vp-c-bg': active === item.value }"
      @click="handleChange(item.value)"
      >{{ item.label }}</div
    >
  </div>
</template>
