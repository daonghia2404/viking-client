<template>
  <header class="header d-flex align-items-center justify-content-between">
    <div class="header-logo d-flex align-items-center justify-content-center">
      <img src="@/assets/images/logo.png" alt="" />
      <h1 class="font-titillium-web-black">Vikinger</h1>
    </div>
    <div class="header-search d-flex align-items-center">
      <a-input placeholder="Search here for people or groups" />
      <div class="search-icon d-flex align-items-center justify-content-center">
        <img src="@/assets/icons/icon-search.svg" alt="" />
      </div>
    </div>
    <div class="header-account d-flex align-items-center">
      <div class="header-notification d-flex align-items-center">
        <a-dropdown
          :trigger="['click']"
          overlayClassName="notification-dropdown"
          placement="bottomCenter"
          :get-popup-container="(trigger) => trigger.parentNode"
        >
          <div
            class="notification-btn d-flex align-items-center justify-content-center"
          >
            <img src="@/assets/icons/icon-chat.svg" alt="" />
          </div>
          <div slot="overlay" class="font-rajdhani-semibold">Coming soon</div>
        </a-dropdown>
        <a-dropdown
          :trigger="['click']"
          overlayClassName="notification-dropdown"
          placement="bottomCenter"
          :get-popup-container="(trigger) => trigger.parentNode"
        >
          <div
            class="notification-btn d-flex align-items-center justify-content-center"
          >
            <img src="@/assets/icons/icon-bell.svg" alt="" />
          </div>
          <div slot="overlay" class="font-rajdhani-semibold">Coming soon</div>
        </a-dropdown>
      </div>
      <div class="account-status d-flex align-items-center">
        <Avatar />
        <div class="account-info">
          <h4 class="font-rajdhani-semibold">Hi Marina!</h4>
          <p>@marinavalentine</p>
        </div>
      </div>
      <div class="account-setting-wrapper">
        <a-dropdown
          :trigger="['click']"
          overlayClassName="account-setting-dropdown"
          placement="bottomRight"
          :getPopupContainer="(trigger) => trigger.parentNode"
        >
          <div
            class="setting-btn d-flex align-items-center justify-content-center"
          >
            <img src="@/assets/icons/icon-setting.svg" alt="" />
          </div>
          <div slot="overlay">
            <router-link to="/">Trang cá nhân</router-link>
            <router-link to="/">Cài đặt chung</router-link>
            <router-link to="/">Đổi mật khẩu</router-link>
            <div class="line"></div>
            <a-button class="custom-button primary">Đăng xuất</a-button>
          </div>
        </a-dropdown>
      </div>
    </div>
  </header>
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
  name: 'Header',
  components: {
    Avatar
  }
}
</script>

<style lang="scss">
header.header {
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 1000;
  background: $primary;
  .header-logo {
    height: 80px;
    h1 {
      color: $white;
      font-size: 30px;
      text-transform: uppercase;
    }
    img {
      width: 28px;
      margin: 0 20px 0 25px;
    }
  }
  .header-search {
    min-width: 430px;
    border-radius: 15px;
    background: $primary-dark;
    height: 50px;
    .ant-input {
      border: none;
      box-shadow: none;
      width: 100%;
      background: transparent;
      color: $white;
      padding-left: 15px;
      height: 100%;
      &::placeholder {
        color: $gray;
      }
    }
    .search-icon {
      width: 50px;
      height: 50px;
      cursor: pointer;
      img {
        width: 20px;
      }
    }
  }
  .header-account {
    .account-status {
      border-right: 1px solid $border-primary;
      border-left: 1px solid $border-primary;
      padding: 0 30px;
      margin: 0 12px 0 12px;
      .avatar {
        margin-right: 15px;
      }
      .account-info {
        h4 {
          font-size: 14px;
          color: $white;
        }
        p {
          font-size: 12px;
          color: $white;
        }
      }
    }
  }
  .account-setting-wrapper {
    margin-right: 10px;
    .setting-btn {
      width: 60px;
      height: 60px;
      cursor: pointer;
      img {
        width: 20px;
      }
    }
  }
  .header-notification {
    .notification-btn {
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin: 0 10px;
      img {
        width: 20px;
      }
    }
  }
}
.account-setting-dropdown {
  .ant-dropdown-content {
    @include box-shadow;
    background: $white;
    min-width: 165px;
    padding: 20px 15px;
    border-radius: 15px;
    .line {
      margin: 15px 0;
      background: $border;
      height: 1px;
    }
    a {
      display: block;
      color: $title;
      padding: 3px 0;
      margin-bottom: 5px;
      font-family: 'Rajdhani-SemiBold';
      &:hover {
        color: $primary;
      }
    }
  }
}
.notification-dropdown {
  .ant-dropdown-content {
    @include box-shadow;
    background: $white;
    padding: 20px 15px;
    border-radius: 15px;
  }
}
</style>
