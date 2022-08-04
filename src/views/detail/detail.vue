<template>
  <div class="detail" ref="detailRef">
    <detail-nav-bar/>
    <van-tabs
      v-model:active="active"
      class="tabs" 
      color="#ff9854"
      v-if="showTabControl"
      @click-tab="onClickTab"
    >
      <template 
        v-for="(item, index) in names"
        :key="index"  
      >
        <van-tab :title="item"></van-tab>
      </template>
    </van-tabs>
    <!-- if判断防止网络请求前 没有数据展示报错 -->
    <div class="main" v-if="mainPart">
      <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics" />
      <detail-infos :topInfos="topInfos"/>
      <detail-facility name="设施" :ref="getSectionsRef" :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detail-landlord name="房东" :ref="getSectionsRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评论" :ref="getSectionsRef" :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice name="须知" :ref="getSectionsRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detail-map name="周边" :ref="getSectionsRef" :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getDetailInfos } from "@/services"

import DetailNavBar from './cpns/detail_01-nav-bar.vue';
import DetailSwipe from "./cpns/detail_02-swipe.vue"
import DetailInfos from './cpns/detail_03-infos.vue';
import DetailFacility from './cpns/detail_04-facility.vue';
import DetailLandlord from './cpns/detail_05-landlord.vue';
import DetailComment from './cpns/detail_06-comment.vue';
import DetailNotice from './cpns/detail_07-notice.vue';
import DetailMap from './cpns/detail_08-map.vue';
import DetailIntro from './cpns/detail_09-intro.vue';

import useScroll from '@/hooks/useScroll';

const route = useRoute()
const houseId = route.params.id

// 1.发送网络请求, 获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
const topInfos = computed(() => mainPart.value.topModule)
 
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
})

// 2.tab-control相关操作
const active = ref(0);
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)

// 2.1滚动到某个区域时显式tab-control
const showTabControl = computed(() => {
  return scrollTop.value >= 380
})

// 2.2动态展示tabcontrol的标签名
const sectionEls = ref({})
const names = computed(() => {
  return Object.keys(sectionEls.value)
})

function getSectionsRef(value) {
  if (!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}

// 2.3监听tabcontrol的点击事件
let isClick = false
let currentDistance = -1 
function onClickTab() {
  const key = Object.keys(sectionEls.value)[active.value]
  const el = sectionEls.value[key]
  isClick = true
  currentDistance = el.offsetTop - 90
  detailRef.value.scrollTo({
    top: el.offsetTop - 90,
    behavior: "smooth"
  })
}

// 3.页面滚动时, 匹配tab-control索引, 页面滚动tab-control跟随变化
// 3.1监听滚动的距离
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance || newValue - 1 === currentDistance) {
    isClick = false
  }
  if (isClick) return

  // 1.获取所有区域的offsetTop, 放入values数组中
  const els = Object.values(sectionEls.value)
  const values = els.map(item => item.offsetTop)

  // 2.根据newValue去匹配对应的索引(小算法)
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 90) {
      index = i - 1
      break
    }
  }
  active.value = index
})



</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;

  .tabs {
    position: fixed;
    z-index: 9;
    top: 45px;
    left: 0;
    right: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}

</style>