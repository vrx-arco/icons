# 迁移指南

<script setup lang="ts">
  import { IconAlignCenter } from '@vrx-arco/icons-vue'
</script>

以下 css class 均使用 unocss/tailwindcss 作为示例

> [!WARNING] 注意
> 1. `@vrx-arco/icons-xx` 的设计理念与`iconify`类似,只做纯粹的 svg 封装组件，内部没有任何业务逻辑。
>
> 2. 基于以上理念, `@arco-design/web-xx` 中的所有属性，均未在`@vrx-arco/icons-xx` 中实现。
> 
> 3. 如想要这些功能，可以参考项目下 `/build/{vue,react}.ts` 文件，使用 `@vrx-arco/iconify-json` ,结合 `iconify` 的工具集，进行您自己的封装

## @arco-design/web-vue

<div class="ring-1 ring-gray-100 p-10px rounded">
  <IconAlignCenter  class="text-30px rotate-90 animate-spin" />
</div>

<!-- eslint-skip -->
```vue
<script setup lang="ts">
  import { IconAlignCenter } from '@arco-design/web-vue/es/icon' // [!code --]
  import { IconAlignCenter } from '@vrx-arco/icons-vue' // [!code ++]
</script>
<template>
   <IconAlignCenter :strokeWidth="4" :strokeLinecap="butt" :strokeLinejoin="miter" :rotate="90" spin :size="30" />  // [!code --]
   <IconAlignCenter class="text-30px rotate-90 animate-spin" />  // [!code ++]
</template>
```

## @arco-design/web-react

<div class="ring-1 ring-gray-100 p-10px rounded">
  <IconAlignCenter  class="animate-spin" />
</div>

<!-- eslint-skip -->
```tsx
import { IconAlignCenter } from '@arco-design/web-react/es/icon' // [!code --]
import { IconAlignCenter } from '@vrx-arco/icons-vue' // [!code ++]
export const App = () =>{
  return (
    <div>
      <IconAlignCenter spin />  // [!code --]
      <IconAlignCenter className="animate-spin" />  // [!code ++]
    </div>
  )
}
```
