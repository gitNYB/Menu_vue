import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bulma from '@/components/bulma'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bulma',
      name: 'Bulma',
      component: Bulma
    }
  ]
})
