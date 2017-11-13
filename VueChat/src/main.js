<<<<<<< HEAD
=======

>>>>>>> 79db1a49b7b77157dd7b87abdd5b4c2904ce6bfb
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
