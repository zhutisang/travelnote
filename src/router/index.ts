import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../domain/index.vue'
import Setting from '../setting/setting.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
