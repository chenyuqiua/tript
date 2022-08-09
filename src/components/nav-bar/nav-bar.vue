<template>
  <div class="nav">
    <van-nav-bar 
      title="标题" 
      left-text="主页" 
      left-arrow 
      @click-left="goBack" 
      class="title" 
      placeholder 
      fixed
    >
      <template #title>
        <slot></slot>
      </template>
      <template #right>
        <div class="right-icon"></div>
      </template>
    </van-nav-bar>    
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function goBack() {
  router.push("/")
}
</script>

<style lang="less" scoped>
.nav {
  --van-nav-bar-icon-color: var(--primary-color);
  :deep(.van-nav-bar__text) {
    color: var(--primary-color)
  };

  .title {
    font-weight: 700;
  }
  
  .right-icon {
    width: 20px;
    height: 15px;
    background-image: url(@/assets/img/home/icon-right-menu.png);
    background-size: 20px 15px;
  }
}
</style>