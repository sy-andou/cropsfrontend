import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42f39c56 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _aa18caba = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2c05c127 = () => interopDefault(import('../pages/ordered.vue' /* webpackChunkName: "pages/ordered" */))
const _de6d514e = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _409d2802 = () => interopDefault(import('../pages/thanks.vue' /* webpackChunkName: "pages/thanks" */))
const _7a41f125 = () => interopDefault(import('../pages/detail/_itemId.vue' /* webpackChunkName: "pages/detail/_itemId" */))
const _3d6810e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _42f39c56,
    name: "cart"
  }, {
    path: "/login",
    component: _aa18caba,
    name: "login"
  }, {
    path: "/ordered",
    component: _2c05c127,
    name: "ordered"
  }, {
    path: "/register",
    component: _de6d514e,
    name: "register"
  }, {
    path: "/thanks",
    component: _409d2802,
    name: "thanks"
  }, {
    path: "/detail/:itemId?",
    component: _7a41f125,
    name: "detail-itemId"
  }, {
    path: "/",
    component: _3d6810e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
