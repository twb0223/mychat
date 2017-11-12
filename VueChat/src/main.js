
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

window.eventBus=new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
