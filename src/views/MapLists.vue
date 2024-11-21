<template>
    <div class="md:w-2/3 xl:w-full font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] w-full overflow-y-scroll overflow-x-hidden">
            <div class="relative h-[20dvh] w-full">
                <img src="../assets/maps.png" class="h-full w-full">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p class="text-white font-bold text-6xl tracking-wider text-center">DIRECTORY MAP</p>
                </div>
            </div>
            <div class="w-full p-5 flex flex-col gap-y-5 mt-5 px-20">
                <!-- Accordion Item 1 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(1)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Hospitals</span>
                        <span class="text-black">
                            <Icon id="icon-1" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.858673', lng: '120.816498' } }">Bulacan Medical Center</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.845672', lng: '120.816948' } }">Malolos San Vicente Hospital</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.847582', lng: '120.814164' } }">Malolos Health Providers, Inc</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.852130', lng: '120.817750' } }">Sacred Heart Hospital of Malolos</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.837707', lng: '120.813451' } }">Mary Immaculate Maternity & General Hospital</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.845182', lng: '120.813105' } }">OFELIA L. MENDOZA MATERNITY & GEN. HOSPITAL</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.850030', lng: '120.822699' } }">Malolos EENT Hospital</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.840909', lng: '120.811715' } }">Santos General Hospital</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 2 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(2)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Barangay Halls</span>
                        <span class="text-black">
                            <Icon id="icon-2" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.829487', lng: '120.837038' } }">Balite Barangay Hall</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.850631', lng: '120.836091' } }">Dakila Barangay Hall</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.857875', lng: '120.800868' } }">New Bulihan Barangay Hall</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.876172', lng: '120.784225' } }">Longos Barangay Hall</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.882215', lng: '120.818490' } }">Lugam Barangay Hal</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.875698', lng: '120.825722' } }">Santisima Trinidad Barangay Hal</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 3 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(3)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">EVACUATION CENTER</span>
                        <span class="text-black">
                            <Icon id="icon-3" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.860838', lng: '120.811417' } }">Bulacan Evacuation Center</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 4 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(4)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">FIRE STATIONS</span>
                        <span class="text-black">
                            <Icon id="icon-4" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-4" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.864364', lng: '120.820714' } }">Malolos City Fire Station</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.856208', lng: '120.815824' } }">Bulacan Fire Station</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 5 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(5)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">CLINICS</span>
                        <span class="text-black">
                            <Icon id="icon-5" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-5" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.848941', lng: '120.814290' } }">St. Vincent's Polyclinic</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 6 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(6)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">MALOLOS CITY HALL</span>
                        <span class="text-black">
                            <Icon id="icon-6" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-6" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <ul class="flex flex-col gap-y-2">
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.860861', lng: '120.810176' } }">Malolos City Hall</router-link>
                                </li>
                                <li class="flex items-center gap-x-2">
                                    <Icon icon="mdi:map-marker" />
                                    <router-link :to="{ name: 'mapView', query: { lat: '14.856711', lng: '120.814604' } }">Bulacan Provincial Capitol</router-link>
                                </li>
                            </ul>
                        </div>
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


function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
    }
}
</script>

<style scoped>
#reqContainer::-webkit-scrollbar {
    display: none;
}
</style>