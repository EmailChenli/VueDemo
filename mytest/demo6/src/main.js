// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Index from './Index'


Vue.config.productionTip = false

/* eslint-disable no-new */
/*配置父路由显示*/ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   el: '#app1',
//   router,
//   components: { Index },
//   template: '<Index/>'
// })

