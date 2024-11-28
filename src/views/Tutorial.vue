<template>
    <div class="md:w-2/3 xl:w-full px-10 lg:px-0 font-poppins flex flex-col items-center gap-y-5 mx-auto">
        <div id="reqContainer" class="h-[86dvh] overflow-y-scroll overflow-x-hidden w-full">
            <h1 class="text-center my-10 font-semibold text-2xl">Tutorial Guide</h1>
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
