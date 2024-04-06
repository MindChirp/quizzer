<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import { useRoute } from 'vue-router'
import QuizHero from '@/components/data/QuizHero.vue'
import DividerLine from '@/components/layout/DividerLine.vue'
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import { computed } from 'vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import toaster from '@/stores/toaster.ts'
import { Play } from 'lucide-vue-next'
import TagComponent from '@/components/data/TagComponent.vue'

const route = useRoute();
const quizId = route.params.quizId as string

const quiz = useQuiz();
quiz.get({
  quizId
})

const owner = computed(() => {
  return quiz.data?.owner;
})

const tags: {tagname: string}[] = [
  {
    tagname: "Politics",
  },
  {
    tagname: "War"
  },
  {
    tagname: "Geography"
  },
  {
    tagname: "Animals"
  }
]

const modifiedTagList = computed(() => {
  return tags.length > 2 ? [ ...tags.slice(0, 2), { tagname: `+${tags.length-2}` } ] : tags;
})

const toast = toaster();
</script>
<template>
  <PageWrapper>
    <QuizHero :url="quiz.data?.imageLink as string" />
    <div class="content">
      <h1 class="roboto-bold title">{{ quiz.data?.title }}</h1>
      <span class="roboto-medium description">{{quiz.data?.description}}</span>
      <div class="profile-wrapper">
        <ProfilePicture :full-name="owner?.fullName" style="font-size: 2rem; border-radius: 100%;" class="shadow-5"/>
        <span class="roboto-bold">{{ owner?.fullName }}</span>
      </div>
      <DividerLine style="width: 50%; margin: 1rem auto 0;"/>
      <div class="stats">
        <span>20 Questions</span>
        <span>Different question types</span>
        <div class="tags">
          <TagComponent v-for="(tag, number) in modifiedTagList" :key="number" style="text-transform: capitalize">{{tag.tagname}}</TagComponent>
        </div>
      </div>
      <ButtonComponent size="large" class="play-button shadow-5" @click="() => toast.success({title:'Advarsel', description: 'Du er stygg!! 😁🤣🤣😂😂😂🤪'})"><Play fill="white"/></ButtonComponent>
    </div>
  </PageWrapper>
</template>
<style scoped>
.content {
  color: var(--default-bg-text);
  margin-top: 25rem;
  animation: fade-in 500ms ease-in-out .25s both;
}

.stats {
  margin: 1rem auto 0;
  width: fit-content;
}

.title {
  font-size: 3rem;
  margin: .5rem 0 0 0;
  text-align: center;
  width: 100%;
}

.description {
  text-align: center;
  margin: auto;
  width: fit-content;
  display: block;
  max-width: 500px;
}

.profile-wrapper {
  display: flex;
  place-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

@keyframes fade-in {
  from { opacity: 0 }
  to { opacity: 1 }
}

.play-button {
  padding: .5rem 0;
  width: 50%;
  margin: 2rem auto 0;
  font-size: 1.5rem;
  text-transform: uppercase;
  gap: 1rem;
}

.stats {
  display: flex;
  gap: 1.5rem;
}

.stats > span {
  position: relative;
  text-align: center;
}

.stats > span::after {
  position: absolute;
  height: 2rem;
  width: 2px;
  background: var(--secondary-bg);
  top: 50%;
  transform: translate(0, -50%);
  right: -.75rem;
  content: "";
}

.stats .tags {
  display: flex;
  gap: .5rem;
  align-items: center;
}

.stats .tags > span {
  height: fit-content;
}

@media screen and (max-width: 1000px) {
  .play-button {
    width: 100%;
  }
}
</style>