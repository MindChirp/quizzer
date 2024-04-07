<script setup lang="ts"></script>
<template>
<div class="question-wrapper">
  <h2 class="roboto-medium"><slot /></h2>
</div>
</template>
<style scoped>
.question-wrapper {
  width: 100%;
}

.question-wrapper h2 {
  margin: 0;
}
</style>