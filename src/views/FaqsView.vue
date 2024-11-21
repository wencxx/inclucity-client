<template>
    <div class="md:w-2/3 xl:w-full px-10 lg:px-0 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <div class="relative h-[50dvh]">
                <img src="../assets/faq.jpg" alt="faq" class="w-full h-full">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
                    <h1 class="text-5xl text-center text-custom-primary font-bold text-outline">Frequently Askeds Questions</h1>
                </div>
            </div>
            <div class="w-1/2 mx-auto rounded p-5 flex flex-col gap-y-5 mt-14 px-20 bg-white">
                <!-- Accordion Item 1 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(1)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                1
                            </div>
                            What is a PWD ID?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-1" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <img src="../assets/PWD_ID_Card-e1578482221310.webp" alt="">
                            <span>
                                The PWD ID is the standard identification card for persons with disability (PWDs) in the Philippines. It's issued by the Persons with Disability Affairs Office (PDAO) or the city/municipal Social Welfare and Development Office where the cardholder lives. Cardholders can use this card to avail of PWD discounts and other benefits as mandated by the law.
                                <br><br>
                                The PWD ID is free of charge when issued for the first time. There's a minimal fee for PWD ID renewal due to expiration, damage, or loss of card.
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 2 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(2)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                2
                            </div>
                            How Long is the Validity of the PWD ID Card
                        </span>
                        <span class="text-black">
                            <Icon id="icon-2" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-2" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>Based on the guidelines under the National Council on Disability Affairs, PWDs are required to renew their PWD IDs every five years.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 3 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(3)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                3
                            </div>
                            Who Can Get a PWD ID?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-3" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-3" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>
                                Who is considered a PWD? Any Filipino with a permanent disability can apply for a PWD ID. Republic Act 10754[2] defines persons with disability as those with "long-term physical, mental, intellectual, or sensory impairments" that interfere with their interactions in society.</span><br><br>
                            <span class="font-bold">PWD List of Disabilities in the Philippines.</span><br><br>
                            <span class="font-bold">The Department of Health (DOH) considers those with the following types of disabilities eligible for a PWD ID:</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Psychosocial disability - Bipolar disorder, depression, ADHD, schizophrenia, epilepsy, and other long-term and recurring mental or behavioral issues.</li>
                                <li>Disability resulting from a chronic illness - Orthopedic disability due to cancer, blindness due to diabetes, and other disabilities due to a chronic disease.</li>
                                <li>Learning disability - Processing problems that hinder learning math, reading, writing, and other basic skills.</li>
                                <li>Visual disability - Does not include simple poor eyesight, unless the visual impairment can't be corrected; individuals with such conditions need to present a medical certificate from their ophthalmologist with a clearance of functional limitation due to poor eyesight.</li>
                                <li>Orthopedic (Musculoskeletal) disability - Dwarfism, amputated hands or feet, scoliosis.</li>
                                <li>Hearing disability - Auditory disabilities such as profound hearing loss.</li>
                                <li>Speech impairment - Speech disabilities ranging from inability to speak to insufficiently clear speech.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 4 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(4)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                4
                            </div>
                            How to Get a PWD ID?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-4" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-4" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span class="font-bold">Good news, online and walk-in applicants are eligible to apply for PWD ID in Malolos.</span><br><br>
                            <span class="font-semibold">A. For Online Application</span><br><br>
                            <span class="font-medium">PWD ID online application is now available in the City of Malolos Bulacan. All you have to do is:</span><br><br>
                            <span class="font-medium">Step 1: Prepare first the photos/soft copies of  PWD ID Card Requirements.</span><br><br>
                            <span class="font-semibold">For New Applicants, prepare the following:</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Recent 1x1 ID picture</li>
                                <li>Barangay Certificate proving that you are residing in Malolos, Bulacan.</li>
                                <li>Document to confirm disability condition from licensed private or government clinic, or hospital-based medical professional (Medical Certificate).</li>
                            </ul><br><br>
                            <span class="font-semibold">For Renewal Applicants:</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Recent 1x1 ID picture</li>
                                <li>Barangay Certificate proving that you are residing in Malolos, Bulacan.</li>
                                <li>Old ID/Booklet.</li>
                            </ul>
                            <span class="font-medium">Step 2: Create an Account to the Online System.</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Find the "Sign Up" or "Create Account" Option</li>
                                <li>Enter Your Personal Information.</li>
                            </ul><br>
                            <span class="font-medium">Enter required details like:</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Full Name</li>
                                <li>Email Address or Phone Number.</li>
                                <li>Password (create a strong password).</li>
                                <li>Address.</li>
                                <li>Birthday.</li>
                            </ul>
                            <span class="font-medium">Step 3: Go to PWD ID Application</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Select the type of application if its Renewal or Application</li>
                                <li>Input the required fields on the online application and ensure that your answers are accurate.</li>
                                <li>Submit the soft copies/photos of your requirements.</li>
                                <li>Click Submit.</li>
                                <li>Wait for the approval of your application.</li>
                                <li>Once your application is approved save your receipt as a photo.</li>
                            </ul><br>
                            <span class="font-medium">Step 4: Go to the Municipality of Malolos to Claim your PWD ID</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Present your receipt to the officers</li>
                            </ul><br><br>
                            <span class="font-semibold">B. For Walk in</span><br><br>
                            <span class="font-medium">Step 1: Prepare the  PWD ID Card Requirements.</span><br><br>
                            <span class="font-semibold">For New Applicants, prepare the following:</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Recent 1x1 ID picture</li>
                                <li>Barangay Certificate proving that you are residing in Malolos, Bulacan.</li>
                                <li>Document to confirm disability condition from licensed private or government clinic, or hospital-based medical professional (Medical Certificate)</li>
                            </ul><br><br>
                            <span class="font-semibold">For Renewal Applicants</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Recent 1x1 ID picture</li>
                                <li>Barangay Certificate proving that you are residing in Malolos, Bulacan.</li>
                                <li>Old ID/Booklet</li>
                            </ul><br><br>
                            <span class="font-medium">Step 1: Go to Municipality of Malolos.</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Go to the CWSDO Office and request a walk-in application for a PWD ID</li>
                            </ul><br><br>
                            <span class="font-medium">Step 3: Submit your requirements and state your personal details.</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>An CSWDO Officer will accompany you through the process of application.</li>
                                <li>Ensure that all of your information is stated clearly and accurately.</li>
                            </ul><br><br>
                            <span class="font-medium">Step 4: Claim your ID</span><br><br>
                            <ul class="list-disc list-inside">
                                <li>Claim your PWD ID card and the purchase booklet you'll use each time you avail of a PWD benefit.</li>
                            </ul><br><br>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 5 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(5)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                5
                            </div>
                            Is a PWD ID considered a valid ID?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-5" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-5" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span>Yes, it’s accepted as a valid ID in most government and private transactions.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 6 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(6)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                6
                            </div>
                            Do persons with disabilities have PhilHealth coverage?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-6" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-6" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span>Yes, they have automatic and mandatory PhilHealth coverage. </span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 7 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(7)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 !text-start">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                7
                            </div>
                            Do I still need to go to the Municipal/City Social Welfare Development Office if I apply for my PWD ID Online?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-7" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-7" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span>Yes. A successful PWD ID online application doesn’t mean you’ll be automatically issued a PWD ID. You still need to go to your Municipal or City Social Welfare Development Office to complete the process and receive the PWD ID.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 8 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(8)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                8
                            </div>
                            How do I verify the status of my PWD ID card?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-8" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-8" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                        <span>Go to the Department of Health's Philippine Registry for Persons with Disability at pwd.doh.gov.ph/home.php. Click ID Verification and enter your ID number to check the status of your PWD ID.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 9 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(9)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center text-start">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                9
                            </div>
                            What if the PWD is bedridden and can’t go to the Municipal/City Social Welfare Development Office?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-9" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-9" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>Their designated guardian can go instead. Just present an authorization letter and other documentary requirements on behalf of the PWD.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 10 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(10)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                10
                            </div>
                            I lost my PWD ID. What should I do?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-10" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-10" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>Get a notarized Affidavit of Loss and present this at your PDAO with your purchase booklet and a valid ID.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 11 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(11)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                11
                            </div>
                            Where do I report a fake PWD ID?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-11" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-11" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>The Social Welfare Department requests the public to report any incidents involving the sale of fake PWD IDs to the NCDA (through council@ncda.gov.ph), PDAO, or any law enforcement agency.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 12 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(12)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center text-start">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                12
                            </div>
                            Are those with a psychosocial or learning disability entitled to PWD benefits?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-12" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-12" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>Yes. PWDs with disabilities other than physical ones can get a PWD ID and enjoy the privileges that come with it.</span><br><br>
                            <span>Take the case of an owner of a restaurant in Makati who posted her experience with a customer who presented a PWD ID card.[6] She mentioned that the customer looked “pretty able-bodied.” She added that she felt it was too easy to get a PWD card and that it was being abused.</span><br><br>
                            <span>In the now-deleted post, the restaurant owner attached a photo of the PWD card, which stated that the ID bearer has a “psychosocial disability.” The post blew up when netizens shared their thoughts about disabilities, which aren't always visibly seen or noticed. The restaurant owner has since issued an apology for her unfair judgment.</span><br><br>
                            <span>If you’re someone with psychosocial, learning, mental, or intellectual disabilities and an establishment doesn’t honor your PWD ID, report the incident to the NCDA via email.</span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 13 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(13)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                12
                            </div>
                            Are PWDs exempted from Expanded Number Coding?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-13" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-13" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>According to the MMDA, senior citizens and persons with disabilities are no longer exempted. Instead, PWDs and senior citizens can use the window hours of 10:01 a.m. until before 5 p.m. to travel. </span>
                        </div>
                    </div>
                </div>
                <!-- Accordion Item 14 -->
                <div class="border-b border-gray-500 px-2 pb-3">
                    <button @click="toggleAccordion(14)" class="w-full flex justify-between items-center py-2 text-black">
                        <span class="text-custom-primary font-medium flex gap-x-2 items-center">
                            <div class="bg-blue-500 px-3 py-1 text-white rounded-full">
                                13
                            </div>
                            Are online purchases eligible for the PWD discount?
                        </span>
                        <span class="text-black">
                            <Icon id="icon-14" icon="ri:arrow-down-s-line" class="text-xl duration-300 text-custom-primary" />
                        </span>
                    </button>
                    <div id="content-14" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5 text-sm text-black">
                            <span>Yes. Under the Joint Memorandum No. 1 Series of 2002, PWDs can avail of the 20% discount on their purchases of essential goods and commodities through online platforms.</span><br><br>
                            <span>Reference:</span><br>
                            <a class="text-blue-500" href="https://www.moneymax.ph/government-services/articles/pwd-id-application
https://digido.ph/articles/pwd-id#How_Long_is_the_Validity_of_the_PWD_ID_Card
">https://www.moneymax.ph/government-services/articles/pwd-id-application
https://digido.ph/articles/pwd-id#How_Long_is_the_Validity_of_the_PWD_ID_Card
</a>
                        </div>
                    </div>
                </div>
            </div>
            <img src="../assets/pwd_bg2-removebg-preview.png" class="w-full">
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
.text-outline {
  text-shadow: 1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white;
}
</style>