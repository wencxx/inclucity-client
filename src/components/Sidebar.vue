<template>
    <div class="w-3/4 md:w-2/5 lg:w-1/4 xl:1/5 h-screen absolute top-0 left-0 flex flex-col z-[1000]">
        <div class="h-[9.8dvh] bg-custom-primary dark:bg-neutral-900 lg:hidden">
            <img src="../assets/logo.png" alt="logo" class="h-full">
        </div>
        <nav class="font-poppins h-[91dvh] flex flex-col gap-y-1 bg-gray-100 border-r-2 border-black/10 shadow pt-5 overflow-auto pb-5 !text-black">
            <!-- <router-link :to="{ name: 'me' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="ion:person-circle-outline" class="text-3xl" />
                <span>Profile</span>
            </router-link> -->
            <router-link :to="{ name: 'profile' }" class="border rounded-xl p-3 border-black w-4/5 mx-auto mb-5 flex  items-center gap-x-2">
                <div v-if="currentUser?.profile" class="w-12 aspect-square flex items-center justify-center rounded-full border border-black">
                    <img :src="currentUser?.profile" alt="profile pic" class="w-full h-full">
                </div>
                <div v-else class="w-12 aspect-square flex items-center justify-center rounded-full border border-black">
                    <Icon icon="mdi:user" class="text-2xl" />
                </div>
                <div>
                    <h1 class="font-medium">{{ currentUser?.name }}</h1>
                    <h1 v-if="application?.typeOfDisability" class="font-medium">{{ application?.typeOfDisability }}</h1>
                </div>
            </router-link>
            <router-link :to="{ name: 'home' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="carbon:home" class="text-3xl" />
                <span>Home</span>
            </router-link>
            <div v-if="isResident()" @click="toggleApplication = !toggleApplication" class="flex items-center cursor-pointer gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="mdi:form-outline" class="text-3xl" />
                <span>PWD ID Application</span>
                <Icon icon="ri:arrow-down-s-line" class="text-3xl ml-auto duration-300" :class="{ 'rotate-180': toggleApplication }" />
            </div>
            <div v-if="toggleApplication" class="pl-5">
                 <router-link :to="{ name: 'application' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="ant-design:form-outlined" class="text-3xl" />
                <span>Application</span>
                </router-link>
                <router-link :to="{ name: 'receipt' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                    <Icon icon="ph:receipt" class="text-3xl" />
                    <span>Application Receipt</span>
                </router-link>
                <router-link :to="{ name: 'status' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                    <Icon icon="fluent:status-32-regular" class="text-3xl" />
                    <span>Application Status</span>
                </router-link>
                <router-link :to="{ name: 'requirements' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                    <Icon icon="carbon:document-requirements" class="text-3xl" />
                    <span>Requirements</span>
                </router-link>
            </div>
            <router-link :to="{ name: 'tutorial' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="mdi:teach" class="text-3xl" />
                <span>Inclucity Guide</span>
            </router-link>
            <router-link :to="{ name: 'benefits' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="solar:hand-heart-outline" class="text-3xl" />
                <span>Benefits</span>
            </router-link>
            <router-link :to="{ name: 'faqs' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="mdi:faq" class="text-3xl" />
                <span>FAQs</span>
            </router-link>
            <router-link :to="{ name: 'map' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="tabler:map-2" class="text-3xl" />
                <span>Map Directory</span>
            </router-link>
            <!-- <router-link :to="{ name: 'login' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="carbon:settings" class="text-3xl" />
                <span>Settings</span>
            </router-link> -->
            <router-link :to="{ name: 'hotlines' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="streamline:online-medical-call-service" class="text-3xl" />
                <span>Emergency Hotlines</span>
            </router-link>
            <router-link :to="{ name: 'about' }" class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-10 py-2">
                <Icon icon="pepicons-pencil:people-circle" class="text-3xl" />
                <span>About us</span>
            </router-link>
            <hr class="w-4/5 mx-auto my-5">
            <button @click="willLogout = true" class="flex items-center justify-center border gap-x-2 mx-auto w-1/3 py-2 rounded hover:bg-white hover:text-custom-primary hover:border-custom-primary">
                <Icon icon="ph:sign-out" class="text-2xl" />
                Logout
            </button>
        </nav>

        <!-- logout confirmation -->
        <div v-if="willLogout" class="absolute top-0 left-0 h-screen w-screen bg-black/10 flex items-center justify-center">
            <div class="bg-white rounded shadow w-80 h-56 flex flex-col gap-y-10 items-center justify-center">
                <div class="flex flex-col items-center gap-y-2">
                    <Icon icon="material-symbols-light:warning" class="text-5xl text-orange-500" />
                    <h1 class="font-semibold">Are you sure you want to logout?</h1>
                </div>
                <div class="flex gap-x-5">
                    <button @click="willLogout = false" class="w-20 border border-custom-primary text-custom-primary rounded">No</button>
                    <button @click="logout" class="w-20 border border-transparent bg-custom-primary text-white rounded">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore, useApplicationStore } from '../store'
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

const toggleApplication = ref(false)

const authStore = useAuthStore()
const applicationStore = useApplicationStore()
const router = useRouter()
const route = useRoute()

const isResident = () => {
    if(!currentUser.value?.municipality || currentUser.value?.municipality.toLowerCase() === 'malolos'){
        return true
    }else{
        return false
    }
}

const currentUser = computed(() => authStore.user)
const application = computed(() => applicationStore.application)

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

const willLogout = ref(false)

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
.overflow-auto::-webkit-scrollbar {
    display: none;
}
</style>