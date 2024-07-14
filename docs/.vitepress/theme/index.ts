import 'uno.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './CustomLayout.vue'

import './style/style.css'

export default {
  extends: DefaultTheme,
  Layout,
} as Theme
