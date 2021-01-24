<template>
  <div class="method-auth-login">
    <div class="auth-des">
      <div class="line"></div>
      <span class="font-rajdhani-bold">Login with your Social Account</span>
    </div>
    <div
      class="auth-social-networks d-flex align-items-center justify-content-center"
    >
      <a-button class="btn-social facebook">
        <img src="@/assets/icons/icon-facebook.svg" alt="" />
      </a-button>
      <a-button class="btn-social google">
        <img src="@/assets/icons/icon-google.svg" alt="" />
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialsLogin'
}
</script>

<style lang="scss" scoped></style>
