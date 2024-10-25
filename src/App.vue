<template>
    <section  class="dark:!bg-neutral-800 dark:!text-white relative" :class="{ 'h-screen bg-gray-100': isAuthenticated }">
        <Header :routePath="routePath" v-if="isAuthenticated" @toggleSidebar="isSidebarShowing = !isSidebarShowing" />
        <Sidebar v-if="isSidebarShowing" />
        <router-view />
    </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore, useApplicationStore } from '../src/store'
import Header from '../src/components/Header.vue'
import Sidebar from '../src/components/Sidebar.vue'

const route = useRoute()
const authStore = useAuthStore()
const applicationStore = useApplicationStore()

const isAuthenticated = computed(() => authStore.isAuth)

const isSidebarShowing = ref(false)

const routePath = computed(() => route.path)

watch(routePath, () => {
    isSidebarShowing.value = false
})

onMounted(() => {
  if(localStorage.getItem('auth')){
    authStore.getUser()
    // applicationStore.getApplication()
  }
})

</script>

<style>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>