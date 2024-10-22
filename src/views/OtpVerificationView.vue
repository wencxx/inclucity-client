<template>
    <section class="font-poppins h-screen">
        <div class="flex flex-col lg:items-center h-screen py-14 overflow-auto" id="container">
            <!-- logo here -->
            <div class="w-full flex justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-3/5 md:w-2/6 lg:w-1/6">
            </div>
            <form @submit.prevent="verifyOtp()" class="flex flex-col lg:place-content-center lg:w-2/4 items-center gap-x-5 gap-y-5">
                <h1 class="font-semibold tracking-wide lg:text-3xl">OTP VERIFICATION</h1>
                <p class="lg:text-xl">We will send you a one time password on this email</p>
                <p class="font-semibold text-xl">{{ $route.query.email }}</p>
                <p v-if="invalidOtp" class="text-center uppercase text-red-500 w-3/4">Incorrect OTP</p>
                <p v-if="expiredOtp" class="text-center uppercase text-red-500 w-3/4">OTP Expired</p>
                <p v-if="errResending" class="text-center uppercase text-red-500 w-3/4">Something went wrong resending otp. Try again later</p>
                <div class="flex justify-evenly gap-x-5 w-3/4">
                    <input v-for="(otp, index) in inputtedOtp" :key="index" type="number" maxlength="1" class="border w-1/6 aspect-square lg:w-2/12  text-center" :class="{ 'border-red-500': invalidOtp }" v-model="inputtedOtp[index]" @input="updateOtp(index, $event)">
                </div>
                <p class="text-gray-500 text-xl">0{{timerMinutes}}:<span v-if="timerSeconds < 10">0</span>{{timerSeconds}}</p>
                <p>Didn't receive OTP? <span class="font-medium underline hover:text-custom-primary cursor-pointer" @click="resendOtp">Resend</span></p>
                <button class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center">Submit</button>
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
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

const timerMinutes = ref(localStorage.getItem('timerMinutes') || 4)
const timerSeconds = ref(localStorage.getItem('timerSeconds') || 60)
const otpVerification = ref(false)
const inputtedOtp = ref(['', '', '', ''])

const expiredOtp = ref(false)
const errResending = ref(false)

const userData = localStorage.getItem('userData')

onMounted(() => {
    if(!!localStorage.getItem('timerMinutes')){
    }else{
        localStorage.setItem('timerMinutes', 4)
        localStorage.setItem('timerSeconds', 59)
    }
    startOtpTime()
})

onUnmounted(() => {
    localStorage.removeItem('otp');
    localStorage.removeItem('timerMinutes');
    localStorage.removeItem('timerSeconds');
    localStorage.removeItem('userData')
})

const resendOtp = async () => {
    expiredOtp.value = false
    if(!expiredOtp.value) return alert(`Resend after ${timerMinutes.value} minute(s)`)

    try {

        const res = await axios.post(`${serverUrl}/send-otp`, JSON.parse(userData))
        
        if(res.status == 201){
            localStorage.setItem('timerMinutes', 4)
            localStorage.setItem('timerSeconds', 59)
            localStorage.setItem('otp', res.data)
            timerMinutes.value = 4
            timerSeconds.value = 59
            startOtpTime()
        }
    } catch (error) {
        errResending.value = true
    }
}

let intervalId;

const startOtpTime = () => {
    intervalId = setInterval(() => {
        timerSeconds.value--;
        
        if (timerSeconds.value < 0 && timerMinutes.value > 0) {
            timerSeconds.value = 59;
            timerMinutes.value--;
        }

        if (timerMinutes.value <= 0 && timerSeconds.value <= 0) {
            localStorage.removeItem('otp');
            localStorage.removeItem('timerMinutes');
            localStorage.removeItem('timerSeconds');
            timerMinutes.value = 0;
            timerSeconds.value = 0;
            expiredOtp.value = true
            clearInterval(intervalId);
        } else {
            localStorage.setItem('timerMinutes', timerMinutes.value);
            localStorage.setItem('timerSeconds', timerSeconds.value);
        }
    }, 1000);
};


const updateOtp = (index, event) => {
    let value = event.target.value;

  if (value.length > 1) {
    value = value.slice(0, 1);
  }

  inputtedOtp.value[index] = value;
}

const invalidOtp = ref(false)

const verifyOtp = async () => {
    const otp = inputtedOtp.value.join('')

    if(otp != localStorage.getItem('otp')) return invalidOtp.value = true
    try {
        const res = await axios.post(`${serverUrl}/register`, JSON.parse(userData))
        if(res.status == 201){
            router.push({
                path: '/',
                query: {
                    name: res.data
                }
            })
            localStorage.removeItem('otp')
            localStorage.removeItem('timerMinutes');
            localStorage.removeItem('timerSeconds');
            localStorage.removeItem('userData');
            timerMinutes.value = 0;
            timerSeconds.value = 0;
            localStorage.setItem('showLoading', false)
        }
        console.log(res.data)
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