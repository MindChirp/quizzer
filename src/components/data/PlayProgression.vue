<script setup lang="ts">
const props = defineProps<{
  numberOfQuestions?: number,
  currentNumber?: number
}>();

console.log(props.numberOfQuestions, props.currentNumber)
</script>
<template>
  <div class="question-wrapper">
    <div class="strip" v-for="n in numberOfQuestions" :key="n" :class="{completed: n <= (currentNumber ?? 0)+1}" />
  </div>
</template>
<style scoped>
.question-wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  gap: .5rem;
}

.strip {
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background: var(--primary-bg);

}

.completed {
  background: var(--primary-fg);
}
</style>