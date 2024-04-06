<script setup lang="ts">
import type { QuizDetailsDto } from '@/lib/api'
import { ref, watch } from 'vue'
import DropdownComponent, { type OptionType } from '@/components/input/DropdownComponent.vue'
import ContributorsCard from '@/components/data/ContributorsCard.vue'
import DividerLine from '@/components/layout/DividerLine.vue'

const props = defineProps<{
  quizData?: QuizDetailsDto
}>()

const labels = ref<OptionType[]>([{
  label: "Geography",
  value: "ur mother"
},
  {label: "Politics",
  value: "sdsfjs"},
  {label: "Flags",
    value: "sdsfjs1"},
  {label: "Insects",
    value: "sdsfjs2"},
  {label: "Nature",
    value: "sdsfjs3"},
  {label: "Entertainment",
    value: "sdsfjs4"}
]);

const selected = ref<OptionType[]>([])

watch(props, () => {
  console.log(props.quizData)
})

</script>
<template v-bind="$attrs">
  <FormKit type="form" :value="quizData" v-if="quizData" :actions="false" class="title">
    <div class="title-wrapper">
    <FormKit autofocus placeholder="Quiz title" type="text" style="text-align: center" name="title" class="title" :inner-class="{
      'inner-styling': true
    }"

    />
    </div>

    <div class="form-content">
      <div class="fields card">
        <span class="roboto-medium" style="font-size: 15px; margin-bottom: 1rem">Basic info</span>
        <FormKit type="text" placeholder="Description" :wrapper-class="{
          'full-width': true
        }" :inner-class="{
          'normal-shadow': true
        }" />
        <DropdownComponent placeholder="Search for categories" :options="labels" v-model="selected" style="width: 100%" />
      </div>
      <ContributorsCard :users="[quizData.owner]" />
    </div>
    <div class="card questions">
      <span class="section-title roboto-medium">Questions</span>
      <DividerLine />
    </div>
  </FormKit>
</template>
<style scoped>
.form-content {
  display: flex;
  gap: 1rem;
}

.section-title {
  font-size: 2rem;
  color: var(--secondary-bg-text)
}

.title-wrapper {
  width: fit-content;
  margin: auto;
}

.card {
  border-radius: .5rem;
  background: var(--default-bg);
  border: 2px solid var(--secondary-bg);
  padding: 1rem;
  box-sizing: border-box;
}

.fields {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.questions {
  width: 100%;
  margin-top: 1rem;
}


</style>
<style>

  .full-width {
    width: 100%;
    max-width: unset !important;
  }
  .inner-styling {
    box-shadow: none !important;
    border-width: 0 0 2px;
    border-radius: 0 !important;
    border-color: var(--secondary-bg);
    border-style: solid;
    font-size: 3rem;
    padding: 0;
  }

  .normal-shadow {
    border-color: var(--secondary-bg) !important;
  }

  .inner-styling input {
    padding: .5rem 0;
    color: var(--default-bg-text);
  }

  .inner-styling.small {
    font-size: 1rem;
  }

  @media screen and (max-width: 1000px) {
    .form-content {
      flex-direction: column;
    }
  }

</style>