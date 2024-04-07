import { onUnmounted, ref } from 'vue'

export default () => {
  const scrollX = ref(0);
  const scrollY = ref(0);
  const scrollListener = () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  }

  // Call to set initial position
  scrollListener();

  window.addEventListener("scroll", scrollListener);

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListener)
  })
  return {
    x: scrollX,
    y: scrollY
  }
}