<template>
  <GuestLayout>
    <a-form class="form-auth">
      <img src="@/assets/images/rocket.png" class="rocket-image" alt="" />
      <div class="title-auth font-rajdhani-bold">Forgot Password !</div>
      <div class="form-auth-group">
        <a-form-item help="" validateStatus="">
          <a-input placeholder="Enter your Email" />
        </a-form-item>
      </div>
      <div class="form-auth-group">
        <a-button class="action-btn register">Send Request!</a-button>
      </div>
      <div class="form-auth-group">
        <p class="auth-description">
          You'll receive a confirmation email in your inbox with a link to
          activate your account.
        </p>
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
  name: 'QuenMatKhauPage',
  components: {
    GuestLayout,
    SocialsLogin
  }
}
</script>

<style lang="scss"></style>
