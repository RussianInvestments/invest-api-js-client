<script setup lang="ts">
import { router } from '../router/router';
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia'

const authTokenStore = useAuthStore()
const { authTokenRef, hasAuthToken } = storeToRefs(authTokenStore)
function next() {
    authTokenStore.setupToken(authTokenRef.value)
    router.push('/portfolio')
}
</script>

<template>
  <q-page>
    <h1>enter token</h1>
    <q-input v-model="authTokenRef" filled type="password" hint="Token" />
    <q-btn color="primary" label="Next" :disabled=!hasAuthToken @click=next />
  </q-page>
</template>

