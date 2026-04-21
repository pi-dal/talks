<template>
  <div
    v-if="shouldShowPageNumber"
    class="absolute bottom-4 right-8 text-[12px] font-serif z-50 mix-blend-difference text-white"
  >
    {{ realPageNumber }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const nav = useNav()

// 1-4, 10-11, 18-19 不需要计数，其余按顺序
// 第1、2页可能是封面，第3、4页可能是大纲/过渡，根据用户的要求直接硬编码这些跳过的页码。
const skipPages = [1, 2, 3, 4, 10, 11, 18, 19];

const shouldShowPageNumber = computed(() => {
  const current = nav.currentPage.value;
  // 过滤掉不需要计数的页面
  if (skipPages.includes(current)) return false;
  // 过滤掉最后两页 (References 和 Thank You)
  if (current >= nav.total.value - 1) return false; 
  return true;
});

const realPageNumber = computed(() => {
  const current = nav.currentPage.value;
  let count = 0;
  for (let i = 1; i <= current; i++) {
    if (!skipPages.includes(i)) {
      count++;
    }
  }
  return count;
});
</script>
