import Vue from 'vue'
import Router from 'vue-router'
import VueResource from "vue-resource"

import search from '@/components/search'
import index from '@/components/index'
import login from '@/components/login'

Vue.use(Router);
Vue.use(VueResource);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
      {
          path: '/index',
          name: 'index',
          component: index
      },
      {
          path: '/search/:data',
          name: 'HelloWorld',
          component: search
      },
      {
          path: '/hello',
          name: 'HelloWorld',
          component: search
      },
      {
          path: '/login',
          name: 'login',
          component: login
      },
  ]
})
