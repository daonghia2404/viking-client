import Vue from 'vue'
import VueRouter from 'vue-router'
import DangNhap from '../views/DangNhap.vue'
import DangKy from '../views/DangKy.vue'
import QuenMatKhau from '../views/QuenMatKhau.vue'
import DoiMatKhau from '../views/DoiMatKhau.vue'
import NewFeed from '../views/NewFeed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dang-nhap',
    name: 'DangNhap',
    component: DangNhap
  },
  {
    path: '/dang-ky',
    name: 'DangKy',
    component: DangKy
  },
  {
    path: '/quen-mat-khau',
    name: 'QuenMatKhau',
    component: QuenMatKhau
  },
  {
    path: '/doi-mat-khau/:token',
    name: 'DoiMatKhau',
    component: DoiMatKhau
  },
  {
    path: '/',
    name: 'NewFeed',
    component: NewFeed
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
