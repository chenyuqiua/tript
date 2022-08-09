<template>
  <div class="message">
    <nav-bar>
      <div class="title">消息通知</div>
    </nav-bar>
    <div class="notice">
      <div class="notice-icon">
        <img src="@/assets/img/message/icon_notify.png" alt="">
      </div>
      <div class="info">系统通知</div>
    </div>
    <div class="image">
      <img src="@/assets/img/message/icon_message.png" alt="">
    </div>
    <div class="text">暂无聊天消息</div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.message {
  height: 100vh;
  background-color: #f7f9fb;
  .title {
    color: var(--primary-color);
    font-weight: 600;
  }
  .notice {
    display: flex;
    margin-top: 10px;
    padding: 12px 20px;
    height: 44px;
    background-color: #fff;

    .notice-icon {
      img {
        width: 32px;
        margin-top: 5px;
      }
    }

    .info {
      margin-left: 20px;
      font-size: 16px;
    }
  }

  .image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .text {
    color: #999;
    font-weight: 300;
    text-align: center;
  }
}
</style>