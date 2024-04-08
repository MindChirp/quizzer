<script setup lang="ts">

import type { RouteButton } from '@/components/navigation/NavigationHeader.vue'
import { X } from 'lucide-vue-next'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import SidebarButton from '@/components/navigation/SidebarButton.vue'
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import type { UserDto } from '@/lib/api'
import { useUser } from '@/stores/user.ts'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router'


withDefaults(defineProps<{
  open?: boolean,
  routeButtons?: RouteButton[],
  currentRoute: string,
}>(), {
  open: false
})

const emit = defineEmits(['close']);

const router = useRouter();

const user = useUser();

const createQuiz = () => {
  emit('close');
  router.push(`/${ROUTES.QUIZ_CREATE.path}`);
}

const showProfile = () => {
  emit('close');
  router.push(`/${ROUTES.PROFILE.path}`)
}

</script>
<template>
  <div class="sidebar shadow-5" :class="{open: open}">
    <div class="header">
      <ButtonComponent size="icon" variant="ghost" style="flex: 0" @click="$emit('closeTrigger')"><X style="color: var(--default-bg-text)"/></ButtonComponent>
    </div>
    <div class="actions">
      <template v-for="(button, number) in routeButtons" :key="number">
        <RouterLink :to="button.path">
          <SidebarButton :selected="currentRoute === button.path">{{button.label}}</SidebarButton>
        </RouterLink>
      </template>
    </div>

    <div class="bottom-info">
      <ButtonComponent style="width: 100%;" @click="createQuiz">Create quiz</ButtonComponent>
      <button class="profile" @click="showProfile">
        <ProfilePicture :full-name="user?.data?.fullName" style="font-size: 1.5rem"/>
        <span class="roboto-medium username">{{user?.data?.fullName}}</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 80%;
  background: white;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  border: 0px solid var(--secondary-bg);
  border-right-width: 1px;
  z-index: 110;
  display: flex;
  flex-direction: column;
  transition: transform 250ms ease-in-out;
}

.sidebar * {
  box-sizing: border-box;
}

.sidebar:not(.open) {
  transform: translate(-100%);
}

.sidebar.open {
  transform: translate(0);
}

.sidebar .header {
  height: fit-content;
  display: flex;
  width: 100%;
  align-items: center;
  place-content: end;
  padding: 1rem;

}

.actions {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.bottom-info {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.bottom-info .profile {
  padding: .5rem;
  background: var(--secondary-bg);
  border-radius: .25rem;
  display: flex;
  gap: .5rem;
  justify-content: center;
  align-items: center;
  border: none;
}

.bottom-info .profile .username {
  color: var(--secondary-bg-text)
}

</style>