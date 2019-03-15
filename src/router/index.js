import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Next from '@/components/next'
import Record from '@/components/record'
import Recharge from '@/components/recharge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        index: 1
      }
    },
    {
      path: '/next',
      name: 'Next',
      component: Next,
      meta: {
        index: 2
      }
    },
    {
      path: '/record',
      name: 'Record',
      component: Record,
      meta: {
        index: 3
      }
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge,
      meta: {
        index: 4
      }
    }
  ]
})
