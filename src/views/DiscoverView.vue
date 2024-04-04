<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import DiscoverHero from '@/components/layout/DiscoverHero.vue'
import DividerLine from '@/components/layout/DividerLine.vue'
import { useQuizzes } from '@/stores/quizzes.ts'
import { computed, onMounted } from 'vue'
import QuizCard from '@/components/data/QuizCard.vue'

const { get, data, error } = useQuizzes();

onMounted(() => get({}))

</script>
<template>
  <PageWrapper>
    <div class="content">
      <DiscoverHero style="margin-bottom: 2rem;"/>
      <div id="quizzes">
        <div class="title">
          <h2 class="roboto-medium section-title" style="text-transform: capitalize;">Curated quizzes</h2>
          <DividerLine />
          <div class="grid">
            <QuizCard v-for="(item, number) in data" :key="number" :quiz="item" />
          </div>
        </div>

      </div>
    </div>
  </PageWrapper>
</template>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.grid {
  display: grid;
  gap: 1rem;
  padding: 1rem 0;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
}

#quizzes {
  width: 100%;
  height: fit-content;
  display: flex;
  font-weight: lighter;
  color: var(--default-bg-text)
}

#quizzes .title {
  width: 100%;
}

#quizzes .title .section-title {
  font-size: 2rem;
  color: #2c3e50;
}

</style>