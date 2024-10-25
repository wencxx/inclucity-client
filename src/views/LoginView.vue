<template>
    <section class="font-poppins">
        <div class="h-screen w-screen flex items-center justify-center" v-if="loadingScreen">
            <img src="../assets/logo.png" alt="logo" class="">
        </div>
        <div class="flex flex-col justify-between md:justify-evenly h-screen py-14" v-if="!loadingScreen">
            <!-- logo here -->
            <div class="w-full flex justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-3/5 md:w-2/6 lg:w-1/6">
            </div>
            <!-- form -->
            <form @submit.prevent="login()" class="flex flex-col items-center gap-y-5">
                <p v-if="registered" class="w-3/4 md:w-2/5 lg:w-1/5 border bg-green-500 text-white pl-3 py-1 rounded">Welcome to Inclucity <span class="font-semibold">{{ $route.query.name }}</span></p>
                <p v-if="invalidPassword" class="w-3/4 md:w-2/5 lg:w-1/5 border bg-red-500 text-white pl-3 py-1 rounded flex items-center gap-x-2">
                    <Icon icon="ph:warning" class="text-xl animate-pulse" />
                    Invalid Password
                </p>
                <p v-if="invalidCredentials" class="w-3/4 md:w-2/5 lg:w-1/5 border bg-red-500 text-white pl-3 py-1 rounded flex items-center gap-x-2">
                    <Icon icon="ph:warning" class="text-xl animate-pulse" />
                    Invalid Credentials
                </p>
                <p v-if="err" class="w-3/4 md:w-2/5 lg:w-1/5 border bg-red-500 text-white pl-3 py-1 rounded flex items-center gap-x-2">
                    <Icon icon="weui:error-outlined" class="text-xl animate-pulse" />
                    Something went wrong. Try again later
                </p>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-1/5">
                    <label class="font-semibold text-lg">Email</label>
                    <input type="email" placeholder="Email" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="email" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-1/5">
                    <label class="font-semibold text-lg">Password</label>
                    <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                        <input :type="passwordType" placeholder="Password" class="pl-3 w-full h-10 focus:outline-none" v-model="password" required> 
                        <Icon :icon="passwordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowPassword()" />
                    </div>
                </div>
                <button v-if="!loadingLogin" class="bg-custom-primary w-3/4 md:w-2/5 lg:w-1/5 text-white py-2 rounded-xl uppercase lg:mt-2 hover:bg-red-900">Login</button>
                <button v-else class="bg-custom-primary w-3/4 md:w-2/5 lg:w-1/5 text-white py-2 rounded-xl uppercase lg:mt-2 hover:bg-red-900 animate-pulse">Logging in...</button>
            </form>
            <div class="flex flex-col items-center gap-y-4 font-poppins font-semibold">
                <!-- <router-link :to="{ name: 'register' }" class="underline hover:text-custom-primary">Forgot Password?</router-link> -->
                <p>Do not have account yet?</p>
                <router-link :to="{ name: 'register' }" class="underline hover:text-custom-primary">Sign Up</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
const serverUrl = import.meta.env.VITE_SERVER_URL
import { onMounted, onUnmounted, ref } from "vue";
import { useAuthStore, useApplicationStore } from '../store'
import { useRouter } from 'vue-router'
import axios from "axios";

const authStore = useAuthStore()
const appStore = useApplicationStore()
const router = useRouter()

const loadingScreen = ref(false)
const passwordType= ref('password')
const passwordIconType = ref('mdi:eye-off-outline')
const registered = ref(false)


const email = ref('')
const password = ref('')

onMounted(() => {
    setTimeout(() => {
        loadingScreen.value = false
    }, 4000)

    if(localStorage.getItem('showLoading') == 'false'){
        loadingScreen.value = false
        registered.value = true
    }

    localStorage.removeItem('timerMinutes')
    localStorage.removeItem('timerSeconds')
})

const toggleShowPassword = () => {
    if(passwordType.value === 'password'){
        passwordType.value = 'text'
        passwordIconType.value = 'mdi:eye-outline'
        return
    }
    passwordType.value = 'password'
    passwordIconType.value = 'mdi:eye-off-outline'
}

const invalidCredentials = ref(false)
const invalidPassword = ref(false)
const err = ref(false)

const loadingLogin = ref(false)

const login = async () => {
    invalidPassword.value = false
    invalidCredentials.value = false
    registered.value = false
    localStorage.removeItem('showLoading')
    loadingLogin.value =  true
    
    const loginCredentials = {
        email: email.value,
        password: password.value,
    }

    try {
        const res = await axios.post(`${serverUrl}/login`, loginCredentials)

        if(res.data === 'invalid credentials' || res.data.role !== 'user') return invalidCredentials.value = true
        if(res.data === 'invalid password') return invalidPassword.value = true

        authStore.login(res.data.token)  
        appStore.getApplication()  
        router.push('/news')
    } catch (error) {
        console.error(error)
        err.value = true
    }finally{
        loadingLogin.value = false
    }
}
</script>

<style>

</style>