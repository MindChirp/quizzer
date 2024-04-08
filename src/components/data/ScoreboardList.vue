<script setup lang="ts">
import type { SavedQuizAttemptDto } from '@/lib/api'
import { TrophyIcon, CheckIcon, TimerIcon } from 'lucide-vue-next'
import { scoreFormula } from '../../lib/utils/score.ts'

defineProps<{
  scores: SavedQuizAttemptDto[]
}>();
</script>
<template>
  <div class="scoreboard" v-bind="$attrs">
    <div class="row" v-for="(score, n) in scores" :key="n">
      <span><TrophyIcon style="height: 1rem"/>{{scoreFormula(score.score ?? 0, score.duration ?? 0)}}</span>
      <span><CheckIcon style="height: 1rem"/>{{score.score}}</span>
      <span><TimerIcon style="height: 1rem"/>{{score.duration}}</span>
    </div>
  </div>
</template>
<style scoped>
.scoreboard {
  height: fit-content;
  width: 50%;
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 100vw;
  border: solid 2px var(--secondary-bg);
  border-radius: .25rem;
  padding: 1rem;
  box-sizing: border-box;
}

.scoreboard .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
  gap: 1rem;
}

.scoreboard .row:nth-child(odd) {
  background: var(--secondary-bg);
  border-radius: .25rem;
}

.scoreboard .row span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1000px) {
  .scoreboard {
    width: 100%;
  }
}


</style>