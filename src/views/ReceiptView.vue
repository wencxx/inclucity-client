<template>
    <div class="container p-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <h1 class="text-xl font-semibold capitalize self-start">My receipt</h1>
        <div v-if="applicant" ref="captureDiv" class="bg-red-300 w-full p-5 space-y-4" >
            <p>Application #{{ convertApplicationNum(applicant.applicationNumber) }}</p>
            <p>{{ date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }) }}</p>
            <hr class="border-black">
            <p>Name of Applicant: {{ applicant.firstName }} {{ applicant.middleName }} {{ applicant.lastName }}</p>
            <p>Date issued: {{ dateApplied.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }} </p>
            <p>Time: {{ dateApplied.toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' }).split(', ')[1] }} </p>
            <p>Address: {{ applicant.houseNoAndStreet }} {{ applicant.barangay }}, {{ applicant.municipalityCity }}, {{ applicant.province }}</p>
            <p>Type of Disability: <span v-for="t in applicant.typeOfDisability" :key="t" class="capitalize">{{ t }}<span v-if="applicant.typeOfDisability.length != 1">, </span></span></p>
            <p></p>
            <p v-if="applicant.status == 'pending'">Application Status: Your application is currently under review by the admin. Please allow some time for the review process. You will be notified once a decision has been made.</p>
            <p v-if="applicant.status == 'approved'">Application Status:Your application has been reviewed and unfortunately, it has been rejected due to unmet requirements. Please address the specified issues and resubmit your application for consideration. If you need further clarification, feel free to contact the municipality.</p>
            <p v-if="applicant.status == 'rejected'">Application Status: Your application is currently under review by the admin. Please allow some time for the review process. You will be notified once a decision has been made.</p>
        </div>
        <div v-else class="bg-red-300 w-full p-5 space-y-4" >
            <p class="text-center uppercase">Receipt unavailable</p>
        </div>
        <p class="text-center font-manrope">Kindly present this receipt to the officer</p>
        <h1 v-if="saved" class="self-center font-semibold text-gray-700 text-xl">Saved</h1>
        <button v-else class="bg-custom-primary w-1/2 md:w-1/4 py-2 text-white self-center rounded-md" @click="saveReceipt()">Save</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue' 
import { useApplicationStore } from '../store'
import html2canvas from 'html2canvas';


const applicantStore = useApplicationStore()

applicantStore.getApplication()

const applicant = computed(() => applicantStore.application)

const date = new Date()
const dateApplied = computed(() => {
    const dateString = applicant.value.dateIssued
    return dateString ? new Date(dateString) : null
});

const convertApplicationNum = (num) => {
    const convertedToString = num?.toString()
    if(convertedToString?.length === 1) return `0000${num}`
    if(convertedToString?.length === 2) return `000${num}`
    if(convertedToString?.length === 3) return `00${num}`
    if(convertedToString?.length === 4) return `0${num}`
    if(convertedToString?.length === 5) return num
}

const captureDiv = ref(null);
const saved = ref(false)

const saveReceipt = async () => {
  if (captureDiv.value) {
    const canvas = await html2canvas(captureDiv.value);

    const image = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = image;
    link.download = 'receipt.png';
    link.click();
    saved.value = true
  }
};
</script>

<style scoped>

</style>