<script setup lang="ts">

import PageWrapper from '@/components/layout/PageWrapper.vue'
import DiscoverHero from '@/components/layout/DiscoverHero.vue'
import DividerLine from '@/components/layout/DividerLine.vue'
import { useQuizzes } from '@/stores/quizzes.ts'

const { get, data, error } = useQuizzes();
get({});

</script>
<template>
  <PageWrapper>
    <div class="content">
      <DiscoverHero style="margin-bottom: 2rem;"/>
      <div id="quizzes">
        <div class="title">
          <h2 class="roboto-medium section-title" style="text-transform: capitalize;">Curated quizzes</h2>
          <p v-for="(item, number) in data" :key="number">{{item.title}}</p>
          <DividerLine />
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