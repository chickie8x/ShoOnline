<template>
    <div class="h-full flex justify-center items-center">
        <div class="w-[400px] bg-white bg-opacity-40 rounded-md backdrop-blur-md p-6">
            <span class="font-EvilEmpire text-orange-800 text-xl text-center block">login</span>
            <div  v-if="errMes" >
                <div class="flex items-center bg-red-100 p-4">
                    <img src="@/assets/icons/warning.svg" alt="" class="w-6 h-6 mr-2">
                    <span class=" text-red-600 block">{{ errMes }}</span>
                </div>
            </div>
            <div>
                <span class="text-sm font-YoungSerif mt-4 block text-orange-900">Email:</span>
                <div
                    class="flex items-center border border-orange-800 border-opacity-70 px-2 py-1 rounded-full bg-white bg-opacity-50 text-orange-900">
                    <img src="src/assets/icons/user.svg" alt="" class="w-4 h-4 mr-2">
                    <input type="email" v-model="email" class="border-none bg-transparent outline-none w-full">
                </div>
                <span class="text-sm font-YoungSerif mt-4 block text-orange-900">Password: </span>
                <div
                    class="flex items-center border border-orange-800 border-opacity-70 px-2 py-1 rounded-full bg-white bg-opacity-50 text-orange-900">
                    <img src="src/assets/icons/password.svg" alt="" class="w-4 h-4 mr-2">
                    <input type="password" v-model="password" class="border-none bg-transparent outline-none w-full">
                </div>
                <div class="flex items-center justify-end text-sm text-orange-900 mt-2 font-YoungSerif">
                    <input type="checkbox" class="mr-1 text-orange-900 scale-125 border !border-orange-900">
                    <span>Remember me</span>
                </div>
                <div class="mt-4">
                    <button @click="doSignIn"
                        class="border-none bg-orange-800 text-white w-full rounded-full py-2 font-YoungSerif hover:bg-orange-900 duration-300">Login</button>
                </div>

                <div class="flex items-center justify-center mt-4 text-sm align-bottom">
                    <span class="text-white text-opacity-80">Do not have an account ? <a href=""
                            class="text-orange-800 font-YoungSerif hover:text-orange-900 duration-300">Sign up
                            now</a></span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { signin, loginErrorMessage, user } from '@/firebase';
import { useRouter } from 'vue-router'

export default {
    name: "LoginView",

    setup() {
        const email = ref('')
        const password = ref('')
        const errMes = ref(loginErrorMessage)
        const redirectPath = '/'
        const router = useRouter()

        const doRedirect = () => {
            router.push(redirectPath)
        }

        const doSignIn = () => {
            signin(email.value, password.value, doRedirect)
        }

        return {
            email,
            password,
            doSignIn,
            errMes
        }
    }
}
</script>

