<template>
  <div class="w-full">
    <div
      class="w-full flex items-center justify-center bg-white bg-opacity-40 font-YoungSerif text-orange-800 divide-x divide-orange-500 rounded-md backdrop-blur-md"
    >
      <button class="outline-none px-4 py-2 w-1/2">Login</button>
      <button class="outline-none px-4 py-2 w-1/2">Register</button>
    </div>
    <div
      class="w-full h-24 bg-white bg-opacity-40 rounded-md mt-2 flex justify-center items-center font-EvilEmpire text-2xl text-orange-800 backdrop-blur-md"
    >
      <router-link to="/download" class="flex items-center">
        <img src="@/assets/icons/download-icon.svg" alt="" class="w-12 h-12 mr-2" />
        Download</router-link
      >
    </div>
    <div
      class="bg-white bg-opacity-40 rounded-md p-4 mt-2 font-EvilEmpire text-orange-800 text-2xl flex items-center justify-center backdrop-blur-md"
    >
      <router-link to="/" class="flex items-center justify-center">
        <img src="@/assets/icons/dollar.svg" alt="" class="w-12 h-12 mr-2" />Coin
        Purchase</router-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>
