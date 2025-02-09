import { defineStore } from 'pinia'
import { portfolios, type AccountPortfolio } from '../api'

export interface PortfolioState {
    loading: boolean
    portfolios: AccountPortfolio[]
}

export const usePortfolioStore = defineStore('portfolio', {
    state: (): PortfolioState => ({
        portfolios: [],
        loading: true
    }),
    actions: {
        async loadPortfolio() {
            const result = await portfolios()
            this.portfolios =  result;
            this.loading = false
        }
    }
})