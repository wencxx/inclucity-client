<template>
    <section class="h-[90dvh] w-full flex flex-col items-center justify-center gap-y-20 font-poppins relative">
        <div class="absolute inset-0 bg-white bg-opacity-30"></div>
        <h1 class="text-black text-2xl lg:text-3xl font-semibold z-10">You have successfully applied</h1>
        <router-link :to="{ name: 'home' }" class="bg-custom-primary z-10 text-white w-fit py-2 px-2 text-center rounded-md">Go back home</router-link>
    </section>
</template>

<script setup>

</script>

<style scoped>
section {
    background-image: url('../assets/bg3.png');
    /* background-position: center; */
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
}
</style>