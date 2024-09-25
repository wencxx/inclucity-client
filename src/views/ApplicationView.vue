<template>
    <section class="h-[90dvh] flex flex-col md:flex-row gap-x-5 gap-y-5 items-center justify-center">
        <button v-if="applicant && applicant.status !== 'rejected'" @click="isApplicant()" class="bg-custom-primary w-1/3 md:w-1/4 lg:w-1/6 py-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">New applicant</button>
        <router-link v-else :to="{ name: 'newApplicant' }" class="bg-custom-primary w-1/3 md:w-1/4 lg:w-1/6 py-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">New applicant</router-link>
        <button v-if="applicant && applicant.status !== 'expired'" @click="isNotExpired()" class="bg-custom-primary w-1/3 md:w-1/4 lg:w-1/6 py-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">Renewal</button>
        <router-link v-else :to="{ name: 'renewal' }" class="bg-custom-primary w-1/3 md:w-1/4 lg:w-1/6 py-2 text-center text-white rounded-md border hover:bg-gray-100 hover:border-custom-primary hover:text-custom-primary">Renewal</router-link>

        <!-- modal -->
        <div v-if="modal" @click.self="isApplicant()" class="h-screen w-screen absolute top-0 flex items-center justify-center">
            <div class="bg-white w-3/4 md:w-2/4 lg:w-1/4 h-1/4 md:h-1/3 rounded-md shadow flex flex-col items-center justify-around font-manrope font-semibold">
                <h1 class="text-2xl md:text-3xl uppercase text-center w-3/4">Already applied for application.</h1>
                <div class="w-full flex justify-center gap-x-3 md:gap-x-10">
                    <router-link :to="{ name: 'status' }" class="bg-transparent text-custom-primary border border-custom-primary hover:bg-custom-primary hover:text-white w-fit px-2 text-sm py-2 rounded">Check Status</router-link>
                    <router-link :to="{ name: 'home' }" class="bg-custom-primary text-white border border-transparent hover:bg-transparent hover:text-custom-primary w-fit px-2 text-sm py-2 rounded">Back home</router-link>
                </div>
            </div>
        </div>
        <div v-if="notExpired" @click.self="isNotExpired()" class="h-screen w-screen absolute top-0 flex items-center justify-center">
            <div class="bg-white w-3/4 md:w-2/4 lg:w-1/4 h-1/4 md:h-1/3 rounded-md shadow flex flex-col items-center justify-around font-manrope font-semibold">
                <h1 class="text-2xl md:text-3xl uppercase text-center w-3/4">PWD ID not expired.</h1>
                <div class="w-full flex justify-center gap-x-3 md:gap-x-10">
                    <button @click="isNotExpired()" class="bg-transparent text-custom-primary border border-custom-primary hover:bg-custom-primary hover:text-white w-1/4 text-center px-2 text-sm py-2 rounded">Close</button>
                    <router-link :to="{ name: 'home' }" class="bg-custom-primary text-white w-1/4 text-center border border-transparent hover:bg-transparent hover:text-custom-primary px-2 text-sm py-2 rounded">Back home</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useApplicationStore } from '../store'

const applicationStore = useApplicationStore()
const applicant = computed(() => applicationStore.application)

onUnmounted(() => {
    modal.value = false
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

<style>

</style>