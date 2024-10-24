<template>
    <header class="border-b-2 h-[10dvh] border-gray-300 flex items-center justify-between pr-10 lg:pl-10 lg:pr-20">
        <router-link :to="{ name: 'home' }" class="h-full"><img src="../assets/logo.png" alt="logo" class="h-full"></router-link>
        <div class="flex items-center gap-x-2">
            <router-link :to="{ name: 'notifications' }" class="relative">
                <Icon  icon="mdi:bell-outline" class="text-3xl lg:text-3xl text-black" />
                <div v-if="notifications && !isSeen" class="w-2 lg:w-3 aspect-square rounded-full absolute top-0 right-0 bg-red-500"></div>
            </router-link>
            <router-link :to="{ name: 'profile' }">
                <img v-if="user && user?.profile" :src="user?.profile" alt="user profile" class="w-7 aspect-square rounded-full">
                <Icon v-else icon="ion:person-circle-outline" class="text-3xl lg:text-3xl text-black" />
            </router-link>
            
            <select id="language-select" v-model="currentLanguage" @change="translatePage(currentLanguage)">
                <option :value="currentLanguage">Select Language</option>
                <option value="en">English</option>
                <option value="tl">Filipino</option>
            </select>
            <div id="google_translate_element"></div>
            <Icon  :icon="menuIcon" class="text-4xl lg:text-4xl" @click="toggleSidebar" />
        </div>
    </header>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, ref, watch, computed } from 'vue'
import { useAuthStore } from '../store'
import { useRouter } from 'vue-router'

const currentLanguage = ref('Translate')

const authStore = useAuthStore()
const router = useRouter()

const user = computed(() => authStore.user)

const emit = defineEmits(['toggleSidebar'])
const props = defineProps({
    routePath: String
})

const menuIcon = ref('ic:round-menu')

const toggleSidebar = () => {
    emit('toggleSidebar')
    if(menuIcon.value == 'ic:round-menu') return menuIcon.value = 'ic:round-close'
    menuIcon.value = 'ic:round-menu'
}

watch(() => props.routePath, () => {
    menuIcon.value = 'ic:round-menu'
})

const logout = () => {
    authStore.logout()
    router.push('/')
}

import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL


const notifications = ref(null)

const isSeen = ref(false)
const getNotifications = async () => {
    try {
        const res = await axios.get(`${serverUrl}/get-user-notifications`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'no notifications') return isSeen.value = true
        
        notifications.value = res.data

        const notSeen = res.data.some(notif => notif.isSeen === false)

        if(notSeen){
            isSeen.value = false
        }else{
            isSeen.value = true
        }
    } catch (error) {
        console.log(error)
    }
}

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
};

getNotifications()

onMounted(() => {
    setInterval(() => {
        getNotifications()
    }, 3000)

    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;
})
</script>

<style scoped>
.router-link-active {
    color: #7B080E;
}
#google_translate_element {
  display: none;
}
.goog-te-banner-frame.skiptranslate {
  display: none !important;
}
</style>