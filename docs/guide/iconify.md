# Iconify

 使用 [Iconify](https://iconify.design/) 加载图标

<script setup lang="ts">
  import { IconAlignCenter,IconAlignRight } from '@vrx-arco/icons-vue'
</script>

[![npm version](https://img.shields.io/npm/v/@vrx-arco/iconify-json?color=orange)](https://npmjs.com/package/@vrx-arco/iconify-json)

[![npm downloads](https://img.shields.io/npm/dm/@vrx-arco/iconify-json?color=orange)](https://npmjs.com/package/@vrx-arco/iconify-json)

[![bundle size](https://img.shields.io/bundlephobia/minzip/@vrx-arco/iconify-json?color=orange)](https://bundlephobia.com/package/@vrx-arco/iconify-json)

[![license](https://img.shields.io/github/license/vrx-arco/icons?color=orange)](https://github.com/vrx-arco/icons/blob/main/LICENSE)

<div class="rounded ring-1 ring-gray-100 p-20px mt-10px">
 <IconAlignCenter style="font-size:30px;color:#ff6736;" />
 <IconAlignRight style="font-size:30px;color:#ff6736;" />
</div>

## 在 Framework 中使用

:::code-group

```vue [Vue]
<script setup lang="ts">
  import { Icon, addCollection, listIcons } from '@iconify/vue'
  import { icons } from '@vrx-arco/iconify-json'

  addCollection(icons)
</script>
<template>
  <Icon icon="arco-design:align-center" style="font-size:30px;color:#ff6736;" />
  <Icon icon="arco-design:align-right" style="font-size:30px;color:#ff6736;" />
</template>
```

```tsx [React]
  import { Icon, addCollection, listIcons } from '@iconify/react'
  import { icons } from '@vrx-arco/iconify-json'

  addCollection(icons)
  export const App = ()=> {
    return (
    <div>
      <Icon icon="arco-design:align-center" style="font-size:30px;color:#ff6736;" />
      <Icon icon="arco-design:align-right" style="font-size:30px;color:#ff6736;" />
    </div>
    )
  }
```
:::

## 在 unplugin-icons 中使用

:::code-group

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import { Icons } from 'unplugin-icons/vite'
import { ExternalPackageIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  plugins:[
      Icons({
        customCollections: {
          ...ExternalPackageIconLoader('@vrx-arco/iconify-json')
        }
      })
    ]
})
```

```vue [Vue]
<script setup lang="ts">
  import IconAlignCenter from '~icons/arco-design/align-center'
  import IconAlignRight from '~icons/arco-design/align-right'
</script>
<template>
  <IconAlignCenter style="font-size:30px;color:#ff6736;" />
  <IconAlignRight style="font-size:30px;color:#ff6736;" />
</template>
```

```tsx [React]
  import IconAlignCenter from '~icons/arco-design/align-center'
  import IconAlignRight from '~icons/arco-design/align-right'

  export const App = ()=> {
    return (
    <div>
      <IconAlignCenter style="font-size:30px;color:#ff6736;" />
      <IconAlignRight style="font-size:30px;color:#ff6736;" />
    </div>
    )
  }
```
:::

## 在 unocss 中使用

:::code-group

```ts [uno.config.ts]
import { defineConfig,presetIcons } from 'unocss'
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'

export default defineConfig({
  presets: [
    presetIcons({ 
      collections: {
        ...createExternalPackageIconLoader('@vrx-arco/iconify-json')
      }
     }),
    // ...other presets
  ],
})
```

```vue [Vue]
<script setup lang="ts">
  import IconAlignCenter from '~icons/arco-design/align-center'
  import IconAlignRight from '~icons/arco-design/align-right'
</script>
<template>
  <IconAlignCenter style="font-size:30px;color:#ff6736;" />
  <IconAlignRight style="font-size:30px;color:#ff6736;" />
</template>
```

```tsx [React]
  import IconAlignCenter from '~icons/arco-design/align-center'
  import IconAlignRight from '~icons/arco-design/align-right'

  export const App = ()=> {
    return (
    <div>
      <IconAlignCenter style="font-size:30px;color:#ff6736;" />
      <IconAlignRight style="font-size:30px;color:#ff6736;" />
    </div>
    )
  }
```
:::



## 安装

:::code-group

```bash [npm]
$ npm i @vrx-arco/icons-vue
```

```bash [yarn]
$ yarn add @vrx-arco/icons-vue
```

```bash [pnpm]
$ pnpm add @vrx-arco/icons-vue
```

```bash [bun]
$ bun add @vrx-arco/icons-vue
```

:::

## 更多

更多用法，参照支持 [Iconify](https://iconify.design/) 加载图标库的具体说明

参考资料
- [unocss](https://unocss.dev/presets/icons#externalpackageiconloader)
- [tailwindcss](https://iconify.design/docs/usage/css/tailwind/#installation)
- [unplugin-icons](https://github.com/unplugin/unplugin-icons?tab=readme-ov-file#use-custom-external-collection-packages) 
- ...
