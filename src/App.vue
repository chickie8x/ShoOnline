<template>
  <div class="main-wrapper">
    <div>
      <NavBar />
    </div>
    <RouterView />
    <div class="fixed bottom-4 right-0">
      <FloatingSocialChannel class="opacity-80" />
    </div>
    <div class="text-center text-white text-sm text-opacity-80">
      <span class="block my-2">Sho Online Revive 2023</span>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/index.vue'
import FloatingSocialChannel from '@/components/FloatingSocialChannel/index.vue'
export default {
  components: {
    NavBar,
    FloatingSocialChannel
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
