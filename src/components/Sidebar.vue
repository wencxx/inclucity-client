<template>
    <div class="w-3/4 md:w-2/5 lg:w-1/4 xl:1/5 h-screen bg-custom-primary absolute top-0 left-0 flex flex-col gap-y-5 z-30">
        <div class="h-[10dvh]">
            <img src="../assets/logo.png" alt="logo" class="h-full">
        </div>
        <nav class="font-poppins text-white flex flex-col gap-y-1">
            <router-link :to="{ name: 'home' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="carbon:home" class="text-3xl" />
                <span>Home</span>
            </router-link>
            <router-link :to="{ name: 'application' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="ant-design:form-outlined" class="text-3xl" />
                <span>Application</span>
            </router-link>
            <router-link :to="{ name: 'receipt' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="ph:receipt" class="text-3xl" />
                <span>Application Receipt</span>
            </router-link>
            <router-link :to="{ name: 'status' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="fluent:status-32-regular" class="text-3xl" />
                <span>Application Status</span>
            </router-link>
            <router-link :to="{ name: 'tutorial' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="mdi:teach" class="text-3xl" />
                <span>Tutorial</span>
            </router-link>
            <router-link :to="{ name: 'requirements' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="carbon:document-requirements" class="text-3xl" />
                <span>ID Requirements</span>
            </router-link>
            <!-- <router-link :to="{ name: 'login' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="carbon:settings" class="text-3xl" />
                <span>Settings</span>
            </router-link> -->
            <router-link :to="{ name: 'hotlines' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] pl-10 py-2">
                <Icon icon="streamline:online-medical-call-service" class="text-3xl" />
                <span>Medical Hotlines</span>
            </router-link>
            <hr class="w-4/5 mx-auto my-5">
            <button class="flex items-center justify-center border gap-x-2 mx-auto w-1/3 py-2 rounded hover:bg-white hover:text-custom-primary hover:border-custom-primary" @click="logout()">
                <Icon icon="ph:sign-out" class="text-2xl" />
                Logout
            </button>
        </nav>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const removeDataFromLocalStorage = () => {
    localStorage.removeItem('lastName')
    localStorage.removeItem('firstName')
    localStorage.removeItem('middleName')
    localStorage.removeItem('suffix')
    localStorage.removeItem('dateOfBirth')
    localStorage.removeItem('gender')
    localStorage.removeItem('civilStatus')
    localStorage.removeItem('typeOfDisability')
    localStorage.removeItem('causeOfDisability')
    localStorage.removeItem('otherCauseOfDisability')
    localStorage.removeItem('houseNoAndStreet')
    localStorage.removeItem('barangay')
    localStorage.removeItem('landlineNo')
    localStorage.removeItem('mobileNo')
    localStorage.removeItem('emailAddress')
    localStorage.removeItem('educationalAttainment')
    localStorage.removeItem('statusOfEmployment')
    localStorage.removeItem('categoryOfEmployment')
    localStorage.removeItem('typeOfEmployment')
    localStorage.removeItem('occupation')
    localStorage.removeItem('otherOccupation')
    localStorage.removeItem('organizationAffiliated')
    localStorage.removeItem('contactInformation')
    localStorage.removeItem('officeAddress')
    localStorage.removeItem('telNo')
    localStorage.removeItem('sssNo')
    localStorage.removeItem('gsisNo')
    localStorage.removeItem('pagibigNo')
    localStorage.removeItem('psnNo')
    localStorage.removeItem('philhealthNo')
    localStorage.removeItem('fathersLname')
    localStorage.removeItem('fathersFname')
    localStorage.removeItem('fathersMname')
    localStorage.removeItem('mothersLname')
    localStorage.removeItem('mothersFname')
    localStorage.removeItem('mothersMname')
    localStorage.removeItem('guardiansLname')
    localStorage.removeItem('guardiansFname')
    localStorage.removeItem('guardiansMname')
    localStorage.removeItem('accomplishedBy')
    localStorage.removeItem('accomplishedByLname')
    localStorage.removeItem('accomplishedByFname')
    localStorage.removeItem('accomplishedByMname')
    localStorage.removeItem('physicianByLname')
    localStorage.removeItem('physicianByFname')
    localStorage.removeItem('physicianByMname')
}

const logout = () => {
    authStore.logout()
    router.push('/')
    removeDataFromLocalStorage()
}
</script>

<style scoped>
.router-link-active {
    background-color: rgba(255, 255, 255, .2);
}
</style>