<template>
  <div class="nav-bar">
    <van-nav-bar
      title="房屋详情"
      left-text="主页"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    >
      <template #right>
        <!-- <share /> -->
        <van-cell title="分享" @click="showShare = true" />
        <van-share-sheet
          v-model:show="showShare"
          title="立即分享给好友"
          :options="options"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 1.设置分享组件
const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' }
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' }
  ]
]

// 2.点击返回按钮返回上一页
const router = useRouter()
function onClickLeft() {
  router.back()
}
</script>

<style lang="less" scoped>
.nav-bar {
  --van-nav-bar-text-color: var(--primary-color);
  --van-nav-bar-icon-color: var(--primary-color);
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-nav-bar-title-font-size: 18px;
  
  :deep(.van-popup--bottom) {
    --van-nav-bar-icon-color: #fff;
  }
}
</style>