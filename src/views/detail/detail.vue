<template>
  <div class="detail">
    <detail-nav-bar />

    <!-- 防止网络请求前 没有数据展示报错 -->
    <div class="main" v-if="mainPart">
      <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getDetailInfos } from "@/services"
import DetailSwipe from "./cpns/detail-swipe.vue"
import DetailNavBar from './cpns/detail-nav-bar.vue';


const route = useRoute()
const houseId = route.params.id

// 1.发送网络请求, 获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
 
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})



</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;
}
</style>