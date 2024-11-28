<template>
    <header class="border-b-2 h-[10dvh] bg-custom-primary text-white border-gray-300 flex items-center justify-between pr-6 lg:pl-10 lg:pr-20">
        <router-link :to="{ name: 'home' }" class="h-3/4"><img src="../assets/newLogo.png" alt="logo" class="h-full"></router-link>
        <div class="flex items-center gap-x-2">
            <router-link :to="{ name: 'notifications' }" class="relative">
                <Icon  icon="mdi:bell-outline" class="text-3xl lg:text-3xl text-white" />
                <div v-if="notifications && !isSeen" class="w-2 lg:w-3 aspect-square px-2 rounded-full absolute top-0 right-0 bg-red-500 flex items-center justify-center">
                    <p class="text-white text-[.5rem]">{{ notifCount.length }}</p>
                </div>
            </router-link>
            <router-link :to="{ name: 'me' }">
                <img v-if="user && user?.profile" :src="user?.profile" alt="user profile" class="w-7 aspect-square rounded-full">
                <Icon v-else icon="ion:person-circle-outline" class="text-3xl lg:text-3xl text-white" />
            </router-link>
            <Icon  :icon="menuIcon" class="text-4xl lg:text-4xl lg:hidden" :class="{ '!block': $route.name === 'about' || $route.name === 'map' }" @click="toggleSidebar" />
        </div>
    </header>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, ref, watch, computed } from 'vue'
import { useAuthStore } from '../store'
import { useRouter, useRoute } from 'vue-router'

const currentLanguage = ref('Translate')

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

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
const notifCount = ref(0)

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
        notifCount.value = res.data.filter(notif => notif.isSeen === false)

        if(notSeen){
            isSeen.value = false
        }else{
            isSeen.value = true
        }
    } catch (error) {
        console.log(error)
    }
}

getNotifications()

onMounted(() => {
    setInterval(() => {
        getNotifications()
    }, 3000)
})
</script>

<style scoped>
.router-link-active {
    color: #7B080E;
}
</style>