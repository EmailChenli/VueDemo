import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import phonenumber from '@/components/phonenumber'
import table from '@/components/table'
import xlsx from '@/components/xlsx'
import deletetest from '@/components/delete'

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
      name: 'xlsx',
      component: xlsx
    },
    {
      path: '/phonenumber',
      name: 'phonenumber',
      component: phonenumber
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/delete',
      name: 'delete',
      component: deletetest
    }
  ]
})
