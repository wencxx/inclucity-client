<template>
    <div class="h-[90dvh] md:w-2/3 xl:w-full p-10 pb-0 font-poppins flex flex-col items-center gap-y-5 overflow-auto overflow-x-hidden mx-auto md:px-16 lg:px-32">
        <h1 class="font-semibold font-manrope uppercase text-2xl lg:text-3xl w-full mx-auto text-custom-primary">News</h1>
        <!-- skeleton loading -->
        <div v-if="loadingNews" class="mt-2 lg:mt-5 flex flex-col gap-y-5 w-full mx-auto">
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
        <div v-if="!noNews" class="mt-2 lg:mt-5 flex flex-col gap-y-5 w-full mx-auto">
            <div v-for="( n, index ) in news" :key="index" class="flex flex-col gap-y-2 font-poppins bg-white p-3 rounded-md shadow-xl cursor-default hover:shadow-md lg:px-[3dvw]">
                <div class="flex items-center text-lg">
                    <img src="../assets/logo.png" alt="logot" class="w-20 -ml-5">
                    <div>
                        <h1>Inclucity</h1>
                        <p class="text-gray-600 italic text-xs">{{ changeDateFormat(n.datePosted) }}</p>
                    </div>
                </div>
                <div class="px-20 mt-5">
                    <p class="capitalize font-medium text-md">{{ n.postTitle }}</p>
                    <p class="text-gray-500 text-md mt-3 text-justify whitespace-pre-line">{{ n.postDescription }}</p>
                    <div v-if="n.postUrl.length > 1" class="flex flex-col mb-3">
                        <router-link :to="url" target="_blank" class="text-blue-500 underline" v-for="url in n.postUrl" :key="url">{{ url }}</router-link>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mt-4" :class="{ 'grid-cols-1': n.mediaUrls <= 2 }">
                        <div v-for="(media, index) in n.mediaUrls" :key="index" class="relative" :class="{ 'col-span-2': n.mediaUrls.length == 1 }">
                            <img :src="media" @click="zoomImages(n.mediaUrls, index)" alt="logo" class="w-full aspect-square object-cover rounded cursor-pointer">
                            <div v-if="index === 3 && n.mediaUrls.length > 4" class="bg-black/55 absolute top-0 left-0 w-full aspect-square rounded flex items-center justify-center text-white">
                                <p class="text-3xl">+{{ n.mediaUrls.length - 4 }}</p>
                            </div>
                        </div>
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

        <!-- images -->
        <div v-if="showImageModal" @click.self="showImageModal = false" class="absolute top-0 left-0 w-screen h-screen bg-black/65 flex items-center justify-center z-[1000]">
            <div class="absolute top-3 right-3 bg-gray-500/55 rounded-full p-2 cursor-pointer" @click="showImageModal = false">
                <Icon icon="mdi:close" class="text-white text-lg" />
            </div>
            <img :src="imagesToZoom[showing]" class="max-h-[90%] max-w-[60dvw]">
            <button class="lg:text-4xl bg-gray-500/50 rounded-full p-2 text-white absolute left-10" @click="prev()">
                <Icon icon="mdi:keyboard-arrow-left" />
            </button>
            <button class="lg:text-4xl bg-gray-500/50 rounded-full p-2 text-white absolute right-10" @click="next()">
                <Icon icon="mdi:keyboard-arrow-right" />
            </button>
        </div>
        <Footer class="mt-20 -ml-10 md:-ml-16 lg:-ml-32 w-screen"/>
    </div>
</template>

<script setup>
import Footer from '../components/footer.vue'
import axios from "axios";
import { onMounted, ref } from "vue";
import moment from 'moment'
const serverUrl = import.meta.env.VITE_SERVER_URL

const imagesToZoom = ref(null)
const showing = ref(0)
const showImageModal = ref(false)

const zoomImages = (images, index) => {
    showImageModal.value = true
    imagesToZoom.value = images
    showing.value = index
}

const prev = () => {
    if(showing.value === 0){
        showing.value = imagesToZoom.value?.length - 1
    }else{
        showing.value--
    }
}

const next = () => {
    if(showing.value < imagesToZoom.value?.length - 1){
        showing.value++
    }else{
        showing.value = 0
    }
}

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