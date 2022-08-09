<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" inactive-color="#666" placeholder route>
      <van-tabbar-item 
        v-for="(item, index) in tabbarData"
        :key="index"
        :to="item.path"
      >
        <span :class="{active: currentIndex === index}">{{ item.text }}</span>
        <template #icon>
          <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" >
          <img v-else :src="getAssetURL(item.imageActive)">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import tabbarData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load_assets"
import { useRoute } from "vue-router";

// 解决直接输入url tab栏不切换
const route = useRoute()
const currentIndex = ref(0)
watch(route, (newValue) => {
  const index = tabbarData.findIndex(item => item.path === newValue.path)
  if (index === -1) return
  currentIndex.value = index
})

</script>

<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item--active) {
    color: #666;
  }
  .active {
    color: var(--primary-color);
  }

   img {
    width: 32px;
    height: 24px;
  }
}
</style>