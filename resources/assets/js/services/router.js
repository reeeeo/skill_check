import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
