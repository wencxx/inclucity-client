<template>
    <div class="md:w-2/3 xl:w-full px-5 lg:px-32 font-poppins flex flex-col items-center justify-center gap-y-14 mx-auto">
        <div v-if="!applicant || applicant && applicant.status === 'expired'" class="w-full">
            <h1 class="text-center font-medium uppercase text-xl">You haven’t applied yet</h1>
        </div>
        <div v-if="applicant && applicant.status !== 'expired'" class="border w-full flex flex-col gap-y-3 p-5 rounded-xl shadow">
            <h1 class="text-2xl font-semibold capitalize text-center mb-5">Application Status</h1>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Information Details</h1>
                <p v-if="applicant && applicant.reasonForRejection != 'Invalid Forms' && applicant.status !== 'pending'" class="text-green-700">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-blue-500">Pending</p>
                <p v-else class="text-custom-primary">Declined</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">1x1 Picture</h1>
                <p v-if="applicant && applicant.reasonForRejection != 'Invalid 1x1 Picture' && applicant.status !== 'pending'" class="text-green-700">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-blue-500">Pending</p>
                <p v-else class="text-custom-primary">Declined</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Medical Certificate</h1>
                <p v-if="applicant && applicant.reasonForRejection != 'Invalid Medical Certificate' && applicant.status !== 'pending'" class="text-green-700">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-blue-500">Pending</p>
                <p v-else class="text-custom-primary">Declined</p>
            </div>
            <div class="flex justify-between items-center">
                <h1 class="font-medium text-xl">Barangay Certificate</h1>
                <p v-if="applicant && applicant.reasonForRejection != 'Invalid Barangay Certificate' && applicant.status !== 'pending'" class="text-green-700">Approved</p>
                <p v-else-if="applicant &&  applicant.status === 'pending'" class="text-blue-500">Pending</p>
                <p v-else class="text-custom-primary">Declined</p>
            </div>
            <router-link :to="{ name: 'resubmit', query: { reason: applicant.reasonForRejection } }" v-if="applicant && applicant.status === 'rejected'" class="bg-custom-primary w-1/3 mx-auto text-white rounded-md py-2 mt-5 text-center">Resubmit</router-link>
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