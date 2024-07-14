import { loadIcons } from './loadIcons'
import { genIconifyJsonPackage } from './iconify'
import { genVueIcons } from './vue'
import { genReactIcons } from './react'

const iconSet = await loadIcons()
await genIconifyJsonPackage(iconSet)
await genVueIcons(iconSet)
await genReactIcons(iconSet)
