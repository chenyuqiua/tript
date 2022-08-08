<template>
  <div class="list">
    <template v-for="(item, index) in itemdate" :key="index">
      <div class="item">
        <div class="cover">
          <div class="banner">
            <img :src="item.pictureList[0]" alt="">
          </div>
          <div class="bottom">
            <span class="score">{{ item.commentBriefForCD.overall }}</span>
            <span class="answer">{{ item.commentBriefForCD.scoreTitle }}</span>
          </div>
          <div class="side-bar">
            <div class="avatar">
              <img :src="item.logoUrl" alt="">
            </div>
            <div class="favor-image">
              <img src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png" alt="">
            </div>
            <div class="message">
              <img src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" alt="">
              <span class="message-conter">{{ item.commentBrief.totalCount }}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="item-title">
            <div class="info">
              <span class="address">{{ item.address }}</span>
              <span class="name">{{ item.unitSummeries[0].text }} ·</span>
              <span class="desp">{{ item.unitSummeries[1].text }}</span>
            </div>
            <div class="title">{{ item.unitName }}</div>
          </div>
          <div class="price-info">
            <div class="tags" v-if="item.houseTags[0]?.text">
              <span :style="{ color: item?.houseTags[0]?.color, backgroundColor: item?.houseTags[0]?.background.color }">
                {{ item.houseTags[0]?.text }}
              </span>
              <span :style="{ color: item?.houseTags[0]?.color, backgroundColor: item?.houseTags[0]?.background.color }">
                {{ item.houseTags[1]?.text }}
              </span>
            </div>
            <div class="price">
              <i>￥</i>
              <span class="real-price">{{ item.finalPrice }}</span>
              <span class="throw">
                <i class="i-small">￥</i>
                <span class="old-price">{{ item.productPrice }}</span>
              </span>
              <span v-if="item.priceTipBadge?.text" class="discounts">{{ item.priceTipBadge?.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  itemdate: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.list {
  .item {
    margin: 20px 20px 12px;
    color: #333;

    .cover {
      position: relative;
      width: 100%;
      img {
        width: 100%;
      }

      .bottom {
        position: absolute;
        bottom: 10px;
        left: 10px;
        display: flex;
        justify-content: space-around;
        width: 75px;
        height: 17px;
        background-color: #fbfbfb;
        border-radius: 10px;

        .score {
          font-weight: 600;
          padding-left: 9px;
        }

        .answer {
          width: 25px;
          padding-left: 7px;
          border-left: 1px solid #eee;
          color: #666;
          font-size: 12px;
        }
      }

      .side-bar {
        position: absolute;
        right: 10px;
        top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .avatar {
          width: 40px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 40px;
          }
        }
        .favor-image, .message {
          img {
            width: 30px;
          }
        }

        .message {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;

          .message-conter {
            color: #fff;
          }
        }

        .favor-image {
          img {
            margin: 10px 0;
          }
        }
      }
    }

    .content {
      .item-title {
        margin-top: 7px;
        .info {
          .address {
            margin-right: 5px;
            padding: 2px 4px 0;
            border-radius: 3px;
            color: #fff;
            font-size: 12px;
            background-color: #3a434d;
          }

          .name, .desp {
            color: #666;
            font-size: 12px;
          }
        }

        .title {
          margin-top: 7px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-size: 18px;
        }
      }

      .price-info {
        .tags {
          margin: 7px 0;

          span {
            margin-right: 5px;
            border-radius: 3px;
            font-size: 10px;
          }
        }

        .price {
          i {
            color: #ff9854;
          }
          .real-price {
            color: #ff9854;
            font-size: 20px;
          }

          .i-small {
            color: #999;
            font-size: 12px;
          }

          .old-price {
            color: #999;
            font-size: 12px;
          }

          .throw {
            margin: 7px;
            color: #999;
            text-decoration: line-through;
          }

          .discounts {
            padding: 2px 5px;
            border-radius: 10px;
            color: #fff;
            font-size: 10px;
            background-color: #FB4A4A;
          }
        }
      }
    }
  }
}
</style>