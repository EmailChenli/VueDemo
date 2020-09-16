import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Department from '@/components/Department'
import Job from '@/components/Job'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect:'/department',
      children:[
        {
          path: '/department',
          name: 'Department',
          component: Department
        },
        {
          path: '/job',
          name: 'Job',
          component: Job
        }
      ]
    }
    
  ]
})