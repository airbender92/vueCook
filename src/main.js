/*
 * @Author: your name
 * @Date: 2021-04-12 12:21:38
 * @LastEditTime: 2021-04-13 14:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

import utils from './utils'
import "./config/element-ui"

Vue.config.productionTip = false

Vue.prototype.$appName = 'Cook Book'
Vue.prototype.$utils = utils

new Vue({
  render: h => h(App),
}).$mount('#app')
