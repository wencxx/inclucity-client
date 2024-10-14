<template>
    <div class="container md:w-2/3 lg:w-2/5 p-10 font-poppins flex flex-col items-center gap-y-14 mx-auto">
        <div v-if="!applicant || applicant && applicant.status === 'expired'" class="w-full">
            <h1 class="text-center font-medium uppercase text-xl">haven't applied for application yet</h1>
        </div>
        <div v-if="applicant && applicant.status !== 'expired'" class="flex items-center justify-between w-full">
            <div class="flex flex-col items-center">
                <Icon icon="clarity:form-line"  class="text-5xl text-green-900" :class="{ '!text-green-500': applicant }"/>
                <p class="text-sm">Filled out form</p>
            </div>
            <Icon icon="ph:arrow-right"  class="text-5xl text-blue-700"/>
            <div class="flex flex-col items-center">
                <Icon icon="uim:process"  class="text-5xl text-green-900" :class="{ '!text-green-500': applicant && applicant.status !== 'pending'}"/>
                <p class="text-sm">Processed</p>
            </div>
            <Icon icon="ph:arrow-right"  class="text-5xl text-blue-700"/>
            <div class="flex flex-col items-center">
                <Icon icon="bitcoin-icons:verify-filled" class="text-6xl text-green-900" :class="{'!text-green-500': applicant && applicant?.status === 'approved'}" />
                <p class="text-sm">Verified</p>
            </div>
        </div>

        <div v-if="applicant && applicant.status !== 'expired'" class="border w-full flex flex-col gap-y-3 p-5 rounded-xl shadow">
            <h1 class="text-2xl font-semibold capitalize text-center mb-5">Application Status</h1>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Information Details</h1>
                <p v-if="applicant && applicant.reasonForRejection != 'Invalid Forms' && applicant.status !== 'pending'" class="text-green-500">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-green-500">Processing</p>
                <p v-else class="text-red-500">Rejected</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">1x1 Picture</h1>
                <p v-if="applicant && applicant.accepted1x1photo && applicant.status !== 'pending'" class="text-green-500">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-green-500">Processing</p>
                <p v-else class="text-red-500">Rejected</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Medical Certificate</h1>
                <p v-if="applicant && applicant.acceptedMedicalCert && applicant.status !== 'pending'" class="text-green-500">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-green-500">Processing</p>
                <p v-else class="text-red-500">Rejected</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Barangay Certificate</h1>
                <p v-if="applicant && applicant.acceptedBarangayCert && applicant.status !== 'pending'" class="text-green-500">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-green-500">Processing</p>
                <p v-else class="text-red-500">Rejected</p>
            </div>
            <router-link :to="{ name: 'newApplicant' }" v-if="applicant && applicant.status === 'rejected'" class="bg-custom-primary w-1/3 mx-auto text-white rounded-md py-2 mt-5 text-center">Resubmit</router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue' 
import { useApplicationStore } from '../store'


const applicantStore = useApplicationStore()

applicantStore.getApplication()

const applicant = computed(() => applicantStore.application)

</script>

<style scoped>

</style>