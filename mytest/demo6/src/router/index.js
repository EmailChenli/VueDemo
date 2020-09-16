import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Food from '@/components/Food'
import Seller from '@/components/Seller'
import Rating from '@/components/Rating'
import Index from '@/Index'

Vue.use(Router)

export default new Router({
  routes:[
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    
    {
      path: '/',
      name: 'Index',
      component: Index,
      // path: '/',
      // name: 'Food',
      // component: Food,
      redirect:'/Food',
      children:[
      
    {
      path: 'Food',
      name: 'Food',
      component: Food
    },
    {
      path: 'Seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: 'Rating',
      name: 'Rating',
      component: Rating
    }
      ]
    }
  ]
})
