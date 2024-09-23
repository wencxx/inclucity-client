<template>
    <section class="h-[90dvh] w-screen overflow-auto font-manrope p-10 md:px-16 lg:px-32">
        <!-- first step -->
        <div class="w-full flex flex-col gap-y-5" v-if="currentPage == 1">
            <h1 class="text-gray-500 font-semibold">Now get ready to take the first step of application</h1>
            <div class="w-full h-fit border shadow-inner p-3 space-y-5 text-black font-semibold">
                <p>When answering an application form for a Persons with Disability (PWD) ID, it's essential to provide accurate and relevant information to ensure that you receive the necessary support and accomodations. Here are some guidelines to help you fill out the application form effectively:</p>
                <ol class="space-y-1 lg:space-y-2">
                    <li>1. Read Instructions: Start by reading the instructions carefully.</li>
                    <li>2. Personal Information: Fill in your name, date of birth, address, and contact details accurately.</li>
                    <li>3. Describe Disability: Clearly state your disablity and how it affects your daily life.</li>
                    <li>4. Explain Limitaions: Describe how your disablity affects your ability to do things like walking, seeing, hearing, etc.</li>
                    <li>5. List Assistance Needed: Write down any help or special equipment you need because of your disablity.</li>
                    <li>6. Medical History: Mention any past treatments, surgeries, or ongoing medical care related to your disablity.</li>
                    <li>7. Include Documents: Attach any medical reports or letters from healthcare providers that support your application</li>
                    <li>8. Sign and Date: Sign and date the form to confirm that the information is true.</li>
                    <li>9. Submit: Send the completed form along with any required documents.</li>
                    <li>10. Keep Copies: Make copies of everything for your records.</li>
                    <li>11. Follow Up: If you don't hear back within a reasonable time, check the status of your application.</li>
                </ol>
                <p>By following these guidelines and providing accurate information, you can ensure that your application for a Persons with Disability ID is processed effeciently, and you receive the necessary support and accomodations tailoreed to your needs.</p>
            </div>
            <button class="bg-custom-primary rounded-md w-1/3 lg:w-1/5 py-2 text-white mx-auto" @click="next()">Continue</button>
        </div>
        <!-- second step -->
        <div v-if="currentPage == 2" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Person with Disability Number</h1>
            <div class="flex flex-col gap-y-1">
                <p v-if="invalidControlNumber" class="font-semibold text-red-500">Invalid Control Number</p>
                <input type="text" placeholder="(RR-PPMM-BBB-NNNNNN)" :class="{ 'border-red-500': invalidControlNumber }" class="h-10 border pl-2 rounded" v-model="controlNumber">
            </div>
        </div>
        <!-- third step -->
        <div v-if="currentPage == 3 && !invalidControlNumber" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Personal Information</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-3 font-poppins font-medium">
                <div class="flex gap-x-2">
                    <p>Fullname:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="name">
                </div>
                <div class="flex gap-x-2">
                    <p>Date of Birth:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="dateOfBirth">
                </div>
                <div class="flex gap-x-2">
                    <p>Age:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="age">
                </div>
                <div class="flex gap-x-2">
                    <p>Sex:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="gender">
                </div>
                <div class="flex gap-x-2">
                    <p>Address:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="gender">
                </div>
                <div class="flex gap-x-2">
                    <p>Civil Status:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="civilStatus">
                </div>
                <div class="flex gap-x-2">
                    <p>Type of Disability:</p>
                    <input type="text" class="border-b border-black bg-transparent focus:outline-none" v-model="typeOfDisability">
                </div>
            </div>
        </div>
        <!-- fourth step -->
        <div v-if="currentPage == 4 && !invalidControlNumber" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Contact Details</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <h1 v-if="imageMissing" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Please upload required images</h1>
                <h1 v-if="alreadySubmitted" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Renewal already requested</h1>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Landline No.</label>
                    <input type="number" placeholder="044-XXXXXX" class="h-10 border pl-2 rounded" v-model="landlineNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Mobile No.</label>
                    <input type="number" placeholder="639-XXX-XXX" class="h-10 border pl-2 rounded" v-model="mobileNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Email Address</label>
                    <input type="email" placeholder="xxxxxxxx@gmail.com" class="h-10 border pl-2 rounded" v-model="emailAddress">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload 1x1 photo</label>
                    <input type="file" class="h-10 rounded" accept="jpg, jpeg, png" @change="handleImageUpload('1x1photo', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Medical Certificate</label>
                    <input type="file" class="h-10 rounded" accept="jpg, jpeg, png" @change="handleImageUpload('medicalCert', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Barangay Certificate</label>
                    <input type="file" class="h-10 rounded" accept="jpg, jpeg, png" @change="handleImageUpload('barangayCert', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Old PWD ID</label>
                    <input type="file" class="h-10 rounded" accept="jpg, jpeg, png" @change="handleImageUpload('oldPwd', $event)" required>
                </div>
            </div>
        </div>
        <!-- control buttons -->
        <div v-if="currentPage > 1 && currentPage < 5" class="flex gap-x-10 mt-8 justify-center lg:w-1/2 lg:mx-auto lg:px-0">
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <Icon icon="ri:arrow-left-s-line" class="text-2xl" />
                <span>Back</span>
            </button>
            <button v-if="currentPage == '4' &&  !loadingSubmitting" @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Submit</span>
                <Icon icon="bi:send-arrow-up" class="text-xl" />
            </button>
            <button v-else @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md animate-pulse">
                <span>Loading...</span>
            </button>
            <button  v-if="currentPage != '4'" @click="next()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Next</span>
                <Icon icon="ri:arrow-right-s-line" class="text-2xl" />
            </button>
            
        </div>
        <div v-if="currentPage > 4" class="flex flex-col gap-y-10 mt-8 items-center lg:w-1/2 lg:mx-auto lg:px-0">
            <h1 class="text-3xl font-poppins">Opss nothings here</h1>
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Go Back</span>
            </button>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'
