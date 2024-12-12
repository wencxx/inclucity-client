<template>
    <section class="h-[90dvh] w-screen overflow-auto font-manrope p-10 md:px-16 lg:px-32">
        <!-- first step -->
        <div class="w-full flex flex-col gap-y-5" v-if="currentPage == 1">
            <h1 class="text-gray-500 dark:!text-white font-semibold">Now get ready to take the first step of application</h1>
            <div class="w-full text-lg h-fit border shadow-inner p-3 space-y-5 text-black dark:text-white font-semibold">
                <p>When applying for a PWD ID, providing accurate information is essential to receive the right support. Here's a brief guide:</p>
                <ol class="space-y-1 lg:space-y-2">
                    <li>1. Read Instructions: Carefully review the guidelines.</li>
                    <li>2. Personal Information: Fill in your name, birthdate, address, and contact details.</li>
                    <li>3. Describe Disability: Clearly state your disability and its impact on daily life.</li>
                    <li>4. Explain Limitations: Note how it affects tasks like walking, seeing, or hearing.</li>
                    <li>5. List Assistance Needed: Specify any help or equipment required.</li>
                    <li>6. Medical History: Include relevant treatments or ongoing care.</li>
                    <li>7. Attach Documents: Provide medical reports to support your application.</li>
                    <li>8. Sign and Date: Confirm your details with your signature and date.</li>
                    <li>9. Submit and Keep Copies: Submit the form and keep copies for your records.</li>
                    <li>10. Follow Up: Check the status if there's no response after a while.</li>
                </ol>
                <p>Accurate information helps ensure your application is processed efficiently.</p>
            </div>
            <button class="bg-custom-primary rounded-md w-1/3 lg:w-1/5 py-2 text-white mx-auto" @click="next()">Continue</button>
        </div>
        <div v-if="hasEmptyFields" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <p class="bg-red-500 text-white pl-2 rounded py-1">Fill out all required fields</p>
        </div>
        <div class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg" v-if="currentPage == 2">
            <p v-if="noOldId" class="text-white bg-red-500 pl-2  rounded py-1 font-semibold">Upload your old PWD ID first to proceed</p>
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Upload old PWD ID</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-3">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Last Name *</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('oldID', $event)" required>
                </div>
            </div>
        </div>
        <!-- second step -->
        <div v-if="currentPage == 3" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Personal Information</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-3">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Last Name *</label>
                    <input type="text" placeholder="Enter last name" class="h-10 border pl-2 rounded capitalize" v-model="lastName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">First Name *</label>
                    <input type="text" placeholder="Enter first name" class="h-10 border pl-2 rounded capitalize" v-model="firstName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Middle Name</label>
                    <input type="text" placeholder="Enter middle name" class="h-10 border pl-2 rounded capitalize" v-model="middleName">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Suffix</label>
                    <input type="text" placeholder="Enter suffix" class="h-10 border pl-2 rounded capitalize" v-model="suffix">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Date of Birth *</label>
                    <input type="date" class="h-10 border pl-2 rounded dark:!text-black" v-model="dateOfBirth">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Sex *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="gender">
                        <option disabled>Select Sex</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Civil Status *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="civilStatus">
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
        <div v-if="currentPage == 4" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Type and Cause of Disability</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-2 w-full py-2">
                    <label class="font-semibold">Select type of disability *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="typeOfDisability" required>
                        <option v-for="(disability, index) in disabilities" :key="index">{{ disability.disability }}</option>
                    </select>
                </div>
                <div></div>
                <div class="flex flex-col gap-y-2 w-full py-2">
                    <label class="font-semibold">Select Cause of Disability *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="causeOfDisability" @change="changeCausedOfDisability('select')" required>
                        <!-- <option value="" disabled>Select cause of disability</option> -->
                        <option class="font-semibold" disabled>*Congential/Inborn</option>
                        <option>Autism</option>
                        <option>ADHD</option>
                        <option>Cerebral Palsy</option>
                        <option>Down Syndrome</option>
                        <option class="font-semibold" disabled>*Acquired</option>
                        <option>Chronic Illness</option>
                        <option>Infections</option>
                        <option>Injury</option>
                        <option>Others</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-2 py-2">
                    <label class="font-semibold">Other cause of disability</label>
                    <input type="text" class="h-10 border pl-2 rounded" @input="changeCausedOfDisability('input')" v-model="otherCauseOfDisability">
                </div>
            </div>
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Residence Address</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">House no.(optional) and Street *</label>
                    <input type="text" placeholder="Enter house no. and street" class="h-10 border pl-2 rounded" v-model="houseNoAndStreet">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Select Barangay *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="barangay">
                        <option value="" disabled>Select Barangay</option>
                        <option value="Anilao">Anilao</option>
                        <option value="Atlag">Atlag</option>
                        <option value="Babatnin">Babatnin</option>
                        <option value="Bagna">Bagna</option>
                        <option value="Bangkong Malapad">Bangkong Malapad</option>
                        <option value="Bulihan">Bulihan</option>
                        <option value="Bungahan">Bungahan</option>
                        <option value="Caingin">Caingin</option>
                        <option value="Caliligawan">Caliligawan</option>
                        <option value="Canalate">Canalate</option>
                        <option value="Caniogan">Caniogan</option>
                        <option value="Crispiniano C. Valenzuela">Crispiniano C. Valenzuela</option>
                        <option value="Dakila">Dakila</option>
                        <option value="Guinhawa">Guinhawa</option>
                        <option value="Liyang">Liyang</option>
                        <option value="Lugam">Lugam</option>
                        <option value="Look 1st">Look 1st</option>
                        <option value="Look 2nd">Look 2nd</option>
                        <option value="Longos">Longos</option>
                        <option value="Mabolo">Mabolo</option>
                        <option value="Mambog">Mambog</option>
                        <option value="Masile">Masile</option>
                        <option value="Matimbo">Matimbo</option>
                        <option value="Mojon">Mojon</option>
                        <option value="Namayan">Namayan</option>
                        <option value="Niugan">Niugan</option>
                        <option value="Pamarawan">Pamarawan</option>
                        <option value="Panasahan">Panasahan</option>
                        <option value="Pinagbakahan">Pinagbakahan</option>
                        <option value="San Agustin">San Agustin</option>
                        <option value="San Gabriel">San Gabriel</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Pablo">San Pablo</option>
                        <option value="Santiago">Santiago</option>
                        <option value="Santor">Santor</option>
                        <option value="Santisima Trinidad">Santisima Trinidad</option>
                        <option value="Sumapang Bata">Sumapang Bata</option>
                        <option value="Sumapang Matanda">Sumapang Matanda</option>
                        <option value="Tikay">Tikay</option>
                        </select>
                </div>
            </div>
        </div>
        <!-- fourth step -->
        <div v-if="currentPage == 5" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Contact Details</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Landline No. (optional)</label>
                    <input type="number" placeholder="044-XXXXXX" class="h-10 border pl-2 rounded" v-model="landlineNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Mobile No. *</label>
                    <input type="number" placeholder="639-XXX-XXX" class="h-10 border pl-2 rounded" v-model="mobileNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Email Address (optional)</label>
                    <input type="email" placeholder="xxxxxxxx@gmail.com" class="h-10 border pl-2 rounded" v-model="emailAddress">
                </div>
            </div>
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Educational Attainment</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-2 w-full py-2">
                    <label class="font-semibold">Select Educational Attainment *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="educationalAttainment" required>
                        <option value="" disabled>Select educational attainment</option>
                        <option>None</option>
                        <option>Kindergarten</option>
                        <option>Elementary</option>
                        <option>Junior High School</option>
                        <option>Senior High School</option>
                        <option>College</option>
                        <option>Vocational</option>
                        <option>Post Graduate</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- fifth step -->
        <div v-if="currentPage == 6" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Status of Employment</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-2 w-full py-2">
                    <label class="font-semibold">Select Status of Employment *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="statusOfEmployment" required>
                        <option value="" disabled>Select status of employment</option>
                        <option value="employed">Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="self-employed">Self-employed</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-2 w-full py-2" v-if="statusOfEmployment == 'employed' || statusOfEmployment == 'self-employed'">
                    <label class="font-semibold">a. Category of Employment *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="categoryOfEmployment" required>
                        <option value="" disabled>Select category of employment</option>
                        <option value="government">Government</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-2 w-full py-2" v-if="statusOfEmployment == 'employed' || statusOfEmployment == 'self-employed'">
                    <label class="font-semibold">b. Type of Employment *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="typeOfEmployment" required>
                        <option value="" disabled>Select type of employment</option>
                        <option value="permanent/regular">Permanent/Regular</option>
                        <option value="seasonal">Seasonal</option>
                        <option value="casual">Casual</option>
                        <option value="emergency">Emergency</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- ninth step -->
        <div v-if="currentPage == 7" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 v-if="statusOfEmployment == 'employed' || statusOfEmployment == 'self-employed'" class="text-black font-semibold text-xl uppercase">Occupation</h1>
            <div v-if="statusOfEmployment == 'employed' || statusOfEmployment == 'self-employed'" class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-2 w-full py-2">
                    <label class="font-semibold">Select Occupation *</label>
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="occupation" @change="changeOccupation('select')" required>
                        <option disabled>Select occupation</option>
                        <option>Managers</option>
                        <option>Professionals</option>
                        <option>Technicians and Associate Professionals</option>
                        <option>Clerical Support Worker</option>
                        <option>Service and Sales Worker</option>
                        <option>Skilled Agricultural, Forestry and Fishery Workers</option>
                        <option>Craft and Related Trade Workers</option>
                        <option>Plant and Machine Operators and Assemblers</option>
                        <option>Elementary Occupation</option>
                        <option>Armed Forces Occupation</option>
                        <option>None</option>
                    </select>
                </div>
                <div class="flex flex-col gap-y-2 w-4/5 py-2 px-5">
                    <label class="font-semibold">Others</label>
                    <input type="text" placeholder="Please specify" v-model="otherOccupation" class="h-10 border pl-2 rounded" @input="changeOccupation('input')">
                </div>
            </div>
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Organization Information</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Organization Affiliated (optional)</label>
                    <input type="number" placeholder="044-XXXXXX" class="h-10 border pl-2 rounded" v-model="organizationAffiliated">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Contact Information (optional)</label>
                    <input type="number" placeholder="639-XXX-XXX-XXX" class="h-10 border pl-2 rounded" v-model="contactInformation">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Office Address (optional)</label>
                    <input type="text" placeholder="Enter address" class="h-10 border pl-2 rounded" v-model="officeAddress">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Tel. No. (optional)</label>
                    <input type="number" placeholder="XXXX-XXXX" class="h-10 border pl-2 rounded" v-model="telNo">
                </div>
            </div>
        </div>
        <!-- eleventh step -->
        <div v-if="currentPage == 8" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">ID Reference no.</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">SSS No. (optional)</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="sssNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">GSIS No. (optional)</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="gsisNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PAG-IBIG No. (optional)</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="pagibigNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PSN No. (optional)</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="psnNo">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">PhilHealth No. (optional)</label>
                    <input type="number" placeholder="XXXXXXXX" class="h-10 border pl-2 rounded" v-model="philhealthNo">
                </div>
            </div>
        </div>
        <!-- twelve step -->
        <div v-if="currentPage == 9" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Family Background</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Father's Name (optional)</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded capitalize" v-model="fathersLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded capitalize" v-model="fathersFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded capitalize" v-model="fathersMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Mother's Name (optional)</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded capitalize" v-model="mothersLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded capitalize" v-model="mothersFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded capitalize" v-model="mothersMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Guardian's Name (optional)</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded capitalize" v-model="guardiansLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded capitalize" v-model="guardiansFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded capitalize" v-model="guardiansMname">
                </div>
            </div>
        </div>
        <!-- thirteenth step -->
        <div v-if="currentPage == 10" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <h1 class="text-black dark:!text-white font-semibold text-xl uppercase">Accomplished By</h1>
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <div class="flex flex-col gap-y-1">
                    <select class="h-10 border dark:!text-black pl-2 rounded" v-model="accomplishedBy" @change="changeAccomplisedBy()">
                        <option disabled selected value="">Accomplished By (optional)</option>
                        <option>Applicant</option>
                        <option>Guardian</option>
                        <option>Representative</option>
                    </select>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded capitalize" v-model="accomplishedByLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded capitalize" v-model="accomplishedByFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded capitalize" v-model="accomplishedByMname">
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Certifying Physician *</label>
                    <input type="text" placeholder="Last name" class="h-10 border pl-2 rounded capitalize" v-model="physicianByLname">
                    <input type="text" placeholder="First name" class="h-10 border pl-2 rounded capitalize" v-model="physicianByFname">
                    <input type="text" placeholder="Middle name" class="h-10 border pl-2 rounded capitalize" v-model="physicianByMname">
                </div>
            </div>
        </div>
        <!-- fourteenth step -->
        <div v-if="currentPage == 11" class="w-full lg:w-2/3 lg:mx-auto flex flex-col gap-y-5 font-manrope text-lg">
            <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
                <h1 v-if="alreadySubmitted" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Application already submitted</h1>
                <h1 v-if="imageMissing" class="md:col-span-2 bg-red-500 text-white pl-3 py-1 rounded">Please upload required images</h1>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload 1x1 photo *</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('1x1photo', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Medical Certificate *</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('medicalCert', $event)" required>
                </div>
                <div class="flex flex-col gap-y-1">
                    <label class="font-semibold">Upload Barangay Certificate *</label>
                    <input type="file" class="h-10 rounded" accept=".jpg, .jpeg, .png" @change="handleImageUpload('barangayCert', $event)" required>
                </div>
            </div>
        </div>
        <!-- control buttons -->
        <div v-if="currentPage > 1 && currentPage < 12" class="flex gap-x-10 mt-8 justify-center lg:w-2/3 lg:mx-auto lg:px-0">
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <Icon icon="ri:arrow-left-s-line" class="text-2xl" />
                <span>Back</span>
            </button>
            <button v-if="currentPage == '11' && !loadingSubmitting" @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Submit</span>
                <Icon icon="bi:send-arrow-up" class="text-xl" />
            </button>
            <button v-if="loadingSubmitting" @click="sendApplication()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md animate-pulse" disabled>
                <span>Loading...</span>
            </button>
            <button  v-if="currentPage != '11'" @click="next()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Next</span>
                <Icon icon="ri:arrow-right-s-line" class="text-2xl" />
            </button>
        </div>
        <div v-if="currentPage > 11" class="flex flex-col gap-y-10 mt-8 items-center lg:w-2/3 lg:mx-auto lg:px-0">
            <h1 class="text-3xl font-poppins">Opss nothings here</h1>
            <button @click="prev()" class="flex items-center justify-center gap-x-2 bg-custom-primary text-white text-xl w-1/2 py-1 pr-1 rounded-md">
                <span>Go Back</span>
            </button>
        </div>
    </section>
</template>

<script setup>
import axios from "axios"
import { onMounted, onUnmounted, ref, watch } from "vue"
import { useRoute, useRouter } from 'vue-router'
const serverUrl = import.meta.env.VITE_SERVER_URL

const disabilities = ref([])

const getDisabilities = async () => {
    try {
        const res = await axios.get(`${serverUrl}/get-disabilities`)

        if(res.data === 'No disabilities available') return

        disabilities.value = res.data
    } catch (error) {
        console.log(error)   
    }
}

const route = useRoute()
const router = useRouter()

// get application
const getUserApplication = async () => {
    try {
        const res = await axios.get(`${serverUrl}/get-user-application`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data){
            lastName.value = res.data.lastName
            firstName.value = res.data.firstName
            middleName.value = res.data.middleName
            suffix.value = res.data.suffix
            dateOfBirth.value = res.data.dateOfBirth
            gender.value = res.data.gender
            civilStatus.value = res.data.civilStatus
            typeOfDisability.value = res.data.typeOfDisability
            causeOfDisability.value = res.data.causeOfDisability
            houseNoAndStreet.value = res.data.houseNoAndStreet
            barangay.value = res.data.barangay
            landlineNo.value = res.data.landlineNo
            mobileNo.value = res.data.mobileNo
            emailAddress.value = res.data.emailAddress
            educationalAttainment.value = res.data.educationalAttainment
            statusOfEmployment.value = res.data.statusOfEmployment
            categoryOfEmployment.value = res.data.categoryOfEmployment
            typeOfEmployment.value = res.data.typeOfEmployment
            occupation.value = res.data.occupation
            otherOccupation.value = res.data.otherOccupation
            organizationAffiliated.value = res.data.organizationAffiliated
            contactInformation.value = res.data.contactInformation
            officeAddress.value = res.data.officeAddress
            telNo.value = res.data.telNo
            sssNo.value = res.data.sssNo
            gsisNo.value = res.data.gsisNo
            pagibigNo.value = res.data.pagibigNo
            psnNo.value = res.data.psnNo
            philhealthNo.value = res.data.philhealthNo
            fathersLname.value = res.data.fathersLname
            fathersFname.value = res.data.fathersFname
            fathersMname.value = res.data.fathersMname
            mothersLname.value = res.data.mothersLname
            mothersFname.value = res.data.mothersFname
            mothersMname.value = res.data.mothersMname
            guardiansLname.value = res.data.guardiansLname
            guardiansFname.value = res.data.guardiansFname
            guardiansMname.value = res.data.guardiansMname
            accomplishedBy.value = res.data.accomplishedBy
            accomplishedByLname.value = res.data.accomplishedByLname
            accomplishedByFname.value = res.data.accomplishedByFname
            accomplishedByMname.value = res.data.accomplishedByMname
            physicianByLname.value = res.data.physicianByLname
            physicianByFname.value = res.data.physicianByFname
            physicianByMname.value = res.data.physicianByMname
        }
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

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

// contact detail
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
const oldID = ref(null)

const handleImageUpload = (imageType, event) => {
    if (imageType === '1x1photo') {
        photo1x1.value = event.target.files[0];
    } else if (imageType === 'medicalCert') {
        medicalCert.value = event.target.files[0];
    } else if (imageType === 'barangayCert') {
        barangayCert.value = event.target.files[0];
    } else if (imageType === 'oldID') {
        oldID.value = event.target.files[0];
    }
};



// page refresh logic
const currentPage = ref(parseInt(route.query.page) || 1)

watch(() => route.query.page, (newPage) => {
    currentPage.value = parseInt(newPage) || 1
})

const noOldId = ref(false)

// const next = () => {
//     if(oldID.value === null){
//         noOldId.value = true
//         return
//     }
//     noOldId.value = false
//     router.push({ query : { page: currentPage.value + 1 }})
// }

const hasEmptyFields = ref(false)

const next = () => {
    if(currentPage.value === 2){
        if (!oldID.value) {
            hasEmptyFields.value = true
            return;
        }
        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 3){
        const pageData = [
            lastName.value,
            firstName.value,
            dateOfBirth.value,
        ]

        if (pageData.some(field => !field) || gender.value === 'Select Gender' || civilStatus.value === 'Select Civil Status') {
            hasEmptyFields.value = true
            return;
        }
        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 4){
        const pageData = [
            typeOfDisability.value,
            causeOfDisability.value,
            houseNoAndStreet.value,
            barangay.value
        ]

        if (pageData.some(field => !field)) {
            hasEmptyFields.value = true
            return;
        }
        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 5){
        if (!educationalAttainment.value || !mobileNo.value) {
            hasEmptyFields.value = true
            return;
        }
        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 6){
        const pageData = [
            categoryOfEmployment.value,
            typeOfEmployment.value,
        ]

        if(statusOfEmployment.value === 'unemployed'){
            hasEmptyFields.value = false
            router.push({ query : { page: currentPage.value + 2 }})
            return
        }

        if (!statusOfEmployment.value || statusOfEmployment.value !== 'unemployed' && pageData.some(field => !field)) {
            hasEmptyFields.value = true
            return;
        }

        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 7){
        if (!occupation.value && !otherOccupation.value) {
            hasEmptyFields.value = true
            return;
        }

        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else if(currentPage.value === 10){
        const pageData = [
            physicianByLname.value,
            physicianByFname.value,
            physicianByMname.value
        ]

        if (pageData.some(field => !field)) {
            hasEmptyFields.value = true
            return;
        }

        hasEmptyFields.value = false
        router.push({ query : { page: currentPage.value + 1 }})
    }else{
        router.push({ query : { page: currentPage.value + 1 }})
    }
    setDataToLocalStorage()
}

// const prev = () => {
//     if(currentPage.value > 1){
//         router.push({ query: { page: currentPage.value - 1 } })
//     }
// }
const prev = () => {
    // setDataToLocalStorage()
    if(currentPage.value > 1){
        if(currentPage.value === 6 && statusOfEmployment.value === 'unemployed'){
            router.push({ query: { page: currentPage.value - 2 } })
            hasEmptyFields.value = false
        }else{
            router.push({ query: { page: currentPage.value - 1 } })
        }
    }
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

const changeCausedOfDisability = (type) => {
    if(type === 'select'){
        otherCauseOfDisability.value = '';
    }else{
        causeOfDisability.value = 'Others';
    }
}

const changeOccupation = (type) => {

    if(type === 'select'){
        otherOccupation.value = '';
    }else{
        occupation.value = '';
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
    if(causeOfDisability.value === 'Others'){
        applicationData.append('causeOfDisability','');
        applicationData.append('otherCauseOfDisability', otherCauseOfDisability.value);
    }else{
        applicationData.append('causeOfDisability', causeOfDisability.value);
        applicationData.append('otherCauseOfDisability', otherCauseOfDisability.value);
    }
    applicationData.append('houseNoAndStreet', houseNoAndStreet.value);
    applicationData.append('barangay', barangay.value);
    applicationData.append('municipalityCity', 'Malolos');
    applicationData.append('province', 'Bulacan');
    applicationData.append('region', 'Central Luzon (Region 3)');
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
    applicationData.append('oldID', oldID.value);
    applicationData.append('typeOfApplicant', 'renewal');

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

onMounted(() => {
    getUserApplication()
    getDisabilities()
})
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