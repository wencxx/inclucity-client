<template>
    <section class="h-[90dvh] overflow-auto font-poppins p-10 md:px-16 lg:px-32">
        <h1 class="font-semibold font-manrope uppercase text-2xl lg:text-3xl">News</h1>
        <!-- skeleton loading -->
        <div v-if="loadingNews" class="mt-2 lg:mt-5 grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-5">
            <div class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <div class="w-full aspect-video bg-gray-200 rounded animate-pulse"></div>
                <p class="w-3/4 bg-gray-200 h-8 animate-pulse rounded"></p>
                <p class="bg-gray-200 h-5 w-1/2 rounded animate-pulse"></p>
            </div>
            <div class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <div class="w-full aspect-video bg-gray-200 rounded animate-pulse"></div>
                <p class="w-3/4 bg-gray-200 h-8 animate-pulse rounded"></p>
                <p class="bg-gray-200 h-5 w-1/2 rounded animate-pulse"></p>
            </div>
            <div class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <div class="w-full aspect-video bg-gray-200 rounded animate-pulse"></div>
                <p class="w-3/4 bg-gray-200 h-8 animate-pulse rounded"></p>
                <p class="bg-gray-200 h-5 w-1/2 rounded animate-pulse"></p>
            </div>
        </div>
        <!-- news -->
        <div v-if="!noNews" class="mt-2 lg:mt-5 grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-5">
            <div v-for="( n, index ) in news" :key="index" class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <router-link :to="{ name: 'newsDetails', params: { id: n._id }  }">
                    <img :src="n.imageName" alt="logo" class="w-full aspect-video rounded">
                </router-link>
                <router-link :to="{ name: 'newsDetails', params: { id: n._id }  }">
                    <p class="capitalize font-medium text-md">{{ n.postTitle }}</p>
                </router-link>
                <p class="text-gray-600 italic text-xs">{{ changeDateFormat(n.datePosted) }}</p>
            </div>
        </div>
        <div v-else class="lg:w-1/4 mx-auto flex flex-col items-center gap-y-5 mt-20">
            <Icon icon="tabler:news-off" class="text-6xl" />
            <h1 class="text-center uppercase font-poppins font-medium tracking-wide">No news to shows</h1> 
        </div>
        <div v-if="err" class="lg:w-1/4 mx-auto flex flex-col items-center gap-y-5 mt-20">
            <Icon  icon="iconoir:db-error" class="text-6xl" />
            <h1 class="text-center uppercase font-poppins font-medium tracking-wide">Something went wrong</h1> 
        </div>
    </section>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const serverUrl = import.meta.env.VITE_SERVER_URL

const loadingNews = ref(false)
const news = ref()
const noNews = ref(false)
const err = ref(false)

onMounted(() => {
    getNews()
})

// gettin news data from database
const getNews = async () => {
    try {
        loadingNews.value = true
        const res = await axios.get(`${serverUrl}/get-news`)

        if(res.data.length === 0) return noNews.value = true
        news.value = res.data
    } catch (error) {
        console.error(error)
        err.value = true
    } finally {
        loadingNews.value = false
    }
}

const changeDateFormat = (date) => {
    // 2024-09-17T04:21:33.947+00:00
    const newDate = new Date(date)
    const month = ref('')   

    switch (newDate.getMonth()){
        case 0:
            month.value = 'January';
            break;
        case 1:
            month.value = 'February';
            break;
        case 2:
            month.value = 'March';
            break;
        case 3:
            month.value = 'April';
            break;
        case 4:
            month.value = 'May';
            break;
        case 5:
            month.value = 'June';
            break;
        case 6:
            month.value = 'July';
            break;
        case 7:
            month.value = 'August';
            break;
        case 8:
            month.value = 'September';
            break;
        case 9:
            month.value = 'October';
            break;
        case 10:
            month.value = 'November';
            break;
        case 11:
            month.value = 'December';
            break;

    }

    return `${month.value} ${newDate.getDate()}, ${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}` 
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