<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'home' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <div class="w-full p-5 flex flex-col gap-y-10 mt-5">
                <div>
                    <div class="border-2 border-custom-primary w-96 h-fit py-5 rounded-xl flex flex-col items-center gap-y-10">
                        <h1 class="font-semibold text-xl w-3/4 text-center">Guidelines for PWD ID Requirements</h1>
                        <router-link :to="{ name: 'guidelines' }" class="bg-custom-primary px-4 py-1 rounded text-white">View</router-link>
                    </div>
                </div>
                <div>
                    <div class="border-2 border-custom-primary w-96 h-fit py-5 rounded-xl flex flex-col items-center gap-y-10">
                        <h1 class="font-semibold text-xl w-3/4 text-center">PWD ID Requirements</h1>
                        <router-link :to="{ name: 'IdReq' }" class="bg-custom-primary px-4 py-1 rounded text-white">View</router-link>
                    </div>
                </div>
                <div>
                    <div class="border-2 border-custom-primary w-96 h-fit py-5 rounded-xl flex flex-col items-center gap-y-10">
                        <h1 class="font-semibold text-xl w-3/4 text-center">Process Flow for the Issuance of PWD ID (New & Renewal)</h1>
                        <router-link :to="{ name: 'flow' }" class="bg-custom-primary px-4 py-1 rounded text-white">View</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue' 
import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL

</script>

<style scoped>
#reqContainer::-webkit-scrollbar {
    display: none;
}
</style>