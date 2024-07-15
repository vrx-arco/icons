---
layout: 'page'
---

<script setup lang="ts">
 import IconsList from './components/IconsList.vue'
</script>

<h1 class="m-20px text-8 font-bold m-10px">Icons Preview</h1>
  <p class="mx-20px my-10px"
    >by
    <a
      class="color-$vp-c-brand-1 hover:underline no-underline"
      href="https://github.com/arco-design/arco-design"
      target="_blank"
      >Bytedance</a
    ></p
  >
  <p class="mx-20px my-10px"
    >License:
    <a
      class="color-$vp-c-brand-1 hover:underline no-underline"
      href="https://github.com/arco-design/arco-design/blob/main/LICENSE"
      target="_blank"
      >MIT</a
    >
  </p>
  

<Suspense>
<IconsList/>
</Suspense>


