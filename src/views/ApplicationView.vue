<template>
    <section class="h-[90dvh] flex flex-col md:flex-row gap-x-5 gap-y-5 items-center justify-center relative md:w-2/3 xl:w-full overflow-y-scroll">
        <div class="absolute inset-0 bg-white bg-opacity-30"></div>
        <div class="grid lg:grid-cols-2 h-fit gap-4">
            <button v-if="applicant && applicant.status !== 'rejected' && applicant.status !== 'expired'" @click="isApplicant()" class="z-20 h-full flex flex-col py-10 justify-center lg:justify-start px-10 gap-y-5 bg-custom-primary/75 shadow-2xl w-[80dvw] md:w-[20dvw] lg:w-[25dvw] xl:w-[20dvw] p-2 text-start text-white rounded-xl border hover:bg-gray-100 min-h-36 hover:border-custom-primary hover:text-custom-primary">
                <div class="space-y-5 border h-full p-5">
                    <h2 class="text-2xl font-bold text-center">New Application</h2>
                    <Icon icon="mdi:account-credit-card-outline" class="text-6xl mx-auto" />
                    <p class="text-sm text-justify">For new PWD ID applicants can apply by filling out the online form on our website.  After filling out, you will wait for your application to be approved and if your application is rejected you will need to resubmit the mistaken inputs.</p>
                </div>
            </button>
            <router-link v-else :to="{ name: 'newApplicant' }" class="z-20 h-full flex flex-col py-10 justify-center lg:justify-start lg:py-10 px-10 gap-y-5 bg-custom-primary/75 shadow-2xl w-[80dvw] md:w-[20dvw] lg:w-[25dvw] xl:w-[20dvw] p-2 text-start text-white rounded-xl border hover:bg-gray-100 min-h-36 hover:border-custom-primary hover:text-custom-primary">
                <div class="space-y-5 border h-full p-5">
                    <h2 class="text-2xl font-bold text-center">New Applicant</h2>
                    <Icon icon="mdi:account-credit-card-outline" class="text-6xl mx-auto" />
                    <p class="text-sm text-justify">For new PWD ID applicants can apply by filling out the online form on our website.  After filling out, you will wait for your application to be approved and if your application is rejected you will need to resubmit the mistaken inputs.</p>
                </div>
            </router-link>
            <button v-if="applicant && applicant.status !== 'expired'" @click="isNotExpired()" class="z-20 h-full flex flex-col py-10 justify-center lg:justify-start lg:py-10 px-10 gap-y-5 bg-custom-primary/75 shadow-2xl w-[80dvw] md:w-[20dvw] lg:w-[25dvw] xl:w-[20dvw] p-2 text-start text-white rounded-xl border hover:bg-gray-100 min-h-36 hover:border-custom-primary hover:text-custom-primary">
                <div class="space-y-5 border h-full p-5">
                    <h2 class="text-2xl font-bold text-center">Renewal</h2>
                    <Icon icon="mdi:account-credit-card" class="text-6xl mx-auto" />
                    <p class="text-sm text-justify">For PWD ID holders can renew their IDs by filling out the online renewal form on our website. Your PWD ID only lasts five years. If you want your PWD ID to be active again you will need to renew your PWD ID here on our website or through walk-in to the Malolos City Hall.</p>
                </div>
            </button>
            <button v-if="!applicant" @click="notApplicant()" class="z-20 h-full flex flex-col py-10 justify-center lg:justify-start lg:py-10 px-10 gap-y-5 bg-custom-primary/75 shadow-2xl w-[80dvw] md:w-[20dvw] lg:w-[25dvw] xl:w-[20dvw] p-2 text-start text-white rounded-xl border hover:bg-gray-100 min-h-36 hover:border-custom-primary hover:text-custom-primary">
                <div class="space-y-5 border h-full p-5">
                    <h2 class="text-2xl font-bold text-center">Renewal</h2>
                    <Icon icon="mdi:account-credit-card" class="text-6xl mx-auto" />
                    <p class="text-sm text-justify">For PWD ID holders can renew their IDs by filling out the online renewal form on our website. Your PWD ID only lasts five years. If you want your PWD ID to be active again you will need to renew your PWD ID here on our website or through walk-in to the Malolos City Hall.</p>
                </div>
            </button>
            <router-link v-if="applicant && applicant.status === 'expired'" :to="{ name: 'renewal' }" class="z-20 h-full flex flex-col py-10 justify-center lg:justify-start lg:py-10 px-10 gap-y-5 bg-custom-primary/75 shadow-2xl w-[80dvw] md:w-[20dvw] lg:w-[25dvw] xl:w-[20dvw] p-2 text-start text-white rounded-xl border hover:bg-gray-100 min-h-36 hover:border-custom-primary hover:text-custom-primary">
                <div class="space-y-5 border h-full p-5">
                    <h2 class="text-2xl font-bold text-center">New Application</h2>
                    <Icon icon="mdi:account-credit-card-outline" class="text-6xl mx-auto" />
                    <p class="text-sm text-justify">For new PWD ID applicants can apply by filling out the online form on our website.  After filling out, you will wait for your application to be approved and if your application is rejected you will need to resubmit the mistaken inputs.</p>
                </div>
            </router-link>
        </div>
        <!-- modal -->
        <div v-if="modal" @click.self="isApplicant()" class="z-20 h-screen w-screen fixed top-0 flex items-center justify-center">
            <div class="z-20 bg-white w-3/4 md:w-2/4 lg:w-1/4 h-fit h- pb-7 overflow-hidden rounded-md shadow flex flex-col items-center gap-y-14 font-manrope font-semibold">
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
            <div class="z-20 bg-white w-3/4 md:w-2/4 lg:w-1/4 h-fit h- pb-7 overflow-hidden rounded-md shadow flex flex-col items-center gap-y-14 font-manrope font-semibold">
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

        <div v-if="notApplicantyo" @click.self="notApplicant()" class="z-20 h-screen w-screen fixed top-0 flex items-center justify-center">
            <div class="z-20 bg-white w-3/4 md:w-2/4 lg:w-1/4 h-fit h- pb-7 overflow-hidden rounded-md shadow flex flex-col items-center gap-y-14 font-manrope font-semibold">
                <div class="z-20 bg-custom-primary w-full py-2 flex justify-center items-center gap-x-3">
                    <Icon icon="material-symbols-light:warning-outline" class="z-20 text-xl md:text-3xl text-white" />
                    <h1 class="z-20 text-md md:text-xl text-center capitalize text-white">Ineligible for renewal</h1>
                </div>
                <div class="z-20 w-full flex justify-center">
                    <p class="z-20 w-3/4 text-center">You have no application for a PWD ID, so you are not eligible to submit a renewal application.</p>
                </div>
                <div class="z-20 w-full flex justify-center gap-x-3 md:gap-x-10">
                    <button @click="notApplicant()" class="z-20 bg-transparent text-custom-primary border border-custom-primary hover:bg-custom-primary hover:text-white w-1/4 text-center px-2 text-sm py-2 rounded">Close</button>
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
const notApplicantyo = ref(false)

const isApplicant = () => {
    modal.value = !modal.value
}
const isNotExpired = () => {
    notExpired.value = !notExpired.value
}
const notApplicant = () => {
    notApplicantyo.value = !notApplicantyo.value
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
