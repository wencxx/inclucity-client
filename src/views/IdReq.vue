<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'requirements' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <div class="w-full p-5 flex flex-col gap-y-10 mt-5">
                <div>
                    <div class="space-y-5">
                        <img src="../assets/PWD-ID-REQUIREMENTS (1) (1)_page-0001.jpg" alt="1x1 photo example" class="w-full mx-auto mt-5 border border-black">
                        <h1 class="font-semibold">PWD ID Application Requirements (Malolos City):</h1>
                        <h1 class="font-semibold">For New Applicants:</h1>
                        <ul class="list-disc list-inside">
                            <li>Application form</li>
                            <li>Medical certificate</li>
                            <li>Two 1x1 ID photos</li>
                            <li>Barangay certificate</li>
                        </ul>
                        <h1 class="font-semibold">For Renewal:</h1>
                        <ul class="list-disc list-inside">
                            <li>Application form</li>
                            <li>Two 1x1 ID photos</li>
                            <li>Barangay certificate</li>
                            <li>Old ID & booklet</li>
                        </ul>
                        <p>For more details, contact the Malolos City Information Office.</p>
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