<template>
  <div class="main-wrapper">
    <div>
      <NavBar />
    </div>
    <RouterView />
    <div class="fixed bottom-4 right-0">
      <FloatingSocialChannel />
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
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}
</style>
