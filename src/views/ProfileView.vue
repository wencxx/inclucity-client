<template>
    <div class="md:w-2/3 xl:w-full px-10 lg:px-0 font-poppins flex flex-col items-center gap-y-5 mx-auto py-10">
        <!-- profile -->
        <div v-if="user" class="flex items-center justify-between gap-x-5 font-poppins lg:w-3/5 md:mx-auto">
            <img v-if="user.profile" class="w-[5rem] md:w-24 aspect-square rounded-full" :src="user?.profile" alt="profilePic">
            <Icon v-else icon="bi:person-circle" class="text-[5rem] md:text-[10] lg:text-[4dvw]" />
            <div class="w-full">
                <h1 class="text-black dark:!text-white text-xl md:text-2xl font-semibold uppercase text-start">{{ user.name }}</h1>
                <div class="flex flex-wrap" v-if="application && application?.status !== 'expired'">
                    <h1 class="text-black font-medium w-fit capitalize dark:!text-white" >{{ applicant?.typeOfDisability }}</h1>
                </div>
            </div>
            <router-link :to="{ name: 'me' }">
                <Icon icon="weui:arrow-outlined" class="text-6xl text-custom-primary" />
            </router-link>
        </div>
        <!-- profile skeleton -->
        <div v-else class="flex items-center gap-x-10 font-poppins lg:w-3/5 md:mx-auto">
            <div class="w-1/6 aspect-square bg-gray-300 rounded-full animate-pulse"></div>
            <div class="w-full space-y-1">
                <div class="w-full h-6 rounded bg-gray-300 animate-pulse"></div>
                <div class="w-4/6 h-4 rounded bg-gray-300 animate-pulse"></div>
            </div>
            <div class="w-1/12 aspect-square bg-gray-300 animate-pulse rounded"></div>
        </div>
        <!-- receipt -->
        <div class="lg:w-3/5 md:mx-auto mt-10 flex flex-col gap-y-5">
            <div class="flex items-center justify-between text-xl hover:bg-white/[0.20] p-10 py-2">
                <label>Email Notifications</label>
                <label
                class="relative inline-block h-6 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
                >
                    <input v-model="receiveEmail" class="peer sr-only" @change="update" id="AcceptConditions" type="checkbox" />
                    <span
                        class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                    ></span>
                </label>
            </div>
            <div class="flex items-center gap-x-2 text-xl hover:bg-white/[0.20] p-9 py-2">
                <select class="bg-transparent focus:outline-none" id="language-select" v-model="currentLanguage" @change="translatePage(currentLanguage)">
                    <option class="text-black" :value="currentLanguage">Language</option>
                    <option class="text-black" value="en">English</option>
                    <option class="text-black" value="tl">Filipino</option>
                </select>
                <div id="google_translate_element"></div>
            </div>
            <div class="flex items-center justify-between text-xl hover:bg-white/[0.20] p-10 py-2">
                <label>Dark Mode</label>
                <label
                class="relative inline-block h-6 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-gray-900"
                >
                    <input  v-model="themeSelect" @change="changeTheme" true-value="dark" false-value="light" class="peer sr-only" id="AcceptConditions" type="checkbox" />
                    <span
                        class="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                    ></span>
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { computed, onMounted, ref, watch } from 'vue'
import { useAuthStore, useApplicationStore } from '../store'
const serverUrl = import.meta.env.VITE_SERVER_URL

const authStore = useAuthStore()
const applicantStore = useApplicationStore()
const currentUser = computed(() => authStore.user)

const receiveEmail = ref(currentUser.value?.receiveEmail)

watch(currentUser, (newUser) => {
    receiveEmail.value = newUser?.receiveEmail;
});

const update = async () => {
    const userData = {
        name: currentUser.value?.name,
        email: currentUser.value?.email,
        contactNumber: currentUser.value?.contactNumber,
        address: currentUser.value?.address,
        age: currentUser.value?.age,
        receiveEmail: receiveEmail.value
    }
    
    try {
        const res = await axios.put(`${serverUrl}/update-user`, userData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'updated'){
            authStore.getUser()
        }else{
            console.log(res.data)
        }
    } catch (error) {
        console.error(error)
    }
}

// darkmode 
const themeSelect = ref('')

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    themeSelect.value = savedTheme;
}

const changeTheme = () => {
    const selectedTheme = themeSelect.value;
    document.documentElement.classList.toggle('dark', selectedTheme === 'dark');

    localStorage.setItem('theme', selectedTheme);
}

// translation
const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'en', 
    //   includedLanguages: 'en,tl',
    //   layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  );
};

const translatePage = (language) => {
    const googleTranslateDropdown = document.querySelector('.goog-te-combo');
    if (googleTranslateDropdown) {
        googleTranslateDropdown.value = language;
        googleTranslateDropdown.dispatchEvent(new Event('change'));
    }
    if(route.name === 'tutorial'){
        if(language === 'tl'){
            router.push({
                query: {
                    lang: 'tl',
                    page: route.query.page
                }
            })
        }else{
            router.push({
                query: {
                    page: route.query.page
                }
            })
        }
    }
};

onMounted(() => {
    applicantStore.getApplication()

    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;
})

const user = computed(() => authStore.user)
const applicant = computed(() => applicantStore.application)
</script>

<style scoped>
/* Your styles here */
#google_translate_element {
  display: none;
}
</style>
