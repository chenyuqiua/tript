<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags">
                  <div class="item" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span v-if="index !== landlord.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          
          <div class="right">
            <div class="contact">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';

defineProps({
  landlord: {
    typeof: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.landlord {
  
  .intro {
    .top {
      img {
        width: 100%;
        border-radius: 3px;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      .left {
        display: flex;
        .avatar {
          img {
            width: 54px;
          }
        }

        .name {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
        }

        .tags {
          display: flex;
          margin-top: 5px;
          font-size: 12px;

          .item {
            span {
              margin: 2px;
            }
          }
        }
      }

      .right {
        .contact {
          height: 24px;
          line-height: 24px;
          border-radius: 5px;
          padding: 0 12px;
          font-size: 12px;
          color: #fff;
          background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
        }
      }
    }

    .bottom {
      display: flex;
      margin: 50px 0 15px;

      .item {
        flex: 1;

        .title {
          color: #9B9B9B;
          font-size: 12px;
        }

        .score {
          margin: 8px 0;
          font-size: 16px;
          font-weight: 600;
        }

        .tip {
          font-size: 12px;
        }
      }
    }
  }
}
</style>