import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from '../http'
import { Toast } from 'vant';
import '@/assets/style.css'
import FastClick from 'fastclick'

Vue.prototype.$http = http
Vue.prototype.$toast = Toast
Vue.use(Vant);
// 解决300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
