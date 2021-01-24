<template>
  <GuestLayout>
    <a-form class="form-auth">
      <img src="@/assets/images/rocket.png" class="rocket-image" alt="" />
      <div class="title-auth font-rajdhani-bold">Account Login</div>
      <div class="form-auth-group">
        <a-input placeholder="Username or Email" />
      </div>
      <div class="form-auth-group">
        <a-input-password placeholder="Password" />
      </div>
      <div
        class="form-auth-group d-flex align-items-center justify-content-between"
      >
        <a-checkbox>Remember Me</a-checkbox>
        <router-link
          to="/quen-mat-khau"
          class="font-rajdhani-semibold auth-link"
          >Forgot Password?</router-link
        >
      </div>
      <div class="form-auth-group">
        <a-button class="action-btn">Login to your Account!</a-button>
      </div>
      <SocialsLogin />
    </a-form>
  </GuestLayout>
</template>

<script>
import Vue from 'vue'
import { Button, Input, Checkbox, Form } from 'ant-design-vue'
import GuestLayout from '@/layouts/guest-layout/GuestLayout'
import SocialsLogin from '@/components/socials-login/SocialsLogin'

Vue.use(Button)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Form)

export default {
  name: 'DangNhapPage',
  components: {
    GuestLayout,
    SocialsLogin
  }
}
</script>

<style lang="scss"></style>
