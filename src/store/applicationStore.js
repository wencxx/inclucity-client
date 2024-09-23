import { defineStore } from "pinia";
import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_URL

export const useApplicationStore = defineStore('applicationStore', {
    state: () => ({
        application: null,
    }),
    actions: {
        async getApplication(){
            try {
                const application = await axios.get(`${serverUrl}/get-user-application`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                if(application.data == 'no data') return

                this.application = application.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})
