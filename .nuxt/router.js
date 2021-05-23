import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _561b3aa2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c914fd64 = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _75d31567 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d1f0b3ae = () => interopDefault(import('../pages/flow.vue' /* webpackChunkName: "pages/flow" */))
const _0c11c2e5 = () => interopDefault(import('../pages/parent.vue' /* webpackChunkName: "pages/parent" */))
const _03bf83b9 = () => interopDefault(import('../pages/worker.vue' /* webpackChunkName: "pages/worker" */))
const _f4479dea = () => interopDefault(import('../pages/print/flow.vue' /* webpackChunkName: "pages/print/flow" */))
const _f0ff36d0 = () => interopDefault(import('../pages/cards/_card.vue' /* webpackChunkName: "pages/cards/_card" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _561b3aa2,
    name: "about___ja"
  }, {
    path: "/contacts",
    component: _c914fd64,
    name: "contacts___ja"
  }, {
    path: "/en",
    component: _75d31567,
    name: "index___en"
  }, {
    path: "/flow",
    component: _d1f0b3ae,
    name: "flow___ja"
  }, {
    path: "/ja-basic",
    component: _75d31567,
    name: "index___ja-basic"
  }, {
    path: "/ko",
    component: _75d31567,
    name: "index___ko"
  }, {
    path: "/parent",
    component: _0c11c2e5,
    name: "parent___ja"
  }, {
    path: "/worker",
    component: _03bf83b9,
    name: "worker___ja"
  }, {
    path: "/zh-cn",
    component: _75d31567,
    name: "index___zh-cn"
  }, {
    path: "/zh-tw",
    component: _75d31567,
    name: "index___zh-tw"
  }, {
    path: "/en/about",
    component: _561b3aa2,
    name: "about___en"
  }, {
    path: "/en/contacts",
    component: _c914fd64,
    name: "contacts___en"
  }, {
    path: "/en/flow",
    component: _d1f0b3ae,
    name: "flow___en"
  }, {
    path: "/en/parent",
    component: _0c11c2e5,
    name: "parent___en"
  }, {
    path: "/en/worker",
    component: _03bf83b9,
    name: "worker___en"
  }, {
    path: "/ja-basic/about",
    component: _561b3aa2,
    name: "about___ja-basic"
  }, {
    path: "/ja-basic/contacts",
    component: _c914fd64,
    name: "contacts___ja-basic"
  }, {
    path: "/ja-basic/flow",
    component: _d1f0b3ae,
    name: "flow___ja-basic"
  }, {
    path: "/ja-basic/parent",
    component: _0c11c2e5,
    name: "parent___ja-basic"
  }, {
    path: "/ja-basic/worker",
    component: _03bf83b9,
    name: "worker___ja-basic"
  }, {
    path: "/ko/about",
    component: _561b3aa2,
    name: "about___ko"
  }, {
    path: "/ko/contacts",
    component: _c914fd64,
    name: "contacts___ko"
  }, {
    path: "/ko/flow",
    component: _d1f0b3ae,
    name: "flow___ko"
  }, {
    path: "/ko/parent",
    component: _0c11c2e5,
    name: "parent___ko"
  }, {
    path: "/ko/worker",
    component: _03bf83b9,
    name: "worker___ko"
  }, {
    path: "/print/flow",
    component: _f4479dea,
    name: "print-flow___ja"
  }, {
    path: "/zh-cn/about",
    component: _561b3aa2,
    name: "about___zh-cn"
  }, {
    path: "/zh-cn/contacts",
    component: _c914fd64,
    name: "contacts___zh-cn"
  }, {
    path: "/zh-cn/flow",
    component: _d1f0b3ae,
    name: "flow___zh-cn"
  }, {
    path: "/zh-cn/parent",
    component: _0c11c2e5,
    name: "parent___zh-cn"
  }, {
    path: "/zh-cn/worker",
    component: _03bf83b9,
    name: "worker___zh-cn"
  }, {
    path: "/zh-tw/about",
    component: _561b3aa2,
    name: "about___zh-tw"
  }, {
    path: "/zh-tw/contacts",
    component: _c914fd64,
    name: "contacts___zh-tw"
  }, {
    path: "/zh-tw/flow",
    component: _d1f0b3ae,
    name: "flow___zh-tw"
  }, {
    path: "/zh-tw/parent",
    component: _0c11c2e5,
    name: "parent___zh-tw"
  }, {
    path: "/zh-tw/worker",
    component: _03bf83b9,
    name: "worker___zh-tw"
  }, {
    path: "/en/print/flow",
    component: _f4479dea,
    name: "print-flow___en"
  }, {
    path: "/ja-basic/print/flow",
    component: _f4479dea,
    name: "print-flow___ja-basic"
  }, {
    path: "/ko/print/flow",
    component: _f4479dea,
    name: "print-flow___ko"
  }, {
    path: "/zh-cn/print/flow",
    component: _f4479dea,
    name: "print-flow___zh-cn"
  }, {
    path: "/zh-tw/print/flow",
    component: _f4479dea,
    name: "print-flow___zh-tw"
  }, {
    path: "/en/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___en"
  }, {
    path: "/ja-basic/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___ja-basic"
  }, {
    path: "/ko/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___ko"
  }, {
    path: "/zh-cn/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___zh-cn"
  }, {
    path: "/zh-tw/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___zh-tw"
  }, {
    path: "/cards/:card?",
    component: _f0ff36d0,
    name: "cards-card___ja"
  }, {
    path: "/",
    component: _75d31567,
    name: "index___ja"
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
