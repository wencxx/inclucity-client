<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <router-link :to="{ name: 'notifications' }" class="self-start">
            <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
        </router-link>
        <h1 class="text-xl font-semibold capitalize self-start">Notifications</h1>
        <div v-if="notification && !loadingNotif" class="w-full bg-white py-2 rounded-md">
            <div class="flex items-center justify-between">
                <div class="w-1/5">
                    <img src="../assets/logo.png" alt="" class="w-full">
                </div>
                <div class="w-3/5 pl-3">
                    <p class="text-gray-500 text-sm">Inclucity</p>
                    <h1 class="font-medium text-gray-700 text-lg capitalize">{{ notification.notificationTitle }}</h1>
                </div>
                <div class="w-1/5">
                    <p class="text-xs text-gray-500">{{ convertDate(notification.date) }}</p>
                </div>
            </div>
            <p class="font-medium text-gray-500/85 font-manrope text-md capitalize p-5">{{ notification.notificationDescription }}</p>
        </div>
        <h1 v-if="!notification && !loadingNotif">No notifications to show</h1>
        <!-- <div v-if="loadingNotif" class="w-full space-y-4">
            <div v-for="i in 5" :key="i"  class="flex items-center justify-between bg-white rounded-md hover:shadow-md cursor-default">
                <div class="w-1/5 p-2">
                    <div class="w-full h-20 bg-gray-300 animate-pulse rounded"></div>
                </div>
                <div class="w-3/5 pl-3 space-y-2">
                    <div class="bg-gray-300 w-2/3 h-4 rounded animate-pulse"></div>
                    <div class="bg-gray-300 w-3/3 h-8 rounded animate-pulse"></div>
                </div>
                <div class="w-1/5 flex items-center justify-center">
                    <div class="w-2/4 bg-gray-300 h-8 animate-pulse rounded"></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue' 
import { useRoute } from 'vue-router'
import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()

const notification = ref(null)

onMounted(() => {

})

const loadingNotif = ref(false)

const getNotifications = async () => {
    loadingNotif.value = true
    try {
        const res = await axios.get(`${serverUrl}/get-user-notification-details/${route.params.id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'no notifications') return 
        
        notification.value = res.data
    } catch (error) {
        console.log(error)
    }finally{
        loadingNotif.value = false
    }
}

getNotifications()

const convertDate = (date) => {
    const now = new Date();
    const pastDate = new Date(date);
    const secondsAgo = Math.floor((now - pastDate) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(secondsAgo / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
};
</script>

<style scoped>

</style>