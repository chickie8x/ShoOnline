<template>
    <div class="h-full flex justify-center items-center">
        <div class="w-1/4 bg-white bg-opacity-40 rounded-md backdrop-blur-md p-6">
            <span class="font-EvilEmpire text-orange-800 text-xl text-center block">sign up an account</span>
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
                <span class="text-sm font-YoungSerif mt-4 block text-orange-900">Confirm password: </span>
                <div class="flex items-center border border-orange-800 border-opacity-70 px-2 py-1 rounded-full bg-white bg-opacity-50 text-orange-900">
                    <img src="src/assets/icons/password.svg" alt="" class="w-4 h-4 mr-2">
                    <input type="password" class="border-none bg-transparent outline-none">
                </div>
                <div class="flex items-center justify-center mt-2">
                    <span class="block w-2 h-2 bg-orange-800 rounded-full mr-2"></span>
                    <span class="text-xs text-orange-900">Password length must be 8 character minimum</span>
                </div>
                
                <div class="mt-20">
                    <button class="border-none bg-orange-800 text-white w-full rounded-full py-2 font-YoungSerif hover:bg-orange-900 duration-300">Sign Up</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    name: "SignUp"
}
</script>

