import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import {ToastPlugin} from 'vux'
import router from '@/router'
import App from './App'
// eslint-disable-next-line standard/object-curly-even-spacing
import axios from './util/configAxios'
Vue.prototype.$axios = axios
Vue.prototype.$chaptcha_api = process.env.CAPTCHA_API + '/api'
Vue.use(VueRouter)
Vue.use(ToastPlugin, {position: 'middle'})
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
