<template>
    <section  class="dark:!bg-neutral-800 dark:!text-white relative" :class="{ 'h-screen bg-gray-100': isAuthenticated }">
        <Header :routePath="routePath" v-if="isAuthenticated" @toggleSidebar="isSidebarShowing = !isSidebarShowing" />
        <div class="lg:flex">
          <Sidebar v-if="isSidebarShowing" class="lg:hidden" :class="{ '!flex': $route.name === 'about', '!flex': $route.name === 'map' }" />
          <Sidebar v-if="isAuthenticated && $route.name !== 'about' && $route.name !== 'map'" class="hidden lg:block lg:relative lg:w-3/12" :class="{ '!hidden': $route.name === 'successful' }" />
          <router-view class="!lg:w-9/12" :class="{ '!w-full': $route.name === 'successful', '!w-full': !isAuthenticated }" />
        </div>
        <Tutorial v-if="firstLogin" @closeVideo="closeVid()" />
    </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore, useApplicationStore } from '../src/store'
import Header from '../src/components/Header.vue'
import Sidebar from '../src/components/Sidebar.vue'
import Tutorial from '../src/components/Tutorial.vue'
import axios from 'axios'
const serverUrl = import.meta.env.VITE_SERVER_URL

const route = useRoute()
const authStore = useAuthStore()
const applicationStore = useApplicationStore()

const isAuthenticated = computed(() => authStore.isAuth)
const user = computed(() => authStore.user)

const isSidebarShowing = ref(false)

const routePath = computed(() => route.path)

const firstLogin = ref(false)

const checkFirstTimeLogin = () => {
  if(user.value?.firstLogin === true){
    firstLogin.value = true
  }
}

const closeVid = async () => {
  firstLogin.value = false
  try {
    const data = {
      firstLogin: false
    }
    const res = await axios.patch(`${serverUrl}/update-first-login`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    console.log(res.data)
  } catch (error) {
    console.log('failed updating')
  }
}

watch(routePath, () => {
    isSidebarShowing.value = false
})

onMounted(async () => {
  if(localStorage.getItem('auth')){
    await authStore.getUser()
    checkFirstTimeLogin()
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
body {
  overflow: hidden;
}
</style>