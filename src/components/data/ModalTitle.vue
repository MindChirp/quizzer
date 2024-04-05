<script setup lang="ts">

import DividerLine from '@/components/layout/DividerLine.vue'
</script>
<template>
<div class="wrapper">
  <h2 class="roboto-medium"><slot /></h2>
</div>
</template>
<style scoped>
.wrapper {
  width: 100%;
}

.wrapper h2 {
  margin: 0;
}
</style>