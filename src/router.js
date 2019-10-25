import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Create from './views/Create.vue'
import ViewUsers from './views/ViewUsers.vue'
import ViewAssets from './views/ViewAssets.vue'
import Assets from './views/Assets.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Storekeeper from './views/Storekeeper.vue'
import Users from './views/Users.vue'
import UpdateProfile from './views/UpdateProfile.vue'
import ResetPassword from './views/ResetPassword.vue'
import MakeRequest from './views/MakeRequest.vue'
import SelectedAsset from './views/SelectedAsset.vue'

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
      path: '/viewusers',
      name: 'users',
      component: ViewUsers
    },
    {
      path: '/viewassets',
      name: 'viewassets',
      component: ViewAssets
    },
    {
      path: '/assets',
      name: 'Assets',
      component: Assets
    },
    {
      path: '/storekeeper',
      name: 'storekeeper',
      component: Storekeeper
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/updateprofile',
      name: 'UpdateProfile',
      component: UpdateProfile
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/makerequest',
      name: 'MakeRequest',
      component: MakeRequest
    },
    {
      path: '/selectedasset',
      name: 'SelectedAsset',
      component: SelectedAsset
    }
  ]
})
