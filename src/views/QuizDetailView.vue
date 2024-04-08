<script setup lang="ts">
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { useQuiz } from '@/stores/quizzes.ts'
import { useRoute, useRouter } from 'vue-router'
import QuizHero from '@/components/data/QuizHero.vue'
import DividerLine from '@/components/layout/DividerLine.vue'
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import { computed } from 'vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import toaster from '@/stores/toaster.ts'
import { Edit, Play } from 'lucide-vue-next'
import TagComponent from '@/components/data/TagComponent.vue'
import { getUserId } from '@/lib/utils/user.ts'
import { ROUTES } from '@/router'

const route = useRoute();
const quizId = route.params[ROUTES.QUIZ_DETAIL.param] as string
const router = useRouter();

const quiz = useQuiz();
quiz.get({
  quizId
})

const owner = computed(() => {
  return quiz.data?.owner;
})

const tags = computed(() => {
  const arr: {tagname: string}[] = [];
  quiz.data?.categories?.forEach(e => {
    arr.push({
      tagname: e.categoryName ?? ''
    })
  })
  return arr;
})

const modifiedTagList = computed(() => {
  return tags.value.length > 2 ? [ ...tags.value.slice(0, 2), { tagname: `+${tags.value.length-2}` } ] : tags.value;
})

const editQuiz = () => {
  router.push(`/${ROUTES.QUIZ_EDIT.path}/${quizId}`);
}

const playQuiz = () => {
  router.push(`/${ROUTES.QUIZ_PLAY.path}/${quizId}`)
}

const displayEditButton = computed(() => {
  const isOwner = owner.value?.username === getUserId();
  const isCollaborator = quiz.data?.collaborators?.find(e => e.username === getUserId());

  return isOwner || isCollaborator;
})

const toast = toaster();
</script>
<template>
  <PageWrapper>
    <h1 v-if="quiz.error">{{quiz.error?.message}}</h1>
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
        <span>{{ quiz.data?.questions?.length }} {{ quiz.data?.questions?.length != 1 ? 'Questions' : 'Question' }}</span>
        <div class="tags">
          <TagComponent v-for="(tag, number) in modifiedTagList" :key="number" style="text-transform: capitalize">{{tag.tagname}}</TagComponent>
          <TagComponent v-if="modifiedTagList.length === 0" style="text-transform: capitalize">No tags</TagComponent>
        </div>
      </div>
      <ButtonComponent size="large" class="play-button shadow-5" @click="playQuiz"><Play fill="white"/></ButtonComponent>
      <ButtonComponent v-if="displayEditButton" size="large" variant="secondary" class="edit-button" @click="editQuiz"><Edit style="height: 1rem"/> Edit quiz</ButtonComponent>
    </div>
  </PageWrapper>
</template>
<style scoped>
.content {
  color: var(--default-bg-text);
  margin-top: 15rem;
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

.edit-button {
  width: 50%;
  margin: 1rem auto 0;
}

@media screen and (max-width: 1000px) {
  .play-button, .edit-button {
    width: 100%;
  }
}
</style>