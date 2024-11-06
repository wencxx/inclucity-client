<template>
    <div class="container md:w-2/3 xl:w-1/2 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'home' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <div class="w-full p-5 flex flex-col gap-y-5 mt-5">
                <h1 class="text-center font-semibold">Benefits of PWD ID Card Holder in the Philippines (RA 10754)</h1>
                <!-- Accordion Item 1 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(1)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Discount and Tax exemption</span>
                        <span class="text-black">
                            <Icon id="icon-1" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span class="font-bold">20% Discount and Value Added Tax (VAT)</span><br>
                            <span class="font-bold">Exemption</span><br>
                            <ul class="list-disc list-inside">
                                <li>Food, Beverages, and Consumable Food Items</li>
                                <li>Medical and Dental Services</li>
                                <li>Professional Fees of Attending Physicians</li>
                                <li>Domestic Air and Sea Travel</li>
                                <li>Land Transportation Fares</li>
                                <li>Admission Fees to Theaters, Cinemas, and Concert Halls</li>
                            </ul>
                            <br>
                            <span>NOTE: Keep in mind that PWDs cannot combine discounts. If a service has a promotional discount, they can choose either the 20% PWD discount or the promo discount, whichever is greater.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 2 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(2)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Special Discount</span>
                        <span class="text-black">
                            <Icon id="icon-2" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span class="font-bold">5% Special Discount on Basic Necessities and Prime Commodities</span><br>
                        <span class="font-bold">Basic Necessities:</span><br>
                        <ul class="list-disc list-inside">
                            <li>Rice, corn, bread, and fresh, dried, or canned fish and other marine products</li>
                            <li>Fresh pork, beef, and poultry, as well as their fresh, dried, or canned forms</li>
                            <li>Fresh dairy products, such as milk, eggs, and cheese</li>
                            <li>Coffee, sugar, and cooking oil</li>
                            <li>Fresh vegetables and fruits</li>
                            <li>Garlic and onions</li>
                            <li>Fresh and dried root crops</li>
                        </ul>
                        <span class="font-bold">Prime Commodities:</span><br>
                        <ul class="list-disc list-inside">
                            <li>Processed milk, powdered milk, and infant formula</li>
                            <li>Salt and laundry soap</li>
                            <li>Instant noodles and other similar items</li>
                            <li>Meat products, such as corned beef and luncheon meat</li>
                            <li>Canned pork, beef, and poultry</li>
                            <li>Soy sauce, vinegar, and other condiments</li>
                            <li>Dried or processed fruits and vegetables</li>
                            <li>Bottled water</li>
                        </ul>
                        <br>
                        <span>NOTE: A PWD who is also a senior citizen may avail of the discount from only one category—either as a PWD or as a senior citizen. This means they must choose which discount to apply at the time of purchase, ensuring they receive the benefit from only one entitlement.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 3 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(3)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Mandatory Coverages</span>
                        <span class="text-black">
                            <Icon id="icon-3" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span class="font-bold">Mandatory Coverage Under SSS/GSIS, National Health Insurance, and Pag-IBIG</span><br>
                        <ul class="list-disc list-inside">
                            <li>PWDs are covered by  the national health insurance program, which provides access to a wide range of healthcare services, including inpatient and outpatient care, surgery, therapy, and other medical needs. PhilHealth benefits help reduce the cost of healthcare for PWDs and their families
                            The GSIS provides benefits based on the 3 kinds of disability determined by GSIS based on established medical standards which are: permanent total disability, permanent partial disability, and temporary total disability.
                            Pag-IBIG members who become permanently and totally disabled are entitled to the monthly income benefits for life equivalent to the basic monthly pension (BMP) effective from the date of disability.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <h1 class="text-center font-semibold">Additional Benefits</h1>
                <!-- Accordion Item 4 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(4)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Tax Benefits</span>
                        <span class="text-black">
                            <Icon id="icon-4" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-4" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>Income Tax Deduction: Parents or guardians of PWDs can claim an additional tax deduction for each dependent PWD under their care. This tax benefit aims to reduce the financial burden on families supporting PWDs by lowering their taxable income.</li>
                            <li>Exemption from Documentary Stamp Tax: PWDs are exempt from paying documentary stamp tax on transactions related to loans, remittances, and other financial documents. This exemption reduces the cost of financial transactions for PWDs.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 5 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(5)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Educational Assistance</span>
                        <span class="text-black">
                            <Icon id="icon-5" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-5" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>Submit your application to the nearest DSWD office. The application must be accompanied by a medical certificate confirming the applicant’s disability and proof of income.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 6 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(6)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Employment Assistance</span>
                        <span class="text-black">
                            <Icon id="icon-6" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-6" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>PWDs are entitled to employment assistance, including job placement services, skills training, and reasonable workplace accommodations to enable their full participation in the workforce.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 7 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(7)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Express Lanes for PWDs</span>
                        <span class="text-black">
                            <Icon id="icon-7" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-7" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>Just like senior citizens, PWDs have a special lane in public establishments such as groceries and banks. Within this, PWDs do not have to wait in long lines just to make a purchase or make payments.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 8 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(8)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Priority Privileges</span>
                        <span class="text-black">
                            <Icon id="icon-8" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-8" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>PWDs have priority access and privileges in public establishments, facilities, and services, such as priority lanes in banks, government offices, and establishments.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 9 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(9)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">City-Specific PWD ID Benefits</span>
                        <span class="text-black">
                            <Icon id="icon-9" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-9" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>Aside from the regular benefits given, local governments have additional benefits given to PWDs, this may be in the form of cash, rice, or other necessities.</li>
                            <li>Special parking privileges: PWDs are granted special parking privileges, allowing them to use designated parking spaces near establishments for their convenience and accessibility.</li>
                            <li>To avail of the PWDs benefits in the Philippines, you must present your PWD ID at all times. In the absence of this ID, those with an apparent disability may present another ID to get PWD ID benefits.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 10 -->
                <div class="border px-2  border-custom-primary rounded">
                    <button @click="toggleAccordion(10)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium">Utility Discounts</span>
                        <span class="text-black">
                            <Icon id="icon-10" icon="ri:arrow-down-s-line" class="text-xl duration-300" />
                        </span>
                    </button>
                    <div id="content-10" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <ul class="list-disc list-inside">
                            <li>Some local government units (LGUs) and utility providers offer discounts on electricity, water, and other utility services to PWDs. These discounts help reduce the monthly expenses of PWD households, making basic utilities more affordable.</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <img src="../assets/pwdss-removebg-preview.png" class="w-full">
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