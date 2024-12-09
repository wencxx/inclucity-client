<template>
    <div class="md:w-2/3 xl:w-full font-poppins gap-y-5 mx-auto">
        <div class="h-[90dvh] overflow-auto pb-10">
            <div class="w-full bg-custom-primary h-44 flex items-center justify-center">
                <h1 class="text-3xl text-white font-bold uppercase">Receipt Application</h1>
            </div>
            <div  v-if="applicant && applicant.status === 'approved'" ref="captureDiv" class="py-5 bg-custom-primary w-4/5 h-fit mt-20 rounded-2xl mx-auto">
                <div class="bg-white w-full h-full rounded-xl p-10 space-y-5 relative">
                    <button class="bg-gray-500 w-fit py-2 px-3 text-white self-center rounded-md absolute top-5 right-5 downloadButton" @click="saveReceipt()">
                        <Icon icon="mdi:download" class="text-xl" />
                    </button> 
                    <div class="flex justify-center gap-x-10">
                        <img src="../assets/malolos.png" alt="bulacan seal" class="w-1/4 lg:w-1/12 aspect-auto">
                        <img src="../assets/dswd.png" alt="bulacan seal" class="w-1/4 lg:w-1/12 aspect-auto">
                        <img src="../assets/logo2.png" alt="bulacan seal" class="w-1/4 lg:w-1/12 aspect-auto">
                    </div>
                    <div class="text-center !mt-16">
                        <h1 class="font-semibold text-3xl">IncluCty</h1>
                        <p class="text-">Lungson ng Malolos, Bulacan</p>
                        <p>City Social Welfare and Development Office</p>
                    </div>
                    <hr class="w-3/4 mx-auto border-black">
                    <h1 class="text-2xl lg:text-6xl text-gray-600 font-semibold tracking-wider text-center uppercase">Pwd id ready for pickup</h1>
                    <div class="w-full grid lg:grid-cols-2 !mt-14 gap-x-10 gap-y-5 capitalize">
                        <div class="bg-gray-500 h-42 space-y-1 rounded-3xl text-white p-5">
                            <p class="w-full flex justify-between"><span>Application Id:</span> <span>{{ convertApplicationNum(applicant.applicationNumber) }}</span></p>
                            <p class="w-full flex justify-between"><span>Control No.:</span> <span>{{ applicant.controlNumber }}</span></p>
                            <p class="w-full flex justify-between"><span>Type:</span> <span>{{ applicant.typeOfApplicant === 'new' ? 'New' : 'Renewal' }} Applicant</span></p>
                            <p class="w-full flex justify-between"><span>Name:</span> <span>{{ applicant.firstName }} {{ applicant.middleName }} {{ applicant.lastName }}</span></p>
                            <p class="w-full flex justify-between"><span>Disability:</span> <span>{{ applicant.typeOfDisability }}</span></p>
                        </div>
                        <div class="bg-gray-500 h-42 space-y-1 rounded-3xl text-white p-5">
                            <p class="w-full flex justify-between"><span>ID Application Status:</span> <span>{{ applicant.status }}</span></p>
                            <p class="w-full flex justify-between"><span>Date:</span> <span>{{ dateApplied.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span></p>
                            <p class="w-full flex justify-between"><span>Time:</span> <span>{{ dateApplied.toLocaleDateString('en-US', { hour: '2-digit', minute: '2-digit' }).split(', ')[1] }}</span></p>
                            <p class="w-full flex justify-between"><span>Accepted By:</span> <span>{{ applicant?.acceptedBy }}</span></p>
                        </div>
                        <div class="p-5">
                            <p class="w-full flex justify-between"><span class="font-bold">Receipt No.:</span> <span>{{ convertApplicationNum(applicant.applicationNumber + 1) }}</span></p>
                            <p class="w-full flex justify-between"><span class="font-bold">Date Issued.:</span> <span>{{  dateIssued.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span></p>
                        </div>
                        <div class="p-5">
                            <p class="w-full flex justify-between"><span class="font-bold">ID Validity Period:</span> <span>Five (5) years</span></p>
                            <p class="w-full flex justify-between"><span class="font-bold">Valid Until.:</span> <span>{{  fiveYearsLater() }}</span></p>
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <p>New City Hall Building Government Center</p>
                        <p>Brgy. Bulihan City of Malolos, Bulacan, Philippines, 3000</p>
                        <p>(044) 931-8888</p>
                    </div>
                </div>
            </div>

            <div v-else class="w-full p-5 space-y-4" >
                <p class="text-center text-2xl uppercase">Receipt unavailable</p>
            </div>
        </div>   
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
const dateIssued = computed(() => {
    const dateString = applicant.value.dateIssued
    return dateString ? new Date(dateString) : null
});

const dateApplied = computed(() => {
    const dateString = applicant.value.dateApplied
    return dateString ? new Date(dateString) : null
});

const fiveYearsLater = () => {
    const futureDate = new Date(applicant.value.dateIssued);
    futureDate.setFullYear(futureDate.getFullYear() + 5);
    return futureDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });
}

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
        const button = document.querySelector('.downloadButton');

        button.style.visibility = 'hidden';
        try {
          const canvas = await html2canvas(captureDiv.value)
          const image = canvas.toDataURL('image/png')
          const link = document.createElement('a')
          link.href = image
          link.download = 'receipt.png'
          link.click()
        } finally {
            button.style.visibility = 'visible';
        }
      }
    };
</script>

<style scoped>
.overflow-auto::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
}
.overflow-auto::-webkit-scrollbar-thumb {
    background-color: #7B080E;
    border-radius: 50px;
}
</style>