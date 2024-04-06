<script setup lang="ts">
import type { UserDto } from '@/lib/api'
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { X, Plus } from 'lucide-vue-next'

defineProps<{
  users: UserDto[]
}>()
</script>
<template>
  <div class="wrapper-card">
    <span class="roboto-medium title">Contributors</span>
    <div class="list">
      <div class="user-item" v-for="(user, number) in users" :key="number">
        <ProfilePicture :full-name="user.fullName" />
        <span style="width: 100%">@{{user.username}}</span>
        <ButtonComponent variant="ghost" size="icon" title="Remove contributor" @click.prevent><X style="height: 1rem" /></ButtonComponent>
      </div>
    </div>
    <ButtonComponent variant="primary" style="gap: .5rem; margin-top: .5rem; width: 100%;" @click.prevent><Plus style="height: 1rem" /> Add contributor</ButtonComponent>
  </div>
</template>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  height: 100%;
}

.title {
  font-size: 15px;
}

.wrapper-card {
  background: var(--default-bg);
  border: 2px solid var(--secondary-bg);
  border-radius: .5rem;
  display: flex;
  gap: .5rem;
  flex-direction: column;
  padding: 1rem;
  min-width: 10rem;
}

.user-item {
  display: flex;
  gap: .5rem;
  align-items: center;
}
</style>