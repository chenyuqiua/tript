<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
        <template v-for="(item, index) in swipeData">
          <van-swipe-item class="swipe-item">
            <img :src="item.url" alt="">  
          </van-swipe-item>
        </template>
        <template #indicator="{ active, total }">
          <div class="indicator">
            <template v-for="(value, key, index) in swipeGroup" :key="key">
              <span 
                class="item" 
                :class="{ active: swipeData[active]?.enumPictureCategory == key }"
              >
                <span class="text">{{ getName(value[0].title) }}</span>
                <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                 {{ getCategoryIndex(swipeData[active]) }} / {{ value.length }}
                </span>
              </span>
            </template>  
          </div>
        </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
  swipeData: {
    type: Object,
    default: () => []
  }
})

// 对数据进行转换
const swipeGroup = {}
for (let item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}

// 定义方法, 处理返回数据格式
function getName(name) {
  return name.replace("：", "")
}

// 类别当中的索引
function getCategoryIndex(item) {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}

</script>

<style lang="less" scoped>
.swipe{
  .swipe-list {
    .swipe-item {
      img {
        width: 100%;
      }
    }
    .indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        display: flex;
        padding: 2px 5px;
        color: #fff;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.8);

        .active {
          border-radius: 5px;
          margin: 0 2px;
          color: #333;
          background-color: #fff;
        }
      }
  }
}
</style>