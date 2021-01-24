<template>
  <div class="guest-layout">
    <img class="guest-bg" src="@/assets/images/landing-background.jpg" alt="" />
    <div class="guest-wrapper d-flex align-items-center flex-wrap">
      <div class="guest-item">
        <div class="guest-logo">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <h3 class="font-rajdhani-semibold">Welcome To</h3>
        <h1 class="font-titillium-web-black">Vikinger</h1>
        <p class="font-rajdhani-semibold">
          The next generation social network & community! Connect with your
          friends and play with our quests and badges gamification system!
        </p>
        <div class="d-flex align-items-center guest-btns">
          <router-link
            to="/dang-nhap"
            class="btn-item font-rajdhani-semibold d-flex align-items-center justify-content-center"
            >Login</router-link
          >
          <router-link
            to="/dang-ky"
            class="btn-item font-rajdhani-semibold d-flex align-items-center justify-content-center"
            >Register</router-link
          >
        </div>
      </div>
      <div class="guest-item d-flex">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuestLayout'
}
</script>

<style lang="scss">
.guest-layout {
  position: relative;
  .guest-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .guest-wrapper {
    position: relative;
    margin: 0 auto;
    z-index: 2;
    padding: 0 15px;
    max-width: 1170px;
    min-height: 100vh;
    .guest-logo {
      width: 42px;
      height: 60px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    h1,
    h3,
    p {
      color: $white;
    }
    h1,
    h3 {
      text-transform: uppercase;
    }
    h3 {
      font-weight: 500;
      margin: 35px 0 -20px;
      font-size: 24px;
    }
    h1 {
      font-size: 100px;
      font-weight: bold;
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }
      @media (max-width: 475px) {
        font-size: 70px;
      }
    }
    p {
      margin: 30px auto 100px;
      font-size: 18px;
      line-height: 1.5;
      max-width: 385px;
      @media (max-width: 991px) {
        display: none;
      }
    }
    .auth-description {
      margin: 0;
      color: $title;
      font-size: 14px;
      text-align: left;
    }
    .guest-item {
      flex: 0 0 50%;
      max-width: 50%;
      text-align: center;
      @media (max-width: 991px) {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 30px 0;
      }
    }
    .guest-btns {
      border: 1px solid $white;
      border-radius: 10px;
      width: 360px;
      margin: 0 auto;
      overflow: hidden;
      @media (max-width: 475px) {
        width: 100%;
      }
      .btn-item {
        font-size: 16px;
        transition: 0.3s ease;
        color: $white;
        background: transparent;
        width: 50%;
        height: 55px;
        &:hover,
        &.router-link-active {
          background: $white;
          color: $title;
        }
      }
    }
    .form-auth {
      @include box-shadow;
      width: 485px;
      padding: 60px;
      position: relative;
      background: $white;
      margin-left: auto;
      border-radius: 8px;
      @media (max-width: 475px) {
        padding: 40px 20px;
      }
      @media (max-width: 991px) {
        margin: 0 auto;
      }
      .rocket-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 160px;
        transform: translate(-50%, -50%);
      }
      .form-auth-group {
        margin-bottom: 25px;
      }
      .title-auth {
        font-size: 26px;
        color: $title;
        margin-bottom: 75px;
        @media (max-width: 475px) {
          margin-bottom: 50px;
        }
      }
      .ant-input-password {
        .ant-input {
          padding-right: 35px;
        }
        .ant-input-suffix svg {
          fill: $gray;
        }
      }
      .ant-checkbox-wrapper {
        .ant-checkbox {
          margin-right: 5px;
          &.ant-checkbox-checked {
            .ant-checkbox-inner {
              background: $lightblue !important;
              border-color: $lightblue !important;
            }
          }
          .ant-checkbox-inner {
            width: 20px;
            height: 20px;
            border-color: $lightblue !important;
            &:after {
              height: 12px;
              top: 49%;
            }
          }
        }
        span {
          font-family: 'Rajdhani-SemiBold';
          color: $title;
          user-select: none;
        }
      }
      .auth-link {
        color: $gray;
        &:hover {
          color: $lightblue;
        }
      }
      .ant-input {
        height: 55px;
        border-radius: 12px;
        font-family: 'Rajdhani-SemiBold';
        padding: 0 18px;
        font-size: 16px;
        border-color: $border;
        &::placeholder {
          color: $gray;
          letter-spacing: 0.2px;
        }
      }
      .ant-btn.action-btn {
        width: 100%;
        height: 55px;
        background: $primary;
        border-radius: 12px;
        border: none;
        &.register {
          background: $lightblue;
        }
        span {
          font-size: 14px;
          font-family: 'Rajdhani-Bold';
          color: $white;
        }
      }
      .method-auth-login {
        .auth-des {
          margin: 30px 0 20px;
          position: relative;
          span {
            position: relative;
            z-index: 2;
            background: $white;
            padding: 5px 20px;
            color: $title;
          }
          .line {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width: 100%;
            border-bottom: 0.2px solid $border;
          }
        }
        .btn-social {
          width: 45px;
          height: 45px;
          margin: 0 5px;
          border-radius: 10px;
          display: flex;
          padding: 0;
          border: none;
          transition: 0.3s ease;
          &:hover {
            transform: translateY(-5px);
          }
          &.facebook {
            background: $facebook;
          }
          &.google {
            background: $google;
          }
          img {
            margin: auto;
            width: 13px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
