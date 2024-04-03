<script setup lang="ts">
import QuizzerLogo from '@/components/icons/QuizzerLogo.vue'
import NavigationButton from '@/components/navigation/NavigationButton.vue'
import UserSection from '@/components/navigation/UserSection.vue'
import ButtonComponent from '@/components/input/ButtonComponent.vue'

</script>
<template>
  <div id="wrapper">
    <QuizzerLogo style="max-height: 100%; height: 60%; width: auto;" />
    <div class="buttons">
      <NavigationButton selected>Discover</NavigationButton>
      <NavigationButton>About</NavigationButton>
    </div>
    <div class="user-section">
      <ButtonComponent variant="ghost">Logg ut</ButtonComponent>
      <UserSection />
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
  background: white;
  border: 0px solid #ccc;
  border-bottom-width: 1px;
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
</style>
