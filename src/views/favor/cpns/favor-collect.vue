<template>
  <div class="collect">
    <van-tabs v-model:active="active" color="#ff9854" title-active-color="#fa8c1d">
      <van-tab title="房屋">
        <favor-list-item :itemdate="favorItem"></favor-list-item>
      </van-tab>
      <van-tab title="房东">
        <div class="no-data">
          <img
            class="icon-no-data"
            src="@/assets/img/favor/empty_favorite.44731802.png"
            alt=""
          />
          <div class="name">暂无收藏</div>
          <div class="desp">
            点击
            <img src="@/assets/img/favor/favor.png" alt="" />
            即可收藏对应的房东
          </div>
          <div class="btn">
            <button class="btnClick" @click="handleBtnClick">随便去逛逛</button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    
  </div>
</template>

<script setup>
import useFavorStore from '@/stores/modules/favor';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FavorListItem from './favor-list-item.vue';

const active = ref(0)
// 获取网络请求的数据
const favorStore = useFavorStore()
// const itemDate = storeToRefs(favorStore?.favorItem)
const { favorItem } = storeToRefs(favorStore)

// 点击返回首页
const router = useRouter()
function handleBtnClick() {
  router.push("/")
}
</script>

<style lang="less" scoped>
.collect {
  .no-data {
    height: 100vh;
    .icon-no-data {
      width: 100%;
    }

    .name {
      color: #333;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
    }
    
    .desp {
      width: 100%;
      padding: 10px 0 36px;
      color: #666;
      font-size: 14px;
      text-align: center;

      img {
        width: 12px;
        vertical-align: middle;
      }
    }

    .btn {
      text-align: center;
      .btnClick {
        padding: 10px 30px;
        border: none;
        outline: none;
        border-radius: 20px;
        color: #fff;
        font-size: 16px;
        background-color: #ff9854;
      }
    }
  }
}
</style>