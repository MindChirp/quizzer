<script setup lang="ts">

import type { QuizDto } from '@/lib/api'
import TagComponent from '@/components/data/TagComponent.vue'

const props = defineProps<{
  quiz: QuizDto
}>();

</script>
<template>
  <div class="card" v-bind="$attrs">
    <div class="bar" />
    <div class="text">
      <span class="title roboto-medium">{{quiz.title}}</span>
      <span class="description roboto-light">{{quiz.description}}</span>
      <div class="labels">
        <TagComponent>Geography</TagComponent>
        <TagComponent>Politics</TagComponent>
      </div>
    </div>
    <div class="background">
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
  border: solid 2px var(--secondary-bg);
  overflow: hidden;
  flex-direction: row;
  position: relative;
  transition: all 150ms ease-in-out;
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
    background-image: url("/mountain-landscape-2031539_1280.jpg");
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
  gap: 1rem;
  margin-top: .5rem;
}

.title {

}

.description {
  max-width: 60%;
}

</style>