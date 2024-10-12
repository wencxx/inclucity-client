<template>
    <section class="container font-poppins p-4 mx-auto flex justify-center">
        <div v-if="err" class="text-center mt-10">
            <h1 class="text-lg uppercase">server error</h1>
        </div>
        <div v-if="invalidId" class="text-center mt-10">
            <h1 class="text-lg uppercase">News not found</h1>
        </div>
        <div v-if="news" class="mt-2 lg:mt-5 md:w-2/4">
            <h1 class="text-xl md:text-2xl uppercase font-medium mb-3">News</h1>
            <div class="flex flex-col gap-y-5 font-poppins bg-white p-3 rounded-md shadow cursor-default hover:shadow-md">
                <img :src="news.imageName" alt="logo" class="w-full rounded">
                <p class="capitalize font-medium text-md">{{ news.postTitle }}</p>
                <p class="text-gray-600 italic text-xs">{{ changeDateFormat(news.datePosted) }}</p>
                <p class="capitalize text-sm px-2 text-gray-600">" {{ news.postDescription }} "</p>
                <div v-if="news.postUrl.length > 0">
                    <p class="text-gray-600 text-sm">Read more:</p>
                    <div class="w-1/3">
                        <a v-for="url in news.postUrl" :key="url" :href="formatUrl(url)" target="_blank" class="text-blue-500 text-sm hover:underline hover:text-blue-700">{{ url }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios';
import { ref } from 'vue';
const serverUrl = import.meta.env.VITE_SERVER_URL

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

<style>

</style>