<script setup lang="ts">
import QuizzerLogo from '@/components/icons/QuizzerLogo.vue'
import NavigationButton from '@/components/navigation/NavigationButton.vue'
import UserSection from '@/components/navigation/UserSection.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import SideBar from '@/components/navigation/SideBar.vue'
import { Menu, Plus } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import useScroll from '@/lib/utils/useScroll.ts'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/router'

const sidebarOpen = ref(false);

const router = useRouter();

export interface RouteButton {
  label: string,
  path: string,
}

const scroll = useScroll();

const hideBorder = computed(() => {
  return !(scroll.y.value > 0);
})

defineProps<{
  currentRoute: string,
  routeButtons?: RouteButton[]
}>()


const createQuiz = () => {
  router.push('/' + ROUTES.QUIZ_CREATE.path);
}

</script>
<template>
  <SideBar @close="() => sidebarOpen = false" :open="sidebarOpen" @close-trigger="() => sidebarOpen = !sidebarOpen" :route-buttons="routeButtons" :current-route="currentRoute"/>
  <div id="wrapper" :class="{hideBorder: hideBorder}">
    <!-- Below is the header designated for small devices -->
    <div class="mobile-header">
      <ButtonComponent variant="ghost" size="icon" style="flex: 0" @click="() => sidebarOpen = !sidebarOpen"><Menu /></ButtonComponent>
      <RouterLink :to="`/${ROUTES.DISCOVER.path}`">
        <QuizzerLogo class="logo"/>
      </RouterLink>
    </div>

    <!-- Below is the usual desktop header -->
    <div class="header-content">
      <RouterLink :to="`/${ROUTES.DISCOVER.path}`" style="height: 60%;">
        <QuizzerLogo style="height: 100%; width: auto;" />
      </RouterLink>
      <div class="buttons">
        <template v-for="(button, number) in routeButtons" :key="number">
          <RouterLink :to="button.path" class="link">
            <NavigationButton :selected="currentRoute === button.path">{{ button.label }}</NavigationButton>
          </RouterLink>
        </template>
      </div>
      <div class="user-section">
        <ButtonComponent title="Create quiz" size="small" @click="createQuiz">Create quiz</ButtonComponent>
        <UserSection />
      </div>
    </div>
  </div>
</template>
<style scoped>


#wrapper {
  gap: 1.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background: color-mix(in srgb, var(--default-bg) 80%, transparent);
  backdrop-filter: blur(10px);
  border: 0px solid #ccc;
  border-bottom-width: 1px;
  box-sizing: border-box;
  z-index: 100;
  transition: border-bottom-width 150ms ease-in-out;
}

.hideBorder {
  border-bottom-width: 0 !important;
}

.header-content {
  display: flex;
  width: 100%;
  gap: 1.5rem;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.buttons {
  display: flex;
  align-items: end;
  height: 100%;
  flex: 1;
}

.user-section {
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 0;
  align-items: center;
  justify-content: center;
}
.link {
  text-decoration: unset;
  color: unset;
  font: unset;
  height: 100%;
}

.mobile-header {
  display: none;
  height: 100%;
  align-items: center;
  justify-content: start;
  width: 100%;
  position: relative;
}

.mobile-header .logo {
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
}

@media screen and (max-width: 1000px) {
  .header-content {
    display: none;
  }

  .mobile-header {
    display: flex;
  }

  #wrapper {
    height: 5rem;
  }
}


</style>
