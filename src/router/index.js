import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/components/Top.vue'
import SignIn from '@/components/SignIn.vue'
import Shop from '@/components/Shop.vue'
import Item from '@/components/Item.vue'
import SideItem from '@/components/SideItem.vue'
import Notice from '@/components/Notice.vue'

import store from '@/store/index.js'

import { AmplifyEventBus } from 'aws-amplify-vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Vue.use(VueRouter)
Vue.use(AmplifyPlugin, AmplifyModules)

let user

getUser().then((user) => {
  if (user) {
    router.push({path: '/'})
  }
})

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      store.commit('setUser', data)
      return data;
    }
  }).catch(() => {
    store.commit('setUser', null)
    return null
  })
}

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null
    store.commit('setUser', null)
    router.push({path: '/signin'})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
  }
})

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
    meta: { requireAuth: true }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: { requireAuth: true }
  },
  {
    path: '/item',
    name: 'item',
    component: Item,
    meta: { requireAuth: true }
  },
  {
    path: '/sideitem',
    name: 'sideitem',
    component: SideItem,
    meta: { requireAuth: true }
  },
  {
    path: '/notice',
    name: 'notice',
    component: Notice,
    meta: { requireAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    user = await getUser()
    if (!user) {
      return next({
        path: '/signin'
      })
    }
    return next()
  }
  return next()
})

export default router
