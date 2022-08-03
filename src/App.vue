<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hiddenTabBar"/>
    <loading />
  </div>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';
import loading from './components/loading/loading.vue';

const route = useRoute()
</script>

<style scoped>
  
</style>