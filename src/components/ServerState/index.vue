<template>
  <div
    class="text-white text-opacity-80 bg-white bg-opacity-20 backdrop-blur-md rounded-md w-full p-4"
  >
    <span class="block mb-2 text-xl font-YoungSerif">Server state</span>
    <div class="flex items-center space-x-2 text-sm">
      <span class="block w-3 h-3 bg-green-500 rounded-full"></span>
      <span>Server is online</span>
    </div>
    <div>
      <span class="text-sm"
        >War Time : <span class="font-bold text-orange-200">23:36:02 (GMT+7)</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerState'
}
</script>
