<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
const router = useRouter();

const redirect = () => {
  window.open("mailto:support@support.com");
}
</script>
<template>
<button class="button" title="contact support" @click="redirect"><MessageCircle /></button>
</template>
<style scoped>
.button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background: var(--primary-bg);
  color: var(--primary-bg-text);
  border: none;
  border-radius: .5rem;
  cursor: pointer;
}
</style>