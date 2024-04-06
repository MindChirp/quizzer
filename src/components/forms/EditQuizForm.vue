<script setup lang="ts">
import type { QuizDto } from '@/lib/api'

defineProps<{
  quizData?: QuizDto
}>()

</script>
<template>
  <FormKit type="form" :value="quizData" >

    <FormKit type="text" name="title"/>
  </FormKit>
</template>
<style scoped>

</style>