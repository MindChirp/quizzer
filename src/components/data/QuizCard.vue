<script setup lang="ts">

import type { QuizGeneralDto } from '@/lib/api'
import TagComponent from '@/components/data/TagComponent.vue'

defineProps<{
  quiz: QuizGeneralDto
}>();


</script>
<template>
  <div class="card" v-bind="$attrs">
    <div class="bar" />
    <div class="text">
      <span class="title roboto-medium">{{quiz.title}}</span>
      <span class="description roboto-light">{{quiz.description}}</span>
      <span>{{quiz.amountOfQuestions}} {{ quiz.amountOfQuestions != 1 ? 'Questions' : 'Question' }}</span>
      <div class="labels">
        <TagComponent v-for="(tag, n) in quiz.categories" :key="n">{{tag.categoryName}}</TagComponent>
      </div>
    </div>
    <div class="background" :style="`background-image: url('${quiz.imageLink}');`">
      <div class="default-gradient gradient" />
      <div class="hover-gradient gradient" />
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  background: var(--default-bg);
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  flex-direction: row;
  position: relative;
  transition: all 150ms ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.text {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 1;
}

.bar {
  width: 1.5rem;
  height: 100%;
  background: var(--primary-bg);
}

.background {
  & {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    z-index: 0;
  }

  & .gradient {
    height: 100%;
    width: 100%;
    z-index: 10;
    transition: opacity 150ms ease-in-out;
    position: absolute;
  }

  & .default-gradient {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, var(--default-bg) 10%, color-mix(in srgb, var(--default-bg) 90%, transparent) 40%, rgba(255,255,255,0.5) 100%);
  }

  & .hover-gradient {
    opacity: 0;
    background: var(--secondary-bg);
    background: linear-gradient(90deg, var(--secondary-bg) 0%,  color-mix(in srgb, var(--secondary-bg) 0%, transparent) 100%);
  }

}

.card:hover {
    background: var(--secondary-bg);
}

.card:hover .hover-gradient {
  opacity: 1;
}

.labels {
  display: flex;
  gap: .5rem;
  margin-top: .5rem;
}

.description {
  max-width: 60%;
}

</style>