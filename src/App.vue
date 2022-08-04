<template>
  <div class="app">
    <!-- 首页保持活跃 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hiddenTabBar"/>
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