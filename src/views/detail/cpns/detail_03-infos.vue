<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfos.houseTags" :key="index">
        <span 
          class="item" 
          v-if="item.tagText"
          :style="{color: item.tagText.color, background: item.tagText.background.color}"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <div class="score">{{ topInfos.commentBrief.overall }}</div>
        <div class="title">{{ topInfos.commentBrief.scoreTitle }}</div>
        <div class="brief">{{ topInfos.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="more">{{ topInfos.commentBrief.totalCountStr }}条评论&gt;</div>
      </div>
    </div>
    <div class="location">
      <div class="left">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">地图·周边&gt;</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 10px 15px;
  .name {
    font-size: 18px;
    font-weight: 600;
  }
  .tags {
    margin: 10px 0;
    font-size: 12px;
    .item {
      padding: 2px;
      margin-right: 3px;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    padding: 7px;
    border-radius: 5px;
    background-color: #f6f7fb;
    .left {
      display: flex;
      font-size: 12px;
      .score {
        color: #333;
        font-size: 18px;
        font-weight: 600;
      }
      .title {
        margin: 3px;
        color: #333;
        font-weight: 700;
        line-height: 14px;
      }
      .brief {
        line-height: 20px;
        color: #666;
      }
    }
    .right {
      .more {
        width: 80px;
        color: #FF9645;
        text-align: right;
      }
    }
  }
  .location {
    display: flex;
    justify-content: space-between;
    padding: 7px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #f6f7fb;
    .left{
      flex: 1;
      color: #333;
      font-weight: 600;
    }
    .right {
      width: 80px;
      color: #FF9645;
      text-align: right;
    }
  }
}
</style>