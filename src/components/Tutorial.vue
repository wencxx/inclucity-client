<template>
    <div class="w-screen h-screen bg-black/55 absolute top-0 left-0 flex items-center justify-center">
        <div class="fixed top-4 right-4 bg-gray-200 p-1 rounded-full cursor-pointer"><Icon icon="mdi:close" class="text-xl" @click="closeVid" /></div>
        <video src="../../tutorial.mp4" autoplay muted playsinline class="h-[90%] aspect-video"></video>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['closeVideo'])

const closeVid = () => {
    emit('closeVideo')
}
</script>