import { useApplicationStore } from '../store'
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

const applicationStore = useApplicationStore()

const applicationData = ref(computed(() => applicationStore.application))

const controlNumber = ref('')

const name = ref('')
const dateOfBirth = ref('')
const age = ref('')
const gender = ref('')
const address = ref('')
const civilStatus = ref('')
const typeOfDisability = ref('')
const landlineNo = ref('')
const mobileNo = ref('')
const emailAddress = ref('')

const convertBirthday = (birth) => {
    const year = birth.split('-')[0]
    const month = birth.split('-')[1]
    const day = birth.split('-')[2]

    const newMonth = ref('')

    switch(month){
        case '01':
            newMonth.value = 'January'
            break
        case '02':
            newMonth.value = 'February'
            break
        case '03':
            newMonth.value = 'March'
            break
        case '04':
            newMonth.value = 'April'
            break
        case '05':
            newMonth.value = 'May'
            break
        case '06':
            newMonth.value = 'June'
            break
        case '07':
            newMonth.value = 'July'
            break
        case '08':
            newMonth.value = 'August'
            break
        case '09':
            newMonth.value = 'September'
            break
        case '10':
            newMonth.value = 'October'
            break
        case '11':
            newMonth.value = 'November'
            break
        case '12':
            newMonth.value = 'December'
            break
    }

    return `${newMonth.value} ${day}, ${year}`
}

watch(applicationData, (newApplication) => {
    if(newApplication){
        name.value = newApplication.firstName + ' ' + newApplication.middleName + ' ' + newApplication.lastName || ''
        dateOfBirth.value = convertBirthday(newApplication.dateOfBirth) || ''
        age.value = newApplication.user?.age || ''
        gender.value = newApplication.gender || ''
        gender.value = newApplication.gender || ''
        civilStatus.value = newApplication.civilStatus || ''
        typeOfDisability.value = newApplication.typeOfDisability || ''
        landlineNo.value = newApplication.landlineNo || ''
        mobileNo.value = newApplication.mobileNo || ''
        emailAddress.value = newApplication.emailAddress || ''
    }
}, { immediate: true })

const photo1x1 = ref(null)
const medicalCert = ref(null)
const barangayCert = ref(null)
const pwdID = ref(null)

const handleImageUpload = (imageType, event) => {
    if (imageType === '1x1photo') {
        photo1x1.value = event.target.files[0];
    } else if (imageType === 'medicalCert') {
        medicalCert.value = event.target.files[0];
    } else if (imageType === 'barangayCert') {
        barangayCert.value = event.target.files[0];
    } else if (imageType === 'oldPwd') {
        pwdID.value = event.target.files[0];
    }
};



// page refresh logic
const currentPage = ref(parseInt(route.query.page) || 1)

onMounted(() => {
})

watch(() => route.query.page, (newPage) => {
    currentPage.value = parseInt(newPage) || 1
})

const invalidControlNumber = ref(false)

const next = async () => {
    if(currentPage.value == 2){
        try {
            const res = await axios.post(`${serverUrl}/check-control-number`, {
                controlNumber: controlNumber.value
            },{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })

            if(res.data === 'invalid control number') return invalidControlNumber.value = true

            if(res.data === 'Accepted'){
                router.push({ query : { page: currentPage.value + 1 }})
            }
        } catch (error) {
            console.error(error)
        }

        return
    }
    router.push({ query : { page: currentPage.value + 1 }})
}

const prev = () => {
    if(currentPage.value > 1){
        router.push({ query: { page: currentPage.value - 1 } })
    }
}

const imageMissing = ref(false)
const alreadySubmitted = ref(false)
const loadingSubmitting = ref(false)

const sendApplication = async () => {

    const firstName = ref('')
    const middleName = ref('')
    const lastName = ref('')

    firstName.value = name.value.split(' ')[0]
    middleName.value = name.value.split(' ')[1]
    lastName.value = name.value.split(' ')[2]

    if(!photo1x1.value || !medicalCert.value || !barangayCert.value) return imageMissing.value = true
    const applicationData = new FormData()

    applicationData.append('firstName', firstName.value);
    applicationData.append('middleName', middleName.value);
    applicationData.append('lastName', lastName.value);
    applicationData.append('dateOfBirth', dateOfBirth.value);
    applicationData.append('gender', gender.value);
    applicationData.append('civilStatus', civilStatus.value);
    applicationData.append('typeOfDisability', typeOfDisability.value);
    applicationData.append('landlineNo', landlineNo.value);
    applicationData.append('mobileNo', mobileNo.value);
    applicationData.append('emailAddress', emailAddress.value);
    applicationData.append('photo1x1', photo1x1.value);
    applicationData.append('medicalCert', medicalCert.value);
    applicationData.append('barangayCert', barangayCert.value);
    applicationData.append('pwdID', pwdID.value);

    try {
        loadingSubmitting.value = true
        const res = await axios.post(`${serverUrl}/send-renewal`, applicationData, {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": 'multipart/form-data'
            }
        }) 

        if(res.data === 'already submitted') return alreadySubmitted.value = true

        if(res.data.status === 'created'){
            router.push({
                path: '/successful',
                query: {
                    t: 'renewal',
                    applicationNo: res.data.applicantNumber
                }
            })
        }
    } catch (error) {
        console.error(error)
    }finally{
        loadingSubmitting.value = false
    }
}
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