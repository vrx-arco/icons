<script setup lang="ts">
  import { computed, markRaw, ref } from 'vue'
  import { Icon, addCollection, listIcons } from '@iconify/vue'
  import { pascalCase } from 'scule'
  import type { IconItem } from './types'
  import IconPanel from './IconPanel.vue'

  const { icons } = await import('@vrx-arco/iconify-json')

  addCollection(icons)

  const _list = markRaw<IconItem[]>(
    listIcons().map((iconify) => {
      const o = { iconify, name: iconify.replace('arco-design:', '') }
      return {
        ...o,
        component: pascalCase(o.name),
      }
    })
  )

  const searchValue = ref<string>()

  const matchIcon = (item: IconItem, searchValue: string) =>
    !!Object.values(item).find((item: string) => item.toLowerCase().includes(searchValue))

  const list = computed(() => {
    const v = searchValue.value?.toLowerCase()
    if (!v) {
      return _list
    }
    return _list.filter((item) => matchIcon(item, v))
  })

  const panelRef = ref<InstanceType<typeof IconPanel>>()

  const openPanel = (item: IconItem) => {
    panelRef.value?.open(item)
  }
</script>

<template>
  <p class="mx-20px my-10px"
    >Total <span class="color-$vp-c-brand-2">{{ _list.length }}</span> icons</p
  >
  <div class="m-10px text-4 flex bg-$vp-c-default-3 rounded px-10px py-5px items-center">
    <Icon icon="arco-design:search" class="w-5 mr-10px" />
    <input v-model="searchValue" class="flex-1 min-w-0" placeholder="请输入图标名称" />
  </div>
  <div
    class="grid grid-cols-3 2xl:grid-cols-24 xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-5 m-20px"
  >
    <div
      v-for="icon in list"
      :key="icon.name"
      class="p-10px rounded hover:bg-$vp-c-default-3 flex flex-col items-center justify-center hover:scale-120 transition duration-200 ease-in-out cursor-pointer"
      @click="openPanel(icon)"
    >
      <Icon :icon="icon.iconify" class="text-8" />
    </div>
  </div>
  <IconPanel ref="panelRef" />
</template>
