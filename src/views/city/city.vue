<template>
  <div class="city">
    <div class="top">
      <!-- 1.搜索框区域 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- 2.tab切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 3.动态显式城市的组件 -->
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="key === tabActive" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import useCityStore from "@/stores/modules/city"
import { storeToRefs } from "pinia";

import cityGroup from "./cpns/city-group.vue";

const router = useRouter()
const cityStore = useCityStore()

// 1.搜索框功能
let searchValue = ref("")
function cancelClick() {
  router.back()
}

// 2.tab的切换
const tabActive = cityStore.tabActive

// 3.获取Store数据
// 告知store向服务器发送网络请求
cityStore.fetchAllCities()
const { allCities } = storeToRefs(cityStore)

</script>

<style lang="less" scoped>
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  // 设置局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>