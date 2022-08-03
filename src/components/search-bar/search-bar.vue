<template>
  <div class="search">
    <div class="select-time">
      <div class="item-start">
        <span class="name">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="item-end">
        <span class="name">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
      <div class="icon"></div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="icon"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { fomatMonthDay } from '@/utils/format_date.js';
import useMainStore from '@/stores/modules/main.js';
import { storeToRefs } from 'pinia';

// 从main中获取时间
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

// 格式化时间
const startDateStr = computed(() => fomatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => fomatMonthDay(endDate.value, "MM.DD"))

</script>

<style lang="less" scoped>
.search {
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 15px;
  text-align: center;
  background-color: #fff;

  .select-time {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70px;
    height: 100%;
    margin-right: 5px;
    border-right: 2px solid #eee;
    
    .name {
      color: #aaa;
      margin-right: 2px;
    }

    .date {
      color: #333;
    }
    
    .icon {
      position: absolute;
      right: -2px;
      bottom: 4px;
      width: 10px;
      height: 10px;
      background: url('@/assets/img/sprite.png') no-repeat -238px -103px;
      transform: scale(.7, .7);
    }
  }

  .content {
    flex: 1;
    color: #aaa;
    text-align: left;
  }

  .icon {
    width: 38px;
    height: 38px;
    background: url("@/assets/img/home/home-sprite.png") no-repeat -62px -307px;
    transform: scale(.5, .5)
  }
}
</style>