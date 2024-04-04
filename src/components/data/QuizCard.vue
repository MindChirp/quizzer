<script setup lang="ts">

import type { QuizDto } from '@/lib/api'

const props = defineProps<{
  quiz: QuizDto
}>();

</script>
<template>
  <div class="wrapper" v-bind="$attrs">
    <span class="title roboto-medium">{{quiz.title}}</span>
    <span class="description roboto-light">{{quiz.description}}</span>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background: var(--default-bg);
  border-radius: 0.5rem;
  cursor: pointer;
  border: solid 2px var(--secondary-bg);
  position: relative;
  overflow: hidden;
}

.wrapper::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--primary-bg);
  width: 1.5rem;
}

.wrapper:hover {
  background: var(--secondary-bg);
}

.title {

}

.description {

}

</style>