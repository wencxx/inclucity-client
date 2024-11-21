<template>
    <section class="font-poppins h-screen">
        <div class="flex flex-col lg:items-center h-screen py-14 overflow-auto" id="container">
            <!-- logo here -->
            <div class="w-full flex justify-center">
                <img src="../assets/logo.png" alt="logo" class="w-3/5 md:w-2/6 lg:w-1/6">
            </div>
            <!-- form -->
            <p v-if="existingEmail" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Email already taken</span>
            </p>
            <p v-if="invalidNumber" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Invalid Contact Number</span>
            </p>
            <p v-if="passNotMatch" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Password doesn't match</span>
            </p>
            <p v-if="errorRegistering" class="text-start bg-red-500 pl-3 text-white py-1 rounded lg:w-2/4 flex items-center gap-x-2">
                <Icon icon="material-symbols-light:warning-outline" class="text-2xl" />
                <span class="mt-1">Something went wrong</span>
            </p>
            <div class="flex flex-col lg:grid lg:place-content-center lg:grid-cols-2 lg:w-2/4 items-center gap-x-5 gap-y-5">
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">First Name <span class="text-red-500 text-sm">*</span></label>
                    <input type="text" placeholder="Firstname" class="pl-3 border border-gray-500 h-10 rounded-md capitalize" v-model="firstName" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Middle Name <span class="text-xs text-gray-400 font-light">(optional)</span></label>
                    <input type="text" placeholder="Middlename" class="pl-3 border border-gray-500 h-10 rounded-md capitalize" v-model="middleName">
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Last Name <span class="text-red-500 text-sm">*</span></label>
                    <input type="text" placeholder="Lastname" class="pl-3 border border-gray-500 h-10 rounded-md capitalize" v-model="lastName" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Email <span class="text-red-500 text-sm">*</span></label>
                    <input type="text" placeholder="Email" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="email" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Contact Number <span class="text-red-500 text-sm">*</span></label>
                    <input type="number" placeholder="639XXXXXXXXX" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="contactNumber" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Barangay <span class="text-red-500 text-sm">*</span></label>
                    <input type="text" placeholder="Address" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="address" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Municipality <span class="text-red-500 text-sm">*</span></label>
                    <input type="text" placeholder="Municipality" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="municipality" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Birthdate <span class="text-red-500 text-sm">*</span></label>
                    <input type="date" placeholder="Age" class="pl-3 border border-gray-500 h-10 rounded-md" v-model="age" required>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Gender <span class="text-red-500 text-sm">*</span></label>
                    <select class="pl-3 border border-gray-500 h-10 rounded-md" v-model="gender" required>
                        <option disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Password <span class="text-red-500 text-sm">*</span></label>
                    <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                        <input :type="passwordType" placeholder="Password" class="pl-3 w-full h-10 focus:outline-none" v-model="password" required>
                        <Icon :icon="passwordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowPassword()" />
                    </div>
                </div>
                <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                    <label class="font-semibold text-lg">Confirm Password <span class="text-red-500 text-sm">*</span></label>
                    <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                        <input :type="conPasswordType" placeholder="Password" class="pl-3 w-full h-10 focus:outline-none" v-model="conPassword" required>
                        <Icon :icon="conPasswordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowConfirmPassword()" />
                    </div>
                </div>
                <button class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center" @click="showPrivacyModal">Sign Up</button>
            </div>
            <div class="flex justify-center mt-10 gap-y-4 font-poppins font-semibold">
                <p>
                    You have an account?
                    <router-link :to="{ name: 'login' }" class="underline hover:text-custom-primary">Log in</router-link>
                </p>
            </div>

            <div v-if="showPrivacy" class="absolute top-0 left-0 bg-black/55 w-screen h-screen flex items-center justify-center">
                <div class="bg-white w-4/5 md:w-3/5 xl:w-1/4 rounded-xl p-5 text-justify space-y-5 flex flex-col items-center">
                    <Icon icon="mdi:warning" class="text-6xl text-orange-500" />
                    <h1 class="font-semibold text-lg">Privacy and Terms</h1>
                    <p class="col-span-2 w-4/5">When Registering, you agree that we may use your provided data for the registration and to send you notifications on our services. You can unsubscribe from notifications at anytime in your settings.</p>
                    <div class="flex justify-end gap-x-3 w-4/5">
                        <button class="border border-green-500 text-green-500 w-1/4 py-1 rounded" @click="showPrivacy = false">Cancel</button>
                        <button class="bg-green-500 text-white w-1/4 py-1 rounded" @click="register()" v-if="registering">Redirecting</button>
                        <button class="bg-green-500 text-white w-1/4 py-1 rounded" @click="register()" v-else>Agree</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import emailjs from 'emailjs-com';
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

