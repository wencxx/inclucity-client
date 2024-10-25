<template>
    <div class="container md:w-2/3 xl:w-2/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden">
            <router-link :to="{ name: 'home' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <option value=""></option>
            <div class="w-full p-5 flex flex-col gap-y-10 mt-5">
                <!-- bell -->
                <div v-if="!route.query.page">
                    <img v-if="!route.query.lang" src="@assets/tutorial/Notif bell.png">
                    <img v-else src="@assets/tutorial/Notif bell (tagalog) (3).png">
                </div>
                <!-- language -->
                <div v-if="Number(route.query.page) === 1">
                    <img v-if="!route.query.lang" src="@assets/tutorial/Language.png">
                    <img v-else src="@assets/tutorial/Language (tagalog).png">
                </div>
                <!-- menu -->
                <div v-if="Number(route.query.page) === 2">
                    <img v-if="!route.query.lang" src="@assets/tutorial/Menu.png">
                    <img v-else src="@assets/tutorial/Language (tagalog) (2).png">
                </div>
                <!-- home -->
                <div v-if="Number(route.query.page) === 3">
                    <img v-if="!route.query.lang" src="@assets/tutorial/Home.png">
                    <img v-else src="@assets/tutorial/Home (tagalog).png">
                </div>
                <!-- application -->
                <div v-if="Number(route.query.page) === 4">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (2).png">
                </div>
                <!-- receipt -->
                <div v-if="Number(route.query.page) === 5">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog) (3).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (4).png">
                </div>
                <!-- status -->
                <div v-if="Number(route.query.page) === 6">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog) (5).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (6).png">
                </div>
                <!-- requirements -->
                <div v-if="Number(route.query.page) === 7">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog) (7).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (8).png">
                </div>
                <!-- hotlines -->
                <div v-if="Number(route.query.page) === 8">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog) (9).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (10).png">
                </div>
                <div v-if="Number(route.query.page) === 9">
                    <img v-if="!route.query.lang" src="@assets/tutorial/application  (tagalog) (11).png">
                    <img v-else src="@assets/tutorial/application  (tagalog) (112).png">
                </div>
                <div class="flex gap-x-5 justify-end">
                    <button class="bg-custom-primary w-1/12 text-white rounded py-1" @click="back" aria-label="Go back">Back</button>
                    <button class="bg-custom-primary w-1/12 text-white rounded py-1" @click="next" aria-label="Go to next">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const back = () => {
    const currentPage = Number(route.query.page) || 1;
    if (currentPage > 1) {
        router.push({
            query: {
                page: currentPage - 1,
                lang: route.query.lang,
            }
        })
    } else {
        router.push({ query: {
            lang: route.query.lang,
        } });
    }
}

const next = () => {
    const currentPage = Number(route.query.page) || 0;

    if (currentPage < 9) {
        router.push({
            query: {
                page: currentPage + 1,
                lang: route.query.lang
            }
        })
    }
}
</script>

<style scoped>
#reqContainer::-webkit-scrollbar {
    display: none;
}
</style>
