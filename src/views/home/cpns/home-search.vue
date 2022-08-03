<template>
  <div class="home-search">
    <!-- 位置信息 -->
    <div class="item location">
      <div class="city" @click="cityClick">
        <slot></slot>
        <span class="city-icon"> > </span>
      </div>
      <div class="position">
        <span class="text" @click="positionClick">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="item data-range" @click="showCalendar = true">
      <div class="start date">
        <span class="tip">入住</span>
        <span class="time">{{ startDateStr }}</span>
      </div>
      <div class="stay">
        <span>共{{ stayCount }}晚</span>
      </div>
      <div class="end date">
        <span class="tip">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar 
      v-model:show="showCalendar" 
      type="range" @confirm="onConfirm" 
      :formatter="formatter"
      color="#ff9854"
    />

    <!-- 关键字 -->
    <div class="item price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="item keyword">关键字/位置/民宿名</div>

    <!-- 热词建议 -->
    <div class="item hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="hot-word"
          :style="{color: item.tagText.color, background: item.tagText.background.color}"
          >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia";
import { fomatMonthDay, getDiffDays } from "@/utils/format_date"
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main.js";

const router = useRouter()

// 接收父组件传递的数据
const props = defineProps({
  isShow: {
    type: Boolean,
    default: true
  }
})

const cityStore = useCityStore()

// 1.监听城市点击事件
function cityClick() {
  // 判断城市点击国内还是国外, 根据不同的国家, 默认展示不同的城市
  if (props.isShow) {
    cityStore.tabActive = "cityGroup"
  } else {
    cityStore.tabActive = "cityGroupOverSea"
  }
  router.push("/city")
}

// 2.获取位置信息
function positionClick() {
  navigator.geolocation.getCurrentPosition(function(res) {
    console.log("获取位置成功", res)
  }, function(err) {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 3.日期范围处理
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => fomatMonthDay(startDate.value))
const endDateStr = computed(() => fomatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value)) 

// 控制是否展示日历
const showCalendar = ref(false)

// 日期显式文案
function formatter(day) {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
};

// 监听点击事件选择日期
function onConfirm(value) {
  // 设置选择的时间
  mainStore.startDate = value[0]
  mainStore.endDate = value[1]

  // 点击确定隐藏日历
  showCalendar.value = false

  // 设置日期相差天数
  stayCount.value = getDiffDays(value[0], value[1])
}

// 4.热词展示
const homeStore = useHomeStore()
// 获取网络请求的数据
const { hotSuggests } = storeToRefs(homeStore)

// 5.搜索按钮点击事件
const { currentInlandCity, currentOverseasCity } = storeToRefs(cityStore)
function searchBtnClick() {
  console.log("first")
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentInlandCity: currentInlandCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>
.home-search {
  --van-calendar-popup-height: 100%;
  --van-popup-round-border-radius: 0;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    margin: 0 20px;
  }

  .location {
    border-bottom: 1px solid #c8c9cc;
     .city {
      flex: 1;
      color: #333;
      font-size: 14px;

      .city-icon {
        margin-left: 5px;
        color: #aaa;
      }
    }

    .position {
      width: 88px;
      box-sizing: border-box;

      .text {
        padding-left: 10px;
        border-left: 1px solid #aaa;
        font-size: 12px;
        color: var(--primary-color);
      }

      img {
        position: relative;
        bottom: 1px;
        width: 17px;
        margin-left: 7px;
      }
    }
  }

  .data-range {
    height: 48px;
    border-bottom: 1px solid #c8c9cc;
    
    .date {
      display: flex;
      flex-direction: column;

      .tip {
        margin-bottom: 2px;
        color: #aaa;
        font-size: 12px;
      }

      .time {
        font-size: 15px;
        margin-top: 2px;
      }
    }
  }

  .keyword, .price-counter {
    color: #aaa;
    // border-bottom: 1px solid #c8c9cc;
  }

  .hot-suggests {
    justify-content: left;
    flex-wrap: wrap;
    // margin-top: 7px;
    height: auto;

    .hot-word {
      padding: 4px 8px;
      margin: 5px 3px;
      border-radius: 14px;
      font-size: 12px;
    }
  }
  
  .search-btn {
    margin: 10px 20px;
    text-align: center;
    
    .btn {
      width: 342px;
      height: 38px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      line-height: 38px;
      border-radius: 20px;
      background-image: var(--theme-linear-gradient);
    }
  }
}
</style>