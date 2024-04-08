<script setup lang="ts">
import { type UserDto } from '@/lib/api'
import ProfilePicture from '@/components/icons/ProfilePicture.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'
import { Plus, X } from 'lucide-vue-next'
import ModalComponent from '@/components/data/ModalComponent.vue'
import ModalHeader from '@/components/data/ModalHeader.vue'
import ModalTitle from '@/components/data/ModalTitle.vue'
import ModalDescription from '@/components/data/ModalDescription.vue'
import ModalBody from '@/components/data/ModalBody.vue'
import { computed, ref, watch } from 'vue'
import { useUsers } from '@/stores/user.ts'

const props = defineProps<{
  users: UserDto[]
}>();

const open = ref(false);
const search = ref('');

const userSearch = useUsers();
userSearch.get({
  search: ''
})

const emit = defineEmits(['change']);

watch(search, () => {
  userSearch.get({
    search: search.value
  })
})

const addUserAsCollaborator = (user: UserDto) => {
  open.value = false;
  if (!props.users) {
    emit('change', [user]);
    return;
  }

  emit('change', [...props.users, user]);
}

const removeUserAsCollaborator = (user: UserDto) => {
  const arr = props.users.filter(e => e.username != user.username)
  emit('change', arr);
}

const filteredSearchData = computed(() => {
  return userSearch.data?.filter(e => {
    return !props.users?.find(n => n.username == e.username);
  })
})

</script>
<template>
  <ModalComponent :open="open" @close-trigger="() => open = false">
    <ModalHeader>
      <ModalTitle>Add collaborator</ModalTitle>
      <ModalDescription>The people you add have full editing access</ModalDescription>
    </ModalHeader>
    <ModalBody>
      <FormKit type="text" v-model="search"/>
      <div class="results">
        <button class="user-result" v-for="(user, n) in filteredSearchData" :key="n" @click.prevent="() => addUserAsCollaborator(user)">
          <ProfilePicture :full-name="user.fullName" disable-hover />
          <span class="roboto-medium" style="width: 100%; text-align: left">{{ user.fullName }}</span>
          <Plus style="color: var(--primary-fg);"/>
        </button>
      </div>
    </ModalBody>
  </ModalComponent>

  <div class="wrapper-card">
    <span class="roboto-medium title">Contributors</span>
    <div class="list">
      <div class="user-item" v-for="(user, number) in users" :key="number">
        <ProfilePicture :full-name="user?.fullName" disable-hover/>
        <span style="width: 100%">@{{user?.username}}</span>
        <ButtonComponent variant="ghost" size="icon" title="Remove contributor" @click.prevent="() => removeUserAsCollaborator(user)"><X style="height: 1rem" /></ButtonComponent>
      </div>
      <span v-if="users?.length == 0" style="color: var(--secondary-bg-text)" class="roboto-light">Get started by adding a contributor</span>
    </div>
    <ButtonComponent variant="primary" style="margin-top: .5rem; width: 100%;" @click.prevent="() => open = true"><Plus style="height: 1rem" /> Add contributor</ButtonComponent>
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

.results {
  display: flex;
  gap: .5rem;
  width: 100%;
  flex-direction: column;
}

.user-result {
  display: flex;
  gap: .5rem;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: .5rem;
  border-radius: .25rem;
}

.user-result:hover {
  background: var(--secondary-bg);
}

</style>