const passwordType= ref('password')
const passwordIconType = ref('mdi:eye-off-outline')

const toggleShowPassword = () => {
    if(passwordType.value === 'password'){
        passwordType.value = 'text'
        passwordIconType.value = 'mdi:eye-outline'
        return
    }
    passwordType.value = 'password'
    passwordIconType.value = 'mdi:eye-off-outline'
}

const conPasswordType= ref('password')
const conPasswordIconType = ref('mdi:eye-off-outline')

const toggleShowConfirmPassword = () => {
    if(conPasswordType.value === 'password'){
        conPasswordType.value = 'text'
        conPasswordIconType.value = 'mdi:eye-outline'
        return
    }
    conPasswordType.value = 'password'
    conPasswordIconType.value = 'mdi:eye-off-outline'
}

const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const conPassword = ref('')
const contactNumber = ref('')
const address = ref('')
const municipality = ref('')
const age = ref('')
const gender = ref('Select Gender')

const existingEmail = ref(false)
const invalidNumber = ref(false)
const passNotMatch = ref(false)

const registering = ref(false)
const errorRegistering = ref(false)

const showPrivacy = ref(false)

const showPrivacyModal = () => {
    invalidNumber.value = false
    existingEmail.value = false
    if(!String(contactNumber.value).startsWith('639')){
        showPrivacy.value = false
        return invalidNumber.value = true
    }

    if(password.value !== conPassword.value){
        showPrivacy.value = false
        return passNotMatch.value = true
    }

    showPrivacy.value = true
}

const register = async () => {
    showPrivacy.value = false
    const userData = {
        name: `${firstName.value} ${middleName.value} ${lastName.value}`,
        email: email.value,
        password: password.value,
        contactNumber: contactNumber.value,
        address: address.value,
        municipality: municipality.value,
        age: age.value,
        gender: gender.value,
    }
    
    try {
        registering.value = true
        const res = await axios.post(`${serverUrl}/send-otp`, {
            name: firstName.value,
            email: email.value,
        })
        
        if(res.data == 'existing email') return existingEmail.value = true
        router.push({
            path: '/register/otp-verification',
            query: {
                email: email.value,
                name: firstName.value
            }
        })

        localStorage.setItem('otp', res.data)
        localStorage.setItem('userData', JSON.stringify(userData))
        localStorage.setItem('timerMinutes', 4)
        localStorage.setItem('timerSeconds', 59)

        var templateParams = {
            to_name: firstName.value,
            otp: res.data,
            email: email.value,
            from_name: 'Inclucity',
        };

        emailjs
        .send(
        'service_jp4qqoo',
        'ytemplate_cguzxjo',
        templateParams,
        )
        .then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            statusMessage.value = 'Message sent successfully!';
        },
        (error) => {
            console.log('FAILED...', error);
            statusMessage.value = 'Failed to send message. Please try again.';
        }
        );
    } catch (error) {
        errorRegistering.value = false
    }finally{
        registering.value = false
    }
}
</script>

<style scoped>
#container::-webkit-scrollbar {
    background-color: transparent;
    width: 3px;
}
#container::-webkit-scrollbar-thumb {
    background-color: #7B080E;
}
</style>