<template>
  <div class="auth-layout">
    <Header />
    <Sidebar />
    <SidebarFriends />
    <main class="main-layout">
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Sidebar from '@/components/sidebar/sidebar'
import SidebarFriends from '@/components/sidebar/sidebar-friends'

export default {
  name: 'AuthLayout',
  components: {
    Header,
    Sidebar,
    SidebarFriends
  }
}
</script>

<style lang="scss">
.main-layout {
  padding: 120px 350px 0 110px;
  min-height: 100vh;
}
</style>
