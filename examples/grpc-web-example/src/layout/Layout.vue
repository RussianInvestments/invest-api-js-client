<template>
    <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
      <q-header elevated class="bg-grey-6">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="toggleLeftDrawer"
            aria-label="Menu"
            icon="menu"
          />
  
          <q-toolbar-title>
            T-Tech Invest Grpc Web Example
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
  
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        class="bg-grey-8"
      >
        <q-list dark>
          <q-item-label header>Essential Links</q-item-label>
          <q-item clickable target="_blank" rel="noopener" href="https://quasar.dev">
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Docs</q-item-label>
              <q-item-label caption>https://quasar.dev</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable target="_blank" rel="noopener" href="https://github.quasar.dev">
            <q-item-section avatar>
              <q-icon name="code" />
            </q-item-section>
            <q-item-section>
              <q-item-label>GitHub</q-item-label>
              <q-item-label caption>github.com/quasarframework</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue'
  
  export default {
    name: 'MyLayout',
  
    setup () {
      const leftDrawerOpen = ref(false)
  
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer
      }
    }
  }
  </script>