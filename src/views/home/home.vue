<template>
  <div class="home" ref="homeRef">
    <home-nav-bar />

    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>

    <div class="image">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>

    <home-seach-box />

    <home-categories />

    <home-content />

  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>
<script setup>
import { computed, onActivated, ref, watch } from 'vue';
import useHomeStore from '@/stores/modules/home';
import homeNavBar from './cpns/home-nav-bar.vue';
import HomeSeachBox from './cpns/home-seach-box.vue';
import HomeCategories from "./cpns/home-categories.vue";
import homeContent from './cpns/home-content.vue';
import HomeContent from './cpns/home-content.vue';
import searchBar from '@/components/search-bar/search-bar.vue'
import useScroll from "@/hooks/useScroll"

// 1.告知store发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

// 2.滚动到底部加载更多
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    // 当网络请求有结果后再改为false
    homeStore.fetchHouseList().then(() => {
    isReachBottom.value = false
  })
  }
})

// 3.控制搜索框是否显示
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 518
})

// 4.跳转回home时, 保持原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  box-sizing: border-box;
  // height: calc(100vh - 50px);
  height: 100vh;
  overflow-y: auto;
  background-color: #f7f7f7;

  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 10px;
    background-color: #f1f2f6;
  }

  .image {
    img {
      width: 100%;
    }
  }
}
</style>