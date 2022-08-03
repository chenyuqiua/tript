<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <!-- 热门城市 -->
      <van-index-anchor index="热门"/>
      <div class="list">
        <template v-for="(item, index) in groupData.hotCities">
          <div class="item" @click="cityClick(item)">
            {{ item.cityName }}
          </div>
        </template>
      </div>

      <!-- 全部城市 -->
      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(jtem, jndex) in item.cities" :key="jndex">
          <van-cell :title="jtem.cityName" @click="cityClick(jtem)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRouter } from "vue-router";
import useCityStore from "@/stores/modules/city";

// 1.接收props数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
}) 

// 2.动态的添加索引
const indexList = computed(() => {
  const arr = props.groupData.cities.map(item => item.group)
  arr.unshift("#")
  return arr
})

// 3.监听城市的点击
const cityStore = useCityStore()
const router = useRouter()
function cityClick(city) {
  if (props.groupData.title === "海外") {
    cityStore.currentOverseasCity = city
    router.back()
  } else {
    cityStore.currentInlandCity = city
    router.back()
  }
}
</script>

<style lang="less" scoped>
.city-group {
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
    padding-right: 26px;

    .item {
      width: 70px;
      height: 28px;
      border-radius: 20px;
      margin-top: 15px;
      background-color: #FFF4EC;
      text-align: center;
      line-height: 28px;
      color: #000;
      font-size: 12px;
    }
  }
}
</style>