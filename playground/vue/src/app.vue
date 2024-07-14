<script setup lang="ts">
  import * as Icons from '@vrx-arco/icons-vue'
  import { ref } from 'vue'

  const list = ref(Object.values(Icons))
</script>
<template>
  <div class="grid grid-cols-24">
    <div
      v-for="icon in list"
      :key="icon.__name"
      class="p-10px hover:bg-gray-100 flex flex-col items-center justify-center"
    >
      <component :is="icon" class="text-30px color-hex-ff6736" />
    </div>
  </div>
</template>
