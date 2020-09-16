import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AdminIndex from '@/components/AdminIndex'
import ProductManage from '@/components/ProductManage'
import ClientManage from '@/components/ClientManage'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex,
      redirect:'/product',
      children:[
        {
          path: '/product',
          name: 'ProductManage',
          component: ProductManage
        },
        {
          path: '/client',
          name: 'ClientManage',
          component: ClientManage
        }
      ]
    }
    
  ]
})