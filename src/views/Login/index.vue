<template>
    <div class="h-full flex justify-center items-center">
        <div class="w-1/4 bg-white bg-opacity-40 rounded-md backdrop-blur-md p-6">
            <span class="font-EvilEmpire text-orange-800 text-xl text-center block">login</span>
            <div>
                <span class="text-sm font-YoungSerif mt-4 block text-orange-900">Email:</span>
                <div class="flex items-center border border-orange-800 border-opacity-70 px-2 py-1 rounded-full bg-white bg-opacity-50 text-orange-900">
                    <img src="src/assets/icons/user.svg" alt="" class="w-4 h-4 mr-2">
                    <input type="email" class="border-none bg-transparent outline-none">
                </div>
                <span class="text-sm font-YoungSerif mt-4 block text-orange-900">Password: </span>
                <div class="flex items-center border border-orange-800 border-opacity-70 px-2 py-1 rounded-full bg-white bg-opacity-50 text-orange-900">
                    <img src="src/assets/icons/password.svg" alt="" class="w-4 h-4 mr-2">
                    <input type="password" class="border-none bg-transparent outline-none">
                </div>
                <div class="flex items-center justify-end text-sm text-orange-900 mt-2 font-YoungSerif">
                    <input type="checkbox" class="mr-1 text-orange-900 scale-125 border !border-orange-900">
                    <span>Remember me</span>
                </div>
                <div class="mt-4">
                    <button class="border-none bg-orange-800 text-white w-full rounded-full py-2 font-YoungSerif hover:bg-orange-900 duration-300">Login</button>
                </div>

                <div class="flex items-center justify-center mt-4 text-sm align-bottom">
                    <span class="text-white text-opacity-80">Do not have an account ? <a href="" class="text-orange-800 font-YoungSerif hover:text-orange-900 duration-300">Sign up now</a></span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    name: "LoginView"
}
</script>

