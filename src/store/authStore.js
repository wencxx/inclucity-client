import { defineStore } from "pinia";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
        isAuth: !!localStorage.getItem('auth')
    }),
    actions: {
        async login(token) {
            localStorage.setItem('token', token)
            localStorage.setItem('auth', true)

            this.token = token
            this.isAuth = true
            this.getUser()
        },
        logout(){
            localStorage.removeItem('token'),
            localStorage.removeItem('auth')

            this.token = null;
            this.isAuth = false;
            this.user = null;
        },
        async getUser(){
            const res = await axios.get(`${serverUrl}/get-user`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if(res.data === 'user not found') return this.user = null

            this.user = res.data
        }
    }
})
