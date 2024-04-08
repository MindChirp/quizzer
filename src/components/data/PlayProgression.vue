<script setup lang="ts">
const props = defineProps<{
  numberOfQuestions?: number,
  currentNumber?: number
}>();

console.log(props.numberOfQuestions, props.currentNumber)
</script>
<template>
  <div class="question-wrapper">
    <div class="strip" v-for="n in numberOfQuestions" :key="n" :class="{completed: n <= (currentNumber ?? 0)+1}">
      <div class="background" />
    </div>
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
  overflow: hidden;
}

.strip.completed .background {
  width: 100%;
}

.strip .background {
  width: 0;
  height: 100%;
  background-color: var(--primary-fg);
  transition: width 500ms cubic-bezier(.55,0,.82,.16);
}
</style>