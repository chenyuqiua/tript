<template>
  <div class="order">
    <!-- nav导航 -->
    <div class="nav">
      <nav-bar>
        <div class="title">订单列表</div>
      </nav-bar>
    </div>
    <!-- tab栏切换 -->
    <van-tabs 
      v-model:active="currentOrder" 
      color="#fa8c1d" 
      title-active-color="#fa8c1d"
    >
      <template v-for="(item, index) in orderTitles" :key="item">
        <van-tab :title="item" :name="index"></van-tab>
      </template>
    </van-tabs>

    <order-item :order-data="orderList" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getOrderList } from "@/services"
import NavBar from '@/components/nav-bar/nav-bar.vue';
import OrderItem from './cpns/order-item.vue';

const currentOrder = ref();
const orderTitles = ["全部订单", "近期订单", "待支付"]
const orderTitleType = ["all", "recent", "pend"]
const orderList = ref([0])

getOrderList().then(res => {
  orderList.value = res.data.data.orders
})

watch(currentOrder, (newValue) => {
  if (newValue !== undefined) {
    getOrderList(orderTitleType[newValue]).then(res => {
      orderList.value = res.data.data.orders
    })
  }
})
</script>

<style lang="less" scoped>
.order {
  background-color: #f7f8fb;
  .nav {
    .title {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
}
</style>