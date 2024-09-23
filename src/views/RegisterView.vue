<template>
    <section class="font-poppins h-screen">
        <div class="flex flex-col lg:items-center h-screen py-14 overflow-auto" id="container">
            <!-- logo here -->
            <div class="w-full flex justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-3/5 md:w-2/6 lg:w-1/6">
            </div>
            <!-- form -->
            <p v-if="existingEmail" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Email already taken</span>
            </p>
            <form @submit.prevent="register()" class="flex flex-col lg:grid lg:place-content-center lg:grid-cols-2 lg:w-2/4 items-center gap-x-5 gap-y-5">
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Name</label>
                    <input type="text" placeholder="Fullname" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="name" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Email</label>
                    <input type="text" placeholder="Email" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="email" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Password</label>
                    <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                        <input :type="passwordType" placeholder="Password" class="pl-3 w-full h-10 focus:outline-none" v-model="password" required>
                        <Icon :icon="passwordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowPassword()" />
                    </div>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Contact Number</label>
                    <input type="number" placeholder="639XXXXXXXXX" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="contactNumber" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Address</label>
                    <input type="text" placeholder="Address" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="address" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Age</label>
                    <input type="number" placeholder="Age" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="age" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Gender</label>
                    <select class="pl-3 border border-gray-500 h-10 rounded-md" v-model="gender" required>
                        <option disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <button class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center">Sign Up</button>
            </form>
            <div class="flex justify-center mt-10 gap-y-4 font-poppins font-semibold">
                <p>
                    You have an account?
                    <router-link :to="{ name: 'login' }" class="underline hover:text-custom-primary">Log in</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

const passwordType= ref('password')
const passwordIconType = ref('mdi:eye-off-outline')

const toggleShowPassword = () => {
    if(passwordType.value === 'password'){
        passwordType.value = 'text'
        passwordIconType.value = 'mdi:eye-outline'
        return
    }
    passwordType.value = 'password'
    passwordIconType.value = 'mdi:eye-off-outline'
}

const name = ref('')
const email = ref('')
const password = ref('')
const contactNumber = ref('')
const address = ref('')
const age = ref('')
const gender = ref('Select Gender')

const existingEmail = ref(false)

const register = async () => {
    const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
        contactNumber: contactNumber.value,
        address: address.value,
        age: age.value,
        gender: gender.value,
    }
    
    try {
        const res = await axios.post(`${serverUrl}/send-otp`, {
            name: name.value,
            email: email.value,
        })
        
        if(res.data == 'existing email') return existingEmail.value = true
        router.push({
            path: '/register/otp-verification',
            query: {
                email: email.value
            }
        })
        localStorage.setItem('otp', res.data)
        localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem('timerMinutes', 4)
        localStorage.setItem('timerSeconds', 59)
    } catch (error) {
        console.error(error)
    }
}
</script>

<style scoped>
#container::-webkit-scrollbar {
    background-color: transparent;
    width: 3px;
}
#container::-webkit-scrollbar-thumb {
    background-color: #7B080E;
}
</style>