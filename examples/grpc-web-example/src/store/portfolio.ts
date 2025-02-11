import { defineStore } from 'pinia'
import { createApi, type AccountPortfolio, type ExtPosition } from '../api'
import { useAuthStore } from './auth'
import { computed, ref } from 'vue'

export interface PortfolioState {
    loading: boolean
    portfolios: AccountPortfolio[],
    positions: ExtPosition[],
}

export const usePortfolioStore = defineStore('portfolio', 
    () => {
        const positionsRef = ref([] as ExtPosition[])
        const loading = ref(true)
        async function loadPortfolio() {
            const authTokenStore = useAuthStore()
            const result = await createApi(authTokenStore.authTokenRef).portfolios()

            console.log('load portfolio', result)
            positionsRef.value = result.flatMap(portfolio => portfolio.positions)
            loading.value = false
        }
        const positions = computed(()=>positionsRef.value)
        return {
            positions,
            loadPortfolio
        }
    }
)