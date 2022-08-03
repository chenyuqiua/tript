<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemDate.image.url" alt="">
      </div>
      <div class="infos">
        <div class="summary">{{ itemDate.summaryText }}</div>
        <div class="name">{{ itemDate.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" color="#fff" :size="15" readonly allow-half />
          <div class="new">¥{{ itemDate.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
  itemDate: {
    typeof: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.itemDate.commentScore)
})

</script>

<style lang="less" scoped>

.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 15px;
    overflow: hidden;

    .cover {
      width: 100%;

      img {
        width: 100%;
      }
    }

    .infos {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 15px;
      color: #fff;
      font-size: 12px;

      .summary {
        margin-bottom: 5px;
      }

      .name {
        margin-bottom: 7px;
        overflow : hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis; 
      }

      .price {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }
}
</style>