<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolioStore } from '../store/portfolio';
import { storeToRefs } from 'pinia'

const store = usePortfolioStore()
const selected = ref([])
const columns = [
    {
        name: 'account',
        label: 'Account',
        field: 'accountName'
    },
    { name: 'Name', label: 'Nm', field: (row:any) => row.instrument.instrument.name },
    { name: 'Qty', label: 'Quantity', field: (row:any) => row.position.quantity.units },
    { name: 'avgPrice', label: 'AvgPrice', field: (row:any) => row.position.averagePositionPrice.units }
]

//const {positions} = storeToRefs(store)

const getSelectedString = () => {
    return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${positions.value.length}`
}



store.loadPortfolio()

</script>

<template>
    <q-page>
        <h1>Portfolio</h1>
        <q-btn label="Refresh" @click=store.loadPortfolio() />
        <div class="q-pa-md">

            <q-table flat bordered dark :rows="store.positions" :columns="columns" 
            selection="multiple" v-model:selected="selected" />


            <div class="q-mt-md">
                
                Selected: {{ JSON.stringify(selected) }}
                DATA: {{ JSON.stringify(store.positions) }}
            </div>
        </div>
    </q-page>
</template>
