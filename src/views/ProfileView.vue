<template>
    <section class="h-[90dvh] p-10">
        <!-- profile -->
        <div v-if="user" class="flex items-center justify-between gap-x-5 font-poppins md:w-3/6 xl:w-2/6 md:mx-auto">
            <img v-if="user.profile" class="w-[5rem] md:w-24 aspect-square rounded-full" :src="user?.profile" alt="profilePic">
            <Icon v-else icon="bi:person-circle" class="text-[5rem] md:text-[10] lg:text-[4dvw]" />
            <div class="w-full">
                <h1 class="text-black text-xl md:text-2xl font-semibold uppercase text-start">{{ user.name }}</h1>
                <div class="flex flex-wrap">
                    <h1 class="text-black font-medium w-fit capitalize" >{{ applicant?.typeOfDisability }}</h1>
                </div>
            </div>
            <router-link :to="{ name: 'me' }">
                <Icon icon="weui:arrow-outlined" class="text-6xl text-custom-primary" />
            </router-link>
        </div>
        <!-- profile skeleton -->
        <div v-else class="flex items-center gap-x-10 font-poppins md:w-2/6 md:mx-auto">
            <div class="w-1/6 aspect-square bg-gray-300 rounded-full animate-pulse"></div>
            <div class="w-full space-y-1">
                <div class="w-full h-6 rounded bg-gray-300 animate-pulse"></div>
                <div class="w-4/6 h-4 rounded bg-gray-300 animate-pulse"></div>
            </div>
            <div class="w-1/12 aspect-square bg-gray-300 animate-pulse rounded"></div>
        </div>
        <!-- receipt -->
        <div v-if="user && applicant" class="flex items-center justify-between md:w-2/6 xl:w-2/6 md:mx-auto border border-custom-primary shadow-inner shadow-red-200 rounded-full px-4 py-1 mt-20">
            <Icon icon="ph:receipt" class="text-[4rem]" />
            <h1 class="font-poppins font-semibold text-lg">Application Receipt</h1>
            <router-link :to="{ name: 'receipt' }">
                <Icon icon="weui:arrow-outlined" class="text-5xl text-custom-primary" />
            </router-link>
        </div>
        <div v-if="!user && !applicant" class="flex items-center justify-between py-3 md:w-2/6 xl:w-2/6 md:mx-auto border border-custom-primarygray-300 animate-pulse rounded-full px-4 mt-20">
            <div class="h-12 aspect-square bg-gray-300 rounded animate-pulse"></div>
            <div class="h-5 bg-gray-300 w-3/5 animate-pulse"></div>
            <div class="bg-gray-300 h-6 rounded aspect-square animate-pulse"></div>
        </div>
        <div v-if="user && !applicant" class="text-center gap-x-5 justify-between md:w-3/6 lg:w-2/6 md:mx-auto px-6 py-2 mt-20">
            No Receipt to show
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { useAuthStore, useApplicationStore } from '../store'
const serverUrl = import.meta.env.VITE_SERVER_URL

const authStore = useAuthStore()
const applicantStore = useApplicationStore()

onMounted(() => {
    applicantStore.getApplication()
})

const user = computed(() => authStore.user)
const applicant = computed(() => applicantStore.application)
</script>

<style>
/* Your styles here */
</style>
