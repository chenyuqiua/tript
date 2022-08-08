<template>
  <div class="favor">
    <nav-bar>
      <van-tabs v-model:active="active" type="card" color="#ff9854">
        <van-tab title="我的收藏" to="/favor/collect"></van-tab>
        <van-tab title="浏览历史" to="/favor/browse"></van-tab>
      </van-tabs>
    </nav-bar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import useFavorStore from '@/stores/modules/favor';
import NavBar from '@/components/nav-bar/nav-bar.vue';

import { ref } from 'vue';

// 告知Store发送网络请求
const favorStore = useFavorStore()
favorStore.fetchFavorItem()
favorStore.fetchBrowseItem()

const active = ref(0)

</script>

<style lang="less" scoped>
.favor {
  background-color: #f7f8fb;
}

</style>