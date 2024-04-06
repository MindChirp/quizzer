<script setup lang="ts">
import type { QuizDetailsDto } from '@/lib/api'
import { watch } from 'vue'

const props = defineProps<{
  quizData?: QuizDetailsDto
}>()

watch(props, () => {
  console.log(props.quizData)
})

</script>
<template v-bind="$attrs">
  <FormKit type="form" :value="quizData" v-if="quizData" :actions="false" class="title">
    <div class="title-wrapper">
    <FormKit autofocus placeholder="Quiz title" type="text" style="text-align: center" name="title" class="title" :inner-class="{
      'inner-styling': true
    }"/>
    </div>

    <FormKit type="text" label="Description" />

    
  </FormKit>
</template>
<style scoped>
.title-wrapper {
  width: fit-content;
  margin: auto;
}
</style>
<style>
  .inner-styling {
    box-shadow: none !important;
    border-width: 0 0 2px;
    border-radius: 0 !important;
    border-color: var(--secondary-bg);
    border-style: solid;
    font-size: 3rem;
    padding: 0;
  }

  .inner-styling input {
    padding: .5rem 0;
    color: var(--default-bg-text);
  }

  .inner-styling.small {
    font-size: 1rem;
  }

</style>