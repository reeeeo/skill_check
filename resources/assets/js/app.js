import Vue from 'vue'
import router from './services/router'
import http from './services/http'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = require('vue')
require('./bootstrap')
Vue.use(BootstrapVue);

const app = new Vue({
  router,
  created: function() {
    http.init()
  },
  render: h => h(require('./app.vue'))
}).$mount('#app');
