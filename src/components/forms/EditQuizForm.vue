<script setup lang="ts">
import type { CategoryDto, QuizDetailsDto } from '@/lib/api'
import { computed, ref, watch } from 'vue'
import DropdownComponent, { type OptionType } from '@/components/input/TagSelector.vue'
import ContributorsCard from '@/components/data/ContributorsCard.vue'
import CardComponent from '@/components/data/CardComponent.vue'
import QuizQuestionsForm from '@/components/forms/QuizQuestionsForm.vue'
import { useEditor } from '@/stores/quizEdit.ts'
import { useCategories } from '@/stores/categories.ts'

const props = defineProps<{
  quizData?: QuizDetailsDto
}>()

const quiz = useEditor();

const setTitle = (title: string) => {
  if (!quiz.data) return;
  quiz.data.title = title;
}

const emit = defineEmits(['submit']);

const setDescription = (desc: string) => {
  if (!quiz.data) return;
  quiz.data.description = desc;
}


const defaultCategories = computed(() => {
  const array: OptionType[] = [];
  quiz.data?.categories?.forEach(e => {
    array.push({
      label: e.categoryName ?? '',
      value: e.categoryName ?? ''
    })
  })

  return array;
})

const selectedCategories = ref<OptionType[]>(defaultCategories.value)

watch(props, () => {
  console.log(props.quizData)
})

const updateCategories = (data: OptionType[]) => {
  selectedCategories.value = data;
  if (!quiz.data) return;
  const objs: CategoryDto[] = [];
  selectedCategories.value.forEach(cat => {
    objs.push({
      categoryName: cat.value,
      quizzes: undefined
    })
  })

  quiz.setPartial({
    categories: objs
  })
}

const categories = useCategories();
const allCategories = computed(() => {
  const array: OptionType[] = [];
  categories.data.forEach(cat => {
    array.push({
      label: cat.categoryName ?? '',
      value: cat.categoryName ?? ''
    })
  })
  return array;
})


</script>
<template v-bind="$attrs">
    <div class="title-wrapper">
    <FormKit autofocus placeholder="Quiz title" type="text" style="text-align: center" name="title" class="title" :inner-class="{
      'inner-styling': true
    }" @change.prevent="(e: InputEvent) => setTitle((e.currentTarget as HTMLInputElement).value)" validation="required"/>
    </div>

    <div class="form-content">
      <CardComponent class="fields">
        <span class="roboto-medium" style="font-size: 15px; margin-bottom: 1rem">Basic info</span>
        <FormKit type="text" placeholder="Description" :wrapper-class="{
            'full-width': true
          }" :inner-class="{
            'normal-shadow': true
          }"
          @change.prevent="(e: InputEvent) => setDescription((e.currentTarget as HTMLInputElement).value)"
          :value="quizData?.description"
           validation="required"
          name="description"
        />
        <DropdownComponent placeholder="Search for categories" :default-values="defaultCategories" :options="allCategories" style="width: 100%" @change="updateCategories"/>
      </CardComponent>
      <ContributorsCard :users="[quizData?.owner]" />
    </div>
    <div class="card questions">
      <span class="section-title roboto-medium">Questions</span>
      <QuizQuestionsForm />
    </div>
</template>
<style scoped>
.form-content {
  display: flex;
  gap: 1rem;
}

.section-title {
  font-size: 2rem;
  margin: 0;
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