<template>
    <section class="h-[90dvh] font-poppins overflow-y-scroll overflow-x-hidden">
        <div class="bg-custom-primary h-1/5 lg:h-1/3 md:w-3/5 mx-auto relative">
            <div v-if="!user || updating" class="absolute left-1/2 -translate-x-1/2 top-5 flex flex-row gap-2">
                <div class="w-3 aspect-square rounded-full bg-white animate-bounce"></div>
                <div class="w-3 aspect-square rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-3 aspect-square rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
            </div>
            <p v-if="err" class="animate-pulse absolute left-1/2 -translate-x-1/2 top-5 bg-red-500 rounded px-3 text-white font-manrope">Error updating information</p>
            <p v-if="errUpdatingProfile" class="animate-pulse absolute left-1/2 -translate-x-1/2 top-5 bg-red-500 rounded px-3 text-white font-manrope">Error updating profile</p>
            <p v-if="updatedProfile" class="absolute left-1/2 -translate-x-1/2 top-5 bg-green-500 rounded px-3 text-white font-manrope">Updated profile successfully</p>
            <div class="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div class=" w-[25dvw] md:w-[15dvw] lg:w-[10dvw] rounded-full aspect-square bg-gray-100  flex items-center justify-center relative group">
                    <img v-if="user?.profile" :src="user?.profile" alt="profice picture" class="w-[24dvw] md:w-[14dvw] lg:w-[9dvw] aspect-square rounded-full">
                    <Icon v-else icon="bi:person-circle" class="text-[24dvw] md:text-[14dvw] lg:text-[9dvw]" />
                    <div class="absolute bottom-0 left-0 h-1/2 w-full bg-black/15 rounded-b-full hidden group-hover:flex hover:bg-black/20 items-center justify-center">
                        <Icon icon="bi:camera" class="text-4xl text-white hover:text-custom-secondary" @click="chooseImage" />
                        <input type="file" class="hidden" id="imageInput" accept=".jpg, .jpeg, .png" @change="handleImageUpload()" required>
                    </div>
                </div>
                <h1 class="text-center font-bold text-2xl">{{ user?.name }}</h1>
                <div class="flex flex-wrap justify-center w-[100dvw] gap-x-1">
                    <p class="text-center font-semibold capitalize">{{ application.typeOfDisability }}</p>
                </div>
            </div>

            <div v-if="uploadedImage" class="bg-white rounded-lg w-3/4 md:w-1/3 flex flex-col items-center justify-center gap-y-10 py-10 absolute top-10 left-1/2 -translate-x-1/2 shadow-md">
                <div class="w-3/4 aspect-square flex items-center justify-center">
                    <img :src="imgSrc" alt="new profile pic" class="w-full aspect-square rounded-full">
                </div>
                <div class="flex justify-end gap-x-3 w-3/4">
                    <button @click="uploadedImage = false" class="bg-transparent text-custom-primary border border-custom-primary w-1/3 py-1 rounded-md hover:bg-custom-primary hover:text-white">Cancel</button>
                    <button class="bg-custom-primary text-white border border-custom-primary w-1/3 py-1 rounded-md hover:bg-transparent hover:text-custom-primary" @click="updateProfile">Update</button>
                </div>
            </div>
        </div>
        <!-- information -->
        <div class="bg-white w-4/5 mx-auto py-5 mt-32 lg:mt-40 md:w-3/5 shadow-md rounded-xl flex flex-col items-center gap-y-5">
            <div class="text-center">
                <p class="font-semibold">Person With Disablity Number</p>
                <p class="text-custom-secondary font-medium">{{ convertApplicationNum(application?.applicationNumber) }}</p>
            </div>
            <div class="text-center">
                <p class="font-semibold">Nationality</p>
                <p class="text-custom-secondary font-medium" v-if="application">Filipino</p>
            </div>
            <div class="text-center">
                <p class="font-semibold">Email Address</p>
                <p class="text-custom-secondary font-medium">{{ user?.email }}</p>
            </div>
            <div class="text-center">
                <p class="font-semibold">Current Address</p>
                <p class="text-custom-secondary font-medium">{{ user?.address }}</p>
            </div>
        </div>
        <div class="flex flex-col gap-y-5 mt-10 items-center w-4/5 md:w-3/5 mx-auto">
            <button class="bg-custom-primary text-white p-2 rounded hover:bg-red-950" @click="toggleUpdate()">Update account information</button>
            <button class="text-red-500 hover:text-red-700" @click="deleteAccountModal = true">Delete account</button>
        </div>

        <!-- update account modal -->
        <div v-if="updateAccount" @click.self="toggleUpdate()" class="h-screen w-screen absolute top-0 left-0 bg-black/15 flex items-center justify-center">
            <div class="bg-white w-3/4 md:w-1/2 py-6 rounded-md shadow flex flex-col items-center gap-y-3 font-manrope font-semibold uppercase">
                <h1>Update account information</h1>
                <form @submit.prevent="update()" class="flex w-full flex-col lg:grid lg:place-content-center lg:grid-cols-2 lg:w-4/5 items-center gap-x-5 gap-y-2">
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Name</label>
                        <input type="text" placeholder="Fullname" class="pl-3 border border-gray-500 h-8 rounded-md" v-model="name">
                    </div>
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Email</label>
                        <input type="text" placeholder="Email" class="pl-3 border border-gray-500 h-8 rounded-md" v-model="email">
                    </div>
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Password</label>
                        <div class="w-full border border-gray-500 flex items-center rounded-md overflow-hidden group focus-within:outline outline-black outline-1">
                            <input :type="passwordType" placeholder="Password" class="pl-3 w-full h-8 focus:outline-none" v-model="password">
                            <Icon :icon="passwordIconType" class="text-2xl mr-2 bg-white" @click="toggleShowPassword()" />
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Contact Number</label>
                        <input type="number" placeholder="639XXXXXXXXX" class="pl-3 border border-gray-500 h-8 rounded-md" v-model="contactNumber">
                    </div>
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Address</label>
                        <input type="text" placeholder="Address" class="pl-3 border border-gray-500 h-8 rounded-md" v-model="address">
                    </div>
                    <div class="flex flex-col gap-y-1 w-3/4 md:w-2/5 lg:w-full">
                        <label class="font-semibold text-md">Age</label>
                        <input type="number" placeholder="Age" class="pl-3 border border-gray-500 h-8 rounded-md" v-model="age">
                    </div>
                    <button class="bg-custom-primary w-3/4 md:w-2/5 lg:w-3/5 text-white py-2 rounded-xl uppercase mt-5 hover:bg-red-900 lg:col-span-2 place-self-center">Update</button>
                </form>
            </div>
        </div>

        <!-- delete account warning modal -->
        <div v-if="deleteAccountModal" @click="deleteAccountModal = false" class="h-screen w-screen absolute top-0 left-0 bg-black/15 flex items-center justify-center">
            <div class="bg-white w-3/4 md:w-2/5 lg:w-1/5 py-6 px-3 lg:px-10 text-center rounded-md shadow flex flex-col items-center gap-y-3 md:gap-y-10 font-manrope font-semibold uppercase">
                <h1 class="md:text-xl">Do you want to proceed with the deletion</h1>
                <div class="flex gap-x-3">
                    <button class="bg-green-500 text-white py-2 px-3 rounded" @click="deleteAccountModal = false">No</button>
                    <button class="bg-red-600 text-white py-2 px-3 rounded" @click="deleteAccount()">Yes</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { computed, ref, watch } from 'vue'
