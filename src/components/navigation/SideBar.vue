<script setup lang="ts">

import type { RouteButton } from '@/components/navigation/NavigationHeader.vue'
import { X } from 'lucide-vue-next'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import SidebarButton from '@/components/navigation/SidebarButton.vue'


const props = withDefaults(defineProps<{
  open?: boolean,
  routeButtons?: RouteButton[],
  currentRoute: string
}>(), {
  open: false
})
</script>
<template>
  <div class="sidebar" :class="{open: open}">
    <div class="header">
      <ButtonComponent size="icon" variant="ghost" style="flex: 0" @click="$emit('closeTrigger')"><X /></ButtonComponent>
    </div>
    <div class="actions">
      <template v-for="(button, number) in routeButtons" :key="number">
        <RouterLink :to="button.path">
          <SidebarButton :selected="currentRoute === button.path">{{button.label}}</SidebarButton>
        </RouterLink>
      </template>
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
  border: 0px solid #9e9e9e;
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
}
</style>