import { createRouter, createWebHistory } from 'vue-router'
import Cuentas from '../views/Cuentas.vue'
import Account from '../views/Account.vue'

const routes = [
  {
    path: '/',
    name: 'Cuentas',
    component: Cuentas
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
