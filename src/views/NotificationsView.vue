<template>
    <div class="container md:w-2/3 xl:w-1/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <router-link :to="{ name: 'home' }" class="self-start">
            <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
        </router-link>
        <h1 class="text-xl font-semibold capitalize self-start">Notifications</h1>
        <div v-if="notifications" class="w-full space-y-4">
            <div v-for="n in notifications" :key="n.id" class="flex items-center justify-between bg-white rounded-md hover:shadow-md cursor-default">
                <div class="w-1/5">
                    <img src="../assets/logo.png" alt="" class="w-full">
                </div>
                <div class="w-3/5 pl-3">
                    <p class="text-gray-500 text-sm">Inclucity</p>
                    <h1 class="font-medium text-gray-700 text-lg capitalize">{{ n.notificationTitle }}</h1>
                </div>
                <div class="w-1/5">
                    <p class="text-xs text-gray-500">{{ convertDate(n.date) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue' 
import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_URL


const notifications = ref(null)

onMounted(() => {
    if(localStorage.getItem('auth')){
        seenAllNotifications()
        setInterval(() => {
            getNotifications()
        }, 3000)
    }
})

const getNotifications = async () => {
    try {
        const res = await axios.get(`${serverUrl}/get-user-notifications`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'no notifications') return 
        
        notifications.value = res.data
    } catch (error) {
        console.log(error)
    }
}

const seenAllNotifications = async () => {
    try {
        const res = await axios.patch(`${serverUrl}/seen-notifications`, {
            isSeen: true
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

getNotifications()

const convertDate = (date) => {
    return 'HAHAH'
}
</script>

<style scoped>

</style>