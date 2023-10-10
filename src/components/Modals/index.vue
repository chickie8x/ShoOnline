<template>
  <div
    class="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-30 flex items-center justify-center"
  >
    <div class="w-[400px] h-[300px] bg-white rounded-md"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegModal',
  props: {
    modalType: {
      require: true,
      type: String,
      default: () => 'login'
    }
  }
}
</script>
