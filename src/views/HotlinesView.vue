<template>
    <div class="md:w-2/3 xl:w-full lg:px-0 font-poppins flex flex-col items-center gap-y-12 mx-auto overflow-y-auto h-[90dvh] pb-10">
        <div class="w-full bg-custom-primary h-56 py-10 flex flex-col justify-center items-center gap-5 mx-auto">
            <div class="flex w-3/4 lg:w-1/3 gap-x-10">
                <hr class="bg-white border-2 w-1/2">
                <hr class="bg-white border-2 w-1/2">
            </div>
            <h1 class="text-white text-4xl lg:text-5xl font-semibold uppercase">Laging mag handa</h1>
            <hr class="bg-white border-2 w-3/4 lg:w-1/3">
        </div>
        <div class="bg-custom-primary w-3/4 lg:w-fit px-10 py-5 rounded-full">
            <h1 class="text-white text-xl lg:text-2xl text-center font-bold uppercase">Malolos and bulacan emergency hotlines</h1>
        </div>
        <h1 class="font-bold text-2xl text-center w-4/5 lg:w-fit">Philippine national emergency hotline:<span class="text-custom-primary tracking-widest"> 911</span></h1>
        <div class="grid lg:grid-cols-2 gap-x-10 gap-y-5 w-3/4">
                <div class="flex items-center justify-center bg-white p-5 rounded-xl shadow">
                    <img src="../assets/malolos.png" alt="malolos seal" class="w-2/4 lg:w-1/4 aspect-auto">
                    <div class="w-2/4 lg:w-3/5 text-center">
                        <h2 class="font-bold text-custom-primary uppercase tracking-wide text-2xl">Malolos Rescue: </h2>
                        <p class="text-mdfont-semibold" @click="dialNumber('0928 226 9801')">0928 226 9801</p>
                        <p class="text-mdfont-semibold" @click="dialNumber('0977 640 5828')">0977 640 5828</p>
                        <p class="text-mdfont-semibold" @click="dialNumber('044 760-5160')">(044) 760-5160</p>
                    </div>
                </div>
                <div class="flex items-center justify-center bg-white p-5 rounded-xl shadow">
                    <img src="../assets/medical.png" alt="malolos seal" class="w-2/4 lg:w-1/4 aspect-auto">
                    <div class="w-3/5 text-center">
                        <h2 class="font-bold text-custom-primary uppercase tracking-wide text-2xl">Bulacan Medical Center: </h2>
                        <p class="text-mdfont-semibold" @click="dialNumber('0933 350 7791')">0933 350 7791</p>
                        <p class="text-mdfont-semibold" @click="dialNumber('0923 449 8262')">0923 449 8262</p>
                        <p class="text-mdfont-semibold" @click="dialNumber('0919 853 7331')">0919 853 7331</p>
                    </div>
                </div>
                <div class="flex items-center justify-center bg-white p-5 rounded-xl shadow">
                    <img src="../assets/bulacan.png" alt="malolos seal" class="w-2/4 lg:w-1/4 aspect-auto">
                    <div class="w-3/5 flex flex-col h-3/4 justify-between text-center">
                        <h2 class="font-bold text-custom-primary uppercase tracking-wide text-2xl">Bulacan Rescue: </h2>
                        <p class="text-mdfont-semibold" @click="dialNumber('0928 226 9801')">911 / (044) 791-0566</p>
                    </div>
                </div>
                <div class="flex items-center justify-center bg-white p-5 rounded-xl shadow">
                    <img src="../assets/health.png" alt="malolos seal" class="w-2/4 lg:w-1/4 aspect-auto">
                    <div class="w-3/5 flex flex-col h-3/4 justify-between text-center">
                        <h2 class="font-bold text-custom-primary uppercase tracking-wide text-2xl">City Health Office: </h2>
                        <p class="text-mdfont-semibold" @click="dialNumber('0928 226 9801')">(044) 931-8888</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
function dialNumber(number) {
  window.location.href = `tel:${number}`;
}
</script>

<style scoped>
/* section {
    background-image: url('../assets/bg4.png');
    background-size: 50%;
    background-position-x: 60dvw;
    background-position-y: 30dvh;
    background-repeat: no-repeat;
    background-blend-mode: lighten;
} */
</style>