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
            <div class="flex flex-col items-center gap-y-5">
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-1/5">
                    <label class="font-semibold text-lg">Enter your email</label>
                    <input type="email" placeholder="Email" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="email" required>
                </div>
                <button v-if="!loadingLogin" class="bg-custom-primary w-3/4 md:w-2/5 lg:w-1/5 text-white py-2 rounded-xl uppercase lg:mt-2 hover:bg-red-900">Send Otp</button>
            </div>
            <div class="flex flex-col items-center gap-y-4 font-poppins font-semibold">
                <router-link :to="{ name: 'login' }" class="underline hover:text-custom-primary">Login</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
const serverUrl = import.meta.env.VITE_SERVER_URL

</script>

<style>

</style>