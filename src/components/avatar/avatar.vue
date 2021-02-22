<template>
  <div class="avatar d-flex align-items-center justify-content-center">
    <img class="hexagon" src="@/assets/images/avatar-border.png" />
    <div class="online"></div>
    <img src="@/assets/images/avatar-default.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style lang="scss" scoped>
.avatar {
  flex: 0 0 40px;
  max-width: 40px;
  width: 40px;
  height: 45px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
  .online,
  .hexagon {
    position: absolute;
  }
  .hexagon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .online {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $green;
    bottom: 3px;
    right: -2px;
    z-index: 3;
  }
}
</style>
