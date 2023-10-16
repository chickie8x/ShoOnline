<template>
  <div class="w-full">
    <div>
    <div v-if="!currUser.value" class="w-full h-12 flex items-center justify-center bg-white bg-opacity-40 font-YoungSerif text-orange-800 divide-x divide-orange-500 rounded-md backdrop-blur-md">
      <router-link to="/login" class="flex items-center justify-center w-1/2 h-full">Login</router-link>
      <router-link to="/signup" class="flex items-center justify-center w-1/2 h-full">Sign Up</router-link>
    </div>
    <div v-else class="flex flex-col items-start bg-white bg-opacity-40 p-4 rounded-md">
      <div class="flex justify-start text-orange-800">
        <img src="@/assets/icons/user.svg" alt="" class="w-6 h-6 mr-2">
        <span>{{ currUser.value?currUser.value.email:'' }}</span>
      </div>
      <div class="flex justify-end w-full">
        <button @click="doLogout" class="text-sm text-red-700 hover:underline duration-200">Sign Out</button>
      </div>
    </div>
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

    <div class="bg-white bg-opacity-40 rounded-md p-4 mt-2 font-EvilEmpire text-orange-800 text-2xl flex flex-col items-center justify-center backdrop-blur-md">
      <span>Channels</span>
      <div class="flex justify-center space-x-8 mt-2">
        <a href=""><img src="@/assets/icons/fb-icon.svg" alt="" class="w-8 h-8"></a>
        <a href=""><img src="@/assets/icons/youtube.svg" alt="" class="w-8 h-8"></a>
        <a href=""><img src="@/assets/icons/discord.svg" alt="" class="w-8 h-8"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { user, logout } from '@/firebase'
import { computed } from 'vue'


export default {
  name: 'SideBarLeft',

  setup() {
    const currUser = computed(() => {
      return user
    })

    const doLogout = () => {
      logout()
    }

    return {
      currUser,
      doLogout
    }
  }
}
</script>
