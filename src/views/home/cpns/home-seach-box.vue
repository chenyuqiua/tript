<template>
  <div class="home-seach-box">
    <!-- 1.国内海外切换 -->
    <div class="choice">
      <div class="inland item" @click="inlandClick" :class="{ active: isShow }">
        <span :class="{ underline: isShow }">国内</span>
      </div>
      <span class="icon"></span>
      <div class="overseas item" @click="overseasClick" :class="{active: !isShow}">
        <span :class="{ underline: !isShow }">海外</span>
      </div>
    </div>

    <!-- 2.动态显式国内海外 -->
    <home-search v-if="isShow" :isShow="isShow">
      {{ currentInlandCity.cityName }}
    </home-search>
    
    <home-search v-else :isShow="isShow">
      {{ currentOverseasCity.cityName }}
    </home-search>

  </div>
</template>

<script setup>
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import homeSearch from "./home-search.vue";

// 1.动态控制显式国内海外
const isShow = ref(true)
function inlandClick() {
  isShow.value = true
}
function overseasClick() {
  isShow.value = false
}

// 2.从Store中获取数据
const cityStore = useCityStore()
const { currentInlandCity, currentOverseasCity } = storeToRefs(cityStore)


</script>

<style lang="less" scoped>
.active {
  color: var(--primary-color);
  background-color: #f7f7f7;
}

.underline {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-bottom: 2px solid var(--primary-color);
}

.home-seach-box {
  .choice {
    display: flex;
    height: 38px;
    background-color: #f1f2f6;

    .item {
      width: 30px;
      height: 38px;
      padding: 0 20px;
      line-height: 38px;
      font-size: 15px;
      background-color: #f7f7f7;
    }

    .icon {
      width: 2px;
      
    }

    .overseas {
      border-top-right-radius: 30px;
    }
  }
  
}
</style>