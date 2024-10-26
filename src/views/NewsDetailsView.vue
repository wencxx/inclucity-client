<template>
    <section class="container font-poppins p-4 mx-auto flex flex-col items-center overflow-auto h-[90dvh]">
        <router-link :to="{ name: 'home' }" class="mt-2 lg:mt-5 md:w-2/4">
            <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500 dark:text-white" />
        </router-link>
        <div v-if="err" class="text-center mt-10">
            <h1 class="text-lg uppercase">server error</h1>
        </div>
        <div v-if="invalidId" class="text-center mt-10">
            <h1 class="text-lg uppercase">News not found</h1>
        </div>
        <div v-if="news" class="mt-2 lg:mt-5 md:w-2/4">
            <h1 class="text-xl md:text-2xl uppercase font-medium mb-3">News</h1>
            <div class="flex flex-col gap-y-5 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <!-- <img :src="news.imageName" alt="logo" class="w-full aspect-video rounded"> -->
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="(img, index) in news.mediaUrls" :key="index" class="relative" :class="{ 'hidden': index > 3 }">
                        <img :src="img" class="aspect-square rounded cursor-pointer" @click="viewImage(index)">
                        <div v-if="index === 3 && news.mediaUrls.length > 3" class="bg-black/10 absolute top-0 left-0 w-full aspect-square flex items-center justify-center">
                            <p class="text-4xl">+{{news.mediaUrls.length}}</p>
                        </div>
                    </div>
                </div>
                <p class="capitalize font-medium text-md">{{ news.postTitle }}</p>
                <p class="text-gray-600 italic text-xs">{{ changeDateFormat(news.datePosted) }}</p>
                <p class="capitalize text-sm px-2 text-gray-600">" {{ news.postDescription }} "</p>
                <div v-if="news.postUrl.length > 1">
                    <p class="text-gray-600 text-sm">Read more:</p>
                    <div class="w-1/3">
                        <a v-for="url in news.postUrl" :key="url" :href="formatUrl(url)" target="_blank" class="text-blue-500 text-sm hover:underline hover:text-blue-700">{{ url }}</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- images -->
        <div v-if="showImageModal" @click.self="showImageModal = false" class="absolute top-0 left-0 w-screen h-screen bg-black/25 flex items-center justify-center">
            <div class="absolute top-3 right-3 bg-gray-500/55 rounded-full p-2 cursor-pointer" @click="showImageModal = false">
                <Icon icon="mdi:close" class="text-white text-lg" />
            </div>
            <img :src="news.mediaUrls[imageShowing]" class="max-h-[90%] max-w-[60dvw]">
            <button class="lg:text-4xl bg-gray-500/50 rounded-full p-2 text-white absolute left-10" @click="prev()">
                <Icon icon="mdi:keyboard-arrow-left" />
            </button>
            <button class="lg:text-4xl bg-gray-500/50 rounded-full p-2 text-white absolute right-10" @click="next()">
                <Icon icon="mdi:keyboard-arrow-right" />
            </button>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue';
import moment from 'moment'
const serverUrl = import.meta.env.VITE_SERVER_URL

const showImageModal = ref(false)

const imageShowing = ref(0)

const viewImage = (index) => {
    showImageModal.value = true
    imageShowing.value = index
}

const prev = () => {
    if(imageShowing.value === 0){
        imageShowing.value = news.value.mediaUrls.length - 1
    }else{
        imageShowing.value--
    }
}

const next = () => {
    if(imageShowing.value < news.value.mediaUrls.length - 1){
        imageShowing.value++
    }else{
        imageShowing.value = 0
    }
}

const route = useRoute()

const newsId = route.params.id

const news = ref(null)
const invalidId = ref(false)
const err = ref(false)

const getNewsDetails = async () => {
    try {
        const res = await axios.get(`${serverUrl}/get-news-details/${newsId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(res.data === 'no news available') return invalidId.true
        if(res.data === 'something wrong with the server') return err.value = true

        news.value = res.data
    } catch (error) {
        err.value = true
    }
}

getNewsDetails()

const formatUrl = (url) => {
    return url.startsWith('http') ? url : `https://${url}`;
}

const changeDateFormat = (date) => {
    return moment(date).format('LLL')
    // 2024-09-17T04:21:33.947+00:00
    // const newDate = new Date(date)
    // const month = ref('')   

    // switch (newDate.getMonth()){
    //     case 0:
    //         month.value = 'January';
    //         break;
    //     case 1:
    //         month.value = 'February';
    //         break;
    //     case 2:
    //         month.value = 'March';
    //         break;
    //     case 3:
    //         month.value = 'April';
    //         break;
    //     case 4:
    //         month.value = 'May';
    //         break;
    //     case 5:
    //         month.value = 'June';
    //         break;
    //     case 6:
    //         month.value = 'July';
    //         break;
    //     case 7:
    //         month.value = 'August';
    //         break;
    //     case 8:
    //         month.value = 'September';
    //         break;
    //     case 9:
    //         month.value = 'October';
    //         break;
    //     case 10:
    //         month.value = 'November';
    //         break;
    //     case 11:
    //         month.value = 'December';
    //         break;

    // }

    // return `${month.value} ${newDate.getDate()}, ${newDate.getFullYear()} - ${newDate.getHours()}:${newDate.getMinutes()}` 
}

</script>

<style scoped>
.container::-webkit-scrollbar {
    display: none;
}
</style>