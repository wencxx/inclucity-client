<template>
    <section class="h-[90dvh] overflow-auto font-poppins p-10 md:px-16 lg:px-32">
        <h1 class="font-semibold font-manrope uppercase text-2xl lg:text-3xl w-full xl:w-2/3 mx-auto">News</h1>
        <!-- skeleton loading -->
        <div v-if="loadingNews" class="mt-2 lg:mt-5 flex flex-col gap-y-5 w-full xl:w-2/3 mx-auto">
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
        <div v-if="!noNews" class="mt-2 lg:mt-5 flex flex-col gap-y-5 w-full xl:w-2/3 mx-auto">
            <div v-for="( n, index ) in news" :key="index" class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <div class="flex items-center text-lg">
                    <img src="../assets/logo.png" alt="logot" class="w-20">
                    <div>
                        <h1>Inclucity</h1>
                        <p class="text-gray-600 italic text-xs">{{ changeDateFormat(n.datePosted) }}</p>
                    </div>
                </div>
                <div>
                    <p class="capitalize font-medium text-md">{{ n.postTitle }}</p>
                    <p class="text-gray-500 text-md mt-3 text-justify">{{ n.postDescription }}</p>
                    <div v-if="n.postUrl.length > 1" class="flex flex-col mb-3">
                        <router-link :to="url" target="_blank" class="text-blue-500 underline" v-for="url in n.postUrl" :key="url">{{ url }}</router-link>
                    </div>
                    <div>
                        <img :src="n.imageName" alt="logo" class="w-full aspect-video object-cover rounded">
                    </div>
                </div>
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
import moment from 'moment'
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
    
    return moment(date).format('llll')
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