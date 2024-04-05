<script setup lang="ts">

import DividerLine from '@/components/layout/DividerLine.vue'
</script>
<template>
  <div class="header">
    <div class="content">
      <slot />
    </div>
    <DividerLine />
  </div>
</template>
<style scoped>

.header {
  width: 100%;
}

.content {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0;
  margin-bottom: 1rem;
}
</style>