<template>
  <div class="sidebar-friends">
    <div class="title font-rajdhani-bold">Lời mời kết bạn</div>
    <div class="friend-requests">
      <div
        v-for="(item, index) in 4"
        :key="index"
        class="friend-request-item d-flex"
      >
        <Avatar />
        <div class="request-info">
          <h4 class="font-rajdhani-semibold">Marina</h4>
          <p>1 bạn chung</p>
          <div class="request-btns d-flex">
            <a-button class="custom-button primary">Xác nhận</a-button>
            <a-button class="custom-button secondary">Từ chối</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="title font-rajdhani-bold mb-0">Bạn bè</div>
    <div class="friend-lists">
      <div
        v-for="(item, index) in 10"
        :key="index"
        class="friend-list-item d-flex align-items-center"
      >
        <Avatar />
        <h4 class="font-rajdhani-semibold">Marina</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Input, Form, Dropdown } from 'ant-design-vue'
import Avatar from '@/components/avatar/avatar'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(Dropdown)

export default {
  name: 'SidebarFriends',
  components: {
    Avatar
  }
}
</script>

<style lang="scss">
.sidebar-friends {
  @include box-shadow;
  position: fixed;
  width: 320px;
  height: calc(100vh - 80px);
  top: 80px;
  right: 0;
  background: $white;
  overflow: auto;
  padding: 20px 10px;
  .title {
    color: $title;
    margin-bottom: 15px;
    font-size: 16px;
    padding-left: 5px;
  }
  h4 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
  .avatar {
    margin-right: 15px;
  }
  .line {
    margin: 15px 0;
    background: $border;
    height: 1px;
  }
  .friend-requests {
    margin-bottom: 15px;
    .friend-request-item {
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        background: $primary-transparent;
      }
    }
    .request-info {
      flex: 1;
      .custom-button {
        width: 45%;
        margin-right: 10px;
        height: 35px;
      }
    }
  }
  .friend-list-item {
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      background: $primary-transparent;
    }
    .avatar {
      transform: scale(0.8);
      margin-right: 5px;
    }
  }
}
</style>
