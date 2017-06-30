import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import addico from '@/components/addico'
import login from '@/components/login'
import accounts from '@/components/accounts'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/etoken/addico',
      name: 'addico',
      component: addico
    },
    {
      path: '/etoken/login',
      name: 'login',
      component: login
    },
    {
      path: '/etoken/accounts',
      name: 'accounts',
      component: accounts
    },
    {
      path: '/etoken/register',
      name: 'register',
      component: register
    }
  ]
})
