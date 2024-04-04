<script setup lang="ts">
import { computed } from 'vue'
import { stringToColor } from '@/lib/utils/colors.ts'

const props = withDefaults(defineProps<{
  fullName?: string,
  numberOfInitials?: string,
}>(), {
  fullName: '',
  numberOfInitials: '2',
})

const initials = computed(() => {
  const name = props.fullName;
  return name.split(" ")
    .slice(0, parseInt(props.numberOfInitials))
    .map((name) => name[0])
    .join('')
    .toUpperCase()
})

const colors = computed(() => {
  const color = stringToColor(props.fullName, '1');
  const border = stringToColor(props.fullName, '0.5');
  console.log(border)
  return {backgroundColor: `background-color: ${color}`, borderBackground: `background-color: ${border}`}
})

</script>
<template>
  <div class="wrapper">
  <div class="border" :style="colors.borderBackground"/>
  <div class="profile-picture" :style="[colors.backgroundColor]">
    <!-- User initials -->
      <span class="initials roboto-bold">{{initials}}</span>
  </div>
  </div>
</template>
<style scoped>

.wrapper {
  height: fit-content;
  width: fit-content;
  position: relative;
}

.border {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
  z-index: 0;
  transition: transform 300ms cubic-bezier(.17,.67,.36,1.41);

}

.wrapper:has(.profile-picture:hover) .border {
  transform: translate(-50%,-50%) scale(1.5);
}

.profile-picture {
  width: 2rem;
  height: 2rem;
  background: #aaa;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  place-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
}

.profile-picture:hover {

}

.initials {
  color: white;
}
</style>