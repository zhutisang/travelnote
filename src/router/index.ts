import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/domain/index.vue'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'
import CoverCard from '../components/bussiness/covercard/index.vue'
import ProcessBar from '../components/bussiness/processBar/index.vue'
import Edit from '../views/edit/index.vue'
import DetailCard from '../components/bussiness/detailCard/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    children: [
      {
        path: 'coverCard',
        name: 'CoverCard',
        component: CoverCard
      },
      {
        path: 'detailCard',
        name: 'detailCard',
        component: DetailCard
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
