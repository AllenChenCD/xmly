import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'assets/stylus/index.styl'
import VueLazyload from 'vue-lazyload'
import store from './store'

Vue.config.productionTip = false

fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('assets/img/loading-svg/loading-bars.svg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
