<template>
    <section class="h-[90dvh] flex flex-col md:flex-row gap-x-5 gap-y-5 items-center justify-center relative">
        <div class="absolute inset-0 bg-white bg-opacity-30"></div>
        <button v-if="applicant && applicant.status !== 'rejected' && applicant.status !== 'expired'" @click="isApplicant()" class="z-20 bg-custom-primary w-[40dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] p-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">New Applicant</button>
        <router-link v-else :to="{ name: 'newApplicant' }" class="z-20 bg-custom-primary w-[40dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] p-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">New Applicant</router-link>
        <button v-if="applicant && applicant.status !== 'expired' || !applicant" @click="isNotExpired()" class="z-20 bg-custom-primary w-[40dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] p-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">Renewal</button>
        <router-link v-if="applicant && applicant.status === 'expired'" :to="{ name: 'renewal' }" class="z-20 bg-custom-primary w-[40dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] p-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">Renewal</router-link>

        <!-- modal -->
        <div v-if="modal" @click.self="isApplicant()" class="z-20 h-screen w-screen fixed top-0 flex items-center justify-center">
            <div class="z-20 bg-white w-3/4 md:w-2/4 lg:w-1/4 h-fit pb-7 overflow-hidden rounded-md shadow flex flex-col items-center gap-y-14 font-manrope font-semibold">
                <div class="z-20 bg-yellow-400 w-full py-2 flex justify-center items-center gap-x-3">
                    <Icon icon="material-symbols-light:warning-outline" class="z-20 text-xl md:text-3xl text-white" />
                    <h1 class="z-20 text-md md:text-xl text-center capitalize text-white">Already applied for application.</h1>
                </div>
                <div class="z-20 w-full flex justify-center">
                    <p class="z-20 w-3/4 text-center">You have already submitted an application. You are not eligible to apply again at this time.</p>
                </div>
                <div class="z-20 w-full flex justify-center gap-x-3 md:gap-x-10">
                    <router-link :to="{ name: 'status' }" class="z-20 bg-transparent text-custom-primary border border-custom-primary hover:bg-custom-primary hover:text-white w-fit px-2 text-sm py-2 rounded">Check Status</router-link>
                    <router-link :to="{ name: 'home' }" class="z-20 bg-custom-primary text-white border border-transparent hover:bg-transparent hover:text-custom-primary w-fit px-2 text-sm py-2 rounded">Back home</router-link>
                </div>
            </div>
        </div>
        <div v-if="notExpired" @click.self="isNotExpired()" class="z-20 h-screen w-screen fixed top-0 flex items-center justify-center">
            <div class="z-20 bg-white w-3/4 md:w-2/4 lg:w-1/4 h-fit pb-7 overflow-hidden rounded-md shadow flex flex-col items-center gap-y-14 font-manrope font-semibold">
                <div class="z-20 bg-yellow-400 w-full py-2 flex justify-center items-center gap-x-3">
                    <Icon icon="material-symbols-light:warning-outline" class="z-20 text-xl md:text-3xl text-white" />
                    <h1 class="z-20 text-md md:text-xl text-center capitalize text-white">PWD ID not expired.</h1>
                </div>
                <div class="z-20 w-full flex justify-center">
                    <p class="z-20 w-3/4 text-center">Your ID is valid and has not expired. You can continue to use it without any issues.</p>
                </div>
                <div class="z-20 w-full flex justify-center gap-x-3 md:gap-x-10">
                    <button @click="isNotExpired()" class="z-20 bg-transparent text-custom-primary border border-custom-primary hover:bg-custom-primary hover:text-white w-1/4 text-center px-2 text-sm py-2 rounded">Close</button>
                    <router-link :to="{ name: 'home' }" class="z-20 bg-custom-primary text-white w-1/4 text-center border border-transparent hover:bg-transparent hover:text-custom-primary px-2 text-sm py-2 rounded">Back home</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue' 
import { useApplicationStore } from '../store'

const applicationStore = useApplicationStore()
const applicant = computed(() => applicationStore.application)

onUnmounted(() => {
    modal.value = false
})

onMounted(() => {
    applicationStore.getApplication()
})

const modal = ref(false)
const notExpired = ref(false)

const isApplicant = () => {
    modal.value = !modal.value
}
const isNotExpired = () => {
    notExpired.value = !notExpired.value
}
</script>

<style scoped>
section {
    background-image: url('../assets/bg2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
}
</style>
