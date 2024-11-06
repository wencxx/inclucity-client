<template>
    <div class="container md:w-2/3 xl:w-2/3 py-3 px-10 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden w-full">
            <router-link :to="{ name: 'home' }" class="self-start">
                <Icon icon="material-symbols-light:arrow-back" class="text-4xl text-gray-500" />
            </router-link>
            <video src="../../tutorial.mp4" controls autoplay muted playsinline class="h-[80%] aspect-video mx-auto mt-10"></video>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
#reqContainer::-webkit-scrollbar {
    display: none;
}
</style>
