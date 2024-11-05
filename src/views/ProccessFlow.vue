<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'requirements' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <div class="w-full p-5 flex flex-col gap-y-10 mt-5">
                <div>
                    <div class="space-y-5">
                        <img src="../assets/BAMBI-CAD.jpg" alt="1x1 photo example" class="w-full mx-auto mt-5 border border-black">
                        <h1>This image is a Process Flow for the Issuance of PWD ID (New & Renewal) by the City Social Welfare and Development Office (CSWDO) in Malolos, Bulacan.<br>Process Overview:</h1>
                        <ol class="list-decimal list-inside">
                            <li>Application Form – Obtain from the CSWDO-CAD Office.</li>
                            <li>Barangay Certificate – Secure from the respective Barangay Hall.</li>
                            <li>Medical Certificate – Obtain from RHU or specialist doctors based on the type of disability.</li>
                            <li>Submission – Submit documents to CSWDO-CAD for validation and issuance.</li>
                        </ol>
                        <p>The PWD ID is released within 5–10 minutes after requirements are verified.</p>
                    </div>
                </div>
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