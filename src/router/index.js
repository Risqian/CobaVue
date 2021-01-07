import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tailwind from '../views/Tailwind.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Versi 1',
    component: Home
  },
  {
    path: '/tailwind',
    name: 'TAILWIND',
    component: Tailwind
  },
  {
    path: '/versi2',
    name: 'Versi 2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
