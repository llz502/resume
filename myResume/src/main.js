import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routeConfig.js'
// import store from './store/'
import './assets/js/iconfont.js'

Vue.use(VueRouter);

const router=new VueRouter({
  routes
});

require('./assets/css/reset.css')

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})