import { useAuthStore, useApplicationStore } from '../store'
import { useRouter } from 'vue-router';
const serverUrl = import.meta.env.VITE_SERVER_URL

const authStore = useAuthStore()
const applicationStore = useApplicationStore()

const router = useRouter()

const user = ref(computed(() => authStore.user))
const application = computed(() => applicationStore.application)

const convertApplicationNum = (num) => {
    const convertedToString = num?.toString()
    if(convertedToString?.length === 1) return `0000${num}`
    if(convertedToString?.length === 2) return `000${num}`
    if(convertedToString?.length === 3) return `00${num}`
    if(convertedToString?.length === 4) return `0${num}`
    if(convertedToString?.length === 5) return num
}

const updateAccount = ref(false)

const toggleUpdate = () => {
    updateAccount.value = !updateAccount.value
}

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

const deleteAccountModal = ref(false)

const deleteAccount = async () => {
    try {
        const res = await axios.delete(`${serverUrl}/delete-user`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(res.data)
        if(res.data === 'deleted'){
            authStore.logout()
            router.push('/')
            return
        }
    } catch (error) {
        console.log(error)
    }
}

const name = ref('')
const email = ref('')
const password = ref('')
const contactNumber = ref('')
const address = ref('')
const age = ref('')

watch(user, (newUser) => {
    if (newUser) {
        name.value = newUser.name || ''
        email.value = newUser.email || ''
        contactNumber.value = newUser.contactNumber || ''
        address.value = newUser.address || ''
        age.value = newUser.age || ''
    }
}, { immediate: true })

const updating = ref(false)
const err = ref(false)


const update = async () => {
    const userData = {
        name: name.value,
        email: email.value,
        password: password.value,
        contactNumber: contactNumber.value,
        address: address.value,
        age: age.value
    }
    
    try {
        updating.value = true
        const res = await axios.put(`${serverUrl}/update-user`, userData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'updated'){
            authStore.getUser()
            updateAccount.value = false
        }else{
            console.log(res.data)
        }
    } catch (error) {
        console.error(error)
        err.value = true
        setTimeout(() => {
            err.value = false
        }, 5000)
    }finally{
        updating.value = false
        updateAccount.value = false
    }
}

const uploadedImage = ref(false)
const imgSrc = ref('')
const imageToUpdate = ref(null)
const errUpdatingProfile = ref(false)
const updatedProfile = ref(false)


const chooseImage = async () => {
    const imageInput = document.getElementById('imageInput')

    imageInput.click()
}

const handleImageUpload = () => {
    const image = event.target.files[0]

    if(image){
        imgSrc.value = URL.createObjectURL(image)
        imageToUpdate.value = image
        uploadedImage.value = true
    }
}

const updateProfile = async () => {
    const imageDate = new FormData()

    imageDate.append('profile', imageToUpdate.value)
    try {
        const res = await axios.patch(`${serverUrl}/update-profilepic`, imageDate, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.status == 200){
            authStore.getUser()
            updatedProfile.value = true
            setTimeout(() => {
                updatedProfile.value = false
            }, 3000)
            console.log(res.data)
            return
        } 
        errUpdatingProfile.value = true
    } catch (error) {
        errUpdatingProfile.value = true
        setTimeout(() => {
            errUpdatingProfile.value = false
        }, 3000)
        console.log(error)
    }finally{
        uploadedImage.value = false
    }
}
</script>

<style>

</style>