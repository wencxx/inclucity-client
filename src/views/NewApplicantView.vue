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
            <h1 class="text-black font-semibold text-xl uppercase">Personal Information</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-3">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Last Name</label>
                    <input type="text" placeholder="Enter last name" class="h-10 border pl-2 rounded" v-model="lastName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">First Name</label>
                    <input type="text" placeholder="Enter first name" class="h-10 border pl-2 rounded" v-model="firstName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Middle Name</label>
                    <input type="text" placeholder="Enter middle name" class="h-10 border pl-2 rounded" v-model="middleName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Suffix</label>
                    <input type="text" placeholder="Enter suffix" class="h-10 border pl-2 rounded" v-model="suffix">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Date of Birth</label>
                    <input type="date" class="h-10 border pl-2 rounded" v-model="dateOfBirth">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Gender</label>
                    <select class="h-10 border pl-2 rounded" v-model="gender">
                        <option disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Civil Status</label>
                    <select class="h-10 border pl-2 rounded" v-model="civilStatus">
                        <option disabled>Select Civil Status</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Seperated</option>
                        <option>Cohabitation (Live-in)</option>
                        <option>Widow/er</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- third step -->
        <div v-if="currentPage == 3" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Type of disability</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="deaf/hard of hearing" true-value="deaf/hard of hearing" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Deaf/Hard of hearing</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5" >
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="intellectual disability" true-value="intellectual disability" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Intellectual Disablity</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="Learning disability" true-value="Learning disability" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Learning Disablity</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="mental disability" true-value="mental disability" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Mental Disablity</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="physical disability(Orthopedic)" true-value="physical disability(Orthopedic)" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Physical Disablity(Orthopedic)</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="psychosicial disability" true-value="psychosicial disability" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Psychosocial Disability</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="speech and language impairment" true-value="speech and language impairment" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Speech and Language Impairment</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="visual disability" true-value="visual disability" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Visual Disability</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="cancer" true-value="cancer" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Cancer (RA11215)</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="rare disease" true-value="rare disease" false-value="" v-model="typeOfDisability">
                    <label class="font-semibold">Rare Disease (RA107747)</label>
                </div>
            </div>
        </div>
        <!-- fourth step -->
        <div v-if="currentPage == 4" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Cause of disability</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <p class="text-lg text-black font-medium md:col-span-2">*Congenital/Inborn</p>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="autism" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Autism</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="adhd" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">ADHD</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="cerebral palsy" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Cerebral Palsy</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="down syndrome" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Down Syndrome</label>
                </div>
                <p class="text-lg text-black font-medium md:col-span-2">*Acquired</p>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="chronic illness" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Chronic Illness</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="infecations" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Infecations</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="injury" false-value="" v-model="causeOfDisability" @change="changeCauseOfDisability('checkbox')">
                    <label class="font-semibold">Injury</label>
                </div>
                <p class="text-lg text-black font-medium md:col-span-2">*Others</p>
                <input type="text" placeholder="Please specify" class="h-10 border pl-2 rounded -mt-2 w-3/5 md:w-full" v-model="otherCauseOfDisability" @input="changeCauseOfDisability('input')">
            </div>
        </div>
        <!-- fifth step -->
        <div v-if="currentPage == 5" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Residence Address</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">House no.(optional) and Street</label>
                    <input type="text" placeholder="Enter house no. and street" class="h-10 border pl-2 rounded" v-model="houseNoAndStreet">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Barangay</label>
                    <input type="text" placeholder="Enter barangay" class="h-10 border pl-2 rounded" v-model="barangay">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Municipality/City</label>
                    <input type="text" placeholder="Enter municipality/city" class="h-10 border pl-2 rounded" v-model="municipalityCity">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Province</label>
                    <input type="text" placeholder="Enter province" class="h-10 border pl-2 rounded" v-model="province">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Region</label>
                    <input type="text" placeholder="Enter region" class="h-10 border pl-2 rounded" v-model="region">
                </div>
            </div>
        </div>
        <!-- sixth step -->
        <div v-if="currentPage == 6" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Contact Details</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
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
            </div>
        </div>
        <!-- seventh step -->
        <div v-if="currentPage == 7" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Educational Attainment</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="none" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">None</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="kindergarten" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Kindergarten</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="elementary" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Elementary</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="junior high school" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Junior High School</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="senior high school" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Senior High School</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="college" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">College</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="vocational" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Vocational</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" value="post graduate" false-value="" v-model="educationalAttainment">
                    <label class="font-semibold">Post Graduate</label>
                </div>
            </div>
        </div>
        <!-- eight step -->
        <div v-if="currentPage == 8" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Status of Employment</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="employed" false-value="" v-model="statusOfEmployment">
                    <label class="font-semibold">Employed</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="unemployed" false-value="" v-model="statusOfEmployment">
                    <label class="font-semibold">Unemployed</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="self-employed" false-value="" v-model="statusOfEmployment">
                    <label class="font-semibold">Self-employed</label>
                </div>
            </div>
            <div class="flex flex-col gap-y-5" v-if="statusOfEmployment == 'employed' || statusOfEmployment == 'self-employed'">
                <h1 class="text-black font-semibold text-xl">a. CATEGORY OF EMPLOYMENT</h1>
                <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="government" false-value="" v-model="categoryOfEmployment">
                        <label class="font-semibold">Government</label>
                    </div>
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="private" false-value="" v-model="categoryOfEmployment">
                        <label class="font-semibold">Private</label>
                    </div>
                </div>
                <h1 class="text-black font-semibold text-xl">a. TYPES OF EMPLOYMENT</h1>
                <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="permanent/regular" false-value="" v-model="typeOfEmployment">
                        <label class="font-semibold">Permanent/Regular</label>
                    </div>
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="seasonal" false-value="" v-model="typeOfEmployment">
                        <label class="font-semibold">Seasonal</label>
                    </div>
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="casual" false-value="" v-model="typeOfEmployment">
                        <label class="font-semibold">Casual</label>
                    </div>
                    <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                        <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value="emergency" false-value="" v-model="typeOfEmployment">
                        <label class="font-semibold">Emergency</label>
                    </div>
                </div>
            </div>
        </div>
        <!-- ninth step -->
        <div v-if="currentPage == 9" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Occupation</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='manager' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Managers</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='professionals' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Professionals</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='technicians and associate professionals' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Technicians and Associate Professionals</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='clerical support worker' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Clerical Support Worker</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='service and sales worker' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Service and Sales Worker</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='skilled agricultural, forestry and fishery workers' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Skilled Agricultural, Forestry and Fishery Workers</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='craft and related trade workers' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Craft and Related Trade Workers</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='plant and machine operators assemblers' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Plant and Machine Operators and Assemblers</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='elementary occupation' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Elementary Occupation</label>
                </div>
                <div class="flex items-center gap-x-2 border-2 border-gray-200 rounded-full w-fit py-2 px-5">
                    <input type="checkbox" class="h-6 aspect-square border pl-2 rounded" true-value='armed forcer occupation' false-value='' v-model="occupation" @change="changeOccupation('checkbox')">
                    <label class="font-semibold">Armed Forces Occupation</label>
                </div>
                <div class="flex flex-col gap-y-2 w-4/5 py-2 px-5">
                    <label class="font-semibold">Others</label>
                    <input type="text" placeholder="Please specify" v-model="otherOccupation" class="h-10 border pl-2 rounded" @input="changeOccupation('input')">
                </div>
            </div>
        </div>
        <!-- tenth step -->
        <div v-if="currentPage == 10" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Organization Information</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Organization Affiliated</label>
                    <input type="number" placeholder="044-XXXXXX" class="h-10 border pl-2 rounded" v-model="organizationAffiliated">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Contact Information</label>
                    <input type="number" placeholder="639-XXX-XXX-XXX" class="h-10 border pl-2 rounded" v-model="contactInformation">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Office Address</label>
                    <input type="text" placeholder="Enter address" class="h-10 border pl-2 rounded" v-model="officeAddress">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Tel. No.</label>
                    <input type="number" placeholder="XXXX-XXXX" class="h-10 border pl-2 rounded" v-model="telNo">
                </div>
            </div>
        </div>
        <!-- eleventh step -->
        <div v-if="currentPage == 11" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">ID Reference no.</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">SSS No.</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="sssNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">GSIS No.</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="gsisNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PAG-IBIG No.</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="pagibigNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PSN No.</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="psnNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PhilHealth No.</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="philhealthNo">
                </div>
            </div>
        </div>
        <!-- twelve step -->
        <div v-if="currentPage == 12" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Family Background</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Father's Name</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded" v-model="fathersLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded" v-model="fathersFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded" v-model="fathersMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Mother's Name</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded" v-model="mothersLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded" v-model="mothersFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded" v-model="mothersMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Guardian's Name</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded" v-model="guardiansLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded" v-model="guardiansFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded" v-model="guardiansMname">
                </div>
            </div>
        </div>
        <!-- thirteenth step -->
        <div v-if="currentPage == 13" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <h1 class="text-black font-semibold text-xl uppercase">Accomplished By</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <select class="h-10 border pl-2 rounded" v-model="accomplishedBy" @change="changeAccomplisedBy()">
                        <option disabled selected value="">Accomplished By</option>
                        <option>Applicant</option>
                        <option>Guardian</option>
                        <option>Representative</option>
                    </select>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded" v-model="accomplishedByLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded" v-model="accomplishedByFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded" v-model="accomplishedByMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Certifying Physician</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded" v-model="physicianByLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded" v-model="physicianByFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded" v-model="physicianByMname">
                </div>
            </div>
        </div>
        <!-- fourteenth step -->
        <div v-if="currentPage == 14" class="w-full lg:w-1/2 lg:mx-auto flex flex-col gap-y-5 font-manrope">
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <h1 v-if="alreadySubmitted" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Application already submitted</h1>
                <h1 v-if="imageMissing" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Please upload required images</h1>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload 1x1 photo</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('1x1photo', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Medical Certificate</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('medicalCert', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Barangay Certificate</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('barangayCert', $event)" required>
                </div>
            </div>
        </div>
        <!-- control buttons -->
        <div v-if="currentPage > 1 && currentPage < 15" class="flex gap-x-10 mt-8 justify-center lg:w-1/2 lg:mx-auto lg:px-0">
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <Icon icon="ri:arrow-left-s-line" class="text-2xl" />
                <span>Back</span>
            </button>
            <button v-if="currentPage == '14' && !loadingSubmitting" @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Submit</span>
                <Icon icon="bi:send-arrow-up" class="text-xl" />
            </button>
            <button v-if="loadingSubmitting" @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Loading...</span>
            </button>
            <button  v-if="currentPage != '14'" @click="next()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Next</span>
                <Icon icon="ri:arrow-right-s-line" class="text-2xl" />
            </button>
        </div>
        <div v-if="currentPage > 14" class="flex flex-col gap-y-10 mt-8 items-center lg:w-1/2 lg:mx-auto lg:px-0">
            <h1 class="text-3xl font-poppins">Opss nothings here</h1>
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Go Back</span>
            </button>
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute, useRouter } from 'vue-router'
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const router = useRouter()

// personal information
const lastName = ref('')
const firstName = ref('')
const middleName = ref('')
const suffix = ref('')
const dateOfBirth = ref('')
const gender = ref('Select Gender')
const civilStatus = ref('Select Civil Status')

// type of disablity
const typeOfDisability = ref('')

// cause of disablity
const causeOfDisability = ref('')
const otherCauseOfDisability = ref('')

// residence address
const houseNoAndStreet = ref('')
const barangay = ref('')
const municipalityCity = ref('')
const province = ref('')
const region = ref('')

// contact details
const landlineNo = ref('')
const mobileNo = ref('')
const emailAddress = ref('')

// educational attainement
const educationalAttainment = ref('')

// status of employment
const statusOfEmployment = ref('')
const categoryOfEmployment = ref('')
const typeOfEmployment = ref('')

// occupation
const occupation = ref('')
const otherOccupation = ref('')

// organization information
const organizationAffiliated = ref('')
const contactInformation = ref('')
const officeAddress = ref('')
const telNo = ref('')

// ID reference no.
const sssNo = ref('')
const gsisNo = ref('')
const pagibigNo = ref('')
const psnNo = ref('')
const philhealthNo = ref('')

// family background
const fathersLname = ref('')
const fathersFname = ref('')
const fathersMname = ref('')
const mothersLname = ref('')
const mothersFname = ref('')
const mothersMname = ref('')
const guardiansLname = ref('')
const guardiansFname = ref('')
const guardiansMname = ref('')

// accomplished by
const accomplishedBy = ref('Accomplished By')
const accomplishedByLname = ref('')
const accomplishedByFname = ref('')
const accomplishedByMname = ref('')
const physicianByLname = ref('')
const physicianByFname = ref('')
const physicianByMname = ref('')

const photo1x1 = ref(null)
const medicalCert = ref(null)
const barangayCert = ref(null)

const handleImageUpload = (imageType, event) => {
    if (imageType === '1x1photo') {
        photo1x1.value = event.target.files[0];
    } else if (imageType === 'medicalCert') {
        medicalCert.value = event.target.files[0];
    } else if (imageType === 'barangayCert') {
        barangayCert.value = event.target.files[0];
    }
};



// page refresh logic
const currentPage = ref(parseInt(route.query.page) || 1)

onMounted(() => {
    getDataFromLocalStorage()
})

watch(() => route.query.page, (newPage) => {
    currentPage.value = parseInt(newPage) || 1
})

const next = () => {
    setDataToLocalStorage()
    if(statusOfEmployment.value == 'unemployed' && currentPage.value == '8' ) return  router.push({ query : { page: currentPage.value + 3 }})
    router.push({ query : { page: currentPage.value + 1 }})
}

const prev = () => {
    setDataToLocalStorage()
    if(currentPage.value > 1){
        if(statusOfEmployment.value == 'unemployed' && currentPage.value == '11' ) return  router.push({ query: { page: currentPage.value - 3 } })
        router.push({ query: { page: currentPage.value - 1 } })
    }
}

const setDataToLocalStorage = () => {
    localStorage.setItem('lastName', lastName.value)
    localStorage.setItem('firstName', firstName.value)
    localStorage.setItem('middleName', middleName.value)
    localStorage.setItem('suffix', suffix.value)
    localStorage.setItem('dateOfBirth', dateOfBirth.value)
    localStorage.setItem('gender', gender.value)
    localStorage.setItem('civilStatus', civilStatus.value)
    localStorage.setItem('typeOfDisability', typeOfDisability.value)
    localStorage.setItem('causeOfDisability', causeOfDisability.value)
    localStorage.setItem('otherCauseOfDisability', otherCauseOfDisability.value)
    localStorage.setItem('houseNoAndStreet', houseNoAndStreet.value)
    localStorage.setItem('barangay', barangay.value)
    localStorage.setItem('municipalityCity', municipalityCity.value)
    localStorage.setItem('province', province.value)
    localStorage.setItem('region', region.value)
    localStorage.setItem('landlineNo', landlineNo.value)
    localStorage.setItem('mobileNo', mobileNo.value)
    localStorage.setItem('emailAddress', emailAddress.value)
    localStorage.setItem('educationalAttainment', educationalAttainment.value)
    localStorage.setItem('statusOfEmployment', statusOfEmployment.value)
    localStorage.setItem('categoryOfEmployment', categoryOfEmployment.value)
    localStorage.setItem('typeOfEmployment', typeOfEmployment.value)
    localStorage.setItem('occupation', occupation.value)
    localStorage.setItem('otherOccupation', otherOccupation.value)
    localStorage.setItem('organizationAffiliated', organizationAffiliated.value)
    localStorage.setItem('contactInformation', contactInformation.value)
    localStorage.setItem('officeAddress', officeAddress.value)
    localStorage.setItem('telNo', telNo.value)
    localStorage.setItem('sssNo', sssNo.value)
    localStorage.setItem('gsisNo', gsisNo.value)
    localStorage.setItem('pagibigNo', pagibigNo.value)
    localStorage.setItem('psnNo', psnNo.value)
    localStorage.setItem('philhealthNo', philhealthNo.value)
    localStorage.setItem('fathersLname', fathersLname.value)
    localStorage.setItem('fathersFname', fathersFname.value)
    localStorage.setItem('fathersMname', fathersMname.value)
    localStorage.setItem('mothersLname', mothersLname.value)
    localStorage.setItem('mothersFname', mothersFname.value)
    localStorage.setItem('mothersMname', mothersMname.value)
    localStorage.setItem('guardiansLname', guardiansLname.value)
    localStorage.setItem('guardiansFname', guardiansFname.value)
    localStorage.setItem('guardiansMname', guardiansMname.value)
    localStorage.setItem('accomplishedBy', accomplishedBy.value)
    localStorage.setItem('accomplishedByLname', accomplishedByLname.value)
    localStorage.setItem('accomplishedByFname', accomplishedByFname.value)
    localStorage.setItem('accomplishedByMname', accomplishedByMname.value)
    localStorage.setItem('physicianByLname', physicianByLname.value)
    localStorage.setItem('physicianByFname', physicianByFname.value)
    localStorage.setItem('physicianByMname', physicianByMname.value)
}

const getDataFromLocalStorage = () => {
    lastName.value = localStorage.getItem('lastName') || ''
    firstName.value = localStorage.getItem('firstName') || ''
    middleName.value = localStorage.getItem('middleName') || ''
    suffix.value = localStorage.getItem('suffix') || ''
    dateOfBirth.value = localStorage.getItem('dateOfBirth') || ''
    gender.value = localStorage.getItem('gender') || 'Select Gender'
    civilStatus.value = localStorage.getItem('civilStatus') || 'Select Civil Status'
    typeOfDisability.value = localStorage.getItem('typeOfDisability')
    causeOfDisability.value = localStorage.getItem('causeOfDisability') || ''
    otherCauseOfDisability.value = localStorage.getItem('otherCauseOfDisability') || ''
    houseNoAndStreet.value = localStorage.getItem('houseNoAndStreet') || ''
    barangay.value = localStorage.getItem('barangay') || ''
    municipalityCity.value = localStorage.getItem('municipalityCity') || ''
    province.value = localStorage.getItem('province') || ''
    region.value = localStorage.getItem('region') || ''
    landlineNo.value = localStorage.getItem('landlineNo') || ''
    mobileNo.value = localStorage.getItem('mobileNo') || ''
    emailAddress.value = localStorage.getItem('emailAddress') || ''
    educationalAttainment.value = localStorage.getItem('educationalAttainment') || ''
    statusOfEmployment.value = localStorage.getItem('statusOfEmployment') || ''
    categoryOfEmployment.value = localStorage.getItem('categoryOfEmployment') || ''
    typeOfEmployment.value = localStorage.getItem('typeOfEmployment') || ''
    occupation.value = localStorage.getItem('occupation') || ''
    otherOccupation.value = localStorage.getItem('otherOccupation') || ''
    organizationAffiliated.value = localStorage.getItem('organizationAffiliated') || ''
    contactInformation.value = localStorage.getItem('contactInformation') || ''
    officeAddress.value = localStorage.getItem('officeAddress') || ''
    telNo.value = localStorage.getItem('telNo') || ''
    sssNo.value = localStorage.getItem('sssNo') || ''
    gsisNo.value = localStorage.getItem('gsisNo') || ''
    pagibigNo.value = localStorage.getItem('pagibigNo') || ''
    psnNo.value = localStorage.getItem('psnNo') || ''
    philhealthNo.value = localStorage.getItem('philhealthNo') || ''
    fathersLname.value = localStorage.getItem('fathersLname') || ''
    fathersFname.value = localStorage.getItem('fathersFname') || ''
    fathersMname.value = localStorage.getItem('fathersMname') || ''
    mothersLname.value = localStorage.getItem('mothersLname') || ''
    mothersFname.value = localStorage.getItem('mothersFname') || ''
    mothersMname.value = localStorage.getItem('mothersMname') || ''
    guardiansLname.value =  localStorage.getItem('guardiansLname') || ''
    guardiansFname.value = localStorage.getItem('guardiansFname') || ''
    guardiansMname.value = localStorage.getItem('guardiansMname') || ''
    accomplishedBy.value = localStorage.getItem('accomplishedBy') || ''
    accomplishedByLname.value = localStorage.getItem('accomplishedByLname') || ''
    accomplishedByFname.value = localStorage.getItem('accomplishedByFname') || ''
    accomplishedByMname.value = localStorage.getItem('accomplishedByMname') || ''
    physicianByLname.value = localStorage.getItem('physicianByLname') || ''
    physicianByFname.value = localStorage.getItem('physicianByFname') || ''
    physicianByMname.value = localStorage.getItem('physicianByMname') || ''
}

const removeDataFromLocalStorage = () => {
    localStorage.removeItem('lastName')
    localStorage.removeItem('firstName')
    localStorage.removeItem('middleName')
    localStorage.removeItem('suffix')
    localStorage.removeItem('dateOfBirth')
    localStorage.removeItem('gender')
    localStorage.removeItem('civilStatus')
    localStorage.removeItem('typeOfDisability')
    localStorage.removeItem('causeOfDisability')
    localStorage.removeItem('otherCauseOfDisability')
    localStorage.removeItem('houseNoAndStreet')
    localStorage.removeItem('barangay')
    localStorage.removeItem('municipalityCity')
    localStorage.removeItem('province')
    localStorage.removeItem('region')
    localStorage.removeItem('landlineNo')
    localStorage.removeItem('mobileNo')
    localStorage.removeItem('emailAddress')
    localStorage.removeItem('educationalAttainment')
    localStorage.removeItem('statusOfEmployment')
    localStorage.removeItem('categoryOfEmployment')
    localStorage.removeItem('typeOfEmployment')
    localStorage.removeItem('occupation')
    localStorage.removeItem('otherOccupation')
    localStorage.removeItem('organizationAffiliated')
    localStorage.removeItem('contactInformation')
    localStorage.removeItem('officeAddress')
    localStorage.removeItem('telNo')
    localStorage.removeItem('sssNo')
    localStorage.removeItem('gsisNo')
    localStorage.removeItem('pagibigNo')
    localStorage.removeItem('psnNo')
    localStorage.removeItem('philhealthNo')
    localStorage.removeItem('fathersLname')
    localStorage.removeItem('fathersFname')
    localStorage.removeItem('fathersMname')
    localStorage.removeItem('mothersLname')
    localStorage.removeItem('mothersFname')
    localStorage.removeItem('mothersMname')
    localStorage.removeItem('guardiansLname')
    localStorage.removeItem('guardiansFname')
    localStorage.removeItem('guardiansMname')
    localStorage.removeItem('accomplishedBy')
    localStorage.removeItem('accomplishedByLname')
    localStorage.removeItem('accomplishedByFname')
    localStorage.removeItem('accomplishedByMname')
    localStorage.removeItem('physicianByLname')
    localStorage.removeItem('physicianByFname')
    localStorage.removeItem('physicianByMname')
}

const changeAccomplisedBy = () => {
    if(accomplishedBy.value == 'Applicant'){
        accomplishedByLname.value = lastName.value
        accomplishedByFname.value = firstName.value
        accomplishedByMname.value = middleName.value
    }else{
        accomplishedByLname.value = ''
        accomplishedByFname.value = ''
        accomplishedByMname.value = ''
    }
}

const changeOccupation = (type) => {

    if(type === 'checkbox'){
        otherOccupation.value = '';
    }else{
        occupation.value = '';
    }


};
const changeCauseOfDisability = (type) => {

    if(type === 'checkbox'){
        otherCauseOfDisability.value = '';
    }else{
        causeOfDisability.value = '';
    }

};

const alreadySubmitted = ref(false)
const imageMissing = ref(false)
const loadingSubmitting = ref(false)

const sendApplication = async () => {

    if(!photo1x1.value || !medicalCert.value || !barangayCert.value) return imageMissing.value = true
    const applicationData = new FormData()

    applicationData.append('firstName', firstName.value);
    applicationData.append('middleName', middleName.value);
    applicationData.append('lastName', lastName.value);
    applicationData.append('suffix', suffix.value);
    applicationData.append('dateOfBirth', dateOfBirth.value);
    applicationData.append('gender', gender.value);
    applicationData.append('civilStatus', civilStatus.value);
    applicationData.append('typeOfDisability', typeOfDisability.value);
    applicationData.append('causeOfDisability', causeOfDisability.value);
    applicationData.append('otherCauseOfDisability', otherCauseOfDisability.value);
    applicationData.append('houseNoAndStreet', houseNoAndStreet.value);
    applicationData.append('barangay', barangay.value);
    applicationData.append('municipalityCity', municipalityCity.value);
    applicationData.append('province', province.value);
    applicationData.append('region', region.value);
    applicationData.append('landlineNo', landlineNo.value);
    applicationData.append('mobileNo', mobileNo.value);
    applicationData.append('emailAddress', emailAddress.value);
    applicationData.append('educationalAttainment', educationalAttainment.value);
    applicationData.append('statusOfEmployment', statusOfEmployment.value);
    applicationData.append('categoryOfEmployment', categoryOfEmployment.value);
    applicationData.append('typeOfEmployment', typeOfEmployment.value);
    applicationData.append('occupation', occupation.value);
    applicationData.append('otherOccupation', otherOccupation.value);
    applicationData.append('organizationAffiliated', organizationAffiliated.value);
    applicationData.append('contactInformation', contactInformation.value);
    applicationData.append('officeAddress', officeAddress.value);
    applicationData.append('telNo', telNo.value);
    applicationData.append('sssNo', sssNo.value);
    applicationData.append('gsisNo', gsisNo.value);
    applicationData.append('pagibigNo', pagibigNo.value);
    applicationData.append('psnNo', psnNo.value);
    applicationData.append('philhealthNo', philhealthNo.value);
    applicationData.append('fathersLname', fathersLname.value);
    applicationData.append('fathersFname', fathersFname.value);
    applicationData.append('fathersMname', fathersMname.value);
    applicationData.append('mothersLname', mothersLname.value);
    applicationData.append('mothersFname', mothersFname.value);
    applicationData.append('mothersMname', mothersMname.value);
    applicationData.append('guardiansLname', guardiansLname.value);
    applicationData.append('guardiansFname', guardiansFname.value);
    applicationData.append('guardiansMname', guardiansMname.value);
    applicationData.append('accomplishedBy', accomplishedBy.value);
    applicationData.append('accomplishedByLname', accomplishedByLname.value);
    applicationData.append('accomplishedByFname', accomplishedByFname.value);
    applicationData.append('accomplishedByMname', accomplishedByMname.value);
    applicationData.append('physicianByLname', physicianByLname.value);
    applicationData.append('physicianByFname', physicianByFname.value);
    applicationData.append('physicianByMname', physicianByMname.value);
    applicationData.append('photo1x1', photo1x1.value);
    applicationData.append('medicalCert', medicalCert.value);
    applicationData.append('barangayCert', barangayCert.value);

    try {
        loadingSubmitting.value = true
        const res = await axios.post(`${serverUrl}/send-application`, applicationData, {
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
                    t: 'new-applicant',
                    applicationNo: res.data.applicantNumber
                }
            })
        }
    } catch (error) {
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request made but no response received:', error.request);
        } else {
            console.error('Error', error.message);
        }
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