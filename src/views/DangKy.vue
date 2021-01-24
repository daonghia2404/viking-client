<template>
  <GuestLayout>
    <a-form class="form-auth">
      <img src="@/assets/images/rocket.png" class="rocket-image" alt="" />
      <div class="title-auth font-rajdhani-bold">Create your Account !</div>
      <div class="form-auth-group">
        <a-form-item help="" validateStatus="">
          <a-input placeholder="Username" />
        </a-form-item>
      </div>
      <div class="form-auth-group">
        <a-form-item help="" validateStatus="">
          <a-input placeholder="Email" />
        </a-form-item>
      </div>
      <div class="form-auth-group">
        <a-form-item help="" validateStatus="">
          <a-input-password placeholder="Password" />
        </a-form-item>
      </div>
      <div class="form-auth-group">
        <a-form-item help="" validateStatus="">
          <a-input-password placeholder="Repeat Password" />
        </a-form-item>
      </div>
      <div class="form-auth-group">
        <a-button class="action-btn register">Register Now!</a-button>
      </div>
      <SocialsLogin />
    </a-form>
  </GuestLayout>
</template>

<script>
import Vue from 'vue'
import { Button, Input, Form } from 'ant-design-vue'
import GuestLayout from '@/layouts/guest-layout/GuestLayout'
import SocialsLogin from '@/components/socials-login/SocialsLogin'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)

export default {
  name: 'DangKyPage',
  components: {
    GuestLayout,
    SocialsLogin
  }
}
</script>

<style lang="scss"></style>
