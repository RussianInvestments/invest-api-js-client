import { defineStore } from 'pinia'
import { computed, ref } from 'vue'


export const useAuthStore = defineStore('auth', () => {
    const authTokenRef = ref('')
    const hasAuthToken = computed(()=> authTokenRef.value.length > 0)
    function setupToken(authToken: string) {
        authTokenRef.value = authToken
    }
    return { authTokenRef, hasAuthToken, setupToken }
})