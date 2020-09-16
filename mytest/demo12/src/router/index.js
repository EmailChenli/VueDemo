import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyLogin from '@/pages/index'

Vue.use(Router)

//const MyLogin = () => import('@/pages/index')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mylogin',
      name: '登录',
      component: MyLogin
    }
  ]
})
