<template>
  <div class="sidebar d-flex flex-column align-items-center">
    <Avatar />
    <a-tooltip placement="right" overlayClassName="custom-tooltip">
      <template slot="title">
        Bài viết
      </template>
      <router-link to="/">
        <a-button class="custom-button square secondary">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <path
              d="M140.7,164.7c0,11.2,9.1,20.3,20.3,20.3h127.2c11.2,0,20.3-9.1,20.3-20.3c0-11.2-9.1-20.3-20.3-20.3H161 C149.8,144.4,140.7,153.5,140.7,164.7z"
            />
            <path
              d="M92,262.8c0,11.2,9.1,20.3,20.3,20.3h175.9c11.2,0,20.3-9.1,20.3-20.3c0-11.2-9.1-20.3-20.3-20.3H112.3 C101.1,242.5,92,251.6,92,262.8z"
            />
            <path
              d="M0,37.5l0,365.9c0,50,40.7,90.6,90.6,90.6h334.8c3.3,0.4,6.7,0.7,10.2,0.7c42.1,0,76.4-34.3,76.4-76.4v-113 c0-42.1-34.3-76.4-76.4-76.4h-35.8V37.5c0-11.2-9.1-20.3-20.3-20.3H20.3C9.1,17.2,0,26.3,0,37.5z M399.7,418.3V269.5h35.8 c19.8,0,35.8,16.1,35.8,35.8v112.9c0,19.8-16.1,35.8-35.8,35.8v-0.7h-6.9C412.2,450.3,399.7,435.7,399.7,418.3L399.7,418.3z M40.6,403.4V57.8h318.6v360.5c0,12.7,3.1,24.6,8.6,35.2H90.6C63.5,453.5,40.6,430.6,40.6,403.4L40.6,403.4z"
            />
            <path
              d="M140.7,354.8c0,11.2,9.1,20.3,20.3,20.3h127.2c11.2,0,20.3-9.1,20.3-20.3c0-11.2-9.1-20.3-20.3-20.3H161 C149.8,334.5,140.7,343.5,140.7,354.8z"
            />
          </svg>
        </a-button>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="right" overlayClassName="custom-tooltip">
      <template slot="title">
        Trang cá nhân
      </template>
      <router-link to="/">
        <a-button class="custom-button square">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <path
              d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148 C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962 c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216 h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40 c59.551,0,108,48.448,108,108S315.551,256,256,256z"
            />
          </svg>
        </a-button>
      </router-link>
    </a-tooltip>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tooltip } from 'ant-design-vue'
import Avatar from '@/components/avatar/avatar'

Vue.use(Tooltip)

export default {
  name: 'Sidebar',
  components: {
    Avatar
  }
}
</script>

<style lang="scss">
.sidebar {
  @include box-shadow;
  position: fixed;
  height: calc(100vh - 80px);
  top: 80px;
  left: 0;
  width: 80px;
  background: $white;
  padding-top: 20px;
  overflow: auto;
  a {
    margin-bottom: 20px;
  }
  .avatar {
    margin-bottom: 20px;
  }
}
</style>
