<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-itemv3 
          v-if="item.discoveryContentType === 3"
          :itemDate="item.data"
          @click="itemClick(item.data)" 
        />
        <house-itemv9 
          v-else="item.discoveryContentType === 9"
          :itemDate="item.data"
          @click="itemClick(item.data)" 
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home.js';
import { storeToRefs } from 'pinia';
import houseItemv3 from "@/components/house-itemv3/house-itemv3.vue"
import houseItemv9 from "@/components/house-itemv9/house-itemv9.vue"
import { useRouter } from 'vue-router';


const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

const router = useRouter()
function itemClick(item) {
  router.push("/detail/" + item.houseId)
}

</script>

<style lang="less" scoped>

.content {
  background-color: #f1f2f6;
  .title {
    padding: 15px 20px;
    font-size: 22px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>