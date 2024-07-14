<p align="center">
<img src="https://vrx-arco.github.io/arco-design-pro/favicon.svg" width="200" height="250">
</p>

# Vrx Arco Icons

<!-- automd:badges color="orange" license licenseBranch  bundlephobia packagephobia name="@vrx-arco/icons-vue" -->

[![npm version](https://img.shields.io/npm/v/@vrx-arco/icons-vue?color=orange)](https://npmjs.com/package/@vrx-arco/icons-vue)
[![npm downloads](https://img.shields.io/npm/dm/@vrx-arco/icons-vue?color=orange)](https://npmjs.com/package/@vrx-arco/icons-vue)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vrx-arco/icons-vue?color=orange)](https://bundlephobia.com/package/@vrx-arco/icons-vue)
[![license](https://img.shields.io/github/license/vrx-arco/icons?color=orange)](https://github.com/vrx-arco/icons/blob/true/LICENSE)

<!-- /automd -->



[文档](https://vrx-arco.github.io/icons/)

可以使 arco design 的图标，作为纯 svg 组件/iconify 独立使用

## 示例

### vue

```vue
<script setup lang="ts">
  import { IconAlignCenter } from '@vrx-arco/icons-vue'
</script>
<template>
  <IconAlignCenter style="font-size:30px;color:#ff6736;" />
</template>
```

### react

```tsx
  import { IconAlignCenter } from '@vrx-arco/icons-react'
  
  export const App = ()=> {
    return <IconAlignCenter style="font-size:30px;color:#ff6736;" />
  }
```

### iconify

```vue
<script setup lang="ts">
  import { Icon, addCollection, listIcons } from '@iconify/vue'
  import { icons } from '@vrx-arco/iconify-json'

  addCollection(icons)
</script>
<template>
  <Icon icon="arco-design:align-center" color="#ff6736" style="font-size:30px;" />
</template>
```

## 安装

### vue 

<!-- automd:pm-install name="@vrx-arco/icons-vue" -->

```sh
# ✨ Auto-detect
npx nypm install @vrx-arco/icons-vue

# npm
npm install @vrx-arco/icons-vue

# yarn
yarn add @vrx-arco/icons-vue

# pnpm
pnpm install @vrx-arco/icons-vue

# bun
bun install @vrx-arco/icons-vue
```

<!-- /automd -->

### react 

<!-- automd:pm-install name="@vrx-arco/icons-react" -->

```sh
# ✨ Auto-detect
npx nypm install @vrx-arco/icons-react

# npm
npm install @vrx-arco/icons-react

# yarn
yarn add @vrx-arco/icons-react

# pnpm
pnpm install @vrx-arco/icons-react

# bun
bun install @vrx-arco/icons-react
```

<!-- /automd -->

### iconify 

<!-- automd:pm-install name="@vrx-arco/iconify-json" dev -->

```sh
# ✨ Auto-detect
npx nypm install -D @vrx-arco/iconify-json

# npm
npm install -D @vrx-arco/iconify-json

# yarn
yarn add -D @vrx-arco/iconify-json

# pnpm
pnpm install -D @vrx-arco/iconify-json

# bun
bun install -D @vrx-arco/iconify-json
```

<!-- /automd -->

## 贡献者
<!-- automd:contributors author="Colourlessglow" license="MIT" -->

Published under the [MIT](https://github.com/vrx-arco/icons/blob/main/LICENSE) license.
Made by [@Colourlessglow](https://github.com/Colourlessglow) and [community](https://github.com/vrx-arco/icons/graphs/contributors) 💛
<br><br>
<a href="https://github.com/vrx-arco/icons/graphs/contributors">
<img src="https://contrib.rocks/image?repo=vrx-arco/icons" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
