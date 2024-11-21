<template>
    <section class="h-[90dvh] bg-white w-full flex flex-col items-center justify-center gap-y-20 font-poppins relative px-10 lg:px-0">
        <div class="w-full shadow max-w-6xl h-[80%] bg-gray-300/55 rounded-xl p-10 flex flex-col items-center gap-y-10">
            <div class="bg-gray-400 rounded-full w-56 aspect-square flex items-center justify-center">
                <img src="../assets/logo.png" alt="nopsscea logo" class="rounded-full aspect-auto">
            </div>
            <div class="space-y-5 text-center">
                <h1 class="text-4xl font-semibold tracking-wide text-custom-primary">Application Complete!</h1>
                <p class="font-medium text-gray-600">Please wait for the approval of your Application</p>
            </div>
            <router-link :to="{ name: 'home' }" class="bg-custom-primary px-4 lg:w-1/5 text-center text-white py-2 rounded-md">Go back to Home</router-link>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

</style>