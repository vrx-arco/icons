<script setup lang="ts">
  import { useScrollLock, useToggle } from '@vueuse/core'
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue'
  import { type IconItem, IconItemType } from './types'
  import SvgString from './SvgString.vue'
  import IconPanelTabs from './IconPanelTabs.vue'
  import VueString from './VueString.vue'
  import ReactString from './ReactString.vue'
  import UnPluginIconsString from './UnPluginIconsString.vue'
  import IconifyIconString from './IconifyIconString.vue'
  import UnoCssString from './UnoCssString.vue'
  import TailwindString from './TailwindString.vue'
  import CssString from './CssString.vue'

  const activeType = ref<IconItemType>(IconItemType.SVG)
  const data = ref<Partial<IconItem>>({})

  const [show, toggleShow] = useToggle()

  const scrollLock = useScrollLock(document.body, false)

  const open = (item: IconItem) => {
    activeType.value = IconItemType.SVG
    data.value = { ...item }
    toggleShow()
    scrollLock.value = true
  }

  const handleClose = () => {
    toggleShow()
    scrollLock.value = false
    data.value = {}
  }

  defineExpose({ open })
</script>
<template>
  <ClientOnly>
    <Teleport v-if="show" to="body">
      <div
        class="fixed top-0 left-0 z-1000 bg-gray-100/70 w-full h-full flex justify-center items-start pt-15vh backdrop-blur-sm"
        @click="handleClose"
      >
        <div class="p-10px rounded bg-$vp-c-bg w-9/10 max-w-750px" @click.stop>
          <div class="flex">
            <div class="flex-1 min-w-0">
              <span class="text-$vp-c-text-3">Icon: </span>
              <span class="font-bold">{{ data.name }}</span>
            </div>
            <div
              class="rounded p-5px bg-$vp-c-default-3 cursor-pointer transition duration-200 ease-in-out hover:scale-120"
            >
              <Icon icon="arco-design:close" @click="handleClose" />
            </div>
          </div>
          <div class="flex mt-10px items-start max-sm:flex-col">
            <div class="rounded bg-$vp-c-default-3 p-10px text-20">
              <Icon v-if="data.iconify" :icon="data.iconify" />
            </div>
            <div class="max-sm:mt-10px flex-1 min-w-0 sm:ml-10px max-sm:w-full">
              <IconPanelTabs v-model="activeType" />
              <SvgString v-if="activeType === IconItemType.SVG" :icon="data.iconify" />
              <VueString v-if="activeType === IconItemType.VUE" :icon="data.component" />
              <ReactString v-if="activeType === IconItemType.REACT" :icon="data.component" />
              <UnPluginIconsString
                v-if="activeType === IconItemType.UN_PLUGIN_ICONS"
                :component="data.component"
                :name="data.name"
              />
              <IconifyIconString
                v-if="activeType === IconItemType.ICONIFY_ICON"
                :icon="data.iconify"
              />
              <UnoCssString v-if="activeType === IconItemType.UNO_CSS" :icon="data.iconify" />
              <TailwindString v-if="activeType === IconItemType.TAILWIND" :icon="data.iconify" />
              <CssString v-if="activeType === IconItemType.CSS" :icon="data.iconify" />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>
