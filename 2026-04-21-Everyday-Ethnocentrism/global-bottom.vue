<template>
  <div
    v-if="
      $slidev.nav.currentPage > 2 && 
      $slidev.nav.currentPage !== $slidev.nav.total &&
      $slidev.nav.currentLayout !== 'section'
    "
    class="absolute bottom-4 right-8 text-[12px] font-serif z-50 mix-blend-difference text-white"
  >
    {{ getRealPageNumber($slidev.nav.currentPage) }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const nav = useNav()

function getRealPageNumber(currentIdx) {
  let sectionCount = 0;
  for (let i = 1; i <= currentIdx; i++) {
    const route = nav.slides.value[i - 1]; 
    if (route && route.meta && route.meta.layout === 'section') {
      sectionCount++;
    }
  }
  return currentIdx - 2 - sectionCount;
}
</script>

<style>
#slidev-goto-dialog[class~='-top-20'] {
  display: none !important;
}
</style>
