import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Create from './views/Create.vue'
import Users from './views/Users.vue'
import ViewAssets from './views/ViewAssets.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Storekeeper from './views/Storekeeper.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: ForgotPassword
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/viewassets',
      name: 'viewassets',
      component: ViewAssets
    },
    {
      path: '/storekeeper',
      name: 'storekeeper',
      component: Storekeeper
    }
  ]
})
