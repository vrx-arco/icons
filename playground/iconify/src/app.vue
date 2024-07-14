<script setup lang="ts">
  import { Icon, addCollection, listIcons } from '@iconify/vue'
  import { icons } from '@vrx-arco/iconify-json'
  import { ref } from 'vue'

  addCollection(icons)

  const list = ref(listIcons())
</script>
<template>
  <div class="grid grid-cols-24">
    <div
      v-for="icon in list"
      :key="icon"
      class="p-10px hover:bg-gray-100 flex items-center justify-center"
    >
      <Icon :icon color="#ff6736" class="text-30px" />
    </div>
  </div>
</template>
