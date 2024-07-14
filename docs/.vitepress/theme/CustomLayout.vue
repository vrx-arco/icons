<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import { useData } from 'vitepress'
  import { Toaster } from 'vue-sonner'
  import TeamPage from './components/TeamPage.vue'
  import ReloadPrompt from './components/ReloadPrompt.vue'

  const { isDark } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <TeamPage />
    </template>
    <template #layout-bottom>
      <ReloadPrompt />
      <Toaster :theme="isDark ? 'dark' : 'light'" />
    </template>
  </DefaultTheme.Layout>
</template>
