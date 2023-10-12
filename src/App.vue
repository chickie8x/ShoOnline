<template>
  <div class="main-wrapper">
    <div class="h-12">
      <NavBar />
    </div>
    <div class="h-[calc(100%-88px)]">
      <RouterView />
    </div>
    <div
      class="flex h-10 items-center justify-center text-center text-white text-sm text-opacity-80"
    >
      <span class="flex items-center h-10">Sho Online Revive 2023</span>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
export default {
  components: {
    NavBar,
  }
}
</script>

<style scoped>
.main-wrapper {
  background-image: url('./assets/images/background.png');
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
</style>
