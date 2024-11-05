<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'requirements' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <div class="border shadow-inner w-full p-5 flex flex-col gap-y-10 mt-5">
                <div>
                    <div>
                        <div class="flex items-center gap-x-2">
                            <Icon icon="heroicons:check-16-solid" class="text-4xl text-blue-500" />
                            <p class="font-poppins font-semibold text-xl">1x1 Photo</p>
                        </div>
                        <img src="../assets/photoExampe.jpg" alt="1x1 photo example" class="w-2/4 aspect-square mx-auto mt-5 border border-black">
                        <p class="w-3/4 text-center mx-auto mt-5 font-medium">Provide a recent 1x1 inch (or passpord-sized) color photo of yourself. Make sure it's clear and shows your face fully.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="flex items-center gap-x-2">
                            <Icon icon="heroicons:check-16-solid" class="text-4xl text-blue-500" />
                            <p class="font-poppins font-semibold text-xl">Medical Certificate</p>
                        </div>
                        <img src="../assets/medcert.jpg" alt="1x1 photo example" class="w-3/4 mx-auto mt-5 border border-black">
                        <p class="w-3/4 text-center mx-auto mt-5 font-medium">Obtain a medical certificate from a qualified healthcare professional (doctor, therapist, etc.) stating your disability. The certificate should include the diagnosis, the impact of the disability on your daily life, and any recommended accomodations or assistance.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="flex items-center gap-x-2">
                            <Icon icon="heroicons:check-16-solid" class="text-4xl text-blue-500" />
                            <p class="font-poppins font-semibold text-xl">Barangay Certificate</p>
                        </div>
                        <img src="../assets/barangayCert.jpg" alt="1x1 photo example" class="w-3/4 mx-auto mt-5 border border-black">
                        <p class="w-3/4 text-center mx-auto mt-5 font-medium">Get a barangay certificate from your local barangay office stating your residency. This certificate confirms your address and may be required for verification purposes.</p>
                    </div>
                </div>
                <p class="w-3/4 text-center mx-auto mt-5 font-medium">Make sure all documents are clear and legible, and include your name and other relevant details. Keep copies of all documents for your record.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue' 
import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL

</script>

<style scoped>
#reqContainer::-webkit-scrollbar {
    display: none;
}
</style>