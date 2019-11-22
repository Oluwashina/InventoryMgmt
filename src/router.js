import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'
import Create from './views/Create.vue'
import ViewUsers from './views/ViewUsers.vue'
import ViewUsersById from './views/ViewUsersById.vue'
import ViewAssets from './views/ViewAssets.vue'
import ViewAssetsById from './views/ViewAssetsById.vue'
import Assets from './views/Assets.vue'
import NewAsset from './views/NewAsset.vue'
import AssetsById from './views/AssetsById.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Storekeeper from './views/Storekeeper.vue'
import Users from './views/Users.vue'
import UpdateProfile from './views/UpdateProfile.vue'
import UpdateStoreProfile from './views/UpdateStoreProfile'
import UpdateAdminProfile from './views/UpdateAdminProfile'
import ResetPassword from './views/ResetPassword.vue'
import ResetStorePassword from './views/ResetStorePassword.vue'
import ResetAdminPassword from './views/ResetAdminPassword.vue'
import MakeRequest from './views/MakeRequest.vue'
import SelectedAsset from './views/SelectedAsset.vue'
import AssignedAsset from './views/AssignedAsset.vue'
import AssignAsset from './views/AssignAsset.vue'
import ConfirmAssign from './views/ConfirmAssign.vue'
import ConfirmAssignById from './views/ConfirmAssignById.vue'
import Transit from './views/Transit.vue'
import Notifications from './views/Notifications.vue'
import NotificationsById from './views/NotificationsById.vue'
import UserNotifications from './views/UserNotifications.vue'
import Report from './views/Report.vue'

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
      path: '/viewusers/:id',
      name: 'ViewUsersById',
      component: ViewUsersById
    },
    {
      path: '/viewassets',
      name: 'viewassets',
      component: ViewAssets
    },
    {
      path: '/viewassets/:id',
      name: 'ViewAssetsById',
      component: ViewAssetsById
    },
    {
      path: '/assets',
      name: 'Assets',
      component: Assets
    },
    {
      path: '/assets/:id',
      name: 'AssetsById',
      component: AssetsById
    },
    {
      path: '/newasset',
      name: 'NewAsset',
      component: NewAsset
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
      path: '/updatestoreprofile',
      name: 'UpdateStoreProfile',
      component: UpdateStoreProfile
    },
    {
      path: '/updateadminprofile',
      name: 'UpdateAdminProfile',
      component: UpdateAdminProfile
    },
    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/resetstorepassword',
      name: 'ResetStorePassword',
      component: ResetStorePassword
    },
    {
      path: '/resetadminpassword',
      name: 'ResetAdminPassword',
      component: ResetAdminPassword
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
    },
    {
      path: '/assignedasset',
      name: 'AssignedAsset',
      component:  AssignedAsset
    },
    {
      path: '/assignasset',
      name: 'AssignAsset',
      component: AssignAsset
    },
    {
      path: '/confirmassign',
      name: 'Confirm Assign',
      component: ConfirmAssign
    },
    {
      path: '/confirmassign/:id',
      name: 'ConfirmAssignById',
      component: ConfirmAssignById
    },
    {
      path: '/transit',
      name: 'Transit',
      component: Transit
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/notifications/:id',
      name: 'NotificationsById',
      component: NotificationsById
    },
    {
      path: '/viewnotifications',
      name: 'UserNotifications',
      component: UserNotifications
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    }
  ]
})
