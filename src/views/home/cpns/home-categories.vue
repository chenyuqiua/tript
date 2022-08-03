<template>
  <div class="categories">
    <template v-for="(item, index) in categories" ::key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';


const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    width: 70px;
    // margin-left: 20px;
    align-items: center;
    
    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 7px;
    }
  }
}
</style>