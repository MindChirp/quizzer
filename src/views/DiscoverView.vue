<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import DiscoverHero from '@/components/layout/DiscoverHero.vue'
import DividerLine from '@/components/layout/DividerLine.vue'
import { useQuizzes } from '@/stores/quizzes.ts'
import QuizCard from '@/components/data/QuizCard.vue'
import { FormKit } from '@formkit/vue'
import { Search } from "lucide-vue-next"
const quizzes = useQuizzes();

</script>
<template>
  <PageWrapper>
    <div class="content">
      <DiscoverHero style="margin-bottom: 2rem;"/>

      <div id="quizzes">
        <div class="title">
          <h2 class="roboto-medium section-title" style="text-transform: capitalize;">Curated quizzes</h2>
          <div class="filters">
            <FormKit type="text" suffix-icon="search" placeholder="Look for anything ✨" />
          </div>
        </div>
        <DividerLine />
        <div class="grid">
          <QuizCard v-for="(item, number) in quizzes.data" :key="number" :quiz="item" />
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

.filters {
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;
}

.filters .icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translate(0, -50%);
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
  color: var(--default-bg-text);
  flex-direction: column;
}

#quizzes .title {
  width: 100%;
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding: 0.5rem 0;
}

#quizzes .title .section-title {
  font-size: 2rem;
  color: #2c3e50;
  margin: 0;
}

</style>