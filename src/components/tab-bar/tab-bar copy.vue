<template>
  <div class="tab-bar">
    <div 
      class="tab-item" 
      v-for="(item, index) in tabbarData" 
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="itemClick(item, index)"
      >
      
      <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
      <img v-else :src="getAssetURL(item.imageActive)" alt="">
      <span>
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import tabbarData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load_assets"

let currentIndex = ref(0)
let router = useRouter()

function itemClick(item, index) {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 50px;

  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      width: 32px;
    }
  }
}
</style>