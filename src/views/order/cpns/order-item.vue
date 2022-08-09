<template>
    <template v-for="(item, index) in orderData" :key="index">
      <div class="order-item">
        <!-- 头部信息 -->
        <div class="order-title">
          <div class="unit-name">{{ item.unitName }}</div>
          <div class="status-name" :style="{ color: item.orderStatusDescColor }">
            {{ item.orderStatusDesc }}
          </div>
        </div>
        <!-- 展示封面 -->
        <div class="cover">
          <div class="image">
            <img :src="item.unitPicture" alt="">
          </div>
          <div class="cover-bottom">
            <div class="cb-left">
              <div class="data">
                <span class="day">{{ formatDate(item.checkInDate) }}</span>
                <div class="time">周三 {{ item.checkInLatestTime }}</div>
              </div>
              <div class="arrow">
                <img src="@/assets/img/order/icon_right_orderlist.png" alt="">
              </div>
              <div class="data">
                <div class="day">{{ formatDate(item.checkOutDate) }}</div>
                <div class="time">周四 {{ item.checkOutLatestTime }}</div>
              </div>
            </div>
            <div class="cb-right">
              <span class="price-info">支付总价</span>
              <div class="price">￥{{ item.prepayAmount }}</div>
            </div>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div class="item-btn">
          <div class="left">
            <img class="time-icon" src="@/assets/img/order/icon-time.png" alt="">
            <div class="time-info">30分{{ item.summary }}</div>
          </div>
          <div class="right">
            <button class="exercise">联系房东</button>
            <button class="payment">去支付</button>
          </div>
        </div>
      </div>
    </template>
</template>

<script setup>
const props = defineProps({
  orderData: {
    type: Array,
    default: () => []
  }
})

function formatDate(date) {
  const arr = date.split("-")
  return arr[1] + "月" + arr[2] + "日"
}

</script>

<style lang="less" scoped>
.order-item {
  margin-top: 10px;
  padding: 0 20px;

  .order-title {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    .unit-name {
      width: 204px;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .status-name {
      font-size: 18px;
    }
  }

  .cover {
    position: relative;
    width: 100%;
    .image {
      width: 100%;
      border-radius: 6px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .cover-bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 60px;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      color: #fff;
      background: rgba(9, 10, 14, 0.7);

      .cb-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .data {
          .day {
            font-size: 16px;
          }

          .time {
            color: #CCC;
            font-size: 12px;
            text-align: center;
          }
        }

        .arrow {
          img {
            width: 16px;
            margin: 0 20px;
          }
        }
      }

      .cb-right {
        .price-info{
          color: #ccc;
          font-size: 12px;
        }

        .price {
          color: var(--primary-color);
          font-size: 16px;
        }
      }
    }
  }

  .item-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    .left {
      display: flex;
      align-items: center;

      img {
        width: 11px;
        margin-right: 5px;
      }
    }

    .right {

      button {
        width: 80px;
        height: 35px;
        padding: 1px 10px;
        border: 1px solid #e9e9e9;
        border-radius: 6px;
      }

      .exercise {
        margin-right: 10px;
        color: #666;
        background-color: #fff;
      }

      .payment {
        color: #fff;
        background-color: var(--primary-color);
      }
    }
  }  
}
